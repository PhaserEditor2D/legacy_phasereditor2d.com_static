import fs from "node:fs/promises";
import path from "node:path";
import MarkdownIt from "markdown-it";

const cwd = process.cwd();
const outputRoot = process.env.OUTPUT_DIR
  ? path.resolve(process.env.OUTPUT_DIR)
  : path.resolve(cwd, "output");
const contentRoot = path.resolve(cwd, "content/blog");
const blogRoot = path.join(outputRoot, "blog");
const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

const POST_REGEX =
  /^([^/]+)\/blog\/([^/]+)\/([^/]+)\/(\d{4})-(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})_([^_]+)_(.+)\.md$/;

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }).format(date);
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeSlugSegment(segment) {
  return segment.replace(/^\d+-/, "").trim();
}

function normalizeTagList(tagValue = "") {
  return tagValue
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function slugifyTag(tag) {
  return tag
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractMeta(rawMarkdown) {
  const readTag = (tagName, fallback = "") => {
    const regex = new RegExp(`<!--${tagName}([\\s\\S]*?)${tagName}-->`, "m");
    const match = rawMarkdown.match(regex);
    return match?.[1]?.trim() || fallback;
  };

  const strippedMarkdown = rawMarkdown
    .replace(/<!--t[\s\S]*?t-->/gm, "")
    .replace(/<!--d[\s\S]*?d-->/gm, "")
    .replace(/<!--tag[\s\S]*?tag-->/gm, "")
    .replace(/<!--image[\s\S]*?image-->/gm, "")
    .replace(/<!--video[\s\S]*?video-->/gm, "")
    .replace(/<!--audio[\s\S]*?audio-->/gm, "")
    .replace(/<!--quote[\s\S]*?quote-->/gm, "")
    .trim();

  return {
    title: readTag("t"),
    description: readTag("d"),
    tags: normalizeTagList(readTag("tag")),
    image: readTag("image"),
    video: readTag("video"),
    audio: readTag("audio"),
    quote: readTag("quote"),
    markdownBody: strippedMarkdown
  };
}

async function readAllFilesRecursively(baseDir) {
  const output = [];

  async function walk(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else {
        output.push(fullPath);
      }
    }
  }

  await walk(baseDir);
  return output;
}

function buildLayout({ title, description, contentHtml }) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link href="/static/css/bootstrap.css" rel="stylesheet" type="text/css">
  <link href="/static/fontawesome-free-5.13.0-web/css/all.css" rel="stylesheet">
  <link href="/static/css/custom.css" rel="stylesheet" type="text/css">
  <link href="/blog/themes/phasereditor2/css/styles.css" rel="stylesheet" type="text/css">
  <link rel="icon" type="image/x-icon" href="/static/images/favicon.png">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/"><img class="logo-icon mr-1" src="/static/images/favicon.png">Phaser Editor 2D</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><a class="nav-link" href="/downloads">Downloads</a></li>
        <li class="nav-item"><a class="nav-link" href="/pricing">Pricing</a></li>
        <li class="nav-item"><a class="nav-link active bg-dark" href="/blog">Blog</a></li>
      </ul>
    </div>
  </nav>

  <div class="p-5"></div>
  <main class="container mb-5">
    ${contentHtml}
  </main>

  <script type="text/javascript" src="/static/js/jquery-latest.min.js"></script>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
}

function postToHtml(post) {
  const renderedTags = post.tags
    .map((tag) => `<a href="/blog/tag/${slugifyTag(tag)}">${escapeHtml(tag)}</a>`)
    .join(", ");

  const mediaBlock = post.image
    ? `<p><img class="img-fluid rounded shadow" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}"></p>`
    : post.video
      ? `<div class="embed-responsive embed-responsive-16by9 mb-4"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${escapeHtml(post.video)}" allowfullscreen></iframe></div>`
      : "";

  return buildLayout({
    title: `${post.title} | Phaser Editor 2D Blog`,
    description: post.description || post.title,
    contentHtml: `
      <article class="post p-4 rounded-lg" style="background-color: rgb(36, 40, 44);">
        <h1>${escapeHtml(post.title)}</h1>
        <p class="text-info">${formatDate(post.date)} - Posted in <a href="/blog/category/${encodeURIComponent(post.category)}">${escapeHtml(post.category)}</a></p>
        ${mediaBlock}
        <div class="lead">${post.bodyHtml}</div>
        <p><strong>Tags:</strong> ${renderedTags || "none"}</p>
      </article>
    `
  });
}

function listToHtml({ title, description, posts }) {
  const items = posts
    .map(
      (post) => `
      <article class="mt-5">
        <h2><a class="text-secondary" href="${post.url}">${escapeHtml(post.title)}</a></h2>
        <p class="text-info mb-2">${formatDate(post.date)} - Posted in <a href="/blog/category/${encodeURIComponent(post.category)}">${escapeHtml(post.category)}</a></p>
        ${post.image ? `<p><img class="img-fluid rounded" style="max-width: 240px" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}"></p>` : ""}
        <div class="lead">${escapeHtml(post.excerpt)}</div>
      </article>
      <hr class="bg-info">`
    )
    .join("\n");

  return buildLayout({
    title,
    description,
    contentHtml: items || "<p>No posts found.</p>"
  });
}

function extractExcerpt(markdownBody) {
  const plain = markdownBody
    .replace(/`{1,3}[\s\S]*?`{1,3}/gm, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/[#>*_~-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return plain.slice(0, 220);
}

async function writeTextFile(targetPath, content) {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, content);
}

async function buildBlogPosts() {
  try {
    await fs.access(contentRoot);
  } catch {
    throw new Error(`Missing blog content directory: ${contentRoot}`);
  }

  await fs.mkdir(blogRoot, { recursive: true });
  const existingBlogEntries = await fs.readdir(blogRoot, { withFileTypes: true });
  for (const entry of existingBlogEntries) {
    if (entry.name === "content" || entry.name === "themes") {
      continue;
    }
    await fs.rm(path.join(blogRoot, entry.name), { recursive: true, force: true });
  }

  const allFiles = await readAllFilesRecursively(contentRoot);
  const markdownFiles = allFiles.filter((filePath) => filePath.endsWith(".md"));
  const posts = [];
  const staticPages = [];

  for (const filePath of markdownFiles) {
    const relativePath = path.relative(contentRoot, filePath).replaceAll(path.sep, "/");
    const rawMarkdown = await fs.readFile(filePath, "utf8");
    const meta = extractMeta(rawMarkdown);

    if (relativePath.startsWith("static/")) {
      const segments = relativePath.replace(/^static\//, "").replace(/\.md$/, "").split("/");
      const cleanedSegments = segments.map((segment) => sanitizeSlugSegment(segment));
      const staticUrl = `/blog/${cleanedSegments.join("/")}`;
      const bodyHtml = md.render(meta.markdownBody);
      staticPages.push({
        title: meta.title || cleanedSegments[cleanedSegments.length - 1],
        description: meta.description || meta.title || "Phaser Editor 2D Blog static page",
        bodyHtml,
        outputPath: path.join(blogRoot, ...cleanedSegments, "index.html"),
        url: staticUrl
      });
      continue;
    }

    const match = relativePath.match(POST_REGEX);
    if (!match) {
      continue;
    }

    const [
      ,
      author,
      category,
      kind,
      year,
      month,
      day,
      hour,
      minute,
      second,
      filenameTags,
      slug
    ] = match;

    const date = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute),
      Number(second)
    );

    const mergedTags = new Set([...normalizeTagList(filenameTags), ...meta.tags]);
    const bodyHtml = md.render(meta.markdownBody);
    const url = `/blog/${year}/${month}/${slug}`;

    posts.push({
      author,
      category,
      kind,
      title: meta.title || slug.replaceAll("-", " "),
      description: meta.description || "",
      tags: Array.from(mergedTags),
      image: meta.image,
      video: meta.video,
      audio: meta.audio,
      quote: meta.quote,
      slug,
      date,
      year,
      month,
      url,
      excerpt: extractExcerpt(meta.markdownBody),
      bodyHtml,
      outputPath: path.join(blogRoot, year, month, slug, "index.html")
    });
  }

  posts.sort((a, b) => b.date - a.date);

  for (const post of posts) {
    await writeTextFile(post.outputPath, postToHtml(post));
  }

  for (const page of staticPages) {
    await writeTextFile(
      page.outputPath,
      buildLayout({
        title: `${page.title} | Phaser Editor 2D Blog`,
        description: page.description,
        contentHtml: `<article class="post p-4 rounded-lg" style="background-color: rgb(36, 40, 44);"><h1>${escapeHtml(page.title)}</h1><div class="lead">${page.bodyHtml}</div></article>`
      })
    );
  }

  const categories = new Map();
  const tags = new Map();
  for (const post of posts) {
    if (!categories.has(post.category)) {
      categories.set(post.category, []);
    }
    categories.get(post.category).push(post);

    for (const tag of post.tags) {
      const tagSlug = slugifyTag(tag);
      if (!tagSlug) {
        continue;
      }
      if (!tags.has(tagSlug)) {
        tags.set(tagSlug, { label: tag.toLowerCase(), posts: [] });
      }
      tags.get(tagSlug).posts.push(post);
    }
  }

  await writeTextFile(
    path.join(blogRoot, "index.html"),
    listToHtml({
      title: "Blog | Phaser Editor 2D",
      description: "The latest news about Phaser Editor 2D",
      posts
    })
  );

  for (const [category, categoryPosts] of categories) {
    await writeTextFile(
      path.join(blogRoot, "category", category, "index.html"),
      listToHtml({
        title: `Category: ${category} | Phaser Editor 2D Blog`,
        description: `Posts in category ${category}`,
        posts: categoryPosts
      })
    );
  }

  for (const [tagSlug, tagData] of tags) {
    await writeTextFile(
      path.join(blogRoot, "tag", tagSlug, "index.html"),
      listToHtml({
        title: `Tag: ${tagData.label} | Phaser Editor 2D Blog`,
        description: `Posts tagged with ${tagData.label}`,
        posts: tagData.posts
      })
    );
  }

  const archiveIndexHtml = buildLayout({
    title: "Blog Archive | Phaser Editor 2D",
    description: "Archive of Phaser Editor 2D blog posts",
    contentHtml: `
      <h1>Archive</h1>
      <ul>
        ${posts
          .map(
            (post) =>
              `<li><a href="${post.url}">${escapeHtml(post.title)}</a> <span class="text-info">(${formatDate(post.date)})</span></li>`
          )
          .join("\n")}
      </ul>
    `
  });

  await writeTextFile(path.join(blogRoot, "archive", "index.html"), archiveIndexHtml);

  console.log(
    `Blog build complete. Generated ${posts.length} posts and ${staticPages.length} static markdown pages.`
  );
}

buildBlogPosts().catch((error) => {
  console.error(error);
  process.exit(1);
});
