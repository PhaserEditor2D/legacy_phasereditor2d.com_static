<!--t Phaser Editor 2D v3.6.0 released! New Animations Editor. New demo video. t-->
<!--d The v3.6.0 comes with a new Animations Editor. Now, with a few clicks, you can create the sprite animations of the characters of the game. d-->
<!--tag animations,sprite animations tag-->
<!--image https://phasereditor2d.com/blog/content/images/20200907084819-release360.png image-->

Hi!

We are happy to announce that Phaser Editor 2D v3.6.0 is ready for download (or update).

[Download Phaser Editor 2D v3.6.0](https://phasereditor2d.com/downloads)

This new release comes with a new big feature: the Animations Editor!

[And a demo video](https://www.youtube.com/watch?v=eiUQn7h5kic&list=PLB8gI_5U0MvBXAo2SMrxP10kEkxMGDOmv&index=3&t=0s).

<iframe width="560" height="315" src="https://www.youtube.com/embed/eiUQn7h5kic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is key in the process of providing a more friendly and stable IDE.

## Animations Editor

One of the most used techniques to animate the characters in the Phaser games is frame-based animations. Phaser has an [Animations format](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Animations.html#.JSONAnimation__anchor) to create this kind of animations, and Phaser Editor 2D v3 now has an editor for it.

[Learn more about the Animations Editor](https://help.phasereditor2d.com/v3/animations-editor)

This is how it works:

* You create an Animations JSON file that follows [this format](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Animations.html#.JSONAnimations__anchor).
* With the Animations Editor, you create new animations by selecting the frames defined in an [Asset Pack file](https://help.phasereditor2d.com/v3/asset-pack-editor/). Or you can select all the frames made for the animations and automatically create the animations with a ["smart" algorithm](https://help.phasereditor2d.com/v3/animations-editor/auto-build-animations.html).
* The animations file is loaded using the [animation loader](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.LoaderPlugin.html#animation__anchor) or the [asset pack loader](https://help.phasereditor2d.com/v3/asset-pack-editor/).
* You play an animation in a sprite object: `enemy.play("attack")`.

We think the Animations Editor has three strong features:

* The animations created by this editor can be used in any Phaser project, no matter if it was created with Phaser Editor 2D v3. It does not require any third-party library. This means you may love to code the whole game, but you can pack your assets and animations using Phaser Editor 2D. You will save a lot of time. And you get it for free if your project has less than 70 files.
* The auto-build animations "smart" algorithm allows you to create the animations really fast! It is just a matter of a few clicks.
![Auto build animations][1]
* You don't need to run the game to preview the animations. The Animations Editor runs the animations and it is updated dynamically when a new parameter (like frame rate) is modified.

If you want to see all of these in action, [watch the demo video](https://www.youtube.com/watch?v=eiUQn7h5kic&list=PLB8gI_5U0MvBXAo2SMrxP10kEkxMGDOmv&index=3&t=0s)! The source code is available here: [animations-editor-demo-v3.6.0](https://github.com/PhaserEditor2D/animations-editor-demo-v3.6.0)

Also, please, [take a look at the documentation for more details](https://help.phasereditor2d.com/v3/animations-editor).

## Other changes

Other minor changes and bug fixes:

* [#71](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/71) Files view: fixes files sorting. Folders go first.
* Viewer: fixes scrolling when multiple distant elements are selected.
* Viewers: Pad with `0` chars the labels of spritesheet frames: `001`, `002`,...,`126`.
* Scene Editor: better scene thumbnail generation.

## Phaser Editor 2D v2

With the new Animations Editor available in Phaser Editor v3, we are thinking on stop the updating of Phaser Editor 2D v2.

Right now, each time Phaser 3 is released, we update Phaser Editor 2D v2, but we are not adding new features to this version of the editor.

If you are working with v2 of the editor, we encourage you to migrate to Phaser Editor 2D v3 and contact us for supporting you on this task.

## What's next?

We want to start working on support tilemaps! First, we want to allow you to add Tiled tilemaps into the Scene Editor. We want to make a nice integration between the Scene Editor and Tiled (or similar tools). We think the prefab and components system of Phaser Editor 2D is a powerful tool and we want to make it easy to be combined with Tilemaps.

Our final goal is to implement a complete Tilemap Editor, but it is not going to be any time soon.

Please, report us bugs, new ideas, or any other thoughts you have. We love your feedback!

Keep in contact!

Arian

  [1]: https://phasereditor2d.com/blog/content/images/20200907092550-auto-build-animations.png