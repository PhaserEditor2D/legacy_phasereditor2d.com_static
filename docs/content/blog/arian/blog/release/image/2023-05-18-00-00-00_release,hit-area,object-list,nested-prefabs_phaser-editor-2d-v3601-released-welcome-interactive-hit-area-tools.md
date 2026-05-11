<!--t Phaser Editor 2D v3.61.0 released. Welcome interactive hit area tools! t-->
<!--d Set an object&#039;s interactive area with the new hit-area tools. Improved Object List, nested prefabs, and the new LOCAL variable scope. d-->
<!--tag release,hit area,object list,nested prefabs tag-->
<!--image https://phasereditor2d.com/blog/content/images/20230518075311-release-3.61.0.jpeg image-->

Hi!

I am excited to share the latest release of Phaser Editor 2D v3.61.0! This version brings some exciting new features, including the Hit-Area tool, enhancements to nested prefabs, and the addition of a new variable scope called LOCAL.

[Download Phaser Editor 2D v3.61.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### Paper Dog Dash

![image](https://phasereditor2d.com/blog/content/images/20230501082610-gLy5gM.png)

A new game made with Phaser Editor 2D, by [gregwoodsfrontier](https://gregwoodsfrontier.itch.io) (I love the dog)

> Local good boy delivers newspaper to local residents. 
> 
> Deliver your papers before TIME runs out.

[Play it here](https://gregwoodsfrontier.itch.io/paper-dog-dash)

## Hit Area tools

Finally, a tool for setting the interactive hit area of an object is available! Before I used user components, script nodes, or hand-written code to set the hit area, but now we have a tool for that.

So, for enabling an interactive area, go to the **Hit Area** section in the Inspector view and select the shape of the area:

![Hit area][1]

You can change the hit area with the **Hit Area Tool** (`I`). It allows dragging the handlers for changing the position, size, radius, vertex, etc...

You can select between the shapes: RECTANGLE, ELLIPSE, CIRCLE, POLYGON, and PIXEL_PERFECT. And NONE, for disabling the hit area. 

It will generate a code like this:

```javascript
// wizball
const wizball = this.add.image(191, 161, "wizball");
wizball.setInteractive(
    new Phaser.Geom.Circle(46, 46, 46),
    Phaser.Geom.Circle.Contains);
```

[Learn more about the interactive area](https://help-v3.phasereditor2d.com/scene-editor/input-hit-area.html)

## Nested prefabs enhancement

Starting today, you can declare any object in the object tree of a prefab as a nested prefab. Before, you were able to declare as nested prefab only the children of the root object or children of another nested prefab. This is not a requirement anymore, and I hope it will make your prefabs cleaner.

You will probably not notice this change in your games but I had to spend a lot of energy and time implementing it, because of its complexity. Also, I had to introduce a new format for the `.scene` files, that is backward compatible but is not compatible if you open it with previous versions of the editor. If you are working in a team, be sure all the teammates are using the same version of the editor. 

## A new variable scope: LOCAL.

![Variable scopes][2]

Sometimes, you need to reference an object in the create method, so you need the scene compiler to generate a variable for it. For example, if you have a user property that uses a third object in the create method. Before we didn't have a way to force the generation of a variable for an object unless you declare the object with a CLASS, PUBLIC, or NESTED_PREFAB scope, but it has the inconvenience that it also generates a field for it.

Now, we changed it, and the METHOD scope will force the creation of a method variable for an object. And introduced a new scope, LOCAL, which is like the previous METHOD scope, it means, the generation of a variable depends on the properties set to the object.

The new LOCAL scope is the default scope for an object.

These are backward-compatible changes, but previous versions of the editor are not going to understand the new LOCAL and METHOD scopes, so be sure all your team is using the same version of the editor.

[Learn more about variable scopes](https://help-v3.phasereditor2d.com/scene-editor/variable-properties.html?highlight=scope#scope-property)

## Object List items in the Outline view

Now the Outline view shows the items of an Object List. This allows you to order the items using the ``PageUp``, `PageDown`, `Home`, and `End`.

It also allows deleting an item by selecting it and pressing the `Delete` command:

![Object list in the outline view][3]

## Miscellaneous

* The Outline view shows some extra info next to the object name. The extra info is in the form of tags, like `#nested_prefab_inst`, `#prefab_inst`, `#script`, `#scope_public`, `#scope_local`, etc...

* The Script Node prefabs are not shown in the Blocks view anymore. You can add them with ``U`` command.

[Learn more about adding script nodes](https://help-v3.phasereditor2d.com/scene-editor/script-node-create.html)
* Excludes script node prefabs from the Blocks view when editing a non-script node scene.

## Compatibility

This new version of the editor can work on the scene files of previous versions of the editor, but the old versions of the editor can't open the scene files modified by this new editor. Please, be sure all your team is using the same version of the editor.

## Bug fixes

* [#282](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/282) Use full nested prefab path in user object variable properties.

## What's next?

The new features I did for this release are for a purpose, I want to make a new tutorial about script nodes.

I know the script nodes are a very new feature and may create confusion in the way you can use them. Myself are exploring the ways I can use the script nodes in my games. So, I want to make a series of videos to explain how to use the script nodes in a game.

Yet I have to keep working on the FX objects, but it will be after I finish the script node tutorial.

By the way, I'm posting every day on Twitter, Facebook, and LinkedIn, about [#PhaserEditor2DTips](https://twitter.com/hashtag/PhaserEditor2DTips). Follow me! 

Kind regards,

Arian

  [1]: https://phasereditor2d.com/blog/content/images/20230518082226-hit-area.jpeg
  [2]: https://phasereditor2d.com/blog/content/images/20230518092315-variable-scope.jpeg
  [3]: https://phasereditor2d.com/blog/content/images/20230518091459-object-list.jpeg