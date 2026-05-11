<!--t Phaser Editor 2D v3.8.0 released! Welcome Tilemaps! t-->
<!--d In this new version are introduced a couple of important features, like the Tilemap support in the Scene Editor and the default Application mode. d-->
<!--tag tiled,tilemap,scene editor,release,application tag-->
<!--image https://phasereditor2d.com/blog/content/images/v3.8.0/title.png image-->

*Update 11-01-2020: [v3.8.1 hotfix released](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/releases/tag/v3.8.1)*

Hi!

This is a huge release! Phaser Editor 2D v3.8.0 includes support for Tilemap objects in the Scene Editor, better OS integration (getting closer to a desktop application), a new demo as a project template, and much more.

[Get Phaser Editor 2D v3.8.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter, and social channels.

### [Game] City Hero

[City Hero](https://phasereditor2d.com/blog/2020/10/city-hero-a-facebook-instant-game) is a game made by [Weveana Studio](https://www.weveana.com) for the Facebook Instant Game platform.

![City Hero](https://phasereditor2d.com/blog/content/images/20201001082509-CityHeroWeveana.png)

### [Tutorial] Memory Match in Phaser Editor 2D - A Mario Party-style Memory Game

A [complete video tutorial series](https://phasereditor2d.com/blog/2020/09/tutorial-memory-match-in-phaser-editor-2d-a-mario-party-style-memory-game) from [Ourcade](https://ourcade.co/).

We also recommend the [Preloader Scene in Phaser Editor 2D](https://phasereditor2d.com/blog/2020/10/tutorial-preloader-scene-in-phaser-editor-2d) tutorial.

### [Tutorial] Introducción a Phaser.IO, moviendo el fondo del escenario infinitamente

A [tutorial to introduce Phaser Editor 2D](https://phasereditor2d.com/blog/2020/10/tutorial-spanish-introduccion-a-phaserio-moviendo-el-fondo-del-escenario-infinitamente), from [Weveana Studio](https://www.weveana.com).

### [Tutorial] Duck hunting game (devlog from Rod Antunes)

Rod Antunes is sharing how he is making a Duck Hunting game with Phaser Editor 2D and Phaser. 

[Criando jogos com javaScript](https://phasereditor2d.com/blog/2020/10/duck-hunting-game-devlog-from-rod-antunes)

The video is in Portuguese, but he just created an [English channel](https://www.youtube.com/channel/UC_j9j48jN3U0jARrMVSOYFA).


## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is key in the process of providing a more friendly and stable IDE.

## Running Phaser Editor 2D as a local application

Phaser Editor 2D has traditional web-application architecture: it has a server program and a client application that runs in a local or remote browser. However, we see most of the users expect the editor to work as a local application. For that reason, in this version, we introduced some changes to make the default experience closer to a desktop application workflow.

**WARNING**, we did some breaking changes in the arguments (flags) of the `PhaserEditor2D.exe` server program. We recommend reading the following topics.

### Application mode

We removed the `-desktop` option. Now the server starts in desktop (or application) mode by default. 

If you need to run the editor on a remote machine (in "public mode"), you can use the new `-public` option. It allows remote connections and disables the integration with the local browsers, VS Code, and the file manager.

### Configuring the default browser

When the server starts in application mode, it opens the OS default browser. But maybe you want to use another browser with the editor. If it is the case, you can use the new `-browser-command` option. For example, you can configure the server to open the Google Chrome browser:

```
$ PhaserEditor2D -browser-command "'C:\Program Files\Google\Chrome\Application\chrome.exe' '$URL'"
```

Note you should quote the argument value. Also, the `$URL` variable is expanded with the URL value of the editor. Usually, it is `http://127.0.0.1:1959/editor`.

Something interesting about Google Chrome is that you can run it in application mode:

```
$ PhaserEditor2D -browser-command "'C:\Program Files\Google\Chrome\Application\chrome.exe' '-app=$URL'"
```

If you like to run the editor as a desktop application, Chrome's application mode is very convenient. It disables tabs, does not catch certain keystrokes, and shows an application-like window:

![Chrome application mode](/blog/content/images/v3.8.0/chrome-application-mode.png)

Ok, it is a lot to write when you run the editor. But there is good news, you can set the editor options in a configuration file.

### Configuration file (flags.txt)

In this version, we introduced the `flags.txt` file. You can use it to set the default configuration of the editor. It is pretty simple. In each line of the file, you write a program argument. For example, if you want to start the editor in public mode and at port `8080`, you can write this in the `flags.txt` file:

```
flags.txt:

-public
-port
8080
```

It is the same as `PhaserEditor2D.exe -public -port 8080`.

This file is located in the root of the editor installation  (next to the `PhaserEditor2D.exe` file). We added some comments to help you in adding useful options. Let's go back to the Google Chrome configuration. If you write the following lines in the `flags.txt` file, each time you run the Phaser Editor 2D server, it automatically launches Google Chrome in application mode and loads a workspace in a different location.

```
flags.txt:

-browser-command
"C:\Program Files\Google\Chrome\Application\chrome.exe" "--app=$URL"

-ws
"D:\HTML5 Games\My PhaserEditor2D Projects"

```

You can learn more about the `flags.txt` file in the [documentation](https://help.phasereditor2d.com/v3/misc/server-options.html#getting-the-options-from-a-file).

### Server icon in Windows

We added an icon to the `PhaserEditor2D.exe` file in Windows. This small change is very useful if you want to run the editor as a desktop application. It allows you to pin the `PhaserEditor2D.exe` file in the taskbar:

![Pin Phaser Editor 2D to taskbar](/blog/content/images/v3.8.0/pin-to-taskbar.png)

After that, to run the editor you only need to click on the taskbar shortcut:

![Run Phaser Editor 2D from the taskbar](/blog/content/images/v3.8.0/launch-from-taskbar.png)

### Single server instance

By default, the server listens for connections on port `1959`. Now, if you run a second instance of the server, in the same port, the second instance will send a message to the first server instance and will exit. Then, the first instance will re-launch the configured browser. This means, each time you run the server, a browser will be launched to open the editor. This feature is not available if the server is started in public mode.

### Advanced JavaScript tooling by default

We removed the `-enable-advanced-js-editor` option. Now the editor loads the JavaScript advanced tooling by default. If you are working with TypeScript or prefer to code JavaScript with a third-party editor (we recommend VS Code), then you can disable the advanced JavaScript tooling with the new `-disable-advanced-js-editor` option.

## Scene Editor: built-in types as blocks in the Blocks view

In this version, we removed the **Add Object dialog**. Now, all the types supported by the Scene Editor are listed in the Blocks view, and you can create an instance by dragging the type-block and dropping it in the scene:

![Built-in type block](/blog/content/images/v3.8.0/create-built-in-type-instance.png)

## Tiled integration

[Tiled](https://mapeditor.org) is probably the most popular editor for tilemaps. Phaser has built-in support for it and now the Scene Editor of Phaser Editor 2D, too.

This means, now you can create your maps with Tiled and import them into the Scene Editor.

The workflow is similar to other file formats:

* Import the Tiled JSON files and tileset images into an Asset Pack file.
* Create a Tilemap object in the Scene Editor.
* Create a StaticTilemapLayer or DynamicTilemapLayer in the Scene Editor.

### Importing the Tiled files

Tiled can export the maps to different formats. We added support only for the JSON format. In addition to the map data, you should import the tileset images, as simple images or sprite-sheets.

You can import the tilemap data using the [Asset Pack Editor](https://help.phasereditor2d.com/v3/asset-pack-editor) or [selecting it in the Files view](https://help.phasereditor2d.com/v3/asset-pack-editor/import-from-files-view.html):

![Importing the map data](/blog/content/images/v3.8.0/import-tilemap-data.png)

If you look at a Tiled tilemap file in the Asset Pack Editor, it shows some of the properties in the Inspector view:

![Tilemap data in Asset Pack Editor](/blog/content/images/v3.8.0/import-tilemap-data-2.png)

You should do the same with the tileset images.

### Creating the Tilemap object in the Scene Editor

To create a Tilemap object in the Scene Editor, drop a **Tilemap** block into the scene:

![Drop a tilemap block into the scene](/blog/content/images/v3.8.0/create-tilemap-1.png)

It opens a **Tilemap Configuration** wizard where you can:

* Select the Tilemap data key, previously imported in an Asset Pack file:<br>
![Drop a tilemap block into the scene](/blog/content/images/v3.8.0/create-tilemap-2.png)<br>
* Associate each tileset with an image in an Asset Pack file:<br>
![Select the images for each tileset](/blog/content/images/v3.8.0/create-tilemap-3.png)<br>You should select the tileset and click on the **Set Tileset Image** button. It opens a dialog with all possible images. Pick one.
* If you press the **Finish** button, it will create a new Tilemap object. But you can continue to the next page of the wizard and select a Tilemap Layer to be added to the scene:<br>
![Select a tilemap layer](/blog/content/images/v3.8.0/create-tilemap-4.png)<br>


A Tilemap is not a display object, it is not shown in the scene, but in the Outline view, under the Tilemap folder:

![Tilemap in Outline](/blog/content/images/v3.8.0/tilemap-in-outline.png)

Note it also shows the tilesets of the map, you can select them and change the image in the Inspector view.

The Tilemap layers are display-objects and are shown in the scene and the Outline view:

![Tilemap in Outline](/blog/content/images/v3.8.0/tilemap-layer-in-outline.png)

[Learn more about the Tilemap object in the documentation](https://help.phasereditor2d.com/v3/scene-editor/tilemap-object.html)

### Creating a Tilemap layer in the Scene Editor

The faster way to create a Tilemap Layer is by using the **Tilemap Configuration** wizard. However, there are maps with more than one layer and maybe you would like to add extra layers to the scene. To do this, you can drop a **StaticTilemapLayer** or **DynamicTilemapLayer** block into the scene:

![Creating a tilemap layer](/blog/content/images/v3.8.0/create-layer-1.png)

If there is only one Tilemap object in the scene with only one Tilemap layer defined, then a new layer will be created. Else, it will show a dialog to select the exact Tilemap and Tilemap Layer to be added to the scene:

![Select the tilemap layer](/blog/content/images/v3.8.0/create-layer-2.png)

Click on the **Select** button and a new layer will be created:

![New tilemap layer](/blog/content/images/v3.8.0/create-layer-3.png)

### Tilemap and Tilemap Layer code generation

The Tilemap and Tilemap Layer objects are compiled into JavaScript code in this way:

![Tilemap generated code](/blog/content/images/v3.8.0/tilemap-code.png)

In Phaser, when you create a Tilemap Layer, you have to set the name of the tilesets used by the layer. In Phaser Editor, these names are computed automatically by scanning the tilemap data.

### Tilemap and Tilemap Layer prefabs

You cannot create a prefab of a Tilemap or Tilemap Layer. It is complicated because the Tilemap is not a display object, and the Tilemap Layer depends on a Tilemap. Maybe in the future, we can find a solution for this but we think it is not a priority now, and honestly, it is something that probably you will never use.

## New demo as a project template

We ported the Sunny Land demo game to Phaser Editor 2D v3 and included it as a project template. This is a great resource for learning how to create tilemap based games with Phaser Editor 2D and Tiled.

The original [Sunny Land demo](https://ansimuz.itch.io/sunny-land-pixel-game-art) was created (code and assets) by [Luis Zuno](https://ansimuz.com).

![Sunny Land preview](/blog/content/images/v3.8.0/sunny-land.png)

## Other changes

### Texture preview in User Properties

The **Texture Config** and **Animation Key** user properties show a preview image in the "search button":

![User property icon](/blog/content/images/v3.8.0/user-property-icon.png)

### Math expressions in the Scene Editor property fields

Now you can write math expressions in the numeric fields. The expressions are evaluated and the result value is set to the properties:

![Evaluate math expressions](/blog/content/images/v3.8.0/eval-math-expression.png)


### Open files in default editor

Files with an unknown content type or without a dedicated editor will be opened in a default Text Editor.

### Select the editor to open a file

Now you can select an editor to open a file. Right-click in the file and select an editor in the **Open With...** menu:

![Open With menu in the Files view](/blog/content/images/v3.8.0/open-with-editor.png)


### Complete Change Log

Read the complete change log in the GitHub repository:

[Change Log](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/blob/master/CHANGELOG.MD)

## What's next?

We all are waiting for the next release of Phaser 3, which comes with a lot of new features. As soon as it is released we are going to publish a new version of the editor, to support it. In the meantime, we should continue working on the Scene Editor, to support more types of objects, like Zone, Geometric, and Shape.

Keep in contact!

Arian




