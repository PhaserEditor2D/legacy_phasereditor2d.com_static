<!--t Phaser Editor 2D v3.33.0 released! t-->
<!--d Marketplace integration. New user property types. Apple Silicon support. macOS/Safari/Magic Mouse usability boost. A lot of bug fixes. d-->
<!--tag release,marketplace,macos,safari,touchpad,bugs tag-->
<!--image https://phasereditor2d.com/blog/content/images/20220415154715-release%203.33.0.jpg image-->

Hi!

A new version of the editor is ready! And this one is important. A lot of bug fixes. Some nice improvements, especially for the macOS/Safari combo. Native support for Apple M1. New features, like the new Scene Key and Object Reference user property types. And... the integration of Phaser Editor 2D All in One with the Phaser Editor 2D Marketplace!

[Download Phaser Editor 2D v3.33.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### [Tutorial] Introducción a Phaser Editor, sin cortes!

A new tutorial from [Weveana](https://www.weveana.com) (in Spanish)!:

> Como hacer un prefab en Phaser Editor y hacerlo saltar con el click del mouse. En este tutorial podrás entender como agregar un asset gráfico y convertirlo en prefab, ponerle un BODY y hacerlo saltar con el click del mouse, sencillo y sin editar para que veas donde me equivoco también y entender cómo solucionar los distintos problemas con los que te puedes encontrar realizando este primer ejercicio con el editor.

[Watch it on YouTube](https://www.youtube.com/watch?v=yMbWR5idZg0)

They have more introductory videos about Phaser & Phaser Editor 2D game development listed in the channel.

## Collaboration

A lot is happening on our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is very important in the process of providing a more friendly and stable IDE.

## Phaser Editor 2D All in One & the Marketplace

Finally, I'm completing the first group of features about the [Phaser Editor 2D Marketplace](https://marketplace.phasereditor2d.com)!

In this release, the Phaser Editor 2D desktop edition (aka All in One) connects to the Marketplace and shows you the Starters templates & Example templates. So you can create a project based on those templates right away.

Now, when you click on the New Project button, it shows a page with the built-in templates. These templates are included in the software and are available offline.

![Built-in project templates][1]

If you click on the **Get more from the Marketplace** link, it shows you a page with all the marketplace templates:

![Marketplace templates][2]

Each marketplace template shows the author. The marketplace is open to the community and you can contribute to it. Would you like to add content to the marketplace? I can help you. It is fully open source: [github.com/PhaserEditor2D/PhaserEditor2D-marketplace](https://github.com/PhaserEditor2D/PhaserEditor2D-marketplace)

If you are a previous user of the editor, you can see the examples are not available as built-in templates. I moved them to the marketplace and you need an Internet connection for getting them.

However, the marketplace templates are downloaded and cached to your local machine. You can find that cache in the `~/.phasereditor2d/all-in-one/cache/` location.

The bigger template has 3MB, so if you have a slow connection it can take a while for downloading it the first time.

By the way, you can download the whole marketplace and run it locally. Just create the `$PHASEREDITOR_MARKETPLACE_URL` environment variable and set it to the new marketplace URL:

```
export PHASEREDITOR_MARKETPLACE_URL=http://localhost:8080
```

I should write a tutorial about this. Did I mention you can add your content to the Phaser Editor 2D Marketplace? It is open to all of the community.

I should add some extra templates soon, for closing this marketplace task and focus on other new & bigger features.

## Scene Key user property type

We have now a new Scene Key user property type. As you may know, you can create custom objects (prefabs) and behaviors (user components), and define custom properties. In this release, I added a couple of new types of user properties.

This is the case of the Scene Key property type. Its primitive type is a String, which is a scene's key. But it also provides a button for selecting one of the project's scenes:

![Scene Key user property type][3]

This user property type is very handy for making behaviors including scene switching.

[Learn more in the documentation](https://help.phasereditor2d.com/v3/scene-editor/prefab-user-properties-scene-key-type.html)

## Object Variable user property type

How are you making associations between objects in the scene? The new Object Variable property type is for it!

It is common to create behaviors that require a reference to different objects in the scene. For example, you have a jump button and you want to associate it with a player object. A possible solution may be to create a **PlayerButton** user component, with a **player** property, pointing to the player object in the scene.

Until now, it was possible to do this using the [Expression property type], which is a general-purpose type. But now, you can use the new Object Variable property type!

It is pretty similar to the Expression property type, but it also provides a button for selecting an object in the scene.

You define it like this:

![Define Object Variable property][4]

Look the Expression Type is `Phaser.GameObject.Sprite`. Youn can write there any other Phaser or user type.

Then, when you add that behavior to the button, you can select the player object and set it as a value:

![Object Variable property: select object][5]

The value set to the property is a string, which is the name of the variable referencing the object. It is code-generated verbatim:

![Object variable generated code][6]

[Learn more in the documentation](https://help.phasereditor2d.com/v3/scene-editor/prefab-user-properties-object-variable-type.html)

## Color user property type

[#181](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/181) Scene Editor: supports new Color user property type.

The new Color user property type allows you to select a color from a color dialog. The color value is set as a hex string. You can convert it to a different format using the methods of the `Phaser.Display.Color` class.

![Color user property type][7]

[Learn more in the documentation](https://help.phasereditor2d.com/v3/scene-editor/prefab-user-properties-color-type.html)

## Game Object Name parameter

[#195](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/195) The new GO Name parameter.

Phaser API provides a [GameObject#name](https://newdocs.phaser.io/docs/3.55.2/Phaser.GameObjects.GameObject#name) property that is not used by the API but is let to the user for using it as a metadata field. In Phaser Editor 2D, adding metadata is a matter of the user components. If you need to set a name to an object, you can create a **Name** user component. However, having this `name` property available in the Scene Editor is an old request from the editor's users. So, I listen to you :)

In the Scene Editor, each object has a variable name. Now, if you enable the **GO Name** flag, the scene compiler will generate the `name` property and will use the variable name as a value:

![Game Object name parameter][8]

[Learn more in the documentation](https://help.phasereditor2d.com/v3/scene-editor/variable-properties.html#game-object-name-property)

## Paste in place

[#144](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/144) Scene Editor: allows paste in place.

Now you can paste objects in the scene but at the same original position. Select that option in the Scene Editor's context menu, in the Edit section. Or you can type `Ctrl+Shift+V`.

## Launching Visual Studio Code as an external editor in macOS

[#182](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/182) macOS error: exec: "code": Executable file not found in $PATH.

Now, opening Visual Studio Code from Phaser Editor 2D doesn't need extra configuration in macOS. The `flags.txt` configuration uses the default VS Code path: 

```
# Configure as external editor the default location of VS Code
-external-editor-command
/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code "$LOC"
```

## Apple M1 chip native support

A bit late, but finally it is here. Importing hardware from Cuba is a nightmare, and in the middle of the pandemic, a proof of patience. 

If you are running an Apple M1 powered device, then you can download the binaries:

* `PhaserEditor2D-allInOne-X.Y.Z-macos_arm.zip`
* `PhaserEditor2D-core-X.Y.Z-macos_arm.zip`

Please, if you have any issues, contact me.

## Other changes

* Scene Editor: removes the Details sub-tab from the Inspector view.
* Scene Editor: the Reset Zoom button restores the zoom and position (0, 0) of the camera. 
* [#149](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/149) Renames children when pasting a container. Fixes trimming of numbering in new names.
* Computes hashcode for every CSS/JS file loaded in `index.html`. It generates unique URLs for skipping the cache of modified files.
* Phaser Editor 2D All in One: allows an alternative editor's exec path from `$PHASEREDITOR_ALLINONE_EDITOR.`. Useful for making using a different version of the editor.
* Update Core server to Go 1.18.

## Bug fixes

* Scene Editor: fixes TileSprite hit area computation in CANVAS mode. A workaround Phaser's bug in RenderTexture.shapnshotPixel method.
* Scene Editor: fixes the scene thumbnail maker. Invisible containers/layers are not included in the thumbnail.
* Scene Editor: fixes viewer rendering of objects with 0 width/height. Like a Text game object with a `""` value.
* Scene Editor: fixes picking of objects under hidden parents.
* Scene Editor: fixes ordering of objects when moving to a new parent.
* Scene Editor: prevents scrolling the whole page on macOS with scrolling inertia enabled.
* Scene Editor: fixes panning with ALT key when the pointer is close to the Translate tool handlers.
* Scene Editor: fixes selection changed when panning with the ALT key.
* Scene Editor: fixes command for opening a scene file in macOS (⌘+⌥+O).
* [#200](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/200) BitmapText aligned cause NaN position.
* Scene Editor: fixes Text Content's textarea parameter in Inspector view.
* Scene Editor: adjusts the loading message position to the DPR.
* Scene Editor: adds missing `light/bitmapfont-type@2x.png` icon.
* [#29](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/29) Fixes drag & drop image in Safari.
* Workbench: prevents Safari to include the address bar in the tab/focus order.
* [#185](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/185) Allows uploading files with more than 10MB using the Upload dialog.
* Editor tab label: fixes cursor type in Safari.
* Fixes cell size of viewers in displays with DPR > 1.
* Skip scanning plugins in `.git` & `.DS_Store` folders.

## What is next?

In the past year, [I decided to do some client work](https://phasereditor2d.com/blog/2021/01/new-licenses-prices-and-the-backers-program), for two reasons: for increasing my income & for getting some experience making professional games. In a certain way, I did it. I was rejected in so many interviews for game development positions. Yes, making tools is not the same as making games. But finally, I collaborated with a team for making a game (or an app with gamification) for kids. It was a very nice experience, especially because I built everything with Phaser and Phaser Editor 2D :) At the same time, the editor got some new enterprise clients, and it added stability to my income. The thing is that now I'm in a position where I can dedicate more time to the editor. No more client work for a while! Yet, I want to make some games of my own. I have some ideas I want to try.

So, the good news is I will have a lot more time for the editor. I think this release is proof of that, right?

For the next release, I want to add a bit more content to the marketplace, maybe a CapacitorJS template, or a template about Facebook Instant Games. Hey! You tell me, what kind of templates would you like to get in the marketplace?

But there is something I want to work harder on. A new Script game object. User components and prefabs are powerful, but they are attached to a single object, and sometimes you need to create independent behaviors or create more complex relationships between behaviors & objects. As soon as I get it more clear, I will write a post about it.

Keep in contact!

Arian 

  [1]: https://phasereditor2d.com/blog/content/images/20220416044926-built-in-templates.jpg
  [2]: https://phasereditor2d.com/blog/content/images/20220416045057-marketplace-templates.jpg
  [3]: https://phasereditor2d.com/blog/content/images/20220416052832-prefab-user-props-scene-key-20220409.jpg
  [4]: https://phasereditor2d.com/blog/content/images/20220416060154-define-object-variable-prop-20220416.jpeg
  [5]: https://phasereditor2d.com/blog/content/images/20220416060738-object-variable-type-select-object.jpeg
  [6]: https://phasereditor2d.com/blog/content/images/20220416061321-object-variable-property-code.jpeg
  [7]: https://phasereditor2d.com/blog/content/images/20220416061938-prefab-user-props-color-type-20220409.jpeg
  [8]: https://phasereditor2d.com/blog/content/images/20220416144541-go-name-parameter.png