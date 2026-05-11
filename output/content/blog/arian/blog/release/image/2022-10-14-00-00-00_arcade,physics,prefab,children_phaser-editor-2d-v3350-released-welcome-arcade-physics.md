<!--t Phaser Editor 2D v3.35.0 released. Welcome Arcade physics. t-->
<!--d A new release with support for Arcade physics. New prefab instance ability to append children. Bug fixes. Apple Silicon fixes. d-->
<!--tag arcade,physics,prefab,children tag-->
<!--image https://phasereditor2d.com/blog/content/images/20221012044654-v3.35.0.png image-->

Hi!

A new version of Phaser Editor 2D is ready for download!

This is an important release because it includes two new important features: the Arcade physics tools & the appendable children of a prefab instance. 

[Download Phaser Editor 2D v3.35.0](https://phasereditor2d.com/downloads)

## Arcade physics

The new physics tooling is here! Finally! This is a feature requested by many of you, [including sponsors](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/211). Now you can create the [Image and Sprite physics objects](https://help-v3.phasereditor2d.com/scene-editor/arcade-physics-add-object.html):

![Arcade scene blocks][1]

Or enable an Arcade physics body on any other object:

![Enable physics body][2]

Also, you can [create a Collider](https://help-v3.phasereditor2d.com/scene-editor/arcade-physics-collider.html):

![Collider properties][3]

But what you requested more, was the [in-scene body editor](https://help-v3.phasereditor2d.com/scene-editor/manipulation-tools.html#arcade-physics-body-tool):

![Edit body tool][4]

![Circular body edit][5]

And the [body properties editor](https://help-v3.phasereditor2d.com/scene-editor/arcade-physics-properties.html):

![Physics body properties][6]

[Learn more about the Arcade Physics tooling](https://help-v3.phasereditor2d.com/scene-editor/arcade-physics.html)

Oh, and I updated the [Volcano](https://marketplace.phasereditor2d.com/examples/volcano/) and [Sunny Land](https://marketplace.phasereditor2d.com/examples/sunny-land) examples. Both now use the new physics tooling. Remember the all-in-one distribution of the editor [allows create a new project based on the Phaser Editor 2D Marketplace templates & examples](https://help-v3.phasereditor2d.com/first-steps/create-first-project.html).

## Adding children to a prefab instance

Adding children to a prefab instance is a game-changer feature! At least in my experience, I had been in that situation multiple times where I wanted to add new objects to a prefab instance. Fortunately, it is also a [feature requested by sponsors](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/236) of the editor, so it landed in this release. I was surprised by how quickly I implemented it. Taking a rest or working on other projects helped me get more energy to work on these issues.

For keeping compatible behavior, you cannot add a child to a prefab instance by default, first, you have to enable it in the prefab. You should check the **Allow Append Children** flag in the **Children** properties section:

![Allow append children to a prefab instance][7]

The above image shows a basic dialog prefab. You can create prefab variants like a **LevelCompleteDialogPrefab**:

![Level complete dialog][8]

Or a **GamePausedDialogPrefab**:

![Game pause dialog][9]

Both dialogs keep the same (inherited) behavior as the basic dialog:

* It has a show-up effect.
* It closes when you touch the **close** button.

[Learn more about adding children to a prefab instance](https://help-v3.phasereditor2d.com/scene-editor/prefab-instance-children.html)

## Colored parameters

This is a small change. Now some parameters are colored red and green. Basically, those related to XY vectors:

![Colored parameters][10]

## Removed Monaco editor

In this release, I removed the Monaco editor plugin. Now there is a basic editor for editing the code. I did this because I don't see a strong argument for keeping a so complex piece in the editor. Right now, there are very advanced editors like VS Code. Even, you can run VS Code in any environment you can run Phaser Editor 2D, including the cloud & the browser.

I know some of you are using Phaser Editor 2D for writing JavaScript games. I apologize for any inconvenience. Please, take a look at Visual Studio Code.

## Apple Silicon & code signing

Some users reported the ARM distribution of the all-in-one editor is not running on M1 machines. I never had that problem... sure... because I'm testing the editor on the same machine I build it!

The problem is: 

"New in macOS 11 on Macs with Apple silicon, and starting in macOS Big Sur 11 beta 6, the operating system enforces that any executable must be signed before it’s allowed to run..."

Phaser Editor 2D is not signed. For signing the app, I have to join the Apple Developer Program but unfortunately, it is not available for residents in Cuba. I need a third party to help me with this ([like in many other services](https://github.com/cuban-opensourcers/cuban-restricted)) and it will take some time.

The good news is that there is a way to run the app, just open the Terminal and execute this command:

```
sudo xattr -r -d com.apple.quarantine PhaserEditor2D-allInOne.app
```

After this, double-click the app, and it should run well. Now when you unzip the app, it has a README file explaining this workaround.

Please, if you know about another alternative, let me know. You can comment on [this issue](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/242).


## What's next

For this release, I tried to implement the new ObjectScript (a powerful alternative to User Components). But failed. I first tried to implement it as another Game Object, but it was not a good idea. I want to try again, but implementing them just as plain objects, outside the display list. It will require some time since I have to implement a sort of hybrid of user components and prefabs.

Also, I want to implement Sound, Key, and Event objects you can add to the scene.

After this, I will look at the [list of issues](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/labels/sponsor) created by the sponsors of the editor.

Keep in contact!

Arian

  [1]: https://phasereditor2d.com/blog/content/images/20221012052727-arcade-blocks.jpeg
  [2]: https://phasereditor2d.com/blog/content/images/20221012053617-add-body.jpeg
  [3]: https://phasereditor2d.com/blog/content/images/20221012053212-collider.png
  [4]: https://phasereditor2d.com/blog/content/images/20221012053939-edit-body-tool.jpeg
  [5]: https://phasereditor2d.com/blog/content/images/20221013083632-circular-body-edit.jpeg
  [6]: https://phasereditor2d.com/blog/content/images/20221012054235-body-properties.jpeg
  [7]: https://phasereditor2d.com/blog/content/images/20221013084626-allow-append-children-prefab.jpeg
  [8]: https://phasereditor2d.com/blog/content/images/20221013085321-level-complete-dialog.jpeg
  [9]: https://phasereditor2d.com/blog/content/images/20221013085304-game-paused-dialog.jpeg
  [10]: https://phasereditor2d.com/blog/content/images/20221013091915-xy-colored.jpeg