<!--t Phaser Editor 2D v3.60 is ready! t-->
<!--d Phaser 3.60 is finally out, and the editor for it, too. d-->
<!--tag release,script nodes,nine slice,phaser360 tag-->
<!--image https://phasereditor2d.com/blog/content/images/20230416165420-release360.jpeg image-->

<small>[Phaser Editor 2D v3.60.1 release notes](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/releases/tag/v3.60.1)</small>

Hi!

Phaser 3.60 is out! As the author of Phaser said, it is the biggest release ever of this framework. I recommend you to go through this release because it provides many new features and what is for me the most important, it is performing way better on mobile platforms.

And today, I'm releasing Phaser Editor 2D v3.60! As you may imagine, it is a release about to support Phaser 3.60.

[Download Phaser Editor 2D v3.60.0](https://phasereditor2d.com/downloads)

## Celebration

The Phaser team selected day April 12 for releasing Phaser 3.60 because it is the date of its 10th Anniversary. 

Congratulations Phaser! See you in the next 10 years!

## Phaser Editor 2D License is 60% off

Is not this date a good moment for promoting the editor? I think it is. Get a Phaser Editor 2D Lifetime License with a 60% off! Not every year do I provide a promo with such a huge discount. Don't miss it!

[Get a Phaser Editor 2D Lifetime License with 60% off](https://fornaris.gumroad.com/l/phasereditor/phaser-10th-celebration)

The promo is valid until April 20.


## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### Gorilla vs Yeti

Matandile Games released [Gorila vs Yeti](https://matandile.videojuegoscuba.org/gorila-vs-yeti/). It is a simple game for training the multiplication tables. It is in Spanish.

![enter image description here][1]

## Phaser Editor 2D v3.60 compatibility

Phaser v3.60 introduces a few breaking changes, but in general, it is compatible with games made with Phaser 3.55. It is the same with the editor. Phaser Editor 2D 3.60.0 is compatible with projects made with previous versions of the editor. I migrated some games to the new Phaser and editor with a few efforts. If you find any issues, please, let me know. I can help you on migrating your games.

## NineSlice game object

Phaser 3.60 introduces a couple of new game object types. The NineSlice is one of them, and now Phaser Editor 2D supports it.

![NineSlice game object](https://phasereditor2d.com/blog/content/images/20230210093601-scene-editor-nineslice-create-5-20230208.png)

[Learn more about NineSlice](http://help-v3.phasereditor2d.com/scene-editor/nine-slice-object.html)

Previously, I implemented a plugin for making nine-patch objects. It is now deprecated and I encourage you to migrate to the new NineSlice object.

## Script Nodes

The ScriptNode is a new object type. It is a Phaser Editor 2D-only concept. A script node is an object you can add to the scene, a game object, or another script node, but it only contains logic or data. It is similar in its goals to the User Components but more powerful. In general, the advantages of a Script Node over a User Component are:

* You can add to an object many script nodes of the same type.
* You can add script nodes to a scene.
* You can create a hierarchy (a tree) of script nodes and express complex behaviors.
* You can declare a script node as a variable or field.
* You create a script node in the same way you create a game object prefab. It means you can create script node prefabs, nested prefabs, and prefab variants.

With the Script Nodes, you can create a custom framework of logic objects and provide them to the level designers. It reduces the need for coding because now you can compose the logic (or an important part of the logic) of your game by dragging nodes into the scene.

[Learn more about Script Nodes](https://help-v3.phasereditor2d.com/scene-editor/script-node.html)

## Project templates

I updated the Phaser Editor 2D All-in-One built-in project templates for using Phaser 3.60 and the script nodes instead of the user components.

I will be migrating the other project templates available on the Phaser Editor 2D Marketplace.

## Other changes

* Fixes labels of the Size section in the Inspector view.
* Improves folder icons.
* Adds command for [enable/disable pixel art rendering mode](http://help-v3.phasereditor2d.com/scene-editor/troubleshooting.html#disable-pixel-art-rendering).
* Scene compiler: fixes class-field declaration.
* Scene compiler: fixes nested prefab var-name resolution.
* Improves folder icons.
* Removes Parent section.

## What's next

I have to work on the Phaser Editor 2D Marketplace. Most of the content is for Phaser 3.55. I should update them or deprecate them.

Right now I'm working on supporting the new FX available in Phaser 3.60. I hope to finish it in a few weeks.

I plan to support Spine and make a video tutorial about the script nodes.

Keep in contact!

Arian

P.S.: Did you see [I updated the uPhaserHelpCenter](https://fornaris.gumroad.com/p/new-version-of-uphaserhelpcenter-targets-phaser-3-60-0)?

  [1]: https://phasereditor2d.com/blog/content/images/20230416171405-gorila-vs-yeti-3.jpeg