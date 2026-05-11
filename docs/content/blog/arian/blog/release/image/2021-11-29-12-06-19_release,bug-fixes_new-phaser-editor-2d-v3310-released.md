<!--t Phaser Editor 2D v3.31.0 released. t-->
<!--d A new version with important bug fixes and small new improvements. d-->
<!--tag release,bug fixes tag-->
<!--image https://phasereditor2d.com/blog/content/images/20211125093726-release3.31.0.png image-->

Hi!

I'm happy to deliver a new version of Phaser Editor 2D!

By the way, the editor sold this year's Black Friday/Cyber Monday season more than ever. Thank you!

[Download Phaser Editor 2D](https://phasereditor2d.com/downloads)

This v3.31.0 is all about bug fixes (and some small additions). Many of these bugs were reported by users. Especially, users who are pushing the editor to the edge of its concepts and architecture.

It is the case of the prefabs and nested prefabs architecture. This release includes a couple of bug fixes and small changes for making it a more robust solution.

I recommend you update your projects to this release as soon as possible. Open the project with this version of the editor, compile all the scenes, and test the game. Let me know if you have any issues. It is always a pleasure to support you.

Keep with me until the end of this post. I will share some thoughts about how is it going with the editor and what is next.

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is very important in the process of providing a more friendly and stable IDE.

## Changing the default render type

There are two new commands for changing the default renderer type of the Scene Editor. If your game is all CANVAS renderer based, then you may want to use the same CANVAS type when editing the scenes:

![Commands for changing the default render type][1]

These commands require refreshing the browser.

## Open the game in the browser (All-in-One edition)

Some of you reported it is hard to debug a game when it runs in the browser provided by the All-in-One edition. Now when you run a game inside the editor, it opens the OS default browser.

However, I recommend you take a look at Webpack (or similar tools) and third-party development servers. The Phaser Editor 2D built-in HTTP server is very basic and doesn't cover all the complexity of web development. A good start point is the [Webpack project template](https://phasereditor2d.com/start/).

## Other additions & changes

* [#145](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/145): BitmapText: adds support for `maxWidth` property.
* [#147](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/147) Scene compiler: formats Text style JSON with a VSCode similar formatting.

## Fixed origin serialization

Phaser 3 doesn't have a consistent default value for the origin of the objects. For images, sprites, tile sprites, the origin is at the center of the object `(0.5, 0.5)`. However, for the text and bitmap text objects, the origin is at `(0, 0)`. When I created the first version of the scene editor, I assumed the same origin default value for all the objects: `(0.5, 0.5)`, and added some tweaks in the scene serialization and code compilation to target the cases when the default origin of an object is not at the center.

That was a very bad and lazy solution. Later I introduced nested prefabs and things got worst, generating bugs in the representation of multi-level nested prefabs of texts and bitmap texts.

The default value of any property is essential for serialization and code generation. If the value of a property is the same as the default value, then it is not included in the compiled code and the `.scene` file.

In this release I took the time for implementing a better solution, assuming the origin of an object is variable and depends on the type of the object. Now we have a cleaner solution, but it introduces incompatibilities with the data of previous `.scene` files, where the default origin of objects is always at the center.

So I had to implement an automatic migration routine, for converting old scene files (tagged with version 2), to the new scene files, with the right origin values (tagged as version 3).

I tested this migration process on test-case projects and real, large, projects. And some early adopters helped me by testing their projects. For migrating your project follow these steps:

* Make a backup of your project (Git is great for this 😀)
* Open the project in this version of the editor.
* Check all objects are well placed in the scenes. Pay attention to texts and bitmap texts.
* Compile all the scenes (`Ctrl+Alt+B`).
* Check there aren't compilation errors (in case you are using TypeScript).
* Finally, run the game and check it is working well.

 If it fails in your project, please, contact me for supporting you in migrating your scene files.

Check this issue for getting more context in the bug and the solution:  [150](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/150).

## Unlocked property serialization

As I explained before, the logic behind including a property value in the compiled code and serialization of the `.scene` file, is to compare the current value with the default value. If both values are the same, then it is omitted.

However, in the case of an unlocked property of a prefab instance, it is more consistent to include the property value even if it is equal to the default value. When you unlock a property, you are saying you want to overwrite it, it doesn't matter if you set the same value again. If you want to keep the default value of the property and omit it in the code, then lock it again. Locking a property means that you want to keep it with the default (prefab) value.

This means that probably you will see additional code when you compile your old scene files with the new version of the editor. I recommend you keep an eye on this when you do the migration steps I explained before.

## Other fixes 

* [#154](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/154) Incorrect position values passed to super call in a derived class of nested prefab.
* Scene editor: fixes Break Parent command.
* [#143](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/143) Fixes bitmap font loading when pasting a bitmap text object from another scene.
* [#154](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/154) Incorrect position values passed to super call in a derived class of nested prefab.
* Scene Editor: allows changing the origin of a container prefab instance with an un-locked position.
* Scene Editor: fixes var name of nested prefabs.

## New Enterprise Tier

I added a new tier to the [Phaser Editor 2D Backers membership](https://fornaris.gumroad.com/l/phasereditor-backers).

This is an Enterprise Tier for is business clients who are looking to the editor as a long-term solution for developing their products. I'm very happy that right now the editor has two subscribers to this tier.

In general terms, this is what you get as a business:

* You can share the license key (generated by this membership) with your team.
* You can request permanent access to the closed-source parts of the editor.
* You can request permanent access to the scripts for building the final products:
  * Phaser Editor 2D Core.
  * Phaser Editor 2D All-in-One.
* You can modify the editor's source code and create custom products for the internal use of your business.
* You can ask for including new features or particular bug fixes in the editor's public development plan.
* You can ask me to support your team in solving a particular editor issue. It does not include Phaser or third-party software issues.
* You can negotiate any other request 

Please, check the whole [Enterprise Tier Agreement](https://phasereditor2d.com/pricing/Phaser%20Editor%202D%20Backers%20Membership%20-%20Enterprise%20Tier%20Agreement.pdf).

## Welcome Bitcoin!

Some days ago, a user asked me for paying a lifetime license with Bitcoin. I know there are a lot of places where people don't have access to an international bank account or international payment platforms. For example, myself. Cuba is under US sanctions and all of these are banned for the Cuban people.

If you have BTC and want to pay a Phaser Editor 2D License, please, contact me, cryptocurrencies are welcome!

## What's next?

I keep working on side projects, developing games with Phaser Editor 2D. Well, I don't see them as fully side projects, since I'm constantly getting back to the editor for adding small features or fixing bugs. Working on real games (not only demos or jams) is something I always wanted to do and I believe at the end, or at the very beginning, it helps me have a more practical view of the editor and its mission. I feel very happy about it. That's rewarding when using the editor has a huge impact on completing a job in time and with quality.

At the same time, I keep close working with the editor's community. Especially, those of you who are reporting feedback, bugs, and ideas.

I talked in the previous release of the editor, about the marketplace. I'm working on it. I'm developing a website for the game devs community in Cuba, and I think I will use the same tech stack for making the Phaser Editor 2D Marketplace: static site generators!

I'm fascinated by how you can integrate a static site generator with a service like GitHub and Netlify. The marketplace is more about the users consuming the resources, and I think this is a solution with a good balance between the efforts for developing it, for consuming it, and for contributing to it.

Regarding the IDE, I have some subjects in line:

* Simplify the way you make new extensions (like adding new game object types). 
* Implement a layout manager.
* Implement the GameObject type. That is like an object you add to the scene that adds logic and behaviors.
* Implement the Geom objects.
* Implement the Polygon shape.
* Allow rendering more in-scene info of an object, like its label or the relation with other objects.
* Add a new type of user property: the Object Reference property.

Sure, probably all of these are not going to happen soon, but it is what I have in mind and some users are missing in their daily work with the editor (including myself). The next big pending task is to implement the Timeline Animator, but yet it is not the time for it.

Keep in contact!

Arian

  [1]: https://phasereditor2d.com/blog/content/images/20211129084122-set-default-render-type-commands.png