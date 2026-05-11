<!--t Phaser Editor 2D v3.64.0 released - Boosting sprite animations - Hi Aseprite! t-->
<!--d A new release for boosting sprite animations. Including tools for the Aseprite software. d-->
<!--tag release,aseprite,sprite,animation tag-->
<!--image https://phasereditor2d.com/blog/content/images/20231107153157-release-v3640.png image-->

Hi!

Today I'm releasing a new version of Phaser Editor 2D. This new release includes a couple of new features for boosting your workflow with Sprite animations. It also adds support for Aseprite, a software many of you use for making animations.

[Download Phaser Editor 2D v3.64.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### Love Defender

Hardcore fast 2D shoot 'em up platformer. This game is too hard and unfair for you, Don't play it or it will make you cry and break your controller in anger. Your life won't be the same.

[Play it here](https://www.iololoi.com/#love-defender)

![Love defender](https://phasereditor2d.com/blog/content/images/20231020060235-love%20defender.png)

### Game Objects in Phaser Editor 2D. A tutorial by [Yudiz Solutions](https://yudiz.com/)

> Game Objects is built in PhaserEditor2D. A game object is a building block used to create entities in the game world. Game objects have various types, such as sprites, shapes, text, images, groups, containers, and more. It is a basic unit of gameplay that can be used to represent anything in your game.

[Read the full article here](https://medium.com/yudiz-solutions/game-objects-in-phasereditor2d-d65562f16ae4)

## Animations

Animations are an essential part of a game. Phaser provides different alternatives for animating objects in the game. At Phaser Editor 2D I am making tools for improving the workflow of making animations with the Phaser API. In a previous version of the editor, I added support for the Spine animations. Today, I am improving the editor's workflow for working with the sprite-based animations. Also, I included support for the [Aseprite animations](https://www.aseprite.org).

### Animations preview

Now you can preview the animations imported in an Asset Pack file. You can select an animation key from the Outline view of the Asset Pack editor, then the Inspector view shows the info of the animation and a button for opening the Preview dialog:

![Preview animation 1][1] 

If you click the **Preview** button, it opens the preview dialog:

![Animation preview dialog][2]

The dialog shows buttons to play the animation or force the repeat of the animation.

[Learn more about previewing the animations](https://help-v3.phasereditor2d.com/scene-editor/sprite-animations-preview.html)

### Animation blocks

This version introduces the Animation block for the Scene Editor. It means, now the Blocks view shows the animations and Aseprite animations.

![Animation blocks][3]

You can select an animation and preview it, but also you can drag it and drop it on the scene. When you drop an Animation block in the scene, it creates a Sprite object and configures it to play the animation.

![Creating a Sprite object in the scene][4] 

[Learn more about the Animation block](https://help-v3.phasereditor2d.com/scene-editor/sprite-object.html)

### Animation section

The Sprite game object now has a new Animation section in the Inspector view.

This Animation section contains the parameters to play an animation in a sprite object:

![Animation section][5]

In this section, you can select an animation to auto-play in a sprite. Also, you can provide a custom configuration for the animation to play. 

[Learn more about the Animation properties](https://help-v3.phasereditor2d.com/scene-editor/animations-properties.html)

### Aseprite

Aseprite is a popular software for making sprite animations. Now Phaser Editor 2D supports it!

You can select the Aseprite files in the Files view and import them into an Asset Pack file. Once the Aseprite animations are in the asset pack then you can use them as regular animations.

![Importing aseprite files][6]
![Import aseprite 22][7]

[Learn more about the Aseprite support](https://help-v3.phasereditor2d.com/scene-editor/sprite-animations-aseprite.html)

## Other

* Improves importing multiple files from the Files view.
* [#251](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/251) Fixes sprite positioning in the Animations Editor.
* [#209](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/209) Improves scene border painting. 
* Optimizes pooling of WEBGL contexts. It now re-uses the canvases in dialogs and editors.
* [#295](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/295) Fixes tilemapLayer nullable method factory.

## What's next?

I moved from Cuba to the United States, with the whole family. I want to talk more about this later. I have to keep busy with different issues, but I hope to back to the editor development soon. It is all exciting!

Keep in touch,

Arian



  [1]: https://phasereditor2d.com/blog/content/images/20231107231749-preview-animation-1.jpeg
  [2]: https://phasereditor2d.com/blog/content/images/20231107232030-preview-animation-dialog.jpeg
  [3]: https://phasereditor2d.com/blog/content/images/20231107232459-animation-blocks.png
  [4]: https://phasereditor2d.com/blog/content/images/20231107233039-create-sprite-with-anim-block.jpeg
  [5]: https://phasereditor2d.com/blog/content/images/20231107233447-animation-section.jpeg
  [6]: https://phasereditor2d.com/blog/content/images/20231107234045-import-aseprite-1.png
  [7]: https://phasereditor2d.com/blog/content/images/20231107234247-import-aseprite-2.png