import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const cwd = process.cwd();
const sourceRoot =
  process.argv[2] ||
  "/Users/arian/Documents/iPage_Files/phasereditor3";
const source = path.resolve(sourceRoot);
const outputDir = path.resolve(cwd, "docs");
const target = outputDir;

const routeEntryFiles = [
  { input: "index.php", routePath: "" },
  { input: "start/index.php", routePath: "start" },
  { input: "pricing/index.php", routePath: "pricing" },
  { input: "downloads/index.php", routePath: "downloads" },
  { input: "docs/index.php", routePath: "docs" },
  { input: "versions/index.php", routePath: "versions" },
  { input: "v1/index.php", routePath: "v1" },
  { input: "v2/index.php", routePath: "v2" },
  { input: "cuba/index.php", routePath: "cuba" }
];

const staticCopies = [
  ".htaccess",
  "robots.txt",
  "rss.xml",
  "news.json",
  "static",
  "demos",
  "cuba/css",
  "cuba/images",
  "blog/themes/phasereditor2/css",
  "blog/content/images"
];

const excludedPaths = ["files", "updates"];

async function ensureExists(pathToCheck) {
  try {
    await fs.access(pathToCheck);
    return true;
  } catch {
    return false;
  }
}

async function copyPath(relativePath) {
  const sourcePath = path.join(source, relativePath);
  const targetPath = path.join(target, relativePath);
  if (!(await ensureExists(sourcePath))) {
    return;
  }

  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.cp(sourcePath, targetPath, {
    recursive: true,
    force: true,
    preserveTimestamps: true
  });
}

async function renderPhpFile(inputPath, routePath) {
  const inputDir = path.dirname(inputPath);
  const inputFileName = path.basename(inputPath);
  const renderDir = inputDir === "." ? source : path.join(source, inputDir);

  const phpCode = `
    chdir(${JSON.stringify(renderDir)});
    ini_set("display_errors", "0");
    error_reporting(0);
    $_SERVER["HTTP_HOST"] = "phasereditor2d.com";
    $_SERVER["REQUEST_URI"] = ${JSON.stringify(routePath ? `/${routePath}/` : "/")};
    include ${JSON.stringify(inputFileName)};
  `;

  const result = spawnSync("php", ["-r", phpCode], {
    cwd: source,
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024
  });

  if (result.status !== 0) {
    throw new Error(
      `Failed rendering ${inputPath}\n${result.stderr || "(no stderr output)"}`
    );
  }

  const outputPath = routePath
    ? path.join(target, routePath, "index.html")
    : path.join(target, "index.html");
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, result.stdout);
}

async function copyBlogMarkdownSource() {
  const sourceContent = path.join(source, "blog/content");
  const targetContent = path.join(target, "content/blog");
  await fs.mkdir(path.dirname(targetContent), { recursive: true });
  await fs.cp(sourceContent, targetContent, {
    recursive: true,
    force: true,
    preserveTimestamps: true
  });
}

async function runBlogBuilder() {
  const result = spawnSync("node", ["./scripts/build-blog.mjs"], {
    cwd,
    stdio: "inherit",
    env: {
      ...process.env,
      OUTPUT_DIR: outputDir
    }
  });

  if (result.status !== 0) {
    throw new Error("Blog build script failed.");
  }
}

async function migrate() {
  if (!(await ensureExists(source))) {
    throw new Error(`Source path does not exist: ${source}`);
  }

  await fs.mkdir(target, { recursive: true });

  for (const relativePath of excludedPaths) {
    await fs.rm(path.join(target, relativePath), { recursive: true, force: true });
  }

  for (const relativePath of staticCopies) {
    await copyPath(relativePath);
  }

  for (const route of routeEntryFiles) {
    await renderPhpFile(route.input, route.routePath);
  }

  await copyBlogMarkdownSource();
  await runBlogBuilder();

  console.log("Migration complete.");
}

migrate().catch((error) => {
  console.error(error);
  process.exit(1);
});
