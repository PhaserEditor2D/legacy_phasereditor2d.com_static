<!--t Phaser Editor v2.1.6 released t-->
<!--d The new update of Phaser Editor. Bug fixes and small new features. d-->
<!--tag bug,phaser,release,pack,scene tag-->

Hi!

Phaser released its 3.22.0 version and as usual, we are updating Phaser Editor v2 to keep it in synchronization with Phaser.

[Download Phaser Editor v2.1.6](https://phasereditor2d.com/blog/downloads/)

Also, this new release includes some bug fixes reported by the community and minor features.

We keep working hard on our web-based v3 of the editor. Our goal is to publish a preview version someday in February.

<!-- index-start -->

* [Games and tutorials](#games-and-tutorials)
 * [[Game] Club Penguin](#club-penguin)
 * [[Tutorial] Converting The Flash Game Blasteroids To HTML5 Using Phaser](#converting-flash-game)
* [Phaser 3.22.0](#phaser-3-22-0)
* [Texture Packer](#texture-packer)
* [Text editors](#text-editors)
* [Phaser Editor v3](#phaser-editor-v3)


<!-- index-end -->

## Games and tutorials {#games-and-tutorials}

If you are creating games, tutorials or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter and social channels.

### [Game] Club Penguin {#club-penguin}

> This game is an HTML5 remake of the virtual world Club Penguin created by a small development team.

[Read more...](https://phasereditor2d.com/blog/2019/12/club-penguin-made-with-phaser-editor)

![Club Penguin](https://phasereditor2d.com/blog/content/images/20191211095051-club-penguin.png)

### [Tutorial] Converting The Flash Game Blasteroids To HTML5 Using Phaser {#converting-flash-game}

If you need to create reusable objects or use another kind of object that is not supported by the Scene editor, then read this article, it shows how to use factories in a real game.

[Read more...](https://phasereditor2d.com/blog/2020/01/user-tutorial-how-object-factories-can-help-on-a-real-game)

![Phaser Editor screenshot](https://phasereditor2d.com/blog/content/images/20200106075235-phaser-editor-blasteroids-player-scene-768x445.png)

## Phaser 3.22.0 {#phaser-3-22-0}

The latest version of Phaser is now built-in. It is included in the project wizards, the Scene Editor, and the Phaser Labs tools. 

The Phaser runtime files of your old projects are not updated. If you wish to update your game runtime to the new Phaser version you should do it manually. [Learn more about it in the docs](/docs/v2/workbench.html#phaser-version-update).

## Eclipse IDE

We updated the editor to the [latest Eclipse version (2019-12)](https://www.eclipse.org/eclipse/news/4.14/platform.php).

## Asset Pack

* [#139](https://github.com/PhaserEditor2D/PhaserEditor/issues/139): Use relative names of asset pack files in the new file dialogs:
![](https://user-images.githubusercontent.com/12187299/71519016-942c9d00-2883-11ea-8262-106f886344c8.png)

* [#137](https://github.com/PhaserEditor2D/PhaserEditor/issues/137):  Bugfix: the New File wizard adds the new file to all the asset packs.

* [#138](https://github.com/PhaserEditor2D/PhaserEditor/issues/138) Parameter to use the container folder as the key prefix of the new file items.

Now you can enable the **Use container folder** as a prefix for new asset keys parameter. It is in the global preferences (**Window > Preferences > Phaser Editor > Asset Pack Editor**). By default it is disabled.

If the parameter is enabled, when you add new assets it will use the name of the container folder of the asset pack as the prefix of the new key. For example, if you add a file `background.png` and the asset pack file is in the folder `level3`, then the new key will be `level3.background`. Only in case of scene files, the prefix is ignored.

![Use container as prefix preference](https://user-images.githubusercontent.com/12187299/69901064-543ccd80-134a-11ea-9961-989d4670b596.png)

## Texture Packer {#texture-packer}

* [#141](https://github.com/PhaserEditor2D/PhaserEditor/issues/141) Show import button in Properties.

macOS Mojave users are experiencing problems to drop files into the Texture Packer editor. We added a new button in the Properties view to import the files selected in the Blocks view.

![Import files button](https://user-images.githubusercontent.com/12187299/72165706-f615f800-3395-11ea-86a1-45305476c64b.png)

## Text editors {#text-editors}

* [#142](https://github.com/PhaserEditor2D/PhaserEditor/issues/142): Bugfix: cursor is lost in a text editor after save (Windows 10).  

## Phaser Editor v3 {#phaser-editor-v3}

The development of our v3 of the editor is going fast! To develop a web IDE is a very pleasant task. This is not a development report because this is yet a secret project, but we want to share some thoughts and results.

We are developing everything (sure, not the browser and not the game engine 🤓), but we are not using any framework to build the IDE basis, we are making all of these from cero.

There are some open-source web-IDEs that we can customize but we think the best is do not attach ourselves to a framework that may help but may put some limitations. After years of working on Eclipse plugins, you get an idea of how to build an IDE so we are on it.

We are making it "simple" to extend the IDE, not only with new file formats and editors else with the possibility to add your own, custom type of Game Object in the Scene Editor. We are preparing the field for a future marketplace for assets and tools. It would be great if someone who wants to develop a Phaser plugin (like the 9-slice plugin, the Isometric plugin, the Box2D plugin, the Facebook plugin, etc...) can also develop a Phaser Editor plugin to edit the new type of objects in the Scene Editor.

Anyway, our main task now is to provide a good Scene Editor. For the first version, it will support a few of game objects, it will be basic, but our previous experience says that we should include containers and prefabs since the first day, and both are ready now! It needs more work, but the main stuff is done. I like how prefabs are going. You can create a prefab of any game object and even you can create a prefab variant (a prefab of a prefab). In the future, we also want to support nested prefabs, more or less as Unity does. 

Here you can see a video we created some days ago, to show the prefabs in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/43T4v5Nj_0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Keep in contact!
Arian
