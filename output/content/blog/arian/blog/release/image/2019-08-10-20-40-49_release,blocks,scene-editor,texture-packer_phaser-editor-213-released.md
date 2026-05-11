<!--t Phaser Editor 2.1.3 released t-->
<!--d Phaser Editor v2.1.3 released. Improved Blocks view. Better Scene Editor selection and much more. d-->
<!--tag release,blocks,scene editor,texture packer tag-->
<!--image https://phasereditor2d.com/blog/content/images/v2.1.3/asset-pack-editor-blocks-import.png image-->

Hi,

We are happy to release Phaser Editor v2.1.3! It comes with some new features that we hope you will enjoy, like the [Blocks view](/docs/v2/workbench.html#blocks-view) support for the [Texture Packer Editor](/docs/v2/texture-packer-editor.html#add-images-to-the-atlas) and the [Asset Pack Editor](#asset-pack-editor-blocks-view-support).

[Download Phaser Editor 2D v2.1.3](/blog/downloads/)

The [Scene Editor](#scene-editor) was updated too, with bug fixes, better support for the experimental Chromium-based WebView and some minor improvements like those in the selection tools.

There is some progress in the [Documentation for v2](/docs/v2), we finished the [Workbench](/docs/v2/workbench.html) and the [Texture Packer Editor](/docs/v2/texture-packer-editor) chapters.

<!-- index-start -->

* [Games and tutorials](#games-and-tutorials)
* [Documentation progress](#documentation-progress)
* [Phaser 3.19.0](#phaser-3.19.0)
* [Asset Pack Editor](#asset-pack-editor)
 * [Import files from the Blocks view](#asset-pack-editor-import-files-from-the-blocks-view)
 * [Better undo/redo support](#asset-pack-editor-undo-redo-support)
 * [Other changes](#asset-pack-editor-other-changes)
* [Scene Editor](#scene-editor)
 * [Improved experimental Chromium based WebView](#improved-experimental-chromium-webview)
 * [Improved mouse zooming](#improved-mouse-zooming)
 * [Improved selection tool](#improved-selection-tool)
 * [Improved object dragging](#improved-object-dragging)
 * [Phaser version](#scene-editor-phaser-version)
* [Animations Editor](#animations-editor)
* [Texture Packer Editor](#texture-packer-editor)
 * [Toolbar](#texture-packer-editor-toolbar)
 * [Blocks view](#texture-packer-editor-blocks-view)
 * [Other changes](#texture-packer-editor-other-changes)
* [Blocks view](#blocks-view)
* [Project view](#project-view)
* [Assets view](#assets-view)
* [Other changes](#other-general-changes)
* [What's next](#whats-next)


<!-- index-end -->

## Games and tutorials {#games-and-tutorials}

If you are creating games, tutorials or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter and social channels.

## Documentation progress {#documentation-progress}

Writing the [Phaser Editor v2 Documentation](/docs/v2) is the main task we are doing these days, and we just finished two more chapters. The [Workbench](/docs/v2/workbench.html) is a huge one. It explains the common concepts and IDE parts.

* [Chapter 2: Workbench](/docs/v2/workbench.html)
* [Chapter 3: Texture Packer Editor](/docs/v2/texture-packer-editor.html)

The next in line is the Asset Pack Editor chapter.

## Phaser 3.19.0 {#phaser-3.19.0}

We updated the **project templates**, **Phaser Labs** tools and the **Scene Editor** to **`Phaser v3.19.0`**. 

The Phaser runtime files of your old projects are not updated. If you wish to update your game runtime to the new Phaser version you should do it manually. [Learn more about it in the docs](/docs/v2/workbench.html#phaser-version-update).

If you created a project in a previous version of the editor, and you want to update to the new Phaser runtime, you should do it manually, by replacing the `WebContent/lib/phaser.js` file.

## Asset Pack Editor {#asset-pack-editor}

This version includes some nice features that make the Asset Pack Editor a lot more friendly.

### Import files from the Blocks view {#asset-pack-editor-import-files-from-the-blocks-view}

In previous versions of the editor, the workflow to import files into the asset pack files was:

* Click on the **Add File Key** button.
* Select the file type.
* Select the files to import.
* Change, if needed, the configuration of the new file key.

Now the editor provides an alternative workflow:

* The [Blocks view](/docs/v2/workbench.html#blocks-view) connects with the active Asset Pack Editor and shows all the files that are not included in any asset pack in the project. Select some files you want to import.
* Choose one of the file types listed in the [Properties view](/docs/v2/workbench.html#properties-view).
* Change, if needed, the configuration of the new file keys.


Let's see the next image:

![Import from Blocks view](/blog/content/images/v2.1.3/asset-pack-editor-blocks-import.png)

The Blocks view shows some files that are not imported yet. When you select them, the Properties view shows a series of buttons you can press to import the selected files.

The first group of buttons is the **Guess by content type** group. It lists the file types inferred from the content type of the files. For example, it detects all the atlas files and shows the buttons to import them. In the image, you can see it detected one `atlas` file, one `multiatlas` file and two image files. The detected images are part of the atlas files, so you should press the "import atlas files" buttons. Other types supported by this group are image, spritesheet, bitmap font, animations, audio sprite, scene file (when is generated by the Scene Editor), tilemap and audio. We should add more types in future releases.

The second group of buttons is the **Guess by file extension** group. It looks for the file types associated with the file extension, not the content of the file.

The third group only contains one general import button, that opens a dialog to select the file type to import all the selected files.

![General import button](/blog/content/images/v2.1.3/asset-pack-editor-general-import-button.png)

Let's say you clicked the **Import 1 'atlas' files** and the **Import 1 'multiatlas' files**, see how those files are removed from the Blocks view and added to the Asset Pack Editor.

![Imported atlas files](/blog/content/images/v2.1.3/asset-pack-editor-blocks-imported-atlas.png)


By the way, the Blocks view only shows the files stored in the asset pack file folder and sub-folders. For example, if your pack file is on the `WebContent/assets/` folder, then the Blocks view will ignore all the files of the `WebContent/js/` folder. We recommend to create the file packs in folders dedicated only for assets that are supposed to be imported, so the Blocks view of the Asset Pack Editor will show only relevant content.

We think this is a very quick and friendly workflow, another step on the automatic importing of resources. This tool could be used even if you are only interested in Phaser Editor only as a resource manager, and not a scene maker.

### Better undo/redo support {#asset-pack-editor-undo-redo-support}

Phaser Editor v2 inherited the Asset Pack Editor refactoring tooling from v1, but it was used only as an undo/redo alternative because yet the scenes and animations do not support refactorings. In this version, we decided to remove the refactoring support and use the real undo/redo framework provided by the workbench. So, now are the Asset Pack Editor operations can be undo/redo. All the Phaser Editor custom files have a JSON format so it is very easy to modify manually, in case you "break" it. Yet we have to evaluate if we need refactoring tools or just smarter search/replace tools.

### Other changes {#asset-pack-editor-other-changes}

* Added a context menu to delete or add file keys.
* Removed the delete and rename buttons from the Properties view. You can use the context menu or the DELETE key to delete the file keys.
* We added a `contentType` field in the meta description of the Asset Pack File, to help differentiate it from other JSON files.
* If the pack file is empty, the Asset Pack Editor shows a help message with the steps to add the first file keys.


## Scene Editor {#scene-editor}

We fixed some bugs and added minor features to the Scene Editor.

### Improved experimental Chromium based WebView {#improved-experimental-chromium-webview}

The experimental Chromium-based WebView now works much better in Windows. We recommend you to test it. By default, Phaser Editor uses the native Internet Explorer-based WebView, to enable the Chromium WebView, go to *Windows → Preferences → Phaser Editor → WebView* and select the **Chromium Browser (Experimental)** option. Then re-open the scene editors.

* The editor gets the focus when an object is selected in the WebView. This fixes several synchronization issues with the [Properties](/docs/v2/workbench.html#properties-view) and [Outline](/docs/v2/workbench.html#outline-view) views.
* The scene objects dragging is now smooth. The WebView now just requests the needed number of paint calls.

In Linux and macOS it uses a WebKit based WebView by default, which performs very well. The Chromium WebView is yet very unstable in these platforms.

### Improved mouse zooming {#improved-mouse-zooming}

Now the Scene Editor mouse-wheel zooming is consistent with the other image-based controls of the IDE: it keeps pointing to the same image's point.

### Improved selection tool {#improved-selection-tool}

The selection tool was improved:

* To select an object you have to release the mouse.
* If you drag the mouse it paints a frame, and all the objects inside the frame will be selected when the mouse is released.
* Tile-sprite objects now support a pixel-perfect hit test.
* Fixed the selection frame of flipped tile-sprite objects.

### Improved object dragging {#improved-object-dragging}

Now to drag an object you have to do two steps:

* Down and release the mouse in the same point (select it).
* Down the mouse in the selected object and move it.

This is the same behavior of Phaser Editor v1 and prevents the accidental changing of the object's position.

### Phaser version {#scene-editor-phaser-version}

The Scene Editor scene uses the Phaser 3.19.0 version. This means some scene objects could be rendered different in your game if it uses an older version of Phaser.

## Animations Editor {#animations-editor}

The Animations Editor received some touches. 

* Implemented undo/redo for all the operations.
* The editor shows all the animations in a grid layout when no animation is selected.
* If the animations file is empty, the editor shows a message with instructions to create new animations.
* The editor context menu shows the option to add or delete animations.
* Added a `contentType` field to the animations file. It helps to differentiate animation files from other JSON files.

## Texture Packer Editor {#texture-packer-editor}

The Texture Packer Editor was "modernizer". Now it contributes to the main toolbar and the Blocks view.

### Documentation

We finished the documentation of the [Texture Packer Editor](/docs/v2/texture-packer-editor.html).

### Toolbar {#texture-packer-editor-toolbar}

We moved the **Settings** and **Build Atlas** buttons to the main IDE toolbar.

![Texture Packer Editor toolbar](/blog/content/images/v2.1.3/texture-packer-editor-toolbar.png)

### Blocks view {#texture-packer-editor-blocks-view}

Now the Blocks view connects to the active Texture Packer editor and shows all the images outside the `WebContent` folder that, at the same time, are not part of any other Texture Packer Editor file. In this way, you can drag images (or folders) from the Blocks view and drop them into the Texture Packer Editor.

[Learn more about adding images to the Texture Packer Editor](/docs/v2/texture-packer-editor.html#add-images-to-the-atlas)

**Warning**: keep your project clean. Don't add unneeded files to your project, because we are implementing tools that analyze all the content of the project and display that content in different layouts and contexts (like the Blocks view and the Project view). If you have server files (`node_modules`), or other files related to third-party tools, or original versions of your images (just to mention a few cases), we recommend to store them in other place outside the project, or [filter them off](/docs/v2/workbench.html#resource-filters).


![Texture Packer Editor import files from Blocks view. Step 1.](/blog/content/images/v2.1.3/texture-packer-import-1.png)

![Texture Packer Editor import files from Blocks view. Step 2.](/blog/content/images/v2.1.3/texture-packer-import-2.png)


### Other changes {#texture-packer-editor-other-changes}

* The context menu now shows a Delete option.
* When the atlas is empty, the editor shows a message with the instructions to add the first images.


## Blocks view {#blocks-view}

The Blocks view received some love too. 

* It renders lines to join a parent block with its children. If the block has two levels of depth, two lines are rendered.
![Blocks view: depth lines](/blog/content/images/v2.1.3/blocks-view-depth-lines.png)
* When a non-terminal block is collapsed, it shows some of the children icons inside it.
<br>Collapsed:
![Blocks view: non-terminal block collapsed](/blog/content/images/v2.1.3/blocks-view-non-terminal-collapsed.png)
Expanded:
![Blocks view: non-terminal block expanded](/blog/content/images/v2.1.3/blocks-view-non-terminal-expanded.png)
* The selection rendering was improved.
![Blocks view: selection](/blog/content/images/v2.1.3/blocks-view-selection.png)
* Now you can select all elements with the `Ctrl+A` keys.
* Fixed some issues when closing an editor and the connection with the Properties view.

## Project view {#project-view}

We added a button to the view's toolbar and a context menu option to clean the current project.

![Project view: clean button](/blog/content/images/v2.1.3/project-view-clean-button.png)

## Assets view {#assets-view}

* Removed the context menu.
* Better integration with the Properties view.
* Fixes some issues with the file icons rendering.


## Other changes {#other-general-changes}

* Registers undo/redo actions in the Outline and Properties views connected to the Asset Pack Editor, Animations Editor, and Scene Editor.
* Fixed change notification in the number fields of the Properties view forms. It created an unexpected undo/redo behavior.
* BitmapFont renderer in the UI: fixes a **null-pointer-exception** when the font file is missing.
* Project wizard: validates if the folder already exists in the filesystem.
* IDE main toolbar: fixes **null-pointer-exception** when the last editor is closed.
* Use a special icon for the tilemap files.
* Limits the number of spritesheet frames in the UI. Many spritesheets contains a lot of frames and it may slow the UI. Now the sprite-sheet preview controls will show only a maximum of 50 frames per sprite-sheet. You can change that limit in *Window → Preferences → Phaser Editor → Preview → Spritesheet*.
* Fixes **null-pointer-exception** in certain parts of the UI when you have files with no (`null`) extension.


## What's next {#whats-next}

We keep writing the [documentation](/docs/v2) for Phaser Editor v2. Many of the changes we mentioned in this article were implemented as a consequence of the documentation writing. Something we have to do is to spend important time to develop some real games. It gives us a user perspective of the product that helps to make it more robust and friendly.

* (**done**) Support missing loader file types (like `css` and `scripts`).
* (**done**) Support TypeScript projects and code generators.
* (**done**) Support Scene Text object.
* (**done**) Support undo/redo on the Animations and Asset Pack editors.
* (**Next in line**) Start writing the documentation.
* Update the website and make Phaser Editor v2 the recommended option.
* Support Scene Tilemap object.
* Support Scene layers (an idea we have about only-editor layers).
* Support Scene Prefab object.
* Support other Scene object types and custom styling for fonts and HTML elements.

See you soon,

Arian


