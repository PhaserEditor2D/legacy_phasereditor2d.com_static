<!--t Phaser Editor 2D v3.15.0 released! t-->
<!--d New Layout tools. Prefab awake event. User properties with custom definition. d-->
<!--tag components,prefab tag-->
<!--image https://phasereditor2d.com/blog/content/images/20210711094734-release-v3.15.0.png image-->

Hi!

I'm happy to announce a new version of Phaser Editor 2D!

This new release provides bug fixes, improvements, and some nice new additions: the new Layout tools, custom-defined properties, and the prefab awake event.

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is very important in the process of providing a more friendly and stable IDE.

## Layout tools

I started working on tools for aligning and distributing objects in the scene. The new layout toolbar provides a set of operations you can apply to the objects:

![Layout toolbar][1]

It is shown by default. You can hide it in the Layout context menu:

![Show/hide layout tools][2]


The Layout menu also shows all the layout operations.

Some operations require setting parameters. It is the case of the Row, Column, and Grid layouts. The parameters are shown on top of the toolbar:

![Layout tools parameters][3]

[Learn more about the Layout tools in the docs](https://help.phasereditor2d.com/v3/scene-editor/layout-tools.html)

## Prefab awake event

If you are using the User Components, probably you are familiar with the `components-awake` event. This new version comes with the `prefab-awake` event.

When you add a prefab instance to the scene, the scene compiler generates the code for making the instance, setting its properties, and now, the code for firing the `prefab-awake` event:

```
class Level extends Phaser.Scene {
...
    create() {
        ...

        // dragon
        const dragon = new Dragon(this, 370, 218);
        this.add.existing(dragon);

        ...

        // dragon (prefab fields)
        dragon.maxSpeed = 300;
        dragon.flameType = "smoke";

        // fires the awake event,
        // after setting all properties
        dragon.emit("prefab-awake");
        ...
    }
...
}
```

This means, that you can listen to the `prefab-awake` event in the prefab class, and perform custom initialization of the prefab, based on the values of the properties.

[You can learn more about it in the docs](https://help.phasereditor2d.com/v3/scene-editor/prefab-user-properties-initializing.html)

## User properties: custom definition

There is another way to perform custom initialization of a prefab instance: with the custom definition of a user property.

User properties can be used in prefabs and User Components. Now, you can check the new **Custom Definition** flag of the property:

![Custom definition flag][4]

If checked, the compiler skips the code generation of the property declaration and enables you to write a custom setter. Look in the next code sample, you can write a **flameType** setter and initialize the prefab's body:

```
class Dragon extends Phaser.GameObjects.Sprite {

    constructor(scene,...) {
        ...
        this.flameType = "fire";
    }

    /* START-USER-CODE */

    set flameType(flameType) {

        // update the body with the flameType

        if (flameType === "fire") {
            this.body.mass = 50;
        }
    }

    /* END-USER-CODE */
}
```

[Learn more about the custom definition of properties in the docs](https://help.phasereditor2d.com/v3/scene-editor/prefab-user-properties-initializing.html#using-properties-with-custom-definition)

## Text word wrap support

Now you can set the wrap width of a Text object:

![Text word wrap][5]

Also, you can enable the advanced mode, for removing all extra spaces between words.

## Other changes

There is a new command for selecting the children of an object: **Select Children**. You can fire it in the **Parent** menu of the context menu or by pressing `N`. As its name says, it selects the children of an object (Container or Layer).

I updated the Webpack project template. It now uses the [Phaser Asset Pack Hashing](https://github.com/PhaserEditor2D/phaser-asset-pack-hashing). This tool parses all the pack files of your project and transforms the URLs to include the content hash of the pointed files. It also parses the multi-atlas files and adds the content hash of the images to the image names.

I updated the Monaco Editor to the latest version.

## Fixes

I fixed some nasty bugs:

* Catches errors of the Monaco Editor preloader.
* [#127](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/127) Fixed: the scroll height is wrong when a section is opened by default.

## What's next?

I keep working on side projects. I'm close to complete them and go over the editor with all the time and energy. In the meantime, the work of the editor continues. We had a lot of activity in our [Discord channel](https://discord.com/invite/4DdpMMD). Many of the features of this release were suggested by users in this channel.

I started working on 9-slices scaling support in the editor. I hope soon to have an alpha version for you to try it! This is a feature many times requested by users and clients.

Next in line is the work on nested prefabs.

Keep in contact!

Arian


  [1]: https://phasereditor2d.com/blog/content/images/20210710112746-layout-toolbar.png
  [2]: https://phasereditor2d.com/blog/content/images/20210710113104-show-hide-layout-tools.png
  [3]: https://phasereditor2d.com/blog/content/images/20210710113351-layout-tools-parameters.png
  [4]: https://phasereditor2d.com/blog/content/images/20210710133825-prefab-user-properties-initializing-custom-prop.png
  [5]: https://phasereditor2d.com/blog/content/images/20210710134658-text-word-wrap.png