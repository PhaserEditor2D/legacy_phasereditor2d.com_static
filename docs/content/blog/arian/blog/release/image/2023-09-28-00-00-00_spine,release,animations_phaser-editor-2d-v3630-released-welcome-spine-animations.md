<!--t Phaser Editor 2D v3.63.0 released. Welcome Spine animations! t-->
<!--d Are you making skeleton-based animations? This release is for you. d-->
<!--tag spine,release,animations tag-->
<!--image https://phasereditor2d.com/blog/content/images/20230926110922-release363.jpeg image-->

Hi.

Today I'm releasing a new version of Phaser Editor 2D. It comes with a long-time-awaited feature: Spine animation support.

[Download Phaser Editor 2D v3.63.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### Japan Journey

![japan journey](https://phasereditor2d.com/blog/content/images/20230926104304-8b3sTT.png)

A new game made with Phaser Editor 2D, by [CodestarCreates](https://twitter.com/CodestarCreates)

> Journey with PremierTwo and Ironmouse on a mission to raise as many donations as possible for the IDF! Blast through Hokkaido on the Cyclathon and give your best speech to raise morale for the gang, or chase down those dastardly trashy boys Donkey Connor, Crowey the Anime Bird, and Garbage Garnt to recover all the stolen cimmarolls!

[Play Japan Journey](https://codestarcreates.itch.io/japan-journey)

## Welcome Spine

[Spine](https://esotericsoftware.com/) is one of the most popular tools for making 2D skeletal animations for games. 

If you follow the news about Phaser, maybe you are aware of the Spine team [releasing an official runtime for Phaser](https://esotericsoftware.com/blog/spine-phaser-runtime). I think it is a game changer for the Phaser community and I want to add first-class support to Spine in Phaser Editor 2D.

This version of the editor comes with the first tooling about it and I love it. I migrated two of my games to Spine very quickly with the help of the editor.

Following, I show you an overview of the new tools, but I recommend you [take a look at the documentation](https://help-v3.phasereditor2d.com/scene-editor/spine-animations.html) and watch this small video:

<iframe width="100%" height="360" src="https://www.youtube.com/embed/4Vw4EcXC0Q8" title="[09-2023] Welcome Phaser Editor 2D Spine tools" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Spine assets

To use the Spine animations in the Scene Editor, first, you have to import the Spine assets into an asset pack file with the Asset Pack editor.

This editor provides a preview of the atlas and skeleton assets:

![Spine assets in the Asset Pack editor][1]

Also, you can preview the skeleton animations:

![Spine animations preview in Asset Pack editor][2]

[Learn more about the Spine assets](https://help-v3.phasereditor2d.com/scene-editor/spine-animations-loading.html)

### Spine game object

Now you can create Spine game objects in the Scene Editor. Just drag a Spine skin block from the Blocks view and drop it on the scene:

![Add spine game object to the scene][3]

With the Inspector view, you can edit some of the properties of the Spine game object: skeleton and images atlas, bounds provider, skin, and animation-related properties:

![Spine game object properties][4]

Here you can preview the game object animations, and edit some animation parameters like the animations mixes:

![Spine game object preview][5]

### User properties

Like any other game object, you can create prefabs of Spine game objects, and add user components and script nodes. Now there are new user property types related to Spine:

The [Spine Skin Name user property type](https://help-v3.phasereditor2d.com/scene-editor/prefab-user-properties-spine-skin-name.html) is for selecting a skin name from a list of all animations defined in all the skeletons:

![Spine Skin property][6]

The [Spine Animation Name user property type](https://help-v3.phasereditor2d.com/scene-editor/prefab-user-properties-spine-animation-name.html) is for selecting an animation from a list of all the animations in all the skeletons:

![Spine animation property][7] 

Also, the [Event property type's dialog](https://help-v3.phasereditor2d.com/scene-editor/prefab-user-properties-event-type.html) includes the custom Spine events defined in the skeletons:

![Spine events][8]

[Learn more about the Spine game object in our documentation](https://help-v3.phasereditor2d.com/scene-editor/spine-animations-game-object.html)

### Spine project template

If you are going to start with Spine and Phaser, then you can use this new [Spine project template](http://marketplace.phasereditor2d.com/starters/spine/) available in the Phaser Editor 2D marketplace.

It is also available in Phaser Editor 2D All-in-One.  When creating a new project, click on the "Get more in the Marketplace" link, and select **Spine Starter**:

![Spine starter template in all in one][9]

This is an overview of the new Spine tools. Please, take a look at the [editor's documentation](http://help-v3.phasereditor2d.com/scene-editor/spine-animations.html) for more details.

## Prefab properties

Now the Prefab Properties section shows the links to the properties defined in the prefab. You can click on the link to edit the property:

![Prefab properties links][10]

## Events

The dialog of the Events user property type now shows icons:

![Events dialog icons][11]

## Scene compiler

Now when you create a new `.scene` file the editor compiles it immediately. This way it is less confusing for new users.

* [249](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/249) Auto-compile the scene file when it is created.

## Other

* The editor shows a splash at the startup.
* Boosts booting speed, especially when opening in the cloud.
* All previous versions of Phaser Editor 2D All in One and Core are available for download [here](http://updates.phasereditor2d.com/).
* [#289](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/289) Fixes hit area computation on nested containers.

## What's next?

There is a lot to do about the Spine tools. Before continuing to work on new features, I want to hear some feedback from you. In the meantime, I will work on creating a better mechanism for encapsulating and installing script nodes and user components. If I finish it quickly, then I plan to work on supporting the new Phaser 3.60 FX.

Keep in contact!

Arian

  [1]: https://phasereditor2d.com/blog/content/images/20230927101200-asset-pack-editor-20230927.jpeg
  [2]: https://phasereditor2d.com/blog/content/images/20230927101518-asset-pack-preview-animations-20230927.jpeg
  [3]: https://phasereditor2d.com/blog/content/images/20230927102707-add-spine-game-object-20230927.jpeg
  [4]: https://phasereditor2d.com/blog/content/images/20230927104605-spine-game-object-inspector-view.jpeg
  [5]: https://phasereditor2d.com/blog/content/images/20230927115357-spine-game-object-animations-preview.jpeg
  [6]: https://phasereditor2d.com/blog/content/images/20230927120215-spine-skin-name-property-20230927.jpeg
  [7]: https://phasereditor2d.com/blog/content/images/20230927120759-spine-animation-property-20230927.jpeg
  [8]: https://phasereditor2d.com/blog/content/images/20230927142203-spine-user-property-event-20230927.jpeg
  [9]: https://phasereditor2d.com/blog/content/images/20230928214958-spine-project-template.jpeg
  [10]: https://phasereditor2d.com/blog/content/images/20230928215908-prefab-properties.jpeg
  [11]: https://phasereditor2d.com/blog/content/images/20230928220008-events-property-type-icons-20230927.jpeg