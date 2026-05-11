<!--t Phaser Editor v1.1.2 released t-->
<!--d Phaser Editor v1.1.2 released d-->
<!--tag release,GA tag-->

Hi all,

We are pleased to announce the new Phaser Editor v1.1.2 release.

The main reason of this version is to support the new Phaser v2.4.6. In addition we include a couple of new features and fixes that we find very useful.

 - **Embedded Java runtime (JRE)**. Now to run Phaser Editor you don't need to install any software. It runs out of the box.
 - **Added the GameMechanicsExplorer examples as project templates**. Probably you are familiarized with the great [GameMechanicExplorer][1] website; we added those examples as project templates so it is very easy for you to run the examples but also modify and test it again.
 - **Integrated offline help**. Both the Phaser and Phaser Editor documentation was added to the local help (`Help > Help Contents`). It makes easy the task of browse and search into the Phaser and Phaser Editor docs. In addition users can open a docked little help window (`Help > Dynamic Help`) and get hints and links related to the active views and editors.
![Dynamic help][2]
![Help][3]
 - **Use default Eclipse appearance**. In previous versions of the editor we used a modified version of the the Dark theme of Eclipse. In this release we decided to remove it and use the default themes of Eclipse. We think it makes the product to look more professional and it is more friendly with third-party components. If you like dark, you can change it in `Window > Preferences > General > Appearance > Theme`, and `... Appearance > Color Theme`.
 - **Improved JavaScript libraries**. We replaced the default JSDT JavaScript libraries by new *Browser API Library* and *ECMA5 API Library*. Now you will get a much better (yet not perfect) and documented completions of those JavaScript runtimes in the JavaScript editor. Both new libs was generated from the `ecam5.json` and `browser.json` [TernJS definitions][4].
 - **Chains, Phaser examples project templates and Phaser API editor completions** was updated with the Phaser v2.4.6 data.

In the past two months we was working hard on [Rayo][5], an experiment we did with the hope to migrate the default Eclipse JavaScript inference engine to the one provided by [tern.java][6], but yet we do not want to make a so huge step, Eclipse developers are aware of that tool and there is in the community a lot of discussion about how to improve the whole JavaScript stuff. In the meantime, we continue adding other useful tools to our IDE, like Canvas, an editor to compose simple scenes that integrates very well with the current asset manager.

There is a lot to do, and we are excited waiting for the new world that Lazer promises!


Migration guide
===============

Game projects created with previous version of Phaser Editor sticks on the old JavaScript libraries. To change them for the new Browser and ECMA5 libraries follow these steps:

 1. Expand your project and select the **JavaScript Resources** node.
 2. In the main menu, select the `Project > Reset Project Libraries`.

![Rest project libs][7]


  [1]: https://gamemechanicexplorer.com/
  [2]: https://phasereditor2d.com/blog/content/images/20160218145420-DynamicHelp.png
  [3]: https://phasereditor2d.com/blog/content/images/20160218145905-Help.png
  [4]: https://github.com/ternjs/tern/tree/master/defs
  [5]: https://phasereditor2d.com/blog/rayo
  [6]: https://github.com/angelozerr/tern.java
  [7]: https://phasereditor2d.com/blog/content/images/20160218143602-ResetRpojectLibs.png