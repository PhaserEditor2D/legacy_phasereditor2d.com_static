<!--t Phaser Editor 2D v3.66.0 released t-->
<!--d Improving script node presentation. Adding new script node libraries. A demo game all made with nodes. d-->
<!--tag script node,library,formatting tag-->
<!--image https://phasereditor2d.com/blog/content/images/20240110034207-phaser-editor-366.jpg image-->

The latest version of Phaser Editor 2D has just rolled out! This version coincides with the release of Phaser v3.80 and has been updated to fully support it. It also adds a new way to visually edit Phaser FX along with improvements to the numeric properties fields.

[Download Phaser Editor 2D v3.67.0](https://phasereditor2d.com/downloads)

## Special FX

Since version 3.60, Phaser has included a selection of built-in special FX. These effects, such as Glows, Blurs and Shines, can be applied to all Game Objects and Cameras, as well as being stacked on-top of each other. In this release of Phaser Editor 2D, we have added support for applying and manipulating these effects directly from within the editor. The first two effects to be supported are Glow and Shadow, with more to follow in future updates.

![The Glow and Shadow FX][2]

### Adding an FX to a Game Object

To add an FX to a Game Object, select the object in the Scene Editor and click the "Add" button in the **FX Shaders** section of the Inspector view:

![Add FX button](/blog/content/images/add-fx-button-20240213.png)

This opens a dialog where you can select the FX to apply:

![Add FX dialog](/blog/content/images/add-fx-dialog-20240213.png)

Or, you can add the effects right from the context menu:

![Add FX from the context menu](/blog/content/images/add-fx-context-menu-20240213.png)

Once added, the Inspector view will show all the properties of that specific effect and allow you to modify them:

![Glow FX properties](/blog/content/images/glow-properties-20240213.png)

You can easily see which effects have been applied to a Game Object, by looking in the Outline View. They will be nested beneath the Game Object they are applied to. Clicking them allows you to select them, edit their properties, change the rendering order, and apply operations like copy/paste or delete.

![FX objects in the Outline view](/blog/content/images/fx-objects-outline-view-20240213.png)

You can assign an FX object to a variable and manipulate it from your scripts. In the **Variable** section, you can change the variable name and scope:

![Variable properties](/blog/content/images/fx-variable-props-20240213.png)

Here is a demo of the code the Scene compiler generates for the FX object.

As part of the `editorCreate()` method, the compiler generates the code to create the FX object and to assign it to a variable:

![Variable declaration](/blog/content/images/editor-create-glow-20240213.png)

For example, here in the `create()` method, you can see some code to tween the strength of the Glow effect over time:

![Variable section](/blog/content/images/fx-variable-create-20240213.png)

Following the same logic, you can declare the Glow effect as a nested prefab and reuse the same effect across different Scenes.

[Learn more about the Shader Effects in the Phaser Editor 2D documentation](https://help-v3.phasereditor2d.com/scene-editor/shader-effects.html)

## Numeric Inputs

All properties in the editor that accept numeric values now have a new way of editing them. To increment or decrement the value in the input, you can:

- Click on the input, and scroll the mouse wheel up and down.
- Click on the label for the input, hold the mouse button down and drag it left and right.
- Click on the input and press the Up and Down arrow keys.

By using these methods, you can quickly and easily change the value of the input without even typing.

This also applies to the font size input. We hope you like this new feature as much as we do. Many other tools use this input pattern, so you may be familiar with it already.

<video controls style="width:100%">
  <source src="/blog/content/images/numeric-inputs.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Other Changes

* Updated to latest version of CodeMirror: 5.66.16.
* All Editors are automatically saved when the user executes the Play commands.
* Depth order commands now work with a Mac keyboard with a numeric pad, in its default config.
* Fixed a bug with opening multiple context menus.
* The Color Picker control shows a real-time preview of the color. You can now drag the color picker around the screen and see the color change in real-time.

## Promote your Games and Tutorials

If you have created a game, tutorial, or other content with Phaser Editor 2D and would like us to promote it for free, please get in touch! We can feature it on our website, newsletter, and social channels. Email `arian@phaser.io`.

Keep in contact!

Arian

  [2]: https://phasereditor2d.com/blog/content/images/20240214125544-richard-editor.jpg