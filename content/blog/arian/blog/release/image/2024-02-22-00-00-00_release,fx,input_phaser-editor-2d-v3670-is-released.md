<!--t Phaser Editor 2D v3.67.0 is released t-->
<!--d Discover the latest Phaser Editor 2D v3.67.0 update, featuring Shader Effects for game objects, improved numeric input editing for properties, and the latest Phaser 3.80. d-->
<!--tag release,fx,input tag-->
<!--image https://phasereditor2d.com/blog/content/images/20240221173424-3.67.0.jpg image-->

The latest version of Phaser Editor 2D has just rolled out! This release includes an exciting new feature: the Shader Effects! It also adds support to new ways of editing numeric inputs in the properties and the latest version of Phaser, 3.80.0.

[Download Phaser Editor 2D v3.67.0](https://phasereditor2d.com/downloads)

## Shader Effects

Since version 3.60, Phaser has provided a selection of built-in special FX that can be applied to Game Objects and Cameras. Support for applying and manipulating these effects directly from within Phaser Editor has begun, and we're pleased to announce the availability of the first two effects: Glow and Shadow. Keep an eye on the Phaser site for details about further updates.

![The Glow and Shadow effects][2]

### Adding an FX to a Game Object

To add an FX to a Game Object, select the object in the Scene Editor and click the "Add" button in the **FX Shaders** section of the Inspector view:

![Add FX button](/blog/content/images/add-fx-button-20240213.png)

It opens a dialog where you can select the FX to apply:

![Add FX dialog](/blog/content/images/add-fx-dialog-20240213.png)

Or you can add the effects right from the context menu:

![Add FX from the context menu](/blog/content/images/add-fx-context-menu-20240213.png)

Once added, the FX object is selected and the Inspector view shows its properties so you can tweak them:

![Glow FX properties](/blog/content/images/glow-properties-20240213.png)

All effects of a game object are shown as children of the game object in the Outline view. You can select them, edit their properties, change the rendering order, and apply operations like copy/paste or delete.

![FX objects in the Outline view](/blog/content/images/fx-objects-outline-view-20240213.png)

You can assign an FX object to a variable and manipulate it from your scripts. In the **Variable** section, you can change the variable name and scope:

![Variable properties](/blog/content/images/fx-variable-props-20240213.png)

Here is a demo of the code the Scene compiler generates for the FX object.

As part of the `editorCreate()` method, the compiler generates the code to create the FX object and to assign it to a variable:

![Variable declaration](/blog/content/images/editor-create-glow-20240213.png)

In the `create()` method, you can write the code to tween the Glow's strength:

![Variable section](/blog/content/images/fx-variable-create-20240213.png)

Following the same logic, you can declare the Glow effect as a nested prefab and reuse the same effect in different scenes.

[Learn more about the Shader Effects in the Phaser Editor 2D documentation](http://TODO)

## Numeric Inputs

The properties that accept numeric values now have a new way of editing them. Now you can increment/decrement the value by doing this:

- Click on the input, and roll the mouse wheel up and down. 
- Click on the input's label, hold the mouse and drag it to the left and the right. 
- Click on the input and use the arrow keys (Up and Down).

It also applies to the font size input. We hope you like this new feature as much as we do. Many other tools follow this pattern, so probably you are already familiar with it.

<video controls style="width:100%">
  <source src="/blog/content/images/numeric-inputs.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Other changes

* Updates to latest CodeMirror 5.66.16.
* Save all editors when the user executes the Play commands.
* Depth order commands now work with a Mac keyboard with a numeric pad, in its default config.
* Fixes bug with opening multiple context menus.
* The Color Picker control shows a real-time preview of the color.

## Promote your Games and Tutorials

If you have created a game, tutorial, or other content with Phaser Editor 2D and would like us to promote it for free, please get in touch! We can feature it on our website, newsletter, and social channels. Email `arian@phaser.io`.

Keep in contact!

Phaser Studio Team

  [2]: https://phasereditor2d.com/blog/content/images/20240214125544-richard-editor.jpg