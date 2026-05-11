<!--t [Tutorial] Game development env in the cloud, with Phaser Editor 2D, Gitpod, Github, and TypeScript t-->
<!--d Step by step tutorial to setup a complete Phaser development environment in the cloud. With access to Phaser Editor 2D, GitHub and TypeScript. d-->
<!--tag gitpod,github,typescript,cloud tag-->
<!--image https://phasereditor2d.com/blog/content/images/20200821135249-gitpod-and-phaser-editor.png image-->

Hi!

Months ago, we released [Play Phaser Editor 2D](https://play.phasereditor2d.com), an online service to make games with Phaser Editor 2D, in the cloud. It can be a nice option for beginners, but not for producing games. One important reason is that you cannot run modern third-party tools often used for Phaser game development, like the TypeScript compiler or Git.

In this article, we explain step by step how to set up a Phaser game development environment in the cloud, but with no limitations and providing "full access" to the Operating System.

We are going to help you to create an environment when you can use Phaser Editor 2D, TypeScript, Git, and [Eclipse Theia](https://theia-ide.org) (a Visual Studio Code for the cloud).

## Gitpod

[Gitpod](https://gitpod.io) is a platform that allows creating development environments in the cloud. It is integrated with GitHub, GitLab, and Bitbucket. In a few words, with Gitpod, you can open an online IDE (Theia) in a Docker container and edit the files hosted in a GitHub repository. At the same time, it provides a Terminal to execute commands and setup third-party tools in the container instance.

It is a perfect solution for our goal. We can download Phaser Editor 2D and run it there, together with Theia.

## First steps

In this article, we are going to integrate Theia with a GitHub repository. It is very simple:

1. Create a new repository in GitHub. Let's name it `gitpod-demo`. 

2. In your browser (we recommend a modern and updated browser) open this URL:

```
https://gitpod.io/#https://github.com/your-user-name/gitpod-demo
```

(Look you have to write the right user name and repo name)

Gitpod will open and will ask you to introduce your GitHub credentials. Then, the Theia IDE will open and show the content of the repository. It is that easy!

![Open the repo in Theia][2]

## Setup Phaser Editor 2D

We have Theia running, now we need to setup Phaser Editor 2D.

The container created by Gitpod has a `/workspace` folder that is where you can create the files. Everything in the container can be deleted, but not the `/workspace` folder.

When Theia opens, the current directory in the Terminal view is the `/workspace` folder, we are going to work there.

You can go to the [Phaser Editor 2D Downloads](https://phasereditor2d.com/downloads) can get the link to the Phaser Editor 2D for Linux distribution. It is just a zip file. To download it, run this command in the Terminal:

```
$ wget -q https://updates.phasereditor2d.com/v3.5.0/PhaserEditor2D-3.5.0-linux.zip
```

It takes a few seconds, it just has to downloads ~10MB.

Then, unzip the download:

```
$ unzip -q PhaserEditor2D-3.5.0-linux.zip
```

It creates a new `PhaserEditor2D` folder that contains the editor server executable.

Phaser Editor 2D has the [workspace](http://help.phasereditor2d.com/v3/workbench/projects.html) concept. It is a folder where all the projects are stored. By default, it creates a folder in `~/PhaserEditor2D_Projects`, but in this case, we want to create a folder in the `/workspace` directory:

```
$ mkdir projects
```

Then, we can execute the editor server and set the workspace path to `/workspace/projects`:


```
$ ./PhaserEditor2D/PhaserEditor2D -public -ws projects

```

Theia detects a new port 1959 is open and asks for action. Select the **Open Browser** option:

![Setup and run Phaser Editor 2D][3]

It will open Phaser Editor in a new tab. 

## Creating the game project

Because the workspace is empty, Phaser Editor 2D will show the option to create a new project. Select the **Basic TypeScript** template and press the **Create** button:

![Create TypeScript Phaser Editor 2D project ][4]

When the project is created, it shows a `README.txt` file with the instructions to install TypeScript. But it is not needed, TypeScript is already present in the default configuration of the container provided by Gitpod.

To run the TypeScript compiler, open a new Terminal in Theia IDE:

![Open new terminal][5]

Change to the **Game** directory and run the TypeScript compiler in watch mode:

```
$ cd projects/Game
$ tsc -w
```

![Run typescript compiler][6]

The game is compiled, so we can run it in Phaser Editor 2D:

![Run the game in Phaser Editor][7]

![Game running][8]

## Coding the game in Theia

Let's do a small change to the game. Open the `scenes/Level.scene` file in Phaser Editor and change the scope of the Dino object to `CLASS`. We want to access it in the `update()` method of the scene:

![Change the object scope][9]

Save the scene, to update the `Level.ts` file, generated by the [Scene Compiler](http://help.phasereditor2d.com/v3/scene-editor/scene-compiler.html).

Phaser Editor 2D has a decent JavaScript editor, but not a TypeScript editor. For this reason, we use the Theia IDE.

Open the `scenes/Level.ts` file in Theia and write an `update()` method, to change the angle of the Dino object:

![Edit the scene code in Theia][10] 

You have full intellisense in Theia, just like in Visual Studio Code. That is a really powerful tool.

Save the `Level.ts` file and the TypeScript compiler will compile it into JavaScript, automatically. If you look into the `tsconfig.json` file, all the TypeScript files are compiled into a `game.js` file.

Run the game again, now the Dino object will rotate at every frame:

![Final game, with rotating object][11]


## Conclusion

With Gitpod you can do a lot of magic! In this tutorial, we did the basics, but you can configure the whole environment by providing configuration files in the repository. We invite you to read the [Gitpod docs](https://www.gitpod.io/docs/).

Since the beginning, we developed Phaser Editor 2D v3 with cloud IDEs and the app containerization tech in mind. For that reason, it is important that it can run on Linux, that it has a server/client architecture, and that the whole IDE can run in the browser.

There are other platforms similar to Gitpod that you can explore: 

* [Eclipse Che](https://www.eclipse.org/che/)
* [GitHub Codespaces](https://github.com/features/codespaces)
* [Visual Studio Codespaces](https://visualstudio.microsoft.com/services/visual-studio-codespaces/)

Hopefully, Phaser Editor 2D is ready for all of them!

Keep in contact!

Arian

  [2]: https://phasereditor2d.com/blog/content/images/20200821100437-open-repo-in-theia.png
  [3]: https://phasereditor2d.com/blog/content/images/20200821101220-setup-and-run-phaser-editor.png
  [4]: https://phasereditor2d.com/blog/content/images/20200821111038-create-phaser-editor-project.png
  [5]: https://phasereditor2d.com/blog/content/images/20200821111339-open-new-terminal.png
  [6]: https://phasereditor2d.com/blog/content/images/20200821111519-typescript-running.png
  [7]: https://phasereditor2d.com/blog/content/images/20200821111733-run-game-in-phaser-editor.png
  [8]: https://phasereditor2d.com/blog/content/images/20200821111944-game-running.png
  [9]: https://phasereditor2d.com/blog/content/images/20200821120408-change-object-scope.png
  [10]: https://phasereditor2d.com/blog/content/images/20200821120738-edit-scene-code-in-theia.png
  [11]: https://phasereditor2d.com/blog/content/images/20200821121354-final-game.png