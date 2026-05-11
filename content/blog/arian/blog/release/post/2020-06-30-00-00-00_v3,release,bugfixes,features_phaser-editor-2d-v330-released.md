<!--t Phaser Editor 2D v3.3.0 released. t-->
<!--d The new v3.3.0 releases bug fixes and a couple of small new features. d-->
<!--tag v3,release,bugfixes,features tag-->

Hi! Phaser Editor 2D v3.3.0 is ready for the public!

This version includes several bug fixes and a lot of minor new features.

[Download Phaser Editor 2D v3.3.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is key in the process of providing a more friendly and stable IDE.

## Scene Editor

Some users requested a couple of features for the Scene Editor

### Select Region tool

We added a new tool to select all objects inside a region. You can activate it by clicking on its button in the main toolbar or by selecting it in the context menu.

![Select Region tool][1]

### Proportionally scale objects

Hold the `Shift` key to scale objects proportionally, with the [Scale tool](http://help.phasereditor2d.com/v3/scene-editor/manipulation-tools.html#scale-tool).

### Move objects with the arrow keys

You can move the selected objects with the arrow keys. If the [snapping is enabled](https://help.phasereditor2d.com/v3/scene-editor/snapping-properties.html), the objects are moved following the snapping values. If you hold the `Shift` key, the length of the step is multiplied by 10. 

### Copy and paste objects across scenes

You can copy objects from one scene and paste them into another scene.

### Inspector view sections menu

The sections in the Inspector view shows a menu. In respect of the section, it shows related commands. Also, all menus show a Help item that opens the associated chapter of the online [Phaser Editor 2D help](https://help.phasereditor2d.com/v3). 

![Menu of sections of Inspector view][2]

### Automatic creation of root container in prefab scene

A prefab scene can have multiple objects, but only the top-most object is considered the [prefab object](https://help.phasereditor2d.com/v3/scene-editor/prefab-object.html). The other objects are ignored.

However, in the majority of the cases, the reason to add multiple objects to a prefab scene is that you want to keep them as an entity, as part of the prefab, so you join them in a [container](https://help.phasereditor2d.com/v3/scene-editor/container-object.html).

Now, when you add a new object to a prefab scene if the current prefab object is a container, the newly added object is added to that container. Else, a new container is created to group the new object and the current prefab object. 

This automatic creation of a container as a prefab object helps you to avoid repetitive operations.

[Learn more about automatic creation of a container as prefab object](https://help.phasereditor2d.com/v3/scene-editor/prefab-object.html#automatic-container-creation)

### Zoom buttons

We added floating three buttons to the scene. To zoom in/out and reset the zoom.

![Scene Editor zoom buttons][3]

## Asset Pack Editor

The Asset Pack related changes.

### Import SVG files as Image

At this moment, the Scene Editor does not allow to create objects using an SVG file. However, now you can import an SVG file as an Image. It allows the Scene Editor to use it.

If you select the SVG file in the Files view, you can click on the **Import image** option of the Inspector view:

![Import SVG file as image][4]

### Open Asset Pack item in the Asset Pack Editor

When you select an item of an Asset Pack file, in the Files view, the Blocks view, or any other part of the workbench, the Inspector view shows a **File Key** section with the basic information of the selected item. Now, it shows a button to open that Asset Pack item in the Asset Pack Editor.

![Open Asset Pack item in Asset Pack editor][5]

### Help link in the Inspector sections menu

The Asset Pack Editor shows a **File Key** section in the Inspector view. Now the menu of that section shows a Help link to open the Phaser API docs related to the type of file.

![Link to the Phaser docs in the Asset Pack Editor sections][6]

## Workbench

### Input dialogs

Many dialogs (New File, New Project, Rename File) can be closed/approved by pressing the `Enter` key. For example, now you don't need to press the **Accept** button of the  **Rename File** dialog, you can press the `Enter` key and it will assume you accepted that given input value and closes the editor.

### Go To File command

The **Go To File** command (`Ctrl+P`) opens a dialog with all the files of the project. You can select one file to be open in its editor.

![Go To File command][7]

### Zoom buttons in viewers

Viewers are in many places, like the Files view or the New File dialogs. Viewers that potentially display zoomable items (like images) show zoom buttons in the bottom/right corner. It is an alternative to the `Shift+mouse wheel`  combination.

![Zoom buttons in viewers][8]

### Upload dialog

You can drag images from your OS file manager and drop them in the [Upload Files dialog](https://help.phasereditor2d.com/v3/workbench/upload-dialog.html).

![Drop images into Upload Dialog][9]

### Does not validate for `index.html` presence

We removed a disturbing checking of the presence of the `index.html` file in the folder of your project.

## Fixes

* Fixes menu vertical positioning.
* Scene Editor: shows a message when a prefab instance references a missing prefab.
* Scene Editor: fixes user property declaration when no initial value is provided.
* [#45](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/45) Scene Editor: compiler skips using field declarations in JavaScript output. It is not supported in Safari.
* Scene Editor: fixes scene compiler code merging when the output file was modified by a code-formatter (like VS Code Prettier) that replaces tabs by spaces.

## What's next?

This was an unexpected release. Some users reported bugs and blocking issues and we decided to do a quick release with the changes made at the moment. But we are working on the new Object Scripts, which is a mechanism similar to game object components. We hope to finish it before the next release. Some users are very active in our [Discord server](https://discord.com/invite/4DdpMMD) and it is great, it is helping us to make a friendlier product and fix blocking issues. We appreciate it!

Join us!

Arian

  [1]: https://phasereditor2d.com/blog/content/images/20200629232053-select-region-tool.png
  [2]: https://phasereditor2d.com/blog/content/images/20200629233002-scene-editor-insepector-section-menu.png
  [3]: https://phasereditor2d.com/blog/content/images/20200629234440-scene-editor-zoom-buttons.png
  [4]: https://phasereditor2d.com/blog/content/images/20200629235302-import-svg-file-as-image.png
  [5]: https://phasereditor2d.com/blog/content/images/20200629235628-open-asset-pack-item.png
  [6]: https://phasereditor2d.com/blog/content/images/20200629235959-help-link-file-key-section.png
  [7]: https://phasereditor2d.com/blog/content/images/20200630000623-go-to-file.png
  [8]: https://phasereditor2d.com/blog/content/images/20200630000953-zoom-viewer.png
  [9]: https://phasereditor2d.com/blog/content/images/20200630001359-drop-images-upload-files.png