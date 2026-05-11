<!--t scene editor t-->
<!--d scene editor d-->

Canvas is a visual (WYSWYG) game level/object editor  for Phaser. With this tool you can create a scene, prefabs, layout sprites and edit object properties like transformation, physics body and animation. The scenes are compiled to Phaser code, in JavaScript or TypeScript.

There are three type of Canvas files: states (compiled to a `Phaser.State` code), sprite prefabs (compiled to`Phaser.Sprite` code) and group prefabs (compiled to`Phaser.Group` code). 

[Watch the video][1]

[Read in Zenva GameDev Academy **Make a Mario-Style Platformer with the Phaser Editor**][2]

![Canvas][3]


Index
------

* [Run the demo](#RunDemo)
* [Create a scene](#CreateScene)
* [Add objects to scene](#AddObjects)
* [Outline window](#Outline)
* [Edit the objects properties](#EditProperties)
* [Arcade physics support](#Arcade)
* [Editor-specific, non Phaser properties](#EditorProperties)
* [Create a group](#CreateGroup)
* [Create different types of objects](#CreateDiffTypes)
 * [Sprite](#CreateSprite)
 * [Tile Sprite](#CreateTile)
 * [Button](#CreateButton)
* [Advanced property editors](#AdvancedProperties)
 * [Tint property editor](#TintEditor)
 * [Frame editor](#FrameEditor)
 * [Animations editor](#AnimationsEditor)
 * [Data editor](#DataEditor)
* [Objects aligment and depth order](#AlignAndOrder)
 * [Aligment](#Align)
 * [Depth order](#Order)
* [Common editing operations](#EditOperations)
* [Removing distractions. The Palette](#RemoveDistractions)
 * [Palette](#Palette)
* [Canvas settings](#Settings)
* [Include the generated code in your game](#GenCode)
 * [Access the objects of the scene](#PublicObj)
 * [Extending the generated code](#ExtendingCode)

<a name="RunDemo"></a>Play with a demo
---------------------------------------------------

To play around with a Canvas demo you can create a project with the **Phaser Example Project** wizard. There you can select any of the templates under the **Phaser Editor Demos** category:

![Canvas demo project][4]


<a name="CreateScene"></a>Create a scene
----------------

Phaser Editor supports three type of scenes: states, sprites and groups. The operation of the three types is very similar, just that them compile a different type of Phaser class.

**Create a State scene**

To create a State scene click in the main menu the `File > New > State File` option, it opens the State File wizard. The first page of that wizard ask for the parent folder and the name of the scene. Usually we like to create a `WebContent/assets/canvas` folder where to place all the scenes and prefabs, but you are free to use any folder inside the `WebContent` one. In the next picture we use `Level` as the name of the scene, that will create a `Level.canvas` file. This is very important, the name of the file will be used to create the name of the state class.

![State wizard file page][5]

If you press **Finish** the state file is created with the default parameters, but we recommend that you press the **Next** button, to do some customization of the scene:

![State wizard settings page][6]

Many of the parameters shown in that page come from the Phaser API, however there are others like the **Base Class Name** or **Code Format** that are used by the scene-to-code compiler.

All these settings can be changed later in the editor configuration tab. 

**Create a Sprite scene (prefab)**

To create a sprite prefab it is similar to how you create a state. In the main menu select the `File > New > Sprite Prefab File` option. It opens a wizard that in its first page ask for the container folder and the name of the file.

Press the **Next** button to set some needed parameters, the most important is the texture of the sprite:

![Sprite prefab wizard][7]

**Create a Group scene (prefab)**

To create a group prefab select in the main menu the `File > New > Group Prefab File` option. It opens a wizard that ask in the first page for the name of the file. You can press the **Finish** button to create the file or press **Next** to customize some options, like the base class name (other than `Phaser.Group`) or the code format (JavaScript or TypeScript).

<a name="StateScene"></a>State scene
------------

A State scene correspond to a `Phaser.State` class.  It means that the whole scene is compiled into a custom class that extends `Phaser.State`.

<a name="SpritePrefab"></a>Sprite prefab (scene)
------------

The sprite scene or sprite prefab is a Canvas file with a unique object that compiles to a `Phaser.Sprite` class. It is the way you can create a custom sprite with the visual editor. This custom sprite or prefab can be added to other scenes, so it is a an important resource when you are creating large games and need reusable objects.

<a name="AddObjects"></a>Add objects to scene
-----------------------

The objects of the scene are created from the assets defined in the asset pack files of your project.

This file is included in some project templates (check the Main Templates section of the New Phaser Project wirzad) but also can be added manually at any moment by the user. 

We recommend you to read the [Asset Manager][8] tutorial to get familiar with the asset pack file.

Let's go step by step:

1. Create (if you don't have yet) an [asset pack file][9] in your project.
2. Add some assets to the pack file.
3. If the [Assets][10] window is not open (it is by default) then open it (press `Ctrl+3` and type `assets`, the select "View - Assets").
4. Open the Canvas file in the scene editor (this is opened when the file is created, or just double click on the `Scene1.canvas` file of the Project Explorer).
5. Drag an asset (eg. an image or atlas frame) from the Assets view into the scene area.

![Drop asset from Assets view][11]

By the way, you can drag assets also from the [Preview][12] window and drop them into the scene, it cause the same effect than if you drag it from the Assets view. If you have open a texture atlas or a spritesheet in the Preview window, then you can select a frame and drop it into the Canvas.

The objects created by dropping an asset in the scene are simple sprites. In the next sections we explain how to add specialized sprites like buttons and tiles. 

<a name="Outline"></a>Outline window
-----------------------------------------------

In the top/left corner of the editor there is the Outline window. It shows the objects of the scene in a tree viewer, so there you can filter, select, delete, group and move the objects of the scene. This is very useful when the scene is huge or you can move objects from one group to other. 

![The Outline shows the scene objects tree][13]

In addition there is the Quick Outline window. It is opened by the user with a key sequence (`Ctrl+O`). The object selected by the user is focused in the scene, so it can be used as a search tool too.

![Quick outline window][14]

###<a name="EditProperties"></a>Edit the objects properties

The list of properties of the scene objects are a subset of the properties provided by the Phaser API. We just try to reproduce how traditionally developers add objects to the world but with a visual and assited apporach.

1. Select the object in the scene (or in the Outline).
2. The objects properties are shown in the Property Grid small window at the left/bottom of the editor.
3. Click on the value of a property and change it. Then press ENTER to apply that change. In case of numeric properties, you can write a math expression like `15*30`, then it is evaluated and the result is set as value.

![Edit sprite property][15]

As you can note, in the top of the grid there is a textbox with "type filter text", it helps to filter the list of properties and find the one of your interest.

A nice feature is that you can hover the mouse over a property and it displays the help of that property. This help is the same of the Phaser API, actually, that help is taken from the Phaser metadata generated by Phaser Editor, by parsing the Phaser sources.

As alternative to the Property Grid, you can open the Quick Edit dialog (by pressing `Q` or clicking in the button of the toolbar). It is actually the same thing of the Property Grid but is whown in a popup dialog.

![Property help][16]

When you change a property it is highlighted with a bold font, and generated in the code in this way:

```javascript
var sprite = this.add.sprite(10, 20, "wall");
sprite.tint = 0xfcfcfc; // modified property
```

There are some properties that can be edited with visual tools, like Arcade physics body size, tile sprite size, object scale, pivot, and anchors.

To edit the transformations of an object, select it and open the context menu, it shows the `Transform` menu, inside there are the options `Scale`, `Rotate` and `Anchor`.

![Object transformations][17]

<a name="Arcade"></a>Arcade physics support
-------------------

To enable Arcade physics on a sprite you have two options:
1. Set `true` the `physicsGroup` property of the parent group. Physics bodies are automatically enabled in objects added to a physics group.
2. Select the object and open the context menu, in the `Arcade` menu there are two commands: `Set Arcade Body - Rectangular` and `- Circular`, both commands enable a physic body (rectangular or circular) in the selected object. Note that when you add a body to a sprite, in the properties editor is shown and can be edited many properties related to the Arcade physics.

If a sprite has a physics body, then the body size can be visually edited by executing the `Edit Body` command of the contxt menu.

![Edit physics properties][18]


<a name="EditorProperties"></a>Editor-specific, non Phaser properties
-------------------

There are special properties that are not directly related to any Phaser API, else these are values provided to improve the Editor usability or to customize some aspects of the generated code. These properties are under the "Editor" section of the Property Grid:

* **name**: Used as var name in the generated code and label in the Outline window.
* **public**: To make public an object in the generated code. By default the objects are not accesible to the outside.
* **pick**: To control when an object can be selected in the scene. Useful when you considere an object is done so you set it not pickable to be sure you are not going to mess it. By default is false.
* **generate**: Set to false if you need to keep the object in the scene but exclude it from the generated code. By default is true.
* **show**: Set to false if you want to hide the object in the scene, but it still visible in the game runtime. Useful when you want to temporarily hide distracting elements from the scene, like background objects.
* **closed**: It only applies to groups. If set to true, the group and children are going to perform like one single object, in operations like selection and dragging. It means, if you pick a child, the group is selected. Yet you can select the children in the Outline window.

<a name="CreateGroup"></a>Create a group
----------------

You can create groups of objects by selecting them and pressing the `G` key, or through the `Group Selection` option of the scene context menu.

![Group selection][19]

In Canvas a group is the same as a group in Phaser (it generates a `Phaser.Group`) and share a subset of properties and functionalities.

In Phaser a group has different roles, like object pooling, transformation unity, layer, proxy to apply changes to a set of sprites, etc... In Canvas we focus mainly on the display role of the group, so you can translate, scale, rotate, bring to forward, etc, a list of objects by joining them in a group.

Here a list of properties and functions related to groups:

* To group a selection of objects press `G` or select Group Selection in the context menu.
* To create an empty group select the Create Empty Group option in the context menu.
* To move objects from one group to other, drag/drop them in the Outline window .
* To break a group select it and press `Shift+G` or select Break Group in the context menu.
* To trim a group select it and press `T` or select the Trim Group option in the context menu. Trim a group means remove the blank space at the left/top of the group. It changes the local group and children positions but keep the same global position. Use it when you like to use a group as a transformation unity and not as a layer or object pool.
* To close a group select it and press `C` or select `Close Group` in the context menu. As we explained before, you may close a group when you want to manipulate the group and the children as a single object. This is not a Phaser concept, else a feature to be used only in design time. To open the group press `Shift+T`.
* A group contains the Display properties: position, scale, rotation and pivot.
* To create a physics group, first create it and then set to true the `physicsGroup` property. A physics group is a regular group but it will automatically set a physics body to all its children.  In addition you can select the `physicsBodyType` and the `physicsSortDirection`.

A group is generated in the following way:

```javascript
var group1 = this.add.group(parent);
```

If it is a physics group then it is generated as:

```javascript
var group1 = this.add.physicsGroup(parent);
```

<a name="CreateDiffTypes"></a>Create different types of objects
-----------------------------------

Canvas supports these type of objects:

* Group
* Sprite
* Tile Sprite
* Button

Groups was covered in the previous section so here we will focus on the rest of the types.

The simple way to add different type of sprites is by opening the Add Sprite dialog. To open this dialog you can press `Ctrl+Shift+A` or click in the toolbar button. As you can see in the picture, you will be able to select the asset  (from the list) and the type of the sprite (from the buttons):

![Add Sprite dialog][20]

### <a name="CreateSprite"></a>Sprite

A sprite is the common object, when you drop an asset into the scene a new sprite is created. The code generated for a sprite is the following:

```javascript
var zombi = this.add.sprite(100, 100, "atlas1", "zombi");
```
 
A sprite can be created from an image, a texture atlas frame or a spritesheet frame.

The properties of a sprite are:

* **Editor properties**: explained in a previous section.
* **Display properties**: it includes position, scale, rotation, and pivot.
* **Sprite properties**: anchor, tint, animations and frameName or (frame in case it is based on a spritesheet).

### <a name="CreateTile"></a>Tile Sprite

A tile sprite in Canvas is the same of a `Phaser.TileSprite`. It is a sprite but adds other "tiling" properties and functions.

To create a tile sprite:

1. Create a sprite by droping an asset into the scene.
2. Select the sprite, open the context menu (right click) and in the submenu Morph To select the Tile Sprite option.

![Morph to Tile Sprite][21]

The properties added by the tile sprite are grouped in the Tile Sprite section of the Property Grid:

* **tilePosition**: the offset position of the image.
* **width** and **height**: the dimensions of the sprite, usually it matches with the width or height of the game bounds. 
* **tileScale**: the scale of the image.

The code generated for a tile sprite is like:

```javascript
var background = this.add.tileSprite(0, 0, 1800, 1800, "atlas1", "wall", parentGroup);
```

### <a name="CreateButton"></a>Button

A button, like in `Phaser.Button` is a sprite with button related properties and functions, like callbacks and state frames.

To create a button is just like the tile sprite, you morph a sprite into a button:

1. Create a sprite by droping an asset into the scene.
2. Select the sprite, open the context menu (right click) and in the submenu Morph To select the Button option.

A button in Canvas supports the next properties, grouped into a Button section of the Property Grid:

* **callback** and **callbackContext**: just like in a Phaser button. Note the text you write in these properties are generated verbatim, so take care of it. An example of callback could be `this.playButtonPressed` and for the callback context `this`. Note that `this` refers to the scene, wich is a custom group.
* **overFrame**, **outFrame**, **downFrame** and **upFrame**: like in Phaser, you set there the name or the index of the frame. To select a frame it opens a Frame Selector dialog. In a next section we talk more about it. In the scene the button always shows the selected **outFrame**. Maybe in a future we can add a "simulate" mode so you can preview how the button performs in run-time.

The code generated for a button is like this:

```javascript
var play = this.game.add.button(200, 0, 'play_btn', this.play, this, 1, 0, 2, 3, this);
```

<a name="AdvancedProperties"></a>Advanced property editors
------------------------------

The majority of the property editors are common text-field based widgets, but there are some properties with a more advanced editors, to assist the user to select well known values.

### <a name="TintEditor"></a>Tint property editor

The `tint` property is present in all the sprite based objects: sprite, tile sprite and button. To edit the value of the tint the editor shows a dialog where the user can select a color. This color dialog is the one provided by the underlaying OS, so the one shown in Windows may differ for the one shown in Linux.

To unset the tint, select the white color.

### <a name="FrameEditor"></a>Frame Editor

The Frame Editor opens a dialog that shows to the user all the frames of a spritesheet or texture atlas. This editor is used in properties like `frameName`, `frame`, `overFrame`, `outFrame` etc...

In case that the frame could be set to null, the dialog shows a Set Null button.

![Frame selector][22]

### <a name="AnimationsEditor"></a>Animations editor

Sprites have the `animations` properties,  represented in Phaser by the `Phaser.AnimationManager`. In Canvas, the `animations` property is generated like this:

```javascript
var dino = this.add.sprite(0, 0, 'dino');
dino.animations.add('walk', [0, 1, 2], 4, true);
```

We provide an Animations editor where you create animations and set the name, fps, kill-on-complete, loop and frames:

![Animations editor][23]

In addition you can mark an animation as "public". For each public animation the editor generates a public field with a references to it. For example, if the **player** sprite has a public **walk** animation, the editor generates a `fPlayer_walk` field that can be used like this: `scene1.fPlayer_walk.play()`.


### <a name="DataEditor"></a>Data editor

The `data` property of the sprites can be used to set custom attributes to the object. To edit that property it opens a dialog where you can write a JSON literal with arbitrary values. In the JSON values you can use the special var `$$`, it will be replaced by the name of the sprite. It is very useful to set relative values.

![Data property editor][24] 

<a name="AlignAndOrder"></a>Objects aligment and depth order
-------------------------------------

Position commands are always a powerful resource to build the layout of scenes. In Canvas we support some basic commands for alignment (left, right, top, bottom, center and middle) and for depth order (rise, rise to top, lower and lower to bottom).

### <a name="Align"></a>Aligment

The alignment commands are avilable in the conext menu and the Canvas toolbar:

![Align commands][25]

The aligment commands are related to the parent group of the target object. If the sprite "head" belongs to the group "dino", and we select the "left" aligment, then the local X position of "dino" will be set to `0`, it means, that it will be at the left border of the group. Note that objects with no parent group set explicity belong to the global scene group.

### <a name="Order"></a>Depth order

Pretty similar to aligment commands there are the order commands. To apply them first you select the target objects and click on the corresponfing toolbar button or context menu option.

The "order" commands send an object back and forward, in the display list of its group.

*NOTE: In Phaser there are some aligment constants and methods, but they are more (we think) about to align an object in runtime. It is a great resource for those who set the game layout "by hand". We are exploring this new features and in future versions of Canvas we can take advantage of it or reuse some concepts, like align in a grid.*

<a name="EditOperations"></a>Common editing operations
-------------------------------------

Canvas support common editing operations like:

* Cut, Copy and Paste of the objects.
* Undo, Redo of all major operations on nodes.
* Zoom in/out/restore. Scroll the wheel of the mouse to zoom in/out, and the Zoom 1:1 button in the toolbar.
* Pan the scene, by hodling the middle mouse button and dragging in any direction.
* Object selection, by clicking it or dragging the mouse and create a selection box.
* Object moving, first you select the objects and then you drag them.


<a name="RemoveDistractions"></a>Removing distractions. The Palette
-----------------------------------

For sure, to design your scene, you will want to get all the space of the screen and put down all un-usefulls windows around.

The default layout in Phaser Editor is a bit charged, it opens the Project Explorer, Chains view, Problems view, Preview view and Assets view, in addition to the editor area.

However, Eclipse (the platform behind Phaser Editor) has a very customizable and flexible layout. You can minimize windows and open them with a quick look, or dock the windows (really they are called "views") in the screen corners or stack them. We encourage you to read the Workbench User Guide bundled in Phaser Editor.

There are two shortcuts to remove all windows around your canvas editor:

1. Dettach the editor and show it as a single and independent window. To do this, drag the editor tab and drop it outside the main window. To restore it just drop it again into the main window. This is a better method when you have multiple monitors so you can open the Canvas editor in a display and the other editors and views in the other display.
2. Double click in the Canvas editor tab, it maximize the editor part and minimize all the views around. So you will get all the space for Canvas while you can at the same time take a fast look to the other views (like Assets and Preview) by pressing their icons.

That's fine, but yet inside the editor you have the Porperty Grid and the Outline windows. You can hide/show them with the "side panel" button of the Canvas toolbar (next to the alignment buttons).

### <a name="Palette"></a>Palette

"Ok, I removed all distractions around the scene window, but how can I add the sprites".

If your Assets window is minimized, you can click on its icon, it opens the Assets in a fast mode, so you can drag the assets and drop them into the scene.

But there is other option. You can open the Palette. In the toolbar there is an icon to open it, next to the "side panel" button.

The Palette is a thin panel docked at the right of the scene. You can drop assets in that panel so they will be there available to be dropped later into the scene, so you don't need to keep open the Assets view:

![Remove distractions][26]

<a name="Settings"></a>Canvas settings
-----------------

To open the general Canvas settings dialog click on the wrench icon in the toolbar.

The dialog shows few settings:

* **Scene width and height**. These values has not impact on the generated code, it is used only for show the "world frame" in the editor. The generated code is just a custom group so the developer is should to set the game size and world bounds in the game code.

* **Scene color**. It sets the canvas "world" background color. This value is not included in the generated code.

* **Snapping**. You can enable snapping and set the X and Y steps of the snapping. This is very useful to create levels with fixed size sprites, because the snapping guarantee that objects are placed in the right positions. The snapping can be toggle with a key sequence: `E`. With the `W` key you can enable the snapping and set the width and height of the selected object.

* **Generate on Save**. If set to true, the code is generated when the user saves the scene. 

![Settings dialog][27]

<a name="GenCode"></a>Include the generated code in your game
---------------------------------------------

A Canvas scene is compiled into a readable JavaScript file, with the same name of the scene file but with the `js` extension. If your scene is named `Scene1.canvas` then it generates `Scene1.js`.

This is an example of the code of a scene with a single "door" sprite:

```javascript
// Generated by Phaser Editor v1.2.0

/**
 * Scene1.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group.
 */
function Scene1(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	var door = this.game.add.sprite(1005, 753, 'atlas1', 'Puerta', this);
	door.anchor.setTo(0.5, 0.0);


	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

```

As you can see, it generates a `Scene1` prototype that extends the `Phaser.Group` prototype, and in the constructor it adds to "this" (the group) the objects of the scene.

Then you can include that code in your game like you add any other custom group in it:

```javascript
function create() {
 var scene = new Scene1(game);
}
```

Note that with Canvas we do not pretend to deal with all the aspects of a game, the developer should write the code to create the game, the states, other objects of the world, etc... Canvas is just an object (group) visual editor.

As you do with any other JavaScript file of your game, you should load the `Scene1.js` by including it in the `index.html` file or by using any other javascript files loading. We prefer to load it as a `script` asset of the [pack file][28].

### <a name="PublicObj"></a>Access the objects of the scene

If you look inside the generated code, the variables used to reference the scene objects are declared local (`var door`), so you can't access, in the code of your game, to the scene objects.

To get access to the scene objects you should explicity set them "public". To do this select the object in the scene and set the "public" property to true, save the file, and the generated code is updated, with a new field `this.fDoor = door;`, in this way you can access to the door object via the `fDoor` field:

```javascript
function create() {
 var scene = new Scene1(game);
 var door = scene.fDoor;
 // do something with the door
}
```

### <a name="ExtendingCode"></a>Extending the generated code

To extend the generated code you can use any JavaScript "extending" pattern like prototype "inheritance", or you can write directly inside the generated file, in certains regions of the file marked as protected.

If you look into the code, there are sections marked by comments like:

```javascript
/* --- post-init-begin --- */

// you can insert code here

/* --- post-init-end --- */
```

Everything you write between the "tags" `/* --- post-init-begin --- */` and `/* --- post-init-end --- */` is preserved at code generation. This is very helpful to fill the gap between the Canvas supported fueatures and the Phaser API. For example, yet Canvas does not support Arcade physics, but you can layout the objects and later modify the generated code and add physics bodies and properties to the objects, by inserting that code in the protected code sections.

In addition you can add methods to the generated group, note there is a line to mark the end of the generated code:

```javascript
/* --- end generated code --- */
```

Below that line you can write your code, it will be preserved from generation to generation. You can add an `update`, `render`, `preRender`, etc... methods to the prototype:

```javascript
/* --- end generated code --- */

Secne1.prototype.render = function () {
 this.debug.body(this.fDoor);
};
``` 

In future versions we can add some customizable settings and TypeScript code generators. As many other elements of Phaser Editor, this scene editor can be used as a complement of the text editor of your choice, as you can see, the generated code is very easy to understand and can be included in any project.


  [1]: https://youtu.be/4pA-NJf_gEE
  [2]: https://gamedevacademy.org/make-a-mario-style-platformer-with-the-phaser-editor/
  [3]: http://phasereditor.boniatillo.com/blog/content/images/20170523160254-Canvas.png
  [4]: http://phasereditor.boniatillo.com/blog/content/images/20170519142035-PhaserProject_Templates.png
  [5]: http://phasereditor.boniatillo.com/blog/content/images/201705240000_NewStateWizard_FilePage.png
  [6]: http://phasereditor.boniatillo.com/blog/content/images/201705240001_SceneWizard_Settings.png
  [7]: http://phasereditor.boniatillo.com/blog/content/images/201705240002_CreateSpritePrefab.png
  [8]: http://phasereditor.boniatillo.com/blog/quick-start/020-asset-pack
  [9]: http://phasereditor.boniatillo.com/blog/quick-start/020-asset-pack
  [10]: http://phasereditor.boniatillo.com/blog/quick-start/020-asset-pack#AssetsView
  [11]: http://phasereditor.boniatillo.com/blog/content/images/20160622103251-DropAssetFromAssetsView.png
  [12]: http://phasereditor.boniatillo.com/blog/quick-start/040-preview-window
  [13]: http://phasereditor.boniatillo.com/blog/content/images/20160622112535-Outline.png
  [14]: http://phasereditor.boniatillo.com/blog/content/images/20160823150134-QuickOutline.png
  [15]: http://phasereditor.boniatillo.com/blog/content/images/20160622110152-EditSpriteProperty.png
  [16]: http://phasereditor.boniatillo.com/blog/content/images/20160622111151-PropertyHelp.png
  [17]: http://phasereditor.boniatillo.com/blog/content/images/20160824152852-Rotate.png
  [18]: http://phasereditor.boniatillo.com/blog/content/images/20160824150120-SetArcadeBody.png
  [19]: http://phasereditor.boniatillo.com/blog/content/images/20160622125705-GroupSelection.png
  [20]: http://phasereditor.boniatillo.com/blog/content/images/20160824110145-AddSpriteDialog.png
  [21]: http://phasereditor.boniatillo.com/blog/content/images/20160622144054-MorphToTileSprite.png
  [22]: http://phasereditor.boniatillo.com/blog/content/images/20160622152841-FrameSelector.png
  [23]: http://phasereditor.boniatillo.com/blog/content/images/20160622160306-AnimationsDialog.png
  [24]: http://phasereditor.boniatillo.com/blog/content/images/20160825152525-DataPropEditor.png
  [25]: http://phasereditor.boniatillo.com/blog/content/images/20160622162725-AlignCommands.png
  [26]: http://phasereditor.boniatillo.com/blog/content/images/20160622171143-RemoveDistractions.png
  [27]: http://phasereditor.boniatillo.com/blog/content/images/20160623101622-SettingsDialog.png
  [28]: http://phasereditor.boniatillo.com/blog/quick-start/020-asset-pack