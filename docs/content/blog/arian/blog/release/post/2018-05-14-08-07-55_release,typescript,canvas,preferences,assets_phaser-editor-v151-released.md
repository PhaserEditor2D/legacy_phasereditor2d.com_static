<!--t Phaser Editor v1.5.1 released t-->
<!--d Phaser Editor v1.5.1 released. Bug fixes. Improved Canvas wizards, TypeScript compiler, User Preferences and more. d-->
<!--tag release,typescript,canvas,preferences,assets tag-->

Hello, today we release Phaser Editor version 1.5.1. This is a minor release but, in addition to bug fixes, there are some new cool features, many of them requested by users and clients. Please, feel free to contact us or create GitHub issues to suggest ideas, request features or point errors. You will get all our attention. If you are a client we will try to develop that feature or fix that error as soon as possible, even we can provide a patch for you.

We want to thanks to [GameFromScratch][1] for the nice [video they did about Phaser Editor][2], actually, some features implemented in this release were suggested by the video.

At the end of the post, we update you on the state of the Phaser Editor v2 (a parallel version to support Phaser v3).

## Git Repositories window

Phaser Editor provides the Git tooling available in Eclipse IDE (EGit). Now the Git Repositories window is shown by default. Remember, our editors contains an offline Help that you may take a look to learn all about the Eclipse-related features, including this EGit plugin.

![Git tooling][3]

## Canvas compiler generates public and private fields in TypeScript

In the previous version of the editor, the `public` property of the objects was used to indicate that we want to generate an instance field reference to an object. This is good, however, it is not the ideal solution to TypeScript, because you may want to make that field private.

To fix this, we introduced a new property, called `field`. The `field` property has the old role of `public`, it indicates that we want to generate an instance field reference to the object. If you Canvas file is set to generate TypeScript, then, in addition to `field`, a `public` property is shown, that indicates the visibility of the generated field. If it is set to `true`, the field is generated as public, if it is `false`, as private.

![Field and Public properties][4]

The Animations Dialog works in the same way, if the user checks the Field flag, a field reference to the animation is generated, and if the Public flag is off, the field will be private.

![Field and Public properties in the Animations dialog][5]

## Canvas creation wizard

* Added a new `autoLoad` option to the New State wizard. Remember, this `autoLoad` parameter is also available in the Configuration tab of the Canvas editor, and it indicates if generate preload code automatically. Usually, you load all the assets in Preloader states, so this flag may be set off in the other states.
![AutoLoad parameter in the state wizard][6]
* All new Canvas file wizards show a new page called Loading. In this page, you have the option of adding the new Canvas file to a section of an asset pack as a `script` asset. It is a common practice to load the JavaScript files of the states and prefabs as script assets in a Preloader state.
<br>If you create a `Level.canvas` file, then a new `script` asset is added to the selected asset pack section, with the `Level` **key** and the `/path/to/Level.js` **url**. Note, if you are targeting TypeScript it is the same, the JavaScript file is the one is set as **url**.
![Loading page in the new Canvas wizard][7]

## Canvas user code preferences

In preferences `Phaser Editor → Canvas → Code Generation` you can set the default User Code to be inserted into the code generation of Canvas files. For example, usually, State classes need to do certain post-creation initialization, like create tweens, input listeners, etc… A common pattern is to insert an `onCreated()` method call after the creation of the objects, and write all the initialization code in that method. Now you can insert that code by default in a new Canvas file.

![User Code preferences][8]

By the way, as you can see, the User Code was improved. It mimics the method and places where the code will be inserted. We also added a new “placeholder”, the arguments of the init code. Yet is missing the arguments of the constructor, we have to think a good solution for it because usually, many of the prefab arguments are optional.

![User Code preferences (**init** method) ][9]

## Other Canvas features

* Sprite prefabs do not support children. Now if you try to add another object to the prefab, it shows an info dialog.
![Prefab does not allow children message][10]
* The context menu was re-ordered. The “Object” menu was removed and a new Layout menu was added. We are trying to make a context menu more intuitive. Feedback is appreciated. 
* New keys for zooming. The key `I` to zoom in, the key `O` to zoom out. The zoom in centered on the mouse pointer position.

## Assets window

* Added a new “re-build” button to the Assets window. This button launches the Clean dialog, where you can select the project to clean. This is an important operation. Phaser Editor keeps an in-memory model (and other stuff like thumbnails) of all the assets and other objects. This model is updated each time a file is modified, this is an automatic process, but it can fail, so with this new button you can clean this model and rebuild everything again. We recommend to do it if you see something is not going well.
<br>
![Assets window][11]
<br>
* In the above image you can appreciate that now we group all Canvas files in a root “Canvas” node, and all the pack files in a root “Pack” node. This adds more depth to the tree but it is required for other future features, like create new Assets window focused in a sub-tree, or show another different kind of assets like Animations. In theory, we want to create a format for “all kind” of assets used in Phaser, and show them in the Assets window, so organization is required.

## Bug fixes

* Canvas: names that end in a number, like `enemy10`, was changed to `enemy` after some operations like changing a texture of a sprite or move an object to another group.
* Canvas: remove spaces form generated variables. For example, if you name an object as “the red flower”, it generates a variable with the name “_theRedFlower”.
*  Fixed the thumbnails and preview of Canvas files in the Assets window.
* No JSDT based projects (those created for JavaScript 6 and TypeScript) now are built at startup.
* Fixed the BitmapFont renderer in cases where a character is not defined. For example, many fonts contain only numbers, however, the default preview of a font try to render the name of it, and names contain letters. Now if a character is not allowed by a font, the space character, or the first defined character, is used.

## Phaser 3 support

We started working on the next major version of the editor (v2), the one is going to add support to Phaser 3.

There are a couple of things we did:

* Migrate to Java 9.
* Migrate to GTK3 (this allows us to use the internal browser on Linux, based on WebKit).
* Remove JSDT dependencies (the old JavaScript editor).
* Introduce the new JavaScript and TypeScript editors based on Eclipse BlueSky.

Not all the above points are fully completed, but the harder part is done. All the changes and fixes we do to Phaser Editor v1 are going to be included in Phaser Editor v2 too.

Recently, the Asset Pack format was included in the Phaser v3 loader. This is great because the most important features of Phaser Editor depend on these files. Maybe this is a good moment to start working on it, but, really, yet we do not have a clear idea of what features are going to be implemented first, we are warming the engines and playing a bit with Phaser v3.


See you soon!
Arian

  [1]: https://www.gamefromscratch.com/
  [2]: https://www.youtube.com/watch?v=yxbmoFm0d4k
  [3]: https://phasereditor2d.com/blog/content/images/20180512005851-GitRepositoriesWindow.png
  [4]: https://phasereditor2d.com/blog/content/images/20180512010054-CanvasFieldPublic.png
  [5]: https://phasereditor2d.com/blog/content/images/20180512010128-AnimationsDialogFieldPublic.png
  [6]: https://phasereditor2d.com/blog/content/images/20180512010252-StateWizardAutoLoadParam.png
  [7]: https://phasereditor2d.com/blog/content/images/20180512010503-CanvasWizardLoadingPage.png
  [8]: https://phasereditor2d.com/blog/content/images/20180512010636-UserCodePreferences.png
  [9]: https://phasereditor2d.com/blog/content/images/20180512010724-UserCodePreferences_init.png
  [10]: https://phasereditor2d.com/blog/content/images/20180512010758-CanvasSpriteAddNotAllowed.png
  [11]: https://phasereditor2d.com/blog/content/images/20180512010910-AssetsWindow_refresh.png