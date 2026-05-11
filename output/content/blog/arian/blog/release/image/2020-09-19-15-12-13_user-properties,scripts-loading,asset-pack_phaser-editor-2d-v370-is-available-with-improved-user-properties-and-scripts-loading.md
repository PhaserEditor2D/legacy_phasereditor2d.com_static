<!--t Phaser Editor 2D v3.7.0 is available, with improved user properties and scripts loading. t-->
<!--d Powering user properties and scripts loading. A couple of bug fixes and small improvements. d-->
<!--tag user properties,scripts loading,asset pack tag-->
<!--image https://phasereditor2d.com/blog/content/images/20200918151101-v3.7.0-release.png image-->

[(Sep 22, 2020: Hotfix v3.7.1 is released)](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/releases/tag/v3.7.1)

Hi!

A new version of Phaser Editor 2D is available for download!

[Get Phaser Editor 2D v3.7.0](https://phasereditor2d.com/downloads)

There are some interesting changes in this release. We increased the number of types supported by the user properties (i.e. the Animation Key Type). We added better support for loading the game scripts and we fixed several issues reported by the community.

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is key in the process of providing a more friendly and stable IDE.

## New User Property Types

[User properties](https://help.phasereditor2d.com/v3/scene-editor/prefab-user-properties.html) are used by the [prefabs](https://help.phasereditor2d.com/v3/scene-editor/prefabs.html) and the [user components](https://help.phasereditor2d.com/v3/scene-editor/user-components.html). The main advantage is that you can extend the game objects with custom properties that are shown in the Inspector. This means, that you can change the behavior of game objects straight in the Scene Editor.

Until now, you were able to create user properties with basic types like **Number** and **String**. However, in this new version of the editor, we added other types of properties to assist you in setting the right values.

We are talking about Asset related properties:

![Adding the new Asset related properties][1]

### Texture Config property

The [Texture Config type](https://help.phasereditor2d.com/v3/scene-editor/prefab-user-properties.html#texture-config-property-type) allows setting a texture configuration as value.

Let's say you created a **Checkbox** component to provides a checkbox-button behavior to a game object. The behavior is simple, when the object is pressed, it shows a texture with a checked appearance. When the object is released, it shows a texture that indicates the button is unchecked. To do this, we create the **checkedTexture** and the **uncheckedTexture**, both of type **Texture Config**.

When a property is of type **Texture Config**, its field-editor shows a button to open a Select Texture dialog: 

![the Select Texture dialog][2]

When you select a texture in this dialog (an image, an atlas or sprite-sheet frame) the property is set to its configuration:

```
this.checkedTexture = {key:"buttons", "frame":"red-button-checked"}
```

This allows the user component to get that information and set the right texture into the object:

```
this.gameObject.setTexture(this.checkedTexture.key, this.checkedTexture.frame);
```

We encourage you to take a look at the [One day in the beach demo](https://github.com/PhaserEditor2D/one-day-in-the-beach-demo-button-components) we did. The checkbox-behavior of the Sound and Music buttons are implemented that way. It is also available as a project template in the [Play Phaser Editor 2D](https://play.phasereditor2d.com) service.

### Animation Key property

This type of property is just like a String property, but it shows a button that opens a dialog to select one animation key between all the animations defined in the Asset Pack file.

[Learn more about the Animation Key properties](https://help.phasereditor2d.com/v3/scene-editor/prefab-user-properties.html#asset-key-property-type)

![Animation key property type][3]

### Audio Key property

Very similar to the Animation Key property, but it shows a dialog to select one of the audio keys defined in the Asset Pack file.

![Audio Key property][4]

### Asset Key property

This is a general type of property that shows a dialog with all the keys defined in the Asset Pack files of the projects:

![Asset Key property][5]

## Changing the type of a user property

Maybe you are working on a project that uses user properties in prefabs or components. However, maybe one of the new property types introduced in this version fits more for some of the properties. In that case, you can convert the properties to the new type:

![Changing the type of a user property][6]

## Loading of multiple scripts, with order

[#79](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/79)

In Phaser, like in any other web project, there are many ways to load the scripts. Maybe the more common style is to load the scripts with a `script` tag in the `index.html` file. Other users prefer to use third-party tools like Webpack or Parcel.

However, Phaser provides a way to load the scripts in the same way you load any other game asset. This has the advantage that you can add the scripts of your game to an Asset Pack file and use the Asset Pack Editor. It also is useful if you have a lot of scripts (like compiled levels or prefabs), and you want to load them by demand or show the progress of the loading. 

Until now, you were able to do this by adding **Script** files to an Asset Pack file. This has the inconvenience that the scripts are executed in any order, and it creates problems when one script depends on another script that is not loaded or executed yet.

To fix this, in Phaser there is the **Scripts** file type (note **Script** != **Scripts**). It allows you to load a couple of scripts but execute them in the specified order. For example, if you have a prefab variant **B** that extends a prefab **A**, then you can load them using the **Scripts** method and placing **A** before **B**:

![Loading the scripts in order][7]

## Other changes and fixes

* Animations Editor: better handing of errors like "missing assets".
* Scene Editor: does not sort the content of the Add Object dialog.
* Viewer: increase the max number of spritesheet frames shown in a viewer (to 1000).
* Viewer: ignore the mouse-up event if it was originated outside the viewer.
* [#80](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/80) Compatibility: in macOS, the `Command` and `Ctrl` keys are handled as the same key.
* Compatibility: the Delete command is mapped to the `Backspace` key (in addition to the `Delete` one). It is more friendly for macOS users.
* Code editor: when is active, the `Ctrl+P` shortcut opens the Go To File dialog and not the printing dialog.
* Fixed: Scene Editor captures the key commands even if a dialog is open.

## What's next

This release was all about fixing bugs or adding new features. All reported by you. For us, your feedback is extremely important and has a high priority.

Like we commented in the previous release, our next big task is to add support for tilemaps in the Scene Editor. We are not going to implement a tilemap editor (not for now), else we are going to allow you to import a third-party map into a scene. A third-party map supported by Phaser, like those created by Tiled.

By the way, **SuperTommy**, from [Ourcade](https://ourcade.co/) (a website full of updated Phaser courses, tutorials, and videos), is cooking something related to the editor... That's such exciting!

(We are following them at [@OurcadeHQ](https://twitter.com/OurcadeHQ))

Keep in contact!

Arian

[Learn more about the scripts loading](https://help.phasereditor2d.com/v3/asset-pack-editor/import-scripts.html#execution-order-of-the-scripts)

  [1]: https://phasereditor2d.com/blog/content/images/20200918230357-adding-asset-related-properties.png
  [2]: https://phasereditor2d.com/blog/content/images/20200918232440-texture-config-property-open-dialog.png
  [3]: https://phasereditor2d.com/blog/content/images/20200918233643-animation-key-property.png
  [4]: https://phasereditor2d.com/blog/content/images/20200918234222-audio-key-property.png
  [5]: https://phasereditor2d.com/blog/content/images/20200918234623-asset-key-property.png
  [6]: https://phasereditor2d.com/blog/content/images/20200918235609-change-property-type.png
  [7]: https://phasereditor2d.com/blog/content/images/20200919000945-load-scripts-in-order.png