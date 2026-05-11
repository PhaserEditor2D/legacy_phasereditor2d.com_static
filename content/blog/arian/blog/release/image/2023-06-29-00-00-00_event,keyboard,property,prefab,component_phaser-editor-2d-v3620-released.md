<!--t Phaser Editor 2D v3.62.0 released t-->
<!--d A new release with new property types, improved user properties presentation, bug fixes, and more. d-->
<!--tag event,keyboard,property,prefab,component tag-->
<!--image https://phasereditor2d.com/blog/content/images/20230627214016-release-v3.62.0.jpeg image-->

Hi!

Today I'm releasing a new version of Phaser Editor 2D. This one comes with a couple of additions, improvements, and bug fixes. New Event and KeyCode user property types. The old way of presenting user components and user properties in objects is back, but better.

[Download Phaser Editor 2D v3.62.1](https://phasereditor2d.com/downloads)

<small>[v3.62.1: Change log](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/releases/tag/v3.62.1)</small>

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### Kara's Cafeteria

![game screenshot][1]

Help Kara beautify, expand, and provide the best customer service in the city.

[Play it in GamePix](https://www.gamepix.com/play/kara-s-cafeteria)

### The new Event property type

We have a new property type: Event. It is a string property but with an event name as a value. It provides a dialog for selecting an event name from a list built on the fly with the static & dynamic Phaser API events, plus event names defined by the user.

The static Phaser API events are those available in Phaser in the different `Events` namespaces.

The dynamic Phaser events are those you get by combining a prefix with a list of values. For example, `keydown-SPACE`, `keyup-ENTER`, `animationcomplete-Gorilla-Idle`, `animationcomplete-Gorilla-Run`, etc...

The user-defined events are those declared in the `events.txt` files.

![Event property type](https://help-v3.phasereditor2d.com/_images/prefab-user-props-select-event-name-20230626.webp)

[Learn more about the Event property in the documentation.](https://help-v3.phasereditor2d.com/scene-editor/prefab-user-properties-event-type.html)

### The new KeyCode property type

This new property type allows selecting as value one of the constants defined in the `Phaser.Input.Keyboard.KeyCodes` class. Its primitive type is a number. You can use this property for binding action or behavior with a keyboard key.

![keycode dialog](https://help-v3.phasereditor2d.com/_images/prefab-user-props-keycode-2-20230627.webp)

[Learn more about the KeyCode user property type in the documentation](https://help-v3.phasereditor2d.com/scene-editor/prefab-user-properties-keycode-type.html)

### Reviving user components

A couple of releases before I changed the way the editor presents user components: as individual nodes in the Outline view. It was the first step in the way of script nodes. But definitively many of you found it confusing and workflow-breaking. I changed it in this release. I listened to you and now the user components are back in the Inspector view, next to the other properties of the editor. You don't need to go to the Outline view to find the components of an object and select it for edit. Now you select an object and all the user components are there in the Inspector view.

However, I did a small change. Now every user component is presented in the Inspector view as an individual section. I see it more naturally, now it feels just like any other built-in property section.

![User components][2]

[Learn more about User Components in the documentation](https://help-v3.phasereditor2d.com/scene-editor/user-components.html)

By the way, [I wrote a small guide](https://help-v3.phasereditor2d.com/scene-editor/script-node-vs-user-component.html) about deciding when to use user components or script nodes.

### Improving the prefab properties presentation

Prefab user properties follow the same path. Now the prefab properties of an object appear in its own section in the Inspector view:

![Prefab instance properties][3]

In the picture above it shows the prefab properties of an apple object. The object is an **Apple** prefab instance, that at the same time is a **FoodItem** prefab variant.

[Learn more about the prefab instance properties in the documentation](https://help-v3.phasereditor2d.com/scene-editor/prefab-user-properties-prefab-instance.html)


### Others

* [#284](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/284) Fixes hit area rendering for containers.
* A new Add Prefab Property command that shows a dialog.
* Unify all depth/order related commands in the Edit context menu.
* Allows changing prefab properties order with the Edit order commands.
* Allows copy/cut/paste of prefab properties.
* Allows copy/cut/paste keyboard keys.
* Shows Keyboard.Key and Object List objects in the Object Variable user property's dialog.
* Fixes hit area serialization.
* Renames the Scripts context menu to Scripting and include:
        - Add User Component (`M` key)
        - Browse User Components (`Shift+M` key)
* Fixes adding a script node to all selected game objects.
* [#223](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/222) Fixed tab-focus on the DOM elements of the user properties.

### What's next?

I did all this work focused on the tutorial I want to record for using script nodes. I confess making tutorials is harder than writing documentation for me. But I should make it. I'm thinking about how to make it short and effective because I should start working as soon as possible on a new and "secret" task... about hosting the editor in a certain place 🤓.

I was working on my own games at the same time I was working on the editor. It consumes time and energy but I have to do it. It helps me on improving the editor and also helps me to connect with the people and myself. A week ago I visited a community school in my town, with one of my math games. It was a deep and emotional experience for me working with the kids and helping the kids. It confirms to me again I'm in the right profession and gives me fuel.

Keep in touch!

Arian

![In a community school][4]

![In a community school][5]


  [1]: https://phasereditor2d.com/blog/content/images/20230627220143-karas-cafeteria-game.jpeg
  [2]: https://phasereditor2d.com/blog/content/images/20230627233336-user-components.png
  [3]: https://phasereditor2d.com/blog/content/images/20230628101428-prefab-properties.jpeg
  [4]: https://phasereditor2d.com/blog/content/images/20230628105215-IMG_20230616_092710.jpg
  [5]: https://phasereditor2d.com/blog/content/images/20230628105319-IMG_20230616_094108.jpg