<!--t Phaser Editor 2D v3.9.0 released! Black Friday 50% off sales &amp; ElectronJS! t-->
<!--d This new release comes with a 50% off Black Friday sales, Electron JS wrapper, and Shapes support. d-->
<!--tag release,electronjs,scene editor tag-->
<!--image https://phasereditor2d.com/blog/content/images/20201124035156-release390.png image-->

*Update 12-01-2020*: [v3.9.1 hotfix relseased](https://phasereditor2d.com/blog/2020/12/phaser-editor-2d-v391-hotfix-released)

Hi!

Did you say Electron? It is here! Phaser Editor 2D v3.9.0 arrives in the form of an Electron-wrapped application!

[Download Phaser Editor 2D v3.9.0](https://phasereditor2d.com/downloads)

If you like it, this is the best moment to purchase a license because the **Black Friday sales just started**!

[Get a license  with a Black Friday 50% off discount](https://gum.co/phasereditor/blackfriday2020)

## ElectronJS

So many users asked for an Electron-based editor that we did it for this special date. Honestly, we still love the Phaser Editor 2D server. It allows us to run the editor inside any browser and always you can configure it as a desktop application, but we understand that providing the server and the browser in a single package could be more friendly for many of you.

And there is a very nice new feature only available in the Electron-based editor: you can change the workspace folder inside the Projects dialog. We talk about it later.

We created a new public repository for this new product: [github.com/PhaserEditor2D/PhaserEditor2D-v3-electron](https://github.com/PhaserEditor2D/PhaserEditor2D-v3-electron)

You are welcome to contribute.

But don't expect all Phaser Editor 2D code there. The whole thing is pretty simple, in the main process we start the regular (source-closed) Phaser Editor 2D server (in port `1995`) and load the editor in the Electron's render process.

If you open the process monitor of your OS, you will see the Electron process and a `PhaserEditor2D` server process, which is a child of the main Electron process.

### Install

Yet, Phaser Editor 2D is a portable application. But the Electron-based distribution is easier to "install" in your system.

#### Install on Windows

You don't need to install it. Just start the `PhaserEditor2D.exe` file and pin it in the taskbar.

#### Install on macOS

Move the **PhaserEditor2D** app to the **Applications** folder. To execute it the first time you have to right-click on the app and select the **Open** option.

#### Install on Linux

You can execute the editor in a Terminal:

```
$ ./PhaserEditor2D
```

Or you can install it by running the `install.sh` script:

```
$ ./install.sh
```

It will create a desktop shortcut and will add Phaser Editor 2D to the Desktop Environment menu.

You can remove the shortcut and menu by running the `uninstall.sh` script:

```
$ ./uninstall.sh
```

It does not require root privileges.

### Changing the workspace

Something great about Electron is that you can use native dialogs. To take advantage of it, we added the option of change the workspace directory inside the IDE.

Now, when you open the Projects dialog (`Ctrl+P`), it shows the current workspace path and provides a button to change it. Please, don't confuse the workspace directory with the folder of a particular project. A workspace is a folder that contains all the project's folders.

![Change workspace](/blog/content/images/v3.9.0/change-workspace.png)

For now, this feature is only available in Electron, but we will implement it also in the server distribution when you run it in the application mode. We just need to find a multi-platform method to launch a native file dialog in Go.

## License activation dialog

Now you can unlock the editor using a dialog inside the IDE. This feature is available when you run the editor in application mode (including inside Electron):

![Register license dialog](/blog/content/images/v3.9.0/unlock-editor.png)

The old method is still available, you can activate the editor in a terminal:

```
$ PhaserEditor2D -lickey XXXX-XXXX-XXXX-XXXX
```

By the way, the license activation status (Premium or Free) is shown in the window's title.

## Scene Editor

We also implemented some new features in the Scene Editor: the Shapes objects!

### Shapes objects

Phaser supports a couple of shape objects and we plan to support all of them. In this release, we included support for the most basic shapes: Rectangle, Ellipse, and Triangle.

[Learn more about Shapes](https://help.phasereditor2d.com/v3/scene-editor/shape-object.html)

You can add a shape to the scene by dragging it from the Blocks view:

![Create shape](/blog/content/images/v3.9.0/create-shape.png)

And you can change the size of the shape with the **Resize Tool** (you can select with the `Z` key):

![Create shape](/blog/content/images/v3.9.0/resize-tool.png)

All shapes share common "style" properties that you can edit in the **Shapes** section of the Inspector view:

![Create shape](/blog/content/images/v3.9.0/shape-style-properties.png)


### Tilemap Layer rendering in the Outline view

We improved the way a Tilemap Layer object is rendered in the Outline view. It now shows a "thumbnail" image of the Tilemap Layer object:

![Tilemap layer object cell renderer](/blog/content/images/v3.9.0/tilemap-layer-outline.png)


### Grouping built-in type blocks in the Blocks view

As you may notice in the previous screenshots, the Blocks view groups the built-in type blogs by category:

![Grouping built-in type blocks](/blog/content/images/v3.9.0/built-in-blocks-view.png)

### Resize Tile Sprite tool

We renamed the **Resize Tile Sprite tool** to **Resize Tool**, you can apply it to TileSprite objects and shapes.

Keep in contact!

Arian



