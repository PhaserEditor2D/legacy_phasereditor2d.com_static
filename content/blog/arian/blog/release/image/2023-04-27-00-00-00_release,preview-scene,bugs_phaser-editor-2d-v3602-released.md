<!--t Phaser Editor 2D v3.60.2 released. t-->
<!--d A new version with bug fixes and minor improvements. Scene preview command. Open code files in the external editor. d-->
<!--tag release,preview scene,bugs tag-->
<!--image https://phasereditor2d.com/blog/content/images/20230426213450-release3.60.2.jpeg image-->

Hi!

Today I'm releasing a new version of Phaser Editor 2D!

[Download Phaser Editor 2D v3.60.3](https://phasereditor2d.com/downloads)

(Released v3.60.3 with a bug fix when running the built-in http server)

This version includes bug fixes and minor improvements. Bug fixes are about the Script Nodes. If you are working with Script Nodes, I recommend you to read these notes.

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is very important in the process of providing a more friendly and stable IDE.

## Bug fixes

### ScriptNode `update` event

The `ScriptNode` class, like the base `UserComponent` class, has an `update()` method you can override in your custom base classes. For executing the `update()` method, the `ScriptNode` class registers a listener to the `"update"` event of the scene. However, when you switch from one scene to another, the scene events are not removed. This means the ScriptNode class should remove the listeners from the event when it is shut down. There was the bug, it was never removed from the "update" scene's event. It does now.

If you are using script nodes in your project, I strongly recommend you update the script node files in the `src/script-nodes-basic/` folder. You can get the fixed files from the [script-nodes-basic project](http://github.com/PhaserEditor2D/script-nodes-basic).

I updated the project templates with the new script nodes, so creating a new project is fine.

### Create a prefab with a parent object

For creating a prefab you have two options:

1. Create a prefab scene file, and add an object to it.
2. Select an object in a scene, and select the option of creating a prefab with it.

If you select the second option for creating a prefab of a Container, Layer, or ScriptNode object, then it should move the children also to the prefab. It did it wrong until now, that is fixed and children are included in the prefab but not in the original object.

## Script Node enhancements

Again, I encourage you to update your basic script nodes from the [script-nodes-basic project](http://github.com/PhaserEditor2D/script-nodes-basic).

### Improves OnEventScript

The **OnEventScript** node is a trigger-like node. It listens to a certain event and executes the children nodes, which are expected to be action-like nodes.

Now, this node allows you to listen to events from different sources (`Event Emitter`):

* The global game events (`game.events`)
* The scene events (`scene.events`)
* The scene loader (`scene.loader`)
* The scene input plugin (`scene.input`)
* The scene keyboard plugin (`scene.input.keyboard`)
* The scene animations manager (`scene.anims`)
* The game object (`gameObject`)

![On event script node][1]

It also allows registering the event once, by checking the **Once** parameter.

These changes don't break the code using the previous version of this script node.

### Removes the `OnKeyboardEventScript`

I deleted the **OnKeyboardEventScript** because now you can listen to the keyboard with the new **OnEventScript** node.

If you are using this script node in your project, I encourage you to use the **OnEventScript** node or a prefab variant of it.

### EmitEventActionScript

This is an action-like node that emits an event. You can select different sources (Event Emitter) for emitting the event. The options are the same as the **OnEventScript** node: the scene events, the input events, the keyboard events, etc...

### Improves the `execute()` method

The **ScriptNode** class contains the `execute()` method. If you want to implement an action-like node, then you should override the `execute()` method with the action code. Now this method can receive multiple arguments:

```
execute(arg1: string, arg2: number) {
   ...
}
```

The `executeChildren()` method in the ScriptNode is used for calling the `execute()` method of the children. Now this method supports multiple arguments, too.

### Updates starter and example project templates

I updated all project templates, it uses the new ScriptNodes. The [A day in the beach](https://marketplace.phasereditor2d.com/examples/a-day-in-the-beach/) example is a particular case where I use the script nodes, extensively. I recommend you take a look at its code and scenes.

## Preview Scene command

I love this new feature. Now, if you are editing a scene, you can press `Ctrl+0` and it will open the scene in the default system browser. It runs the game, the game loads the assets and starts the given scene.

[Learn more about this feature](https://help-v3.phasereditor2d.com/scene-editor/misc-preview-scene.html)

## Open JavaScript/TypeScript files with Visual Studio Code.

Now you can set Phaser Editor 2D to open the coding files in an external editor: Visual Studio Code by default. For this purpose, you can use the **Enable/Disable Open Code File In External Editor**

[Learn more about the external editors](https://help-v3.phasereditor2d.com/code-editor/vscode-compatibility.html#visual-studio-code-phaser-editor-2d-integration)

## What's next

I'm on the way to implementing the new rendering FX that landed in Phaser 3.60. But I did a pause and did this bug-fixes release and had the opportunity of implementing a couple of new features and enhancements.

I should continue the pause and make a series of videos about the Script Nodes. I think it is confusing for some of you.

Keep in contact!

Arian

  [1]: https://phasereditor2d.com/blog/content/images/20230426231236-on-event-script.jpeg