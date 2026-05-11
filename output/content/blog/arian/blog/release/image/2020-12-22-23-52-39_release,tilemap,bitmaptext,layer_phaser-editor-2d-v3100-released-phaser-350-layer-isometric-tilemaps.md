<!--t Phaser Editor 2D v3.10.0 released! Phaser 3.50. Layer. Isometric Tilemaps. t-->
<!--d This release includes the new Phaser 3.50 (the biggest release of Phaser 3). From this version of Phaser, we added support to layers, isometric tilemaps, bitmap-text drop shadows, and more. d-->
<!--tag release,tilemap,bitmaptext,layer tag-->
<!--image https://phasereditor2d.com/blog/content/images/20201222222742-release3.10.1.png image-->

Hi!

A few days ago, the Phaser team published Phaser v3.50, the biggest release of Phaser 3. It includes a lot of new and exciting features. We recommend you to [read the release notes](https://phaser.io/news/2020/12/phaser-350-released).

Today, we are releasing Phaser Editor 2D v3.10.0, to support some of the new features available in the new Phaser, like the new Layer objects and the different orientation of the Tilemaps: Isometric, Staggered, and Hexagonal.

[Download Phaser Editor 2D](https://phasereditor2d.com/downloads)


## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor, 2D please, tell us, we will be proud to feature it in our website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is key in the process of providing a more friendly and stable IDE.

Also, we just opened the [Phaser Editor forum](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/discussions) on GitHub (thanks to the new GitHub Discussions).

## Hello Layer

One of our preferred feature included in Phaser 3.5 is the [Layer](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Layer.html) game object.

Probably, you use "layer of objects" in many of your game levels: the background layer, the platform layers, the controls layer, the enemies layer, the HUD layer... Many of us used the [Container](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html) game object for that. But now, we have a real Layer object.

[Learn more about layers](https://help.phasereditor2d.com/v3/scene-editor/layer-object.html)

### Adding a Layer

Like the other objects in the Scene Editor, you can create a layer by dragging it from the Blocks view into the scene:

![Drop layer to the scene][2]

Also, you can create a layer with an array of selected objects:

![Create a layer with the selected objects][3]

By the way, the context menu now has a **Parent** sub-menu with options to create, flatten, and manipulate layers and containers.

[Learn more about working with parent objects](https://help.phasereditor2d.com/v3/scene-editor/working-with-parent-objects.html)


### Adding objects to a Layer

Like containers, you can move an object to a layer:

* Select the object.
* In the Parent section of the Inspector view, click on the Parent button.
* It shows the Parent dialog. Select the new layer (containers are an option too).
* The objects will be moved to the new parent, preserving the absolute position.

![Moving an object to a parent][4]

### Automatic adding of objects to layers

It is possible to add new objects (from the Blocks view) to a specific layer. To do this, first select the layer, or an object inside the layer, and drop the new object. It will be automatically added to the layer.

### Layer prefabs

Like the containers and the other game objects, you can create a layer prefab. It is great for creating reusable menus, HUDs, dialogs, controls. Probably you have in your games a lot of container-based prefabs that can be transformed into layer prefabs.

## Tilemap

Phaser 3.50.0 introduces new Tilemap features and some API changes.

### Tilemap Layer

In the new Phaser, the `StaticTilemapLayer` and `DynamicTilemapLayer` are not available anymore. Now there is a unique [TilemapLayer](https://photonstorm.github.io/phaser3-docs/Phaser.Tilemaps.TilemapLayer.html) that contains all the features available in the previous implementations.

If you created a tilemap with the Scene Editor, in previous versions of the editor, then re-compile (`Ctrl+Alt+B`) all the scenes to update the code. The scene compiler now will use the new API.

### Tilemap orientation

Phaser 3.50.0 includes support for more Tiled-tilemap orientations: isometric, staggered, hexagonal, and orthogonal.

This means, that now you can load isometric tilemaps into the Scene Editor:

![Isometric and staggered tilemaps][5]

## BitmapText drop shadow

Phaser 3.50.0 added more features to the [BitmapText](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.BitmapText.html) game object. In this version of the editor, we added support for the [drop shadow properties](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.BitmapText.html#setDropShadow__anchor).

Eventually, we should add support for other features, like tinting the characters.

![Bitmap text drop shadow properties][6]

## Other changes:

* Scene thumbnail image generation now uses WEBGL mode, so it creates more accurate images.
* Set origin commands now use `Ctrl+NumpadX` instead `Shift+NumpadX`. It fixes problems with Windows.
* Now running the server in `-dev` mode works when no `-editor` option is provided. You can run `PhaserEditor2D -dev` to disable the caching of the editor's source files, and load the `phaser.js` runtime (not the `phaser.min.js`).
* The Scene Editor validates if the tilemap's tileset is using an external source. External tilesets are not supported by Phaser.
* Now the license file is stored in a user folder (`$HOME/.phasereditor2d/PhaserEditor2D.lic`). It fixes the problem of activating the editor when it is installed in a folder without write permissions.

## What's next

Next is 2021! Happy new year! We will keep working on support more features introduced by Phaser 3.50.0. We also should look into the issues list.

Keep in contact!

Arian



  [2]: https://phasereditor2d.com/blog/content/images/20201222131838-drop-layer-to-scene-12222020.png
  [3]: https://phasereditor2d.com/blog/content/images/20201222132142-create-layer-with-selected-objects-12222020.png
  [4]: https://phasereditor2d.com/blog/content/images/20201222132849-object-parent-dialog-12222020.png
  [5]: https://phasereditor2d.com/blog/content/images/20201222140722-isometric-tilemap-12222020.png
  [6]: https://phasereditor2d.com/blog/content/images/20201222142520-bitmaptext-drop-shadow-properties-12222020.png