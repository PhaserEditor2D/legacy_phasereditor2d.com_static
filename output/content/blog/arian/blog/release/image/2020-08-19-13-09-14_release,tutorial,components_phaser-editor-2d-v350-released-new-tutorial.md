<!--t Phaser Editor 2D v3.5.0 released! New tutorial. t-->
<!--d The new release includes a couple of small improvements and bug fixes. Also, for this release, we wrote a new tutorial about User Components. d-->
<!--tag release,tutorial,components tag-->
<!--image https://phasereditor2d.com/blog/content/images/v3.5.0/release350.png image-->

Hi!

A new version of Phaser Editor 2D is available!

This v3.5.0 comes with some bug fixes and a couple of improvements, many of them reported by the community. Also, we just wrote a tutorial about the recently added User Components feature.

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter, and social channels.

### [Tutorial] A day in the beach. A demo of buttons based on components.

![A day in the beach](/blog/content/images/tutorial-button-components/welcome-screen.png)

A very simple point-and-click game. Some starfishes pop into the screen and you have to click on them.

[Read the full article](https://phasereditor2d.com/blog/2020/08/tutorial-a-day-in-the-beach-a-demo-of-buttons-based-on-components/)

We did this game to demonstrate how you can create some common buttons in the game by using reusable components. These components can be reused in different places of the game or even in different games.

The tutorial is a general explanation of how the components are used.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is key in the process of providing a more friendly and stable IDE.

## Scene Editor

The Scene Editor received most of the changes in this release.

### Multiple scene files with the same ID

When you create a new scene file (including prefabs), an identifier is assigned to that file. This ID is used in several contexts and it must be unique across the project. It has a problem, if you create a copy of the scene file, then you will get two files with the same ID. It is fatal and has unexpected effects.

In this release we introduced a routine to detect is multiple files have the same ID. If it is the case, then the editor shows a message dialog with the errors:

![Error duplicated ID](/blog/content/images/v3.5.0/scene-file-copy-id.png)

Also, it provides the option to fix it. You can execute the **Fix Duplicated Scenes ID** command. It will search all the scene files of the project and assign a new ID to each file that shares the same ID. For example, if two files have the same ID, the newer (the last was modified) will get a new ID.

Also, you have the option of changing the ID of the scene files manually:

```json
{
    id: "change-the-id-here",
    ...
}
```

We use the `Phaser.Utils.String.UUID()` function to generate the IDs.

The **Fix Duplicated Scenes ID** command is available in the [Command Palette](https://help.phasereditor2d.com/v3/workbench/command-palette.html).

* Scene Editor: shows error dialog when multiple files share the same scene id.
* [#63](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/63) Scene Editor: the **Fix Duplicated Scenes ID** command assign new IDs to the newer scene files.
* Scene Editor: the **Duplicate Scene File** command, available in Scene Editor > context menu > Scene.

### Option to convert tabs to spaces

We added two new parameters to the scenes: **Insert Spaces** and **Tab Size**. If the **Insert Spaces** is set ON, then the scene compiler will generate indentation with spaces (with a **Tab Size** number of spaces), and not with tabs.

This also applies to the User Components compiler.

![Tab settings](/blog/content/images/v3.5.0/indentation-settings.png)

### Default scene parameters

Yet we don't have a way to set global settings in the project. However, we follow the rule that when you create a new scene file, it will get the general settings set in a previous scene file (the latest was modified).

In this release we included the following parameters to be copied in the new scene file:

* **compilerOutputLanguage**
* **compilerInsertSpaces**
* **compilerTabSize**
* **borderWidth** 
* **borderHeight**
* **borderX**
* **borderY**

This technique is also applied to the User Components files, and the parameters:

* **compilerOutputLanguage**
* **compilerInsertSpaces**
* **compilerTabSize**

So, both, the scenes and components will be using the same output language and indentation format.

In a future release, we should implement a global settings editor.

### The new Scene Pan tool

Now the Scene Editor has a new manipulator tool. The Scene Pan tool. It allows you to scroll the scene by dragging it. By default, you can scroll the scene by pressing the middle button of the mouse. Now you can activate the Pan tool with the `Space` key and scroll the scene with the left button of the mouse.

## Resetting the default value of a field

In the previous versions, clearing the content of a number of property in the Inspector created an error. It was using the `NaN` value as the property value. Now, when you clear the content of a number field, it will get the default value of that property. For example, if you clear the **Origin X** input text, it will get the default value of the origin of the object: `0.5`.

## Allow changing the order of components

Now you can change the order of the components added to an object. It may be necessary if the order of the creation of the components affects the behavior of the object.

![Change order of the components of an object](/blog/content/images/v3.5.0/change-component-order.png)

### Other changes

* Scene Editor: fixes serialization of user number properties with `null` as default value.
* Scene Editor: fixes ID generation when pasting container objects.
* [#62](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/63) Scene Editor: fixes prefab constructor code generation when the texture is empty.

## Viewers

* Saves the zooming state of all viewers in views, editors, dialogs, etc...
* [#61](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/61) Alphabetic sorting of viewer content.

## Project

Phaser Editor 2D projects do not have a specific structure. However, you must follow the principle of add to the project only what is related to the Phaser Editor 2D tools or the direct assets of the game.

For example, you should avoid keeping the server files in the Phaser Editor 2D project. Or the original images of a texture atlas. The main reason is that many of these files are loaded in memory.

For some projects it may be hard to keep separated the files, so in this release, we introduced a way to exclude a folder from the project. It is pretty simple, just create an empty `.skip` file in the project you want to exclude.


## What's next?

We did this release to advance some of the issues reported by users. We also wrote the [User Components tutorial](https://phasereditor2d.com/blog/2020/08/tutorial-a-day-in-the-beach-a-demo-of-buttons-based-on-components/edit?destination=admin/draft). Writing tutorials always take a huge amount of effort but we think it is important. There are a lot of Phaser v3  tutorials out there, but practically no tutorials for Phaser Editor 2D v3.

Now we are going to start working on the Sprite Animations Editor. It is present in other versions of the editor and is often requested by users.

Sure, bug fixes have priority and if in the meantime a new Phaser version is released, then we will update the editor.

Keep in contact!

Arian