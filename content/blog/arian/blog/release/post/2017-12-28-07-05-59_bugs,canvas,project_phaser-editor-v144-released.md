<!--t Phaser Editor v1.4.4 released t-->
<!--d A new minor release of Phaser Editor. d-->
<!--tag bugs,canvas,project tag-->

Hello,

Today we are release the v1.4.4 of Phaser Editor. This is a minor release we did for bug fixes and some small but nice features or changes.

## Bug fixes

* Fixed [#64 Move asset to section refactoring][1] operation.
* Fixed [#63 baseClass of prefab create from selection][2].
* Canvas: repaint Design tab when something is changed on the Configuration tab.
* Canvas: do not do a custom paint of modified properties in the Properties Grid (to look better on GTK).
* Do not force focus on hover, on Preview image based components.
* Better painting  of sprite-sheet previews.


## Canvas

The transformation icons now are blue, like the other icons related to the Canvas objects:

![Transformation icons][3]

The selection box now uses a solid stroke and a shadow, to make it more visible. In addition, it shows the name of the selected object:

![New selection box style][4]

The scale tool now shows a handler in all the directions:

![Scale tools][5]

The Animations dialog allows multiple selection of the frames, so now you can reorder (or delete) a couple of them at the same time:

![Animations dialog: select multiple frames][6]

## Projects wizard

Both Phaser Project and Phaser Example Project wizard now include the options to select the Working Set of the project. A Working Set groups the projects into the Project Explorer so you can filter large workspaces and better focus on a task.

![Select working set][7]

To configure the Working Sets of the Project Explorer click on the `Select Working Set...` menu option:

![Configure Working Sets][8]

We recommend to create Working Sets of type **Resources**.

The Phaser Example Project now uses as default name for the project the name of the selected example:

![Phaser Example Project default name][9]


The Phaser Project templates without assets now uses a text object in the scenes. This makes easier to clear the scenes and start the real ones.

![Hello world scenes][10]




## Go Into

Go Into is a command that creates a frame or scope in the Project Explorer. This allows the user to show only a specific  folder in the Project Explorer. For example, if you are working only n certain levels, you can Go Into the containing folder so you will get quick access to that scenes.

![go Into command][11]


## Preview

Improved the sprite-sheet preview labels. They are yellow now:

![Sprite-sheet preview][12]

The atlas preview shows the frames sorted by names:

![Atlas preview, sorted sprites][13]


We hope this is the last release of 2017 (unless blocking issues forces a new one). We wish a happy new year for all of you! 

If you missed it, read the [Phaser Editor development roadmap for 2018][14].

Arian


  [1]: https://github.com/PhaserEditor2D/PhaserEditor/issues/64
  [2]: https://github.com/PhaserEditor2D/PhaserEditor/issues/63
  [3]: https://phasereditor2d.com/blog/content/images/20171217111010-TransformIconsToolbar.png
  [4]: https://phasereditor2d.com/blog/content/images/20171217140622-NewSelectionBoxStyle.png
  [5]: https://phasereditor2d.com/blog/content/images/20171217140828-ScaleTool.png
  [6]: https://phasereditor2d.com/blog/content/images/20171217141918-Animations-dialog-select-multiple-frames.png
  [7]: https://phasereditor2d.com/blog/content/images/20171217134215-ProjectWizardSelectWorkspace.png
  [8]: https://phasereditor2d.com/blog/content/images/20171217134751-ConfigureWorkingSets.png
  [9]: https://phasereditor2d.com/blog/content/images/20171217141156-PhaserExampleProjectDefaultName.png
  [10]: https://phasereditor2d.com/blog/content/images/20171217140222-HelloWorldScene.png
  [11]: https://phasereditor2d.com/blog/content/images/20171217134525-GoInto.png
  [12]: https://phasereditor2d.com/blog/content/images/20171217135019-SpritesheetPreviewLabels.png
  [13]: https://phasereditor2d.com/blog/content/images/20171217135904-AtlasPreviewSorted.png
  [14]: https://phasereditor2d.com/blog/2017/12/phaser-editor-development-roadmap-for-2018