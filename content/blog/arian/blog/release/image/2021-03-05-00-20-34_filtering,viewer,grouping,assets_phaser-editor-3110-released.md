<!--t Phaser Editor v3.11.0 released! t-->
<!--d This release brings a lot of new features and bug fixes! d-->
<!--tag filtering,viewer,grouping,assets tag-->
<!--image https://phasereditor2d.com/blog/content/images/20210304195256-go-to-scene-file.png image-->

Hi!

Today I'm releasing v3.11.0 of Phaser Editor 2D!

This version brings a couple of bug fixes and features, like the new assets filtering and grouping.

[Download Phaser Editor 2D v3.11.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell us, and we will be proud to feature it in our website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is very important in the process of providing a more friendly and stable IDE.

## Tab sections in the Blocks view

I introduced a new UI element: the tab sections:

![Tab sections of the Blocks view][1]

A tab section is like a label or sub-tab of a view. You can select one or none. It is a general concept but, in the Blocks view, is used for filtering the content.

In the above image, there is the Blocks view of the Scene Editor. It shows the **Built-in**, **Prefabs**, and **Assets** tab sections. When you select a tab section, the content of the view is filtered and shows only the related elements:

* **Built-in**: it only shows the type of objects you can add to the scene.
* **Prefabs**: it only shows the prefab files you can add to the scene.
* **Assets**: it only shows the assets defined in the Asset Pack files.

Selecting a tab section is entirely optional. I hope it will help you on finding the right blocks quickly.

In future releases, it should allow creating custom tab-sections, using text filters or scopes.

## Assets grouping

Now you can change how the assets are grouped in the Blocks view and certain dialogs. Like in previous versions, the default grouping of the assets is based on the asset's type. With the new changes, you can group the assets by the Asset Pack, or the file location of the asset.

All the grouping options are shown in the context menu of the viewer:

![Grouping options][2]

**Group Assets by Type**

It groups the assets using the type, like Image, Atlas, Prefab:

![Group assets by type][3]

**Group Assets by Asset Pack File**

As you may know, all the assets are imported into the game using an Asset Pack file:

![Grouping assets by pack file][4]

**Group Assets by Location**

This option groups the assets by the parent folder:

![Grouping assets by location][5]

**Grouping assets in the Select Texture dialog**

These options are also available in the Select Texture dialog:

![Select texture dialog assets grouping][6]

## Adding objects to the scene

In the initial release of v3, the editor provided a dialog for adding a new object to the scene. This dialog was replaced by the **Built-in** section in the Blocks view. That was a bad choice since many of you were very familiar with that dialog. So, in this release, I revived it for you. You can open the **Add Object** dialog with the `A` key or with the context menu:

![Add dialog][7]

I also included the **Add Object** context menu. It shows all the built-in types, so you can select the kind of object you want to add:

![Add Object content menu][8]

Also, with the new **Built-in**  tab-section available in the Blocks view, you get the blocks dedicated only for the primitive types:

![Built-in tab section][9]

## Visible property

I added a new command (`V`) to toggle the visible property of the selected objects. Now, if an object is not visible, the Outline view shows it with a "hidden" message:

![Hidden objects in the Outline view][10]

## SVG assets in the Blocks view

I included the SVG assets in the Blocks view of the Scene Editor. SVG support is a bit confusing, you can import it as an SVG asset or as a common image asset. Phaser provides some advantages when you import an SVG image with the SVG method, for example, it allows scaling the image at loading time. This particular feature is not available in the editor yet, but showing the SVG assets in the Blocks view may help some of you, like Glenn Wichman [#110](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/110) (author of the original Rogue?!?!?)

![SVG support in Blocks view][11]

## Changing the object's frame

I included a new command and dialog to change the texture's frame of an object. With the `M` key, you launch the **Select Texture Frame** dialog. It is just like the **Select Texture** dialog, but only shows the frames of the current texture of the object:

![Select Texture Frame dialog][12]

This option is also available in the Texture context menu:

![Replace Texture Frame menu][13]

## Open texture in the Asset Pack Editor

I included a new **Show Texture in Asset Pack Editor** option in the Texture section of the Inspector view. It opens the pack file where the texture is imported:

![Open object's texture in the Asset Pack Editor][14]

This option is also available in the Texture context menu.

## Adding objects to a List

Now you can create a new Object List (a simple array) and add the selected objects to it, with a single click:

![Ad object to new list][15]

## New method for panning the scene

You can pan the scene using the Pan Tool (press the `Space` key to enable/disable it) or holding the middle button of the mouse and dragging it.  Now, also you can pan the scene by holding the `Alt` key and dragging the mouse with the left button pressed. It may help you if a mouse isn't available.

## Shortcut for opening a scene file

The new **Go To Scene** command (`Ctrl+Alt+O`) opens a dialog with all the scene files. You can select one for opening it. The files are grouped by type (**Scene** or **Prefab**), but also you can change the grouping for the file location:

![Go to scene file command][16]

## Opening the external editor

The scene files and component files are compiled into JavaScript code. For example, a `Level.scene` file is compiled into a `Level.js` file. A new command (`Ctrl+Alt+E`) is available to open the output file (`Level.js`) in the configured external editor (VS Code by default). The command is enabled when the Scene Editor or the User Components editor is active.

## Asset Pack Editor

In this version, you can set the scale of the SVG assets. However, it is only useful if you plan to use it outside the Scene Editor. In the future, I should implement the scaling in the Scene Editor:

![SVG asset properties][17]

Now the files shown in the Blocks view of the Asset Pack Editor are grouped by the parent folder:

![Asset Pack Editor blocks grouping][18]

## Viewer filtering

The filtering of the viewers is yet too basic. It looks for substrings of the label of the shown items. This version brings a small improvement: you can write multiple words separated by spaces, and the viewer will match all labels containing all words, in the same order:

![Viewer new filtering][19]

Look the matching characters are underlined.

Concerning viewers,  now all of them have a context menu and a three-dots menu next to the filter text:

![Three dots menu][20]

## Other additions

* [#103](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/103): Close editor's tab with the mouse middle button.
* [#109](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/109): Double click a folder to expand.

## Fixes

* Scene Editor: Change Texture dialog allows selecting a texture with a double-click.
* Scene Editor: `Text.lineSpacing` is ignored in code generation when it has the default value (`0`).
* Scene Editor: keeps the same origin when changing the texture.
* Scene Editor: uses `Array<any>` as type for an empty ObjectList.
* Scene Editor: fixes code generation of the Text's `lineSpacing` property.
* [#112](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/112) Asset Pack: skipping frames from spritesheets.

## What's next?

In the past two months, I collaborated with a local company on making some Phaser-based websites and games. It is a temporal collaboration, and that's great because when I use Phaser Editor 2D in "real projects", I get a lot of feedback from teammates and myself :-). This release has a lot of small changes and fixes requested by you, but also found by me while making the games.

For the next release, the plan is to work on the GitHub issues reported by you, like providing better support for JavaScript modules and 9-slice scaling.

Keep in contact!

Arian


  [1]: https://phasereditor2d.com/blog/content/images/20210304133005-blocks-view-tab-sections.png
  [2]: https://phasereditor2d.com/blog/content/images/20210304134829-grouping-options.png
  [3]: https://phasereditor2d.com/blog/content/images/20210304141106-group-assets-by-type.png
  [4]: https://phasereditor2d.com/blog/content/images/20210304182246-grouping-assets-by-pack-file.png
  [5]: https://phasereditor2d.com/blog/content/images/20210304182426-grouping-assets-by-location.png
  [6]: https://phasereditor2d.com/blog/content/images/20210304182759-select-texture-dialog-grouping.png
  [7]: https://phasereditor2d.com/blog/content/images/20210304183922-add-dialog.png
  [8]: https://phasereditor2d.com/blog/content/images/20210304184123-add-object-context-menu.png
  [9]: https://phasereditor2d.com/blog/content/images/20210304184526-built-in-tab-section.png
  [10]: https://phasereditor2d.com/blog/content/images/20210304190057-hidden-objects-in-outline-view.png
  [11]: https://phasereditor2d.com/blog/content/images/20210304192036-scene-editor-blocks-svg-support.png
  [12]: https://phasereditor2d.com/blog/content/images/20210304192701-select-texture-frame-dialog.png
  [13]: https://phasereditor2d.com/blog/content/images/20210304192845-replace-texture-context-menu.png
  [14]: https://phasereditor2d.com/blog/content/images/20210304193542-texuture-section-open-pack-file.png
  [15]: https://phasereditor2d.com/blog/content/images/20210304194007-add-object-to-new-list.png
  [16]: https://phasereditor2d.com/blog/content/images/20210304195256-go-to-scene-file.png
  [17]: https://phasereditor2d.com/blog/content/images/20210304201206-svg-type.png
  [18]: https://phasereditor2d.com/blog/content/images/20210304201358-asset-pack-editor-blocks.png
  [19]: https://phasereditor2d.com/blog/content/images/20210304204742-viewer-advacing-filtering.png
  [20]: https://phasereditor2d.com/blog/content/images/20210304205113-three-dots-menu.png