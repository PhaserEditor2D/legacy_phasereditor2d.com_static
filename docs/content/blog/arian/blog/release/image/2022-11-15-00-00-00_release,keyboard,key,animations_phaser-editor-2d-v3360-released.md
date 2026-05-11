<!--t Phaser Editor 2D v3.36.0 released t-->
<!--d This new version brings support for Keyboard Key objects and animation constants compiler. d-->
<!--tag release,keyboard,key,animations tag-->
<!--image https://phasereditor2d.com/blog/content/images/20221115194726-release.jpeg image-->

Hi!

A new version of Phaser Editor 2D is ready for download!

[Get Phaser Editor 2D v3.36.0](https://phasereditor2d.com/downloads)

This release brings support to a new scene object: the **Keyboard.Key**. In addition, now you can compile the animation constants associated with your Sprite Animations (`animations.json`).

By the way, did you see the latest video tutorials I'm making?

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### Making your first game with Phaser

I just started recording a series of videos about starting with Phaser Editor 2D. Probably you know this tutorial from the Phaser website: [Making your first Phaser game](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1). Ok, I'm making a series of videos explaining how you can make a game with Phaser Editor 2D. I recommend it to beginners, but even the more experienced developers may find some tips:

<iframe width="424" height="238" src="https://www.youtube.com/embed/mZx7gj6gT4A" title="[v3-2022] Part 1: Introduction - Making your first Phaser game." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Animations Editor compiler

Now you can compile the name of the animations defined in an Animations file (`animations.json`). This means the Animations Editor can generate an `animations.ts` file with the names of the animations but defined as constants. This way, in your code you can use the constants for referencing the name of an animation instead of writing it directly:

```
player.play(ANIM_PLAYER_RUN);
```

![The animation constants][2]

Just check the **Generate Code** parameter in the Animations Editor:

![Animations compiler settings][3]

[Learn more about animations code compiling in the documentation.](https://help-v3.phasereditor2d.com/animations-editor/compiler.html)

## The Keyboard Key object

Now you can add **Key** objects to the scene. This helps you with listening to the keyboard status.

You can add the **Key** by dragging it from the Blocks view and dropping it into the scene:

![Add key to the scene][4]

The Outline view shows the keys in the scene:

![The keys in the Outline view][5]

You can select one key and change its Key Code in the Inspector view:

![Key properties][6]

![KeyCode selection dialog][7]

The scene compiler will generate the code for creating the key in this way:

```
// in the context of a scene:

const jumpKey = this.input.keyboard
        .addKey(Phaser.Input.Keyboard.KeyCodes.UP);

// in the context of a prefab:

 const jumpKey = this.scene.input.keyboard
        .addKey(Phaser.Input.Keyboard.KeyCodes.UP);
```

[Learn more about the Keyboard Key object](https://help-v3.phasereditor2d.com/scene-editor/input-keyboard-key-object.html)

## What's next

This was a quick release. I'm working on the tutorial I mentioned you before. I don't know how you deal with it, but making a video tutorial, where I have to talk, is very challenging to me. I have to organize my ideas and express it in English. Following the Phaser tutorial helps me with the first, but with the English... I should study. But I enjoy making them! So there will be more tutorials in the next months!

Keep in touch,

Arian

P.S. [Follow the Phaser Editor 2D channel in YouTube :)](https://youtube.com/c/PhaserEditor2D)


  [2]: https://phasereditor2d.com/blog/content/images/20221115131720-animtions-editor-compiler-20221114.jpeg
  [3]: https://phasereditor2d.com/blog/content/images/20221115192123-animations-editor-compiler-settings-20221114.jpeg
  [4]: https://phasereditor2d.com/blog/content/images/20221115192530-scene-editor-input-add-key-20221114.jpeg
  [5]: https://phasereditor2d.com/blog/content/images/20221115192644-scene-editor-input-keys-in-outline-20221114.jpeg
  [6]: https://phasereditor2d.com/blog/content/images/20221115192736-scene-editor-input-key-properties-20221114.jpeg
  [7]: https://phasereditor2d.com/blog/content/images/20221115192830-scene-editor-input-keycode-dialog-20221114.jpeg