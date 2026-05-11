<!--t Phaser Editor 2D v3.33.1 released t-->
<!--d A new version with bug fixes and some minor features. d-->
<!--tag bug fixes,user properties tag-->
<!--image https://phasereditor2d.com/blog/content/images/20220510080437-release-3331.jpeg image-->

Hi!

Today we are releasing Phaser Editor 2D v3.33.1.

This is a small release with a few bug fixes and minor features.

[Download Phaser Editor 2D v3.33.1](https://phasereditor2d.com/downloads)

## New project templates

Now we have a project template for wrapping your HTML5 game with a native app. For now, it is configured for generating an Android APK, but you can add other targets like iOS. It uses the [CapacitorJS framework](http://capacitorjs.com).

Also, I added a project template with a plugin for loading custom web fonts in the editor. It helps you on using custom web fonts in your game and the editor at the same time.

Both templates are listed in the All-in-One new project wizard, but you can get them from the 
[Phaser Editor 2D Marketplace](https://marketplace.phasereditor2d.com) too.

## New features

### The new Object Constructor user property type

 [#212](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/212) The new Object Constructor user property type.

Added a new Object Constructor user property type. It opens a dialog for selecting a built-in or prefab type. You can use it to reference a constructor that you can use later to dynamically create objects. For example, a `bulletType` property may reference the type of bullet of a gun object.

![object constructor property](https://help-v3.phasereditor2d.com/_images/prefab-user-props-object-ctr-20220427.webp)

[Learn more about the Object Constructor type](https://help-v3.phasereditor2d.com/scene-editor/prefab-user-properties-object-constructor-type.html)

### All-in-One marketplace integration improvements

With the All-in-One version of the editor, you can create a project based on a template or example hosted in the [Phaser Editor 2D marketplace](https://marketplace.phasereditor2d.com). In this version, all the content (template files & template info) is locally cached. All cached content is in the `~/.phasereditor2d/all-in-one/cache` folder.

## Bug fixes

* [#210](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/210) Missing Variable Pane. Removes everything related to the Inspector view sections.
* [#216](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/216) No Textures are Available to Select from the Select Texture Window When Using Components.



Keep in contact!

Arian
