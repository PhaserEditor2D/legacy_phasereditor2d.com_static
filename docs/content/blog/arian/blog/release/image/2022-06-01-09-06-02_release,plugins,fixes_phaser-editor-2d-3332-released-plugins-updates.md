<!--t Phaser Editor 2D v3.33.2 released &amp; plugins updates. t-->
<!--d A new version with bug fixes and improvements for better supporting plugins. NinePatch &amp; RoundedRectangle plugins updates. d-->
<!--tag release,plugins,fixes tag-->
<!--image https://phasereditor2d.com/blog/content/images/20220601090539-release3.33.2-20220601.jpeg image-->

Hi!

A new Phaser Editor 2D version is available. This is a minor release, with bug fixes and small changes for better supporting third-party plugins.

At the same time, I'm publishing new versions of the NinePatch and RoundedRectangle plugins.

[Download Phaser Editor 2D v3.33.2](https://phasereditor2d.com/downloads)

## Bug fixes & improvements

* Fixes the Size tool modifiers for objects with different origins.
* Origin tool allows custom origin properties (like in a NinePatchContainer).
* Fixes layout commands for objects with custom origin properties.
* Scene Editor: skips refreshing the whole scene after the paste operation. Fixes the object's loader extensions.
* Fixes tilemap's field code generation.
* Fixes tilemap's layer selection in the scene.
* Exports Tint properties to third-party plugins.
* Adds an Alpha component to the Container game object.
* Avoids browser-caching of plugin resources.

## NinePatch plugin updates

The [phasereditor2d-ninepatch-plugin](https://npmjs.com/package/phasereditor2d-ninepatch-plugin) now has two new game objects: **NinePatchImage** and **NinePatchContainer**.

The **NinePatchImage** implements the NinePatch interface but extends the `Phaser.GameObjects.Image` class. It means, your ninepatch object is a simple image. How does it work? Because the texture of the image is generated dynamically (or taken from the cache) each time you request to redraw the object. This implementation is really fast when you have many ninepatch objects sharing the same texture and properties. It also gets some of the features of images, like tint, and alpha.

The **NinePatchContainer** object implements the NinePatch interface but extends the `Phaser.GameObjects.Container` class. It means, it is a container and the different patches are rendered as images. This implementation is fast and consumes small memory.

[Learn more about the NinePatch plugin](https://github.com/PhaserEditor2D/phasereditor2d-ninepatch-plugin)

## New RoundedRectangleGraphics plugin

I published a new [phasereditor2d-roundedRectangleGraphics-plugin](https://www.npmjs.com/package/phasereditor2d-roundedrectanglegraphics-plugin). It is an improvement of the older [RoundedRectangle plugin](https://www.npmjs.com/package/phasereditor2d-roundedrectangle-plugin), that is now deprecated.

If you are using the old RoundedRectangle plugin, I encourage you to migrate to this new plugin.

This new plugin provides two game objects: RoundedRectangleGraphics and RoundedRectangleImage.

The **RoundedRectangleGraphics** extends the `Phaser.GameObjects.Graphics` class. It provides features like the radius of the four corners, and the offset of the shadow on the four sides. Graphics game objects may be slow on certain devices/browsers. If possible, use the **RoundedRectangleImage** instead.

The **RoundedRectangleImage** implements the same interface of the RoundedRectangleGraphics, but it extends the `Phaser.GameObjects.Image` class. When you call the redraw method, the texture of the image is rendered on the fly or gets a previous texture from the cache. I recommend using this object if you have many rounded rectangles sharing the same properties.

[Learn more about the RoundedRectangleGraphics plugin](https://github.com/PhaserEditor2D/phasereditor2d-roundedRectangleGraphics-plugin)

Keep in contact!

Arian
