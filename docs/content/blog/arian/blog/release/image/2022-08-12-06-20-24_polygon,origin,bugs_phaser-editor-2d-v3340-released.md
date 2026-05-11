<!--t Phaser Editor 2D v3.34.0 released t-->
<!--d A new version with a new Polygon game object, origin tool improvements, and bug fixes. d-->
<!--tag polygon,origin,bugs tag-->
<!--image https://phasereditor2d.com/blog/content/images/20220811041601-phasereditor-v3.34.0.jpeg image-->

Hi!

I'm glad to announce a new version of Phaser Editor 2D! It contains a new Polygon shape game object and re-worked layout tools with new Origin commands.

[Download Phaser Editor 2D v3.34.0](https://phasereditor2d.com/downloads)

A lot happened to me since the last release of the editor. I made a tutorial about [integrating Google H5 Ads with a Phaser game](https://phasereditor2d.com/blog/2022/06/integrating-google-h5-ads-with-phaser-editor-2d).  I created [my first game (and studio?)](http://matandile.videojuegoscuba.org/) for the Cuban market. The local TV channel in my small town did a [TV report about it](https://www.youtube.com/watch?v=o4oNtuXnVOg&t=69s) 😎. I got sick with dengue for a week. I was contributing to the organization of the [first videogame development festival in Cuba](http://festival2022.videojuegoscuba.org/). I traveled with family to enjoy something about this summer and now I'm painting my house. I hope to get back fully into the editor development in a week.

## Polygon game object

Now you can add polygon shapes to the scene! This is a feature requested by clients and sponsors for a long time.

For creating a polygon shape, drag the Polygon block into the scene:

![Polygon block][2]

Also, you can activate the Polygon tool (`Y`) and edit the polygon's points.

You can drag or delete a point:

![Drag a point][3]

And you can add a new point, by dragging at a point of a polygon side:

![Add polygon point][4]

[You can learn more about the Polygon in the documentation](https://help-v3.phasereditor2d.com/scene-editor/shape-polygon-object.html)

## Origin commands in the layout toolbar

I added new Origin commands to the layout toolbar in the scene. It is a shortcut for setting the origin of an object while preserving the same position:

![Origin commands in the layout tools][5]

The commands are available also in the context menu:

![Origin commands][6]

[Learn more about the origin layout tools in the documentation](https://help-v3.phasereditor2d.com/scene-editor/layout-tools-origin.html)

## Other changes

* Fixes assets preloading when pasting a layer/container prefab from another scene.
* Removes the `Key` and `Digit` prefixes from the label of commands.
* Scene Editor: fixes layout operations with scaled images.
* Scene Editor: improves layout toolbar. Adds origin actions.
* [#229](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/229) Fixes serialization of tilemap layers as children of containers and layers.

## What's next?

Complete the house painting! Then I will get back to work and focus on the new features: an Arcade physics object and some body-editing tools.

Keep in contact!

Arian


 
  [2]: https://phasereditor2d.com/blog/content/images/20220811032959-polygon-block-20220811.jpeg
  [3]: https://phasereditor2d.com/blog/content/images/20220811033515-drag-polygon-point.jpeg
  [4]: https://phasereditor2d.com/blog/content/images/20220811033903-add-polygon-point.jpeg
  [5]: https://phasereditor2d.com/blog/content/images/20220811034930-origin-in-layout-toolbar.jpeg
  [6]: https://phasereditor2d.com/blog/content/images/20220811040126-origin-commands-context-menu.jpeg