<!--t Phaser Editor 2.1.1 released t-->
<!--d Phaser Editor v2.1.1 released. New Text object and Tint properties. TypeScript support and External Editor integration. d-->
<!--tag scene,typescript,vscode,text,animations tag-->
<!--image https://phasereditor2d.com/blog/content/images/20190626001308-promo211-2.png image-->

Hi!

Phaser Editor v2.1.1 is here! This is a one-month-development version, but there is a lot of new stuff about to improve the user experience and productivity. Especial mention to the new toolbar, the TypeScript support, the new Text object in the Scene Editor, the integration with external editors and the adoption of the latest version of Phaser (3.18.2) and Eclipse IDE (4.12).


[Download Phaser Editor 2D v2.1.1](/blog/downloads/)

<!-- index-start -->

* [Games and tutorials](#games-and-tutorials)
* [New main toolbar](#new-main-toolbar)
* [Welcome TypeScript](#welcome-typescript)
 * [Project wizard](#ts-project-wizard)
 * [Scene to TypeScript compiler](#scene-to-typescript-compiler)
* [New Terminal view](#new-terminal-view)
* [External Editor integration](#external-editor-integration)
* [Updates to latest Eclipse](#updates-to-latest-eclipse)
* [Updates to Phaser 3.18.1](#updates-to-phaser-3.18.1)
* [Scene Editor](#scene-editor)
 * [New Text object](#new-text-object)
 * [New Tint properties](#tint-properties)
 * [Toolbar](#toolbar)
 * [Other changes](#scene-editor-other-changes)
* [Chains view](#chains-view)
* [Animations Editor](#animations-editor)
 * [Toolbar contributions](#animations-editor-toolbar)
* [Project view](#project-view)
* [Asset Pack Editor](#asset-pack-editor)
* [Other changes](#other-changes)
* [What's next?](#whats-next)


<!-- index-end -->

## Games and tutorials {#games-and-tutorials}

If you are creating games, tutorials or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we are more than happy to feature it in our website, newsletter and social channels.

## New main toolbar {#new-main-toolbar}

We keep trying in the process of customizing, make more game development friendy, the default Eclipse IDE layout, and workflow. In this version, we replaced the default Eclipse IDE toolbar for a new one with a flexible layout and bigger buttons.

![Comparison old toolbar vs new toolbar](/blog/content/images/v2.1.1/OldNewToolbarComparison.png)

The new toolbar is divided into three zones: left, center and right. Each zone contains buttons with different functions:

![Toolbar parts](/blog/content/images/v2.1.1/ToolbarParts.png)


1. **Home** button: Switches to the **Start** perspective.
2. **New** button: Opens a small dialog to create new files and projects. The dialog's **Other** button opens the general dialog to create any type of files. ![New file and project dialog](/blog/content/images/v2.1.1/NewDialog.png)
3. **Play** button: Opens the current project in a browser.
4. **Center zone**: It is filled by the active editor with its own controls. The image shows the widgets contributed by the active Scene editor.
5. **Quick Access** button: Opens the **Quick Access** dialog. ![Quick Access dialog](/blog/content/images/v2.1.1/QuickAccessDialog.png)
6. **Open View** button: Opens the **Show View** dialog. This is a quick way to open a new view. ![Show View dialog](/blog/content/images/v2.1.1/ShowViewDialog.png)
7. **Reset Perspective** button: Resets the current perspective. Useful to restore the default layout of a perspective.
8. **Open Perspective** button: Switches to a new perspective. ![Open Perspective](/blog/content/images/v2.1.1/PerspectiveButton.png)

## Welcome TypeScript {#welcome-typescript}

TypeScript is the language of choice of many of you, to create Phaser games. We are happy to include it in Phaser Editor as first-citizen. 

### Project wizard {#ts-project-wizard}

The New Phaser Project wizard has an option to select the target language: JavaScript 6 and TypeScript. 


![TypeScript project wizard](/blog/content/images/v2.1.1/TypeScriptProjectWizard.png)

If you select TypeScript, the project is created ready to start writing TypeScript code: The configuration file `tsconfig.json` and Type Definitions (`phaser.d.ts`) are included. This follows a layout that is fully compatible with Visual Studio Code or any other editor that uses the Language Server Protocol.

Phaser Editor does not provide any special tool to compiles the TypeScript files. You can use the TypeScript Compiler in the command line or the Terminal window (we talk more about this new tool later).

If you plan to create all your games with TypeScript, you can set the default project language to TypeScript in the *Windows → Preferences → Phaser Editor → Project*.

![Default project preferences](/blog/content/images/v2.1.1/SetProjectDefaultLanguage.png)

### Scene to TypeScript compiler {#scene-to-typescript-compiler}

The Scene files are compiled to source files. It can be configured to generate JavaScript or TypeScript code. When the Scene file is created, it gets the output language from the Project settings, but you can change it in the Scene Editor at any time.

![Default project preferences](/blog/content/images/v2.1.1/SelectSceneCompilerLanguage.png)

You can change the default language in the [Project properties](#project-view).

## New Terminal view {#new-terminal-view}

Now that we introduced TypeScript projects, you may need to execute the TypeScript compiler or another tool from the TypeScript toolchain. You can do this in the command line, or in the new Terminal view we included in this version.

The Terminal TM is a third-party plugin from the Eclipse IDE, that allows you to run a terminal inside the IDE.

To open the Terminal, you can use the **Open View** button in the toolbar or you can open it in the **Properties** of a file or folder selected in the **Project** view.

![Terminal](/blog/content/images/v2.1.1/Terminal.png)


## External Editor integration {#external-editor-integration}

Phaser Editor provides editors for the most used formats in web development. It uses the Wild Web Developer plugin from the Eclipse IDE community. It is a relatively new plugin and we tag it as experimental and in unstable, however, it uses the Language Server Protocol, a standard in modern editors. 

In web development, there are a lot of editors and some of them very popular, like the Visual Studio Code. The projects created by Phaser Editor can be used by any other editor, but especially, by Visual Studio Code.

In this version, we added a few functions to make more easy to the user to use another editor (code editor) together with Phaser Editor.

To enable this function, you should configure the integration with the external editor of your choice. This configuration is simple, it is just about to set the right command line arguments to launch the external editor:


![External Editor configuration](/blog/content/images/v2.1.1/ExternalEditorPreferences.png)

By default, we configure Visual Studio Code. If you enable it, then a new button is added to the main toolbar, to open the current project in the external (alien) editor:

![Open current project in External Editor](/blog/content/images/v2.1.1/ExternalEditor_OpenProject.png)

In the Scene Editor, the commands to open the generated source file will use the external editor.

![Scene Editor integration with the external Editor](/blog/content/images/v2.1.1/SceneEditorIntegrationWithExternalEditor.png)

In the Project view, if you click to open a non-Phaser Editor file, then it opens the external editor.


![Project view integration with the external Editor](/blog/content/images/v2.1.1/ProjectViewOpenExternalEditor.png)

## Updates to latest Eclipse {#updates-to-latest-eclipse}

We updated to the latest Eclipse version 4.12. We do an effort to keep always in sync with Eclipse, to avoid future compatibility issues. This release improved startup speed and fixed some bugs on components we use to edit the web source files.

## Updates to Phaser 3.18.1 {#updates-to-phaser-3.18.1}

Updated all the editor components to Phaser 3.18.1: project templates, Phaser Labs views, and the Scene Editor.

## Scene Editor {#scene-editor}

In this version, we added new properties and objects.

### New Text object {#new-text-object}

Often, games use Bitmap Text objects to display the game texts. It is an efficient portable format. However, many of you use Text objects in the prototypes of final games.

To add a Text object, click on the new **Add Object** in the toolbar. It creates a new Text object and places it in the middle of the screen.

![Add Text](/blog/content/images/v2.1.1/AddText.png)

We support practically all the Text properties:

![Text object](/blog/content/images/v2.1.1/TextObject.png)

Text object uses the fonts supported by the browser. Be careful with the font families you use, not all families are supported in all browsers or Operating Systems. You can use safe families or load the font via CSS. If you want to use a custom font in Phaser Editor, you should install it in your system. In the future, we may provide a way to apply custom CSS (including fonts) to the Scene Editor.


### New Tint properties {#tint-properties}


We added support to the Tint properties of the Game Objects:

![Tint properties](/blog/content/images/v2.1.1/Tint.png)

Tint is supported only in WEBGL mode. The Scene Editor uses WEBGL mode in Windows and macOS by default. In Linux, it uses CANVAS. However, you can change the mode at any time, in the *Windows → Preferences → Phaser Editor → Scene Editor* preferences.


### Toolbar {#toolbar}

The Scene Editor contributes to the new toolbar we added in this version. These are the buttons added to the toolbar:

![Scene Editor toolbar](/blog/content/images/v2.1.1/SceneEditorToolbar.png)


1. Selects the **Move** tool.
2. Selects the **Scale** tool.
3. Selects the **Rotate** tool.
4. Opens a dialog to create a new object. If you select an object that needs a texture or any other asset (like a **Sprite** or a **Bitmap Text**), then it opens a dialog to select the asset.
![Add Tile Sprite in toolbar](/blog/content/images/v2.1.1/AddTileSpriteMenu.png)
5. Compiles the scene.
6. Open the compiled file in the JavaScript editor, of the external editor if it is configured.
7. Refresh the scene. We recommend to do it if you see there is something wrong with the scene rendering.

### Other changes {#scene-editor-other-changes}

We implemented other minor changes like:

* The "Lost connection" message does not clear the screen. Phaser Editor uses websocket to communicate with the Phaser scene, and this websocket is closed by the browser when is idle. We opted to show this "Lost connection" message instead of keeping the socket open. You can click on the **Reload** button to connect again. 
* The removed the old SWT scene renderer, used to create the screenshot of the scenes that are shown in the Project view. Now we use a hidden browser to create the screenshots of the scene files. If you see corrupted screenshots, clean the project (in the Project view, select the project and press the **Clean Project** button in the **Properties** view).
* Now all the sections of the **Properties** are collapsed by default.
* You can remove the texture of a sprite, by pressing the **Delete** button close to the texture, in the **Properties**. Remember you can replace the texture too.
![Remove texture](/blog/content/images/v2.1.1/RemoveTexture.png)
* To pick a Tile Sprite object is not working as expected if the Scene Editor uses the WEBGL mode. Instead of using a pixel-perfect hit test, it uses a bounds hit test. We should find a way to get the pixel of a texture when it is in WEBGL mode. In CANVAS mode it works pixel-perfect.


## Chains view {#chains-view}

Now it shows the Phaser version of the Phaser API chains. It uses the `@since` tag of the Phaser documentation. Remember there is the **Phaser Versions** view, that groups all Phaser API by version.

![Phaser version in Chains](/blog/content/images/v2.1.1/Chains.png)

## Animations Editor {#animations-editor}

When you select many animations in the Outline view, the Animations editor shows all of them in a grid. You can play/stop all the selected animations.

![Many animations selected](/blog/content/images/v2.1.1/SelectManyAnimations.png)


### Toolbar contributions {#animations-editor-toolbar}

The Animations Editor does contributions to the new toolbar:

![Animations Editor toolbar](/blog/content/images/v2.1.1/AnimationsEditorToolbar.png)

1. Playback buttons for the selected animations.
2. Creates an empty new animation. However, the best way to create the animations is by dropping all the frames or atlas or images into the Outline view, because the editor creates multiple animations at the same time, by grouping the common prefixes.
3. Deletes the selected animations (this operation is not undoable, we should implement undo/redo for this editor in the next version).

## Project view {#project-view}

We did some minor changes in the Project view:

* When you select the project element, the **Properties** view shows specific project settings:
  * The default Scene size.
  * The default language.
  * A button to clean the project. Clean the project is very important, if you see there is something wrong with the editor, like a missing texture or thumbnail, then press the **Clean Project** button, to re-create all the internal state of the project.
* When you select any resource, the **Properties** view shows the option to open the resource in the local filesystem explorer or open the **Terminal** view on that resource.

![Project view new properties](/blog/content/images/v2.1.1/ProjectViewNewProperties.png)

## Asset Pack Editor {#asset-pack-editor}

Some few changes on the Asset Pack editor:

* Added support to the **CSS** and **Scripts** file types, introduced in Phaser v3.17.
* Removes filter and button from the top side of the editor. To find a key you can use the filter of the **Outline** view. To add a new key you can use the **Add Asset Key** button of the new toolbar.
* Contributes the **Add Asset Key** to the new toolbar. It shows a dialog with all the supported file types. You can filter for the type name.

![Asset Pack editor](/blog/content/images/v2.1.1/AssetPack.png)


## Other changes {#other-changes}

Other minor changes:

* Highlights the current project in the Start view.
![Start highlight project](/blog/content/images/v2.1.1/StartBoldProject.png)
* You may open files from another non-active project. The editors of those files will show a darked title and will include the name of the project.
![Non-active project files](/blog/content/images/v2.1.1/NonActiveProjectFiles.png)
* Phaser Labs: Many types in Phaser are declared as `namespace` but it is used as base class. For example, look at all the component classes of the Game Object class. Now we build a class instead of a namespace when a namespace is used as a base type of other class.
* Removed the wizard launchers from the **Assets** view. Now you can use the **New** button of the new toolbar.

## What's next? {#whats-next}

Documentation, we have to start writing the documentation right now! It will take a huge amount of time, because of my lower writing skills :(, but the lack of a User Guide is a high wall to those who are facing the editor for the first time, and even higher for those who are new with Phaser or game development. Together with the docs writing, we will keep fixing bugs reported by you and adopting each new Phaser version.

This is our roadmap for the near future:

* (**done**) Support missing loader file types (like `css` and `scripts`).
* (**done**) Support TypeScript projects and code generators.
* (**done**) Support Scene Text object.
* (**Next in line**) Start writing the documentation.
* Update the website and make Phaser Editor v2 the recommended option.
* Support undo/redo on the Animations and Asset Pack editors.
* Support Scene Tilemap object.
* Support Scene layers (an idea we have about only-editor layers).
* Support Scene Prefab object.
* Support other Scene object types and custom styling for fonts and HTML elements.


Keep in contact!

Arian

