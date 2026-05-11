<!--t Phaser Editor 2D v3.35.1 released t-->
<!--d A new minor version is ready. It contains bug fixes and a new way of presenting user components &amp; prefab properties. d-->
<!--tag release,components,prefabs tag-->
<!--image https://phasereditor2d.com/blog/content/images/20221102212215-release3.35.1.jpeg image-->

Hi!

A new version of Phaser Editor 2D is ready for download!

[Get Phaser Editor 2D v3.35.2](https://phasereditor2d.com/downloads)

[Update Nov 10, 2022: Phaser Editor 2D v3.35.2 released with bug fixes](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/releases/tag/v3.35.2)

This release includes a new way of presenting the user components and the prefab properties.

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### Game: Hokkaido Haul!

![Hokkaido Haul](https://phasereditor2d.com/blog/content/images/20221022063125-HokkaidoHaul.png)

Thanks [CodestarCreates](https://twitter.com/CodestarCreates) for sharing his game with us!

> Help the van gang make it to the end of the treacherous Hokkaido cycle! Bop bears and avoids drones while searching for root beer to give you the energy to give a rousing pep talk! Fill up your HYPE meter to gain more $$$ every 100kms!

You can play it here: [https://codestarcreates.itch.io/hokkaido-haul](https://codestarcreates.itch.io/hokkaido-haul)

### Video/Tutorial: Start making a Phaser game in the cloud

Lot of time I don't make a new video tutorial... With this new video, I hope to start making a series of videos for helping you use Phaser Editor 2D.

> Most of us use Phaser Editor 2D on the desktop. In this video, I will show you how to run the editor in the cloud alongside VS Code. The trick is GitHub Codespaces, a service that provides a cloud development environment. And Phaser Editor 2D Core, an edition of the editor made for the cloud.

[Watch the video](https://www.youtube.com/watch?v=lndU7UAjzgo)


## User Components Editor

I did some small changes to the User Components Editor. It now shows the properties as separated elements in the editor. It means, below each component, it shows the component's properties. So, for editing a property you should select it in the editor:

![Properties are independent elements][1]

Searching for a particular property is now way easier:

 ![Searching for properties][2]


### The user components of an object

Now the user components of an object are shown as children of the object in the Outline view:

![Show user components in the Outline][3]

For editing the properties of the component, you should select it:

![Edit user component properties][4]

## Hiding user components of prefabs

As you know, when you are editing an instance of a prefab, you can change the properties of the user components present in the prefab. Now, you have the option of hiding a user component of a prefab in the prefab instances. This may be useful when the user components of a prefab contain data and behaviors useful only for the prefab and should not be tweaked in the prefab instances.

Now you can hide a user component of a prefab by unmarking the **Export** parameter:

![The export parameter][5] 

[Learn more about User Components in the docs](https://help-v3.phasereditor2d.com/scene-editor/user-components-editor.html)

## Prefab properties

In this new version, the user properties of a prefab are shown as separated elements, below the **Prefab Properties** element in the **Outline** view:

![Prefab properties][6]

[Learn more about the prefab properties](https://help-v3.phasereditor2d.com/scene-editor/prefab-user-properties-create.html)


## Other changes

* Removes duplicated `collideWorldBounds` parameter from the **Arcade Physics Body Collision** section of the Inspector.
* Bug fix: doesn't keep user components in the object when converting it to prefab.
* Fixes background for the "New update available" notification. If you click the notification panel, it opens the `https://phasereditor2d.com/downloads` page.

## What's next?

This release was for preparing the field for a new huge feature: the "behaviors tree". This will require a lot of time & energy but I hope it will be ready before the next year.

Keep in contact!

Arian

  [1]: https://phasereditor2d.com/blog/content/images/20221102231606-select-user-property.png
  [2]: https://phasereditor2d.com/blog/content/images/20221102231655-user-component-search-property.png
  [3]: https://phasereditor2d.com/blog/content/images/20221102232101-object-components-outline.png
  [4]: https://phasereditor2d.com/blog/content/images/20221102232352-edit-user-component-props.png
  [5]: https://phasereditor2d.com/blog/content/images/20221102233124-export-parameter.png
  [6]: https://phasereditor2d.com/blog/content/images/20221102233615-prefab-properties.png