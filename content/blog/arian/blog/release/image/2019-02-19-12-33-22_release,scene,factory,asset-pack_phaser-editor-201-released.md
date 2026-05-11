<!--t Phaser Editor 2.0.1 released t-->
<!--d Phaser Editor 2.0.1 released. Scene object factory. Loader sceneFile. Phaser v3.16.2 support. d-->
<!--tag release,scene,factory,asset pack tag-->
<!--image https://phasereditor2d.com/blog/content/images/20190219121007-Release201.png image-->

Hi! Today we are publishing the second version of Phaser Editor v2! We wanted to do more stuff, but, after months of work, the Phaser team released Phaser 3.16. That version of Phaser is huge, with a lot of features and improvements, so we decided to include it in the editor as soon as possible. However, this IDE update arrives with a lot of very useful features, with special mention to the support of game object factories (`Phaser.GameObjects.GameObjectFactory`) in the scene editor and the assets navigation between editors and views.

[Download Phaser Editor v2.0.1](/blog/downloads)

*If you already have a previous version of the editor you can update it in **Help > Check For Updates***.

In this version we open a new path in the editor: the migration to a hybrid UI, with a merge of HTML5 (WebView) and native controls. We did a first tiny step, we replaced the previous LibGDX-based audio player by an HTML5-based player. In the future, we should migrate other more important parts of the IDE, like the Animations editor and the Scene editor, and implement new HTML5/Phaser based editors, like a Particles editor and a Skeletal Animations editor. As we mentioned in other articles, we have two main (and huge) challenges:

* To provide visual editors based on Phaser, so you will see in the game the same you see in the editor.
* To provide an API and platform that enable you to use your HTML5 and Phaser skills to extend important parts of the IDE.

From a technical point of view, we have another important challenge: cross-platform compatibility. The Eclipse WebView uses an embedded Internet Explorer on Windows, and WebKit on macOS and Linux. However, there is a promising third-party project to embed Chromium (CEF) on all platforms, that we plan to include in the next major release. Probably, the best way to interface the WebView-based UI with the native UI is by using WebSocket messages. This architecture has the huge benefits of allowing to open the editors inside a local or remote browser, but that's OK, now is not the right moment to spend energies and time on it.

## Support for Phaser 3.16.2

The Phaser Editor built-in Phaser runtime was updated to its latest version 3.16.2. This means that when you create a new project, this version of Phaser will be included in it. If you have an older project, you can replace the `phaser.js` file manually.

Some new features in Phaser 3.16 did an impact on the editor, like the work made with the events and the new loader Scene File Type (`load.sceneFile(...)`). In the next sections, we talk more about these changes.

The plugins to support the Phaser Official Examples were updated too. We did extra work and removed all the assets that are not used by the examples. That assets cleaning is done by a program, that loads all the examples and "catch" the assets used by the examples, so at the end, all the assets that were not used are removed from the plugins.

A minor change we did in the UI is to show the Phaser and IDE versions in the status bar.


![Phaser and IDE versions](/blog/content/images/PhaserVersionStatusBar.png)

## Jsdoc view update


The Jsdoc view received a nice update. The code used in the documentation is colored with the same colors of the JavaScript editor:

![Documentation code highlighting](/blog/content/images/JsdocViewSyntaxColoring.png)

A new **Emitters** section was added at the end of the documentation of event constants. That section contains all the methods and properties that fires that event. You can press on the links to display the documentation of them. And as usual, you can navigate back and forward in the history, or show the selected member in the other API related views, like Phaser Types, Type Hierarchy, Phaser Files, or open the source code.

![New Emitters section in the docs](/blog/content/images/JsdocViewEventEmitters.png)


In addition, a new **Fires** section was added too, to the documentation of methods or properties that fires events.

![New Events section in the docs](/blog/content/images/JsdocViewEventSection.png)


## Phaser Chains view update

We did a small improvement to the Phaser Chains view query syntax. Now you can use a blank space `" "` as an alias to the `"*"` wildcard.

The Phaser Chains view now shows  Use the space char (" ") as a wildcard. For example, a query to search all the events related to the tween timeline can be written in these two equivalent ways: `tween*event*time` or `tween event time`.


![Chains can use spaces as wildcards](/blog/content/images/ChainsQuerySpaces.png)


## "Show object in its editor" shortcuts

The Properties view of the IDE is connected to the current part (editor or view) to show the properties of the selected object. Some times, the selected object has references to other objects created in other editors. In this release, we added a couple of shortcuts (or buttons) to open an object in its own editor. These shortcuts are:

* Show the asset key in the Asset Pack editor.
* Show the animation key in the Animations editor.
* Show the texture key in the Texture Packer editor.

Here are some screenshots of places where you can find those shortcuts.

In the Texture section of the Properties of the Scene editor, when a sprite is selected:

![Show the object texture in the asset pack editor](/blog/content/images/ShortcutsInSceneEditor.png)


In the Properties sections of an animation selected in the Assets view:

![Show an animation in the asset pack editor](/blog/content/images/ShortcusInAssetsView.png)


## Asset Pack editor


In Phaser 3.16 a new type of file was introduced: the Scene File. Please, do not confuse it with the Phaser Editor `.scene` files. In Phaser, a scene file is a loader method (`this.load.sceneFile(...)`) to load a JavaScript file (like `Level.js`) that contains a class with the code of a scene. It is an evolution of the Script File (`this.load.script(...)`), that allows to load the source file of a scene and automatically add it to the scene manager. You can read more about it here [LoaderPlugin.sceneFile](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.LoaderPlugin.html#sceneFile__anchor).

In this version of the editor, we added support to that type of asset. You can add a Scene File key to the pack in the same way you do with the other types, click on the **plus** icon and select **Scene File (JavaScript)**. It opens a dialog where you can select the JavaScript file. When you select it, a new Scene File key is added. 



![Add a scene file key to the pack.](/blog/content/images/AssetPackAddSceneFile.png)

If that file was generated by a Phaser Editor scene, then a screenshot of that scene is shown as an icon.

![The scene file key](/blog/content/images/AssetPackSceneFile.png)

When Phaser loads the pack, it looks for a class named `Level` (note the key of the scene file and the name of the class should be the same), it creates a new instance of that class and adds it to the Scene Manager. The Scene Manager identifies a scene using a key, that is set by the scene class when it is created. We follow (and encourage you to follow) the convention of assign the same name to the scene class and the scene key.

You are not forced to use the `sceneFile` key to load your scenes. You can load the scenes using a `script` tag in your `index.html` or you can load it as a `script` key in the Asset Pack. However, if you create your levels with the Scene editor, then, the New Scene wizard will add automatically a `sceneFile` key into the pack, so you don't have to open this Asset Pack editor. Before this version, it added a `script` key, but a `sceneFile` is more convenient because it automatically adds the scene to the Scene Manager, so you don't have to write something like `this.scene.add("Level", Level)`.

The templates to create a new Phaser Project were updated to use the `sceneFile` key. Just create a project with the **Flying Dragon** example and take a look.


## Scene editor

The Scene editor received a nice update: bug fixes, some new features requested by the users (especially paid users) and other features that add more flexibility to the editor.
 
### Scene Key parameter

The new `sceneFile` loader method, that we explained before, needs that the scene class set the scene key in its constructor. For this reason, we introduced a new **Scene Key** field in the Compiler section. If you set a value to the Scene Key, then a constructor is generated by the compiler, but if the **Scene Key** value is empty, no constructor is generated.

By default, when you create a new Scene file, the **Scene Key** is set to the name of the file (without the extension).

![The Scene Key parameter](/blog/content/images/SceneEditorSceneKeyParameter.png)

### Methods Context Type parameter

The code generated by the scene compiler uses a `Phaser.GameObjects.GameObjectFactory` to create the objects. However, depending on the context of the `create` method, the  `GameObjectFactory` could be accessed in different ways. There are two possible contexts, a `SCENE` context (default) and an `OBJECT` context. The `SCENE` context means that the methods belong to a `Phaser.Scene` subclass, so, the `GameObjectFactory` is available in the `this.add` property. The `OBJECT` context means that the methods belong to a `Phaser.GameObjects.GameObject` subclass, so, the `GameObjectFactory` is available in the `this.scene.add` property. This allows you to create new types of game objects using the Scene editor. You only need to set the **Methods Context Type** parameter to `OBJECT` and the **Super Class** parameter to the type you want to subclass (i.e: `Phaser.GameObjects.Container`). Or you can enable the **Only Generate Methods** and write the whole class yourself.

Example using the `OBJECT` context:


```
create() {	
	var up = this.scene.add.image(640.5179, 378.75363, 'Objects', 'Button Up');
	up.setScale(0.5, 0.5);
	this.add(up);
	
	var flame = this.scene.add.image(80.0, 378.75363, 'Objects', 'Button Flame');
	flame.setScale(0.40251637, 0.3830197);
	this.add(flame);
	
	var down = this.scene.add.image(739.939, 378.75363, 'Objects', 'Button Down');
	down.setScale(0.5, 0.5);
	this.add(down);	
}
```

### The Game Object Factory parameter

Phaser uses a `GameObjectFactory` instance to create the objects of a scene. By default, there are registered a couple of factories to create images, sprites, bitmap texts, etc... However, you can register other factories. For example, you can register a `dragon` factory and create new dragons in this way: `this.add.dragon(...)`. You can learn more about Phaser factories here: [Industrial Revolution - Phaser Factories Guide](https://phaser.io/phaser3/devlog/130)


In the Scene editor, we added a new parameter called **Factory**, placed in a new **Game Object** section. It allows you to set the name of the `GameObjectFactory` method you want to use to create the object. Now you can write your custom objects and re-use them in different Scene editors, by registering it as a Phaser game object factory. Or it enables you to use factories created by third-party libraries.

![Set object factory](/blog/content/images/SceneEditorFactoryParameter.png)


Note that next to the **Factory** text field there is a menu. That menu provides shortcuts to set values already presents in the scene, and the option to select all objects with the same factory.


![Game object factory menu](/blog/content/images/SceneEditorFactoryParameterMenu.png)

We should write a mini tutorial about object factories in the next days.

It is important to highlight that this is an alternative technique to create reusable objects in Phaser Editor. Yet is missing the implementation of the powerful Prefab concept already present in Phaser Editor v1.

### The Game Object Data (user custom parameters)

Phaser 3 has an API (`Phaser.Data.DataManager`) to add user data to game objects. Basically, it allows you to attach key/value data to objects and register data change event listeners. You can learn more about it here.

In this update of the editor we implemented the **Data** parameter, that is placed in the **Game Object** section. To add new key/value data, you can press the **plus** icon and write the name of the new key:


![Game object add key/value data](/blog/content/images/SceneEditorSetData.png)

If you added key/value data to other objects in the scene, then when you click the **plus** icon a menu is shown with shortcuts to add those pre-defined keys. 

![Game object data: add an existant key](/blog/content/images/SceneEditorSetData_AddPredefinedKey.png)


All keys are listed below the **Data** parameter. Next to the key name is placed a text field with the value. The value is verbatim written in the generated code. It means, if you want to set a string value you should write it as a literal (`'My string value'`). This allows you to use constants or any expression as the value.

Each key/value pair is placed in a row. At the end of the row, there is a menu with options to delete the data or select objects with the same data or the same key.

![Game object data: key/value menu](/blog/content/images/SceneEditorSetData_RowMenu.png)


### Other Scene editor changes

* [#94](https://github.com/PhaserEditor2D/PhaserEditor/issues/94): Keep pressed space bar to drag the scene.
* [#93](https://github.com/PhaserEditor2D/PhaserEditor/issues/93): Global preferences for scene size.
* [#98](https://github.com/PhaserEditor2D/PhaserEditor/issues/98): Command (`Ctrl+D`) to duplicate an object.
* [#101](https://github.com/PhaserEditor2D/PhaserEditor/issues/98): Allow JavaScript expressions in number fields.
* [#96](https://github.com/PhaserEditor2D/PhaserEditor/issues/98): **Visible** and **Active** parameters.
* Change the texture of an object by double-clicking on it.
* Change the animation of a sprite by double-clicking on it.


## Texture packer

We fixed some issues with the Texture Packer:

* Fixed drop files in macOS.
* Fixed bug when load an atlas created in other PC (remove absolute references to input files).

The Texture Packer editor is the oldest piece of the IDE. It really needs a complete re-write. From time to time we discover a bug caused because we do not have full control of the packing algorithm. This Texture Packer editor is based on the LibGDX texture packer tool, it works great, but we have to parse the output file and use temporal files. Anyway, an editor needs certain features that are not present in a "command line tool", as the use of in-memory images or algorithm tweaks. At a certain point in the future, we should get the code of this LibGDX tool and adapt it better to Phaser Editor.


## Animations editor

Fixed a bug when a single image key is added to the animation.

## Refactorings

There is a lot to do in terms of refactorings. In this update we implemented the operations to be performed when you rename or move a file:

* Move/rename a file that is referenced by any Asset Pack key: it updates the related parameter with the new URL.
* Move/rename a Scene file: it renames/moves the compiled JavaScript file.
* Move/rename a Texture Packer file: it renames/moves the generated atlas `JSON` and the packed textures.

## Update to the Free edition limits

As you may know, Phaser Editor has two editions or modes: Free and Premium. The Free mode provides all the features present in the IDE, but it puts some limits on the number of assets you can use. In this update, we changed those limits to:

* 10 images keys in the Asset Pack.
* 3 atlas textures in the Asset Pack. Multi-atlas counts for all the textures it maps.
* 5 tilemaps keys.
* 5 scene (`.scene`) files.

This limits may change again when the Prefabs are ready. The Prefabs are "small" scene files so we should allow using 15 scenes files, like in Phaser Editor v1.

You can see these limits if you hold the mouse in the Phaser Editor label in the status bar:

![Free edition limits](/blog/content/images/FreeLimitsTooltip.png)


## Other updates

* Synchronize an editor and its file if the file's content is modified by another editor in the IDE, or outside the IDE, for example, after a Git merge or update.
* The Audio Sprite editor is deprecated. We never get issues or feedback about this editor, so we think it is not used too much. Of course, you will be able to add audio sprites (made by other tools) to the Asset Pack editor.
* As we mentioned in the introduction, we replaced the LibGDX-based audio player by an HTML5-based audio player.
* [#97](https://github.com/PhaserEditor2D/PhaserEditor/issues/97): Fix bug when the user data folder is a soft link.


## What's next?

This is our current plan.

In all versions:

* Keep updating to the latest Phaser version.
* Keep fixing bugs reported by users.  
* Keep adding features requested by paid users.

In `2.0.2`:

* A mini tutorial about factories and custom data.
* Implement a new Layer concept in the Scene editor.

P.S. The way Phaser Containers work is going to be changed by the Phaser team, so we are not going to work on this until it is ready.

In `2.0.3`:

* A Particles editor made with Phaser, using a WebView. These are things we can do to get some experience merging the two worlds, Eclipse and HTML5. The final goal is to migrate the Scene editor's renderer to an HTML5/Phaser implementation.
* Yes, we should start writing the Phaser Editor v2 documentation.


<br>

Best Regards,

Arian