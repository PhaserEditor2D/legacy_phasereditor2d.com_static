<!--t Phaser Editor v1.4.2 released t-->
<!--d Phaser Editor v1.4.2 released. Bug fixes, new JavaScript 6 generators and update to Eclipse Oxygen. d-->
<!--tag release,oxygen tag-->

Hello,

Phaser Editor v1.4.2 is ready for download!

In this release there are some small  (but nice) new features, bug fixes and a huge update of the base platform: Eclipse.

[Download Phaser Editor v1.4.2][1]

Updated to Eclipse Oxygen
-----------------------

Phaser Editor is based on Eclipse and in this release we are updating to the last release of the platform. You can read the Eclipse Oxygen release notes here:

[Eclipse Oxygen - New and Noteworthy > Platform][2]

(This update from Neon to Oxygen is a bit drastic, so please read the known issues at the end of this section)

We added the Eclipse Update Site to the editor by default, so you will start getting Eclipse updates "by free" from time to time. You can disable it on `Windows > Preferences > Install/Update > Available Software Sites`.

If you have a 4K display please give a try to this new version, there is a better support for HiDPI monitors. Any feedback on this is welcome.

**MacOS users pay attention!** There is an issue with the automatic update in your platform, please [read it before to update][3]. A fresh install is working well.

**Users from Windows and Linux** If you have any issue by starting the editor after the automatic update, please try with:

Windows:

```
PhaserEditor.exe -clean
```

Linux:

```
./PhaserEditor -clean
```

New `setAll` property (scene editor)
----------------------------------------

Phaser groups (`Phaser.Group`) contain a couple of helpfully methods to modify or access the children objects, on of these methods is `setAll`, that is often used on the creation of scenes to initialize some values of the children objects.

For example, if you are creating a platformer game you can group all the ground sprites on a group and set all the children to `body.immovable = true` in this way:

```
groundSprites.setAll("body.immovable", true);
```

Now you don't need to write it, you can click on the `groundSprites` group and edit the `setAll` property.

The `setAll` property editor is very simple, it is a dialog with a key/value table. For each row of the table a new `setAll` call will be generated, the first column will be generated as the property name and the second column as the property value. Note that the name is generated inside a string expression `"`...`"` but the value of the property is generated verbatim, so you can write any expression there, a string literal, a number, a boolean, a function call, the name of a variable, whatever you want.

![The setAll property][4]

In a next version of the editor we are going to improve this dialog with the option of select the property name from a list of common and/or user defined names.
 
New `renderable` property (scene editor)
-------------------------------------------------

In Arcade physics games you can use "hidden layers" to add physics properties to a set of sprites, like to ground sprites. In Phaser Editor we use this technique in retro/fixed size games for example.

To hide a sprite but keep it enable for physics you can set its `renderable` property to false. Now you can set it in the scene directly (before we was setting it in code).


New `fixedToCamera` property (scene editor)
------------------------------------------

The `fixedToCamera` property is very used on scrolling games, where you want the background or game control objects keep stick on the screen. Now you can set this property in the scene editor.

In future versions we are going to add a new Camera object.

Welcome to JavaScript 6 code generator
-----------------------------------------------

JavaScript 6 is a major update to the JavaScript language. However browsers do not support all the features, the  developers prefer to create their programs with this language and, if needed, compile the sources to JavaScript 3/5 before to publish to the web.

Phaser Editor now supports JS 6 projects and code generators, you only need to select "JavaScript 6" in the language field of project wizards:

![Select JS6 on new project wizard][5]

By default the scenes will get the language preference from the project, but you can change it on the Configuration tab:

![Set JS6 language to scenes][6]

Unfortunately, JavaScript 6 is not well supported by the JavaScript editor provided by Phaser Editor so we decided to avoid using it. If you are those who prefer to create the scenes with Phaser Editor but code the logic in other editor, then it is not a problem, you will get the JS 6 code so you will be able to edit it in the editor of your choice.

But if you are those who prefer to do everything in the same place, then we recommend to you to [install the TypeScript IDE plugin inside Phaser Editor][7]., that plugin supports TypeScript and JavaScript 6 and the projects generated by Phaser Editor are full compatible. Actually, we are planning to include (very soon) that plugin in Phaser Editor and make it the default choice to edit JavaScript and TypeScript.

Bugs fixing
--------------

We fixed the selection of sprites when are based on map of textures with trimmed white spaces.

The align functions were simplified, now when you try to align a single sprite it will get as reference the scene bounds and not the parent group bounds.

Thanks
---------

Thanks to [OmarShehata][8] for the fixing of [some grammar/language issues][9] with the docs :)

Keep in touch! For the next release we are going to add support to Text objects in the scene editor.

[GitHub release notes][10]

Regards
Arian


  [1]: https://phasereditor2d.com/blog/downloads
  [2]: https://www.eclipse.org/eclipse/news/4.7/platform.php
  [3]: https://github.com/boniatillo-com/PhaserEditor/issues/47
  [4]: https://phasereditor2d.com/blog/content/images/20170823150347-SetAll.png
  [5]: https://phasereditor2d.com/blog/content/images/20170824134052-SelectJS6_ProjectWizard.png
  [6]: https://phasereditor2d.com/blog/content/images/20170824134353-SelectJS6_Scene.png
  [7]: https://phasereditor2d.com/blog/2017/09/how-to-install-typescript-ide-in-phaser-editor-v142
  [8]: https://github.com/OmarShehata
  [9]: https://github.com/boniatillo-com/PhaserEditor/commit/bbdf1dc5b58b4352b4df80d002e01771651e893e
  [10]: https://github.com/boniatillo-com/PhaserEditor/releases/tag/v1.4.2