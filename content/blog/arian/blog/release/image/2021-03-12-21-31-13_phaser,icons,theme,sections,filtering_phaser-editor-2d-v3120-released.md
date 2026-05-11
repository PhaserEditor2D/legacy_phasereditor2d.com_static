<!--t Phaser Editor 2D v3.12.0 released! t-->
<!--d Includes Phaser v3.53.1. New icons theme. New Desing &amp; Assets filtering in Files view. New Details tab in Inspector view. And more... d-->
<!--tag phaser,icons,theme,sections,filtering tag-->
<!--image https://phasereditor2d.com/blog/content/images/20210312192329-v3.12.0-release.png image-->

Hi!

Yes, the past week I released a version of the editor, and today I'm releasing a new one! The main reason is the Phaser team published v3.53.1 of the framework so, the editor should be in sync with Phaser.

However, a release is always an opportunity for adding some new features. In this delivery, I added some I think you will like: a new icons theme, more options for filtering the Files view, and the Inspector view.

[Download Phaser Editor 2D v3.12.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it in the website, newsletter, and social channels.

### [User Tutorial] How to Create a List View Component in Phaser Editor v3

We have a new article from Cartrell Hampton!

> ...I realized that in order to create the list of players and games, I’ll need to build a list view. And since I’m using Phaser Editor v3 and its User Components functionality, I decided to build the list view, similar to how I made the button component.

[Read the article in GameplayCoder.com](https://gameplaycoder.com/how-to-create-a-list-view-component-in-phaser-editor-v3/)

![List view demo screenshot](https://phasereditor2d.com/blog/content/images/20210308053016-listview-demo-tutorial.png)

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is very important in the process of providing a more friendly and stable IDE.

## Phaser v3.53.1

The Phaser team released v3.53.1 and now Phaser Editor 2D supports it by default. New projects will include this version of Phaser. To update old projects you need to do it manually.

[Learn more about Phaser v3.53.1](https://phaser.io/download/release/3.53.1)

## Details tab of the Inspector view

The Inspector view shows the properties of the objects selected in another view or editor. In the case of the Scene Editor, the Inspector view may show a lot of properties and it could be hard for you to find the right one.

In this release, many of the properties are hidden by default and are shown only if you select the Details tab:

![Details tab of the Inspector view][2]

I did a selection for you of what I consider is a "detail" property. But you can change that, and show another property section in the Details tab. Just open the section menu and check the **Show In Details** option:

![Show properties in Details tab][3]

Sure, you can hide a property section from the Details tab by unchecking the same menu option.

## The Design and Assets tabs in the Files view

The common activities you do with Phaser Editor 2D are to design scenes and pack assets. However, your project may have a lot of files that are not related to one of these activities, like JavaScript files, configuration files, etc...

So, in this release, I included a way for you to quickly filter off the files that are not relevant for the design (or packing) activity: the Design and Assets tabs.

If you select the Design tab, then the Files view will show only Scene files, Animations files, User Components files, and Asset Pack files.

If you select the Assets tab, then the Files view will show only the assets you use in the scenes, animations, and asset packs, like images, atlas files, audio files, and pack files.

Please, give me some feedback about this :-)

![Files view and the Design and Assets tabs][4]

By default, no tab is selected and all files are shown. Even, you can collapse the "tabs sections".

![Files view collapsing tabs][5]

## Grouping prefabs by type

In the previous release, the editor included a way to group the items in the Blocks view and some dialogs. In this version, when you select grouping the items by type, the prefab files are grouped by the Phaser type they implement: Image, Sprite, Container, etc...

![Blocks view prefab grouping by type][6]

This also applies to the **Go To Scene** dialog (`Ctrl+Alt+O`):

![Go To Scene dialog grouping by type][7]

## Monochromatic icons

Yes, I replaced the old Blender icons for...  the new Blender icons! Just take a second view of the previous images. I hope you like it. In the future, I should implement a way to install different icon themes.

## Viewer cell rendering layout improvements

I improved the layout of cells when you zoom a viewer. Before, the editor used a vertical layout, showing the "image" above the "label". Now this layout is used only in few cases, like the animations in the Outline of the Animations Editor. So, by default, the images are rendered at the left of the label:

![Viewer cell rendering layout][8]

## Viewer cell rendering of BitmapFont assets

Now the BitmapFont assets are rendered in viewers using only a single character (not using the whole bitmap):

![Bitmap font rendering in viewers][9]

## What's next?

This was an "emergency release", so the plans remain the same since the previous release:

> ...work on the GitHub issues reported by you, like providing better support for JavaScript modules and 9-slice scaling.

Keep in contact!

Arian

  [2]: https://phasereditor2d.com/blog/content/images/20210312175400-inspector-details-tab.png
  [3]: https://phasereditor2d.com/blog/content/images/20210312175831-inspector-move-section-to-details.png
  [4]: https://phasereditor2d.com/blog/content/images/20210312181351-files-view-design-assets-tabs.png
  [5]: https://phasereditor2d.com/blog/content/images/20210312181809-files-view-collapse-sections.png
  [6]: https://phasereditor2d.com/blog/content/images/20210312182412-blocks-view-group-prefabs.png
  [7]: https://phasereditor2d.com/blog/content/images/20210312182538-go-to-scene-dialog.png
  [8]: https://phasereditor2d.com/blog/content/images/20210312185803-viewer-cell-rendering.png
  [9]: https://phasereditor2d.com/blog/content/images/20210312190506-bitmap-font-viewer.png