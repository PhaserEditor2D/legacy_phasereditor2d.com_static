<!--t Phaser Editor 2.1.0 released t-->
<!--d Phaser Editor v2.1.0 released. New Phaser powered Scene editor, new workflow and new views. d-->
<!--tag Phaser Editor v2,Scene Editor,WebView,Phaser Labs,Workflow tag-->
<!--image https://phasereditor2d.com/blog/content/images/v2.1.0/SceneEditor.png image-->

Hi!

Today we are releasing an important version of Phaser Editor: v2.1.0. In this version, we introduce two important changes: a new implementation of the Scene Editor, based on Phaser, and a new way to navigate the content. There are other changes like a new Phaser Versions view and the adoption of the latest Phaser version 3.17.0 and the latest Eclipse IDE version 4.11.


[Download Phaser Editor 2D v2.1.0](/blog/downloads/)

<!-- index-start -->

* [Games and tutorials](#games-and-tutorials)
 * [Thunderjack! by GamePlayCoder](#thunderjack-by-gameplaycoder)
* [Migration guide](#migration-guide)
* [Scene Editor](#scene-editor)
 * [Bug fixes](#bug-fixes)
* [The new Start perspective](#the-new-start-perspective)
 * [The new Scene and Code perspectives](#the-new-perspective)
 * [Focusing on a single project](#focusing-in-a-single-project)
  * [Selecting the Active Project](#selecting-the-active-project)
* [The new Project view](#the-new-project-view)
* [Changes made to the Assets view](#changes-made-to-the-assets-view)
* [The new Blocks view](#the-new-blocls-view)
 * [Scene Editor blocks](#scene-editor-blocks)
 * [Animations Editor blocks](#animations-editor-blocks)
* [The new Phaser Versions view](#the-new-phaser-versions-view)
* [Update to the latest Phaser version](#update-latest-phaser-version)
* [Update to the latest Eclipse version](#update-latest-eclipse-version)
* [Other changes](#other-changes)
* [What's next?](#whats-next)


<!-- index-end -->

## Games and tutorials {#games-and-tutorials}


### Thunderjack! by GamePlayCoder {#thunderjack-by-gameplaycoder}

![Thunderjack game](/blog/content/images/v2.1.0/thunderjack-gameplaycoder.png){width=250}

Thunderjack! A game made by the GamePlayCoder.com is a nice example of what you can do with Phaser Editor. It is available in the Play Store and you can download the source code from GitHub

[Read more...](https://phasereditor2d.com/blog/2019/04/thunderjack-by-gameplaycoder)

*If you are creating games, tutorials or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we are more than happy to feature it in our website.*

## Migration guide {#migration-guide}

This version introduces some new changes in the perspectives state. If you open an old workspace the UI layout could be a bit messy and some perspectives will be hidden. To avoid this you have two options:

* Create a new workspace and import all the projects of the old workspace.
* Start the editor with the `-clearPersistedState` option:
<br>
<br>**Windows**: `PhaserEditor2D.exe -clearPersistedState`
<br>**macOS**: `./PhaserEditor2D.app/Contents/MacOS/PhaserEditor2D -vm jre/lib/jli/libjli.dylib -clearPersistedState`
<br>**Linux**: `./PhaserEditor2D.exe -clearPersistedState`

## Scene Editor {#scene-editor}

Finally, we have a scene editor based on Phaser. You should not see a huge difference, it should work as usual. However, it is yet a preview and experimental component. To implement the editor, we embedded a WebView (or better say, an SWT Browser) and we run a Phaser instance there, that communicates with the IDE via WebSocket. This WebView has a different backend in the different platforms: GTK/WebKit on Linux, Safari WebKit on MacOS and Internet Explorer on Windows. Yes, our friend Internet Explorer. In Linux and MacOS everything should work well. In Windows, you need to have Internet Explorer 11 installed in your system because versions previous to 11 do not have good HTML5 support.

There is an in-development third-party project ([Chromium-SWT](https://github.com/maketechnology/chromium.swt)) that pretends to replace the current SWT Browser by a Chromium-based browser. But in our tests, it only works on Windows 10. Anyway, we included it in the editor, so you can test it. To enable it, go to the *Window → Preferences → Phaser Editor → WebView* preferences.

![WebView preferences](/blog/content/images/v2.1.0/WebViewPreferences.png)

The Phaser game is created with a WebGL context in MacOS and Windows, but with a Canvas context in Linux. However, you can force one type or other in the preference page *Window → Preferences → Phaser Editor → Scene Editor*. The Canvas type may look better in some systems. Just try it.

![Scene Editor Phaser context](/blog/content/images/v2.1.0/SceneEditorPhaserContext.png)

You can open the scene editor in your external system browser too. But it only shows the "render area" and is only useful for debugging purpose. In the future, we may use it to embed the Scene Editor into other editors, like VSCode ;-), but for now, it is just an idea. Look in the Properties of the scene there is an **Open System Browser** button:

![Open System Browser](/blog/content/images/v2.1.0/SceneEditor_OpenSystemBrowser.png)

You can use the **Refresh** button to reload the editor (page) if you face any error. The "data" of the scene is not affected by a reload.

The code of that HTML editor is in the plugin: `plugins/phasereditor.scene.ui.editor.html` (in macOS `PhaserEditor2D.app/Contents/Eclipse/plugins/...`). You can open the `html` folder in any editor (we use Visual Studio Code) and edit the code.

Please, if you find any bug report us in out [GitHub account](http://github.com/PhaserEditor2D/PhaserEditor/issues/).


### Bug fixes {#bug-fixes}

* [Project template generates the `pixelArt` configuration property](https://github.com/PhaserEditor2D/PhaserEditor/issues/115).


## The new Start perspective {#the-new-start-perspective}


In this version, we introduced the Start perspective. As the name suggests, the Start perspective is the first thing you see when you open the editor in a new workspace. This perspective hides the toolbar and shows only one view, the Start view, that shows the following content: 

* The buttons to create a new project (or example project).
* The buttons to open an existent project.
* Links to the social channels of Phaser Editor.
* The latest news created in the Phaser Editor website.

The function of this perspective is to guide the user when it opens the editor for the first time, but the user could return to this perspective to quickly start new projects or open existent projects.

![Start perspective](/blog/content/images/v2.1.0/StartPerspective.png)

To switch back to the Start perspective you can click on the home icon in the Perspective Switcher, or press `Ctrl+F8` and select **Start**. Note that now the Perspective Switcher shows the name of perspectives.

![Perspective switcher](/blog/content/images/v2.1.0/PerspectiveSwitcher.png)

### The new Scene and Code perspectives {#the-new-perspective}

We renamed the old Phaser perspective to Scene perspective and introduced a new Code perspective. See the [migration guide](#migration-guide) to get those perspectives ready in old workspaces.

### Focusing on a single project {#focusing-in-a-single-project}

Phaser Editor, based on the Eclipse IDE, inherited the concept of workspace. The workspace is a folder where you can create multiple projects, so you can work on many projects at the same time. It is great for general purpose technologies like Java, but in Phaser game development, the common is that games are created in a single, isolated project. To deal with different projects at the same time, complicates your workflow and data presentation, especially if you are not used to Eclipse or similar IDEs.

In this release, we are changing it. The IDE keeps able to create a workspace with multiple projects, but now it forces you to select the **Active Project**. So, many of the UI created for game development now depends on the Active Project to show its content, especially the new Project and Blocks views, and the old Assets view.

#### Selecting the Active Project {#selecting-the-active-project}

The Active Project is set when you click (open) a project in the Start view or when you create a new project. When you open a project, the Scene perspective is activated. When you create a new project, the Scene or Code perspective is activated, it depends on the project template.


## The new Project view {#the-new-project-view}

In previous versions, the projects are presented to the users in the **Project Explorer** view. This is a view provided by the Eclipse IDE and is very powerful. You can import/export files, projects, focus on folders or projects, link to external resources, inclusion/exclusion filters, Working Sets, etc... However, for game development, there are other aspects that we would like to see in a project navigator, that are hard to implement in the **Project Explorer** view:

* Inline preview of images and other files.
* Zoomable.
* Custom layout.
* Quick content filtering.
* Single project (this can be done in Project Explorer with some tweaks).
* Better Properties support.

So we decided in this version to implement a new window to browse the projects: the **Project** view.

![Project view](/blog/content/images/v2.1.0/ProjectView.png)

The most important thing is that the Project view only shows the content of one project at the time. That project is the Active Project selected in the Start view. If you want to see the content of another project, you have to go to the Start perspective and open that project. The other option is to open the **Project Explorer**, it shows all the projects.

Common edit actions are available via keystrokes and context menu. However, in this part we should do a much better job, we need to do more testing, especially on moving files are pasting (dropping) files from external sources. In any case, you always can open the battle-tested **Project Explorer** view in case there is a missing feature or something is not going well.

The Project view has better Properties support. When you select a file in the Project view, the Properties view shows some info about the file and, if it is the case, a Preview of that file. In the future, we should add more functions to the Properties of a file, like shortcuts to import it into an asset pack, shortcuts to find References to the file, etc... Do you remember the Preview view? Eventually, it is going to be replaced by the Properties view.

![Properties of a file in a Project view](/blog/content/images/v2.1.0/ProjectView_PropertiesView.png)


## Changes made to the Assets view {#changes-made-to-the-assets-view}


The Assets view received a small update: now it only shows the content of the Active Project. With the new Blocks view (see next section), the Assets view has less relevance, but yet we think it is useful to browse the assets of the game.

## The new Blocks view {#the-new-blocls-view}

In this version, we introduced the new Blocks view, another effort to simplify the content presentation to help you go quickly. The Blocks view connects to the active editor and shows the "blocks" needed by that editor to build its objects. If you switch to another editor, the Blocks content is updated and shows the blocks needed by that editor (similar to other views, like the Outline and Properties). At this moment, only two editors have supported: the Scene Editor and the Animations Editor, but we are thinking on the best way to support the Texture Packer Editor and the Asset Pack Editor.

The Blocks view shows hierarchical data, for example, in the Scene Editor blocks, a texture atlas is a block that contains other blocks, the frames. Usually, we present hierarchical data as a tree viewer, but in Blocks, we show it as a grid viewer, where "parent" elements contain an expand/collapse button. if you click on the expand button, the children of those blocks will be added to the grid, next to the parent.

Another feature of the Block view is that each block is painted with a solid background, and the color is associated with the type of the block. For example, all the animation blocks share the same color, that is different from the color of an image block.

Like other viewers in the IDE, the Blocks content can be filtered and zoomed. This is a very new UI, and it may change in the future. We are thinking about showing a toolbox area, on top of the blocks. Let's see, your feedback is more than welcome here.

### Scene Editor blocks {#scene-editor-blocks}

When a Scene Editor is active, the Blocks view shows the asset pack keys you can use in that editor. So you can drag the asset key and drop it into the editor to create new objects. The supported key types are texture atlas, frame of a texture atlas, image, spritesheet, frame of a spritesheet, and animation. In the future, we should show other content like prefabs.

![Scene Editor blocks](/blog/content/images/v2.1.0/Blocks_SceneEditor.png)

### Animations Editor blocks {#animations-editor-blocks}

The blocks provide by the Animations editor are the asset keys you can use to create the animation frames. The type of the asset keys is texture atlas, a frame of a texture atlas, a spritesheet, a frame of a spritesheet and an image. Like the Assets view, if you drag a texture atlas block and drop it on the Animations editor, then many animations will be auto-created by grouping the frames with a common name prefix.

![Animations Editor blocks](/blog/content/images/v2.1.0/Blocks_AnimationsEditor.png)

## The new Phaser Versions view {#the-new-phaser-versions-view}

We added a nice new tool to the Phaser Labs perspective: the Phaser Versions view. That view shows all the versions of Phaser and under each version, it shows all the members introduced in that version. We build the version tree by parsing the `@since` tag of the Phaser jsdoc. We think this is another way to get information about what's new in every Phaser release. As is usual in the views of the Phaser Labs, you can do quick filtering and open the selected element in a JavaScript editor, in the Phaser Hierarchy view or in the Jsdoc view.

![Phaser Versions view](/blog/content/images/v2.1.0/PhaserVersionsView.png)

## Update to the latest Phaser version {#update-latest-phaser-version}

All related parts in the IDE were updated to Phaser v3.17.0.

## Update to the latest Eclipse version {#update-latest-eclipse-version}

We updated to the [latest Eclipse version 4.11](https://www.eclipse.org/eclipse/news/4.11/platform.php). The most important change is the improving of the boot speed.

## Other changes {#other-changes}

* Enable themes in macOS.
* Fixes error when adding a new atlas in an empty `pack.json` file.


## What's next? {#whats-next}

We want to update the v1 series of Phaser Editor. There are some bugs reported by the clients and many of you keep using that version. In v2, we have in mind to do the following:

* Support missing loader types (like `css` and `htmlTexture`).
* Support TypeScript projects and code generators.
* Support Scene layers (an idea we have about editor layers).
* Support Scene Prefab object.
* Support Scene Tilemap object.
* Support Scene Text object and custom styling.
* Start writing the documentation.

A lot to do in the near future! Some of you are waiting for more progress on v2 to start using the editor. Others are waiting for Phaser 3 to include features like nested containers, to do the jump. In any case, say us what you think about the editor and the kind of features you are missing, it helps us to move forward in the right direction.


Keep in contact!


Arian







