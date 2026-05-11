<!--t Welcome TypeScript IDE for Phaser Editor! t-->
<!--d How to install TypeScript IDE inside Phaser Editor, for a rich TypeScript editing experience. d-->
<!--tag typescript tag-->

**This article is not valid for the last Phaser Editor version. To install TypeScript IDE on Phaser Editor v1.4.2 please read here: https://phasereditor2d.com/blog/2017/09/how-to-install-typescript-ide-in-phaser-editor-v142**


Welcome TypeScript IDE!

We follow the work of [Angelo Zerr][1] since he developed [Tern Eclipse IDE][2], a great tool to write JavaScript code. This [Eclipse comitter][3] now is working on other promising projects that are [TypeScript IDE][4] and [TextMate for Eclipse][5], both projects that we now are going to integrate to Phaser Editor progressively.

What is TypeScript IDE? It is a set of plugins that you can install on Eclipse to edit and compile TypeScript code. It uses `tsserver` and understand TypeScrtipt projects ([tsconfig.json][6]) and Salsa projects ([jsconfig.json][7]).

[Read the complete list of features][8]

[Read the TypeScript IDE wiki][9]

[Read the release notes of TypeScript 1.2.0][10]

Install TypeSript IDE
-------------------------

Let's go step by step:

* Add Eclipse Neon to the available update sites:
 * Open the preferences window and select `Install/Update > Available Software Sites`.
 * Click the Add button and enter the Eclipse Neon update site `http://download.eclipse.org/releases/neon`:
![Add Neon site][11]
 * Press OK to close the preferences window.
* Install TypeScript IDE
 * Open the Eclipse Marketplace client `Help > Eclipse Marketplace...`.
 * Search for `typescript ide`. Note there are other plugins related to TypeScript, look in the image the one you have to install:
![TypeScipt IDE on Marketplace][12]
 * Click on the Install button and confirm all the dialogs.
 * To check that it was installed well click on `Help > Installation Details`. The TypeScript plugins should be listed.

Add TypeScript support to a Phaser project 
-------

Since version `v1.4.0-preview` Phaser Editor supports  to create TypeScript projects. Just click on `File > New > Phaser Project` and select **Add TypeScript support**:
![Enable TypeScript support in Phaser project][13]

It will create a Phaser project with the Phaser definition (`*.d.ts`) files.

To link the project with TypeScript IDE follow these  steps:

* Right click on `WebContent/tsconfig.json`file  and select `TypeScript > Add TypeScript BuildPath`.
* Right click on the project and select `Properties`. It opens the project properties dialog.
* Select `TypeScript` and check the `Enable TypeScript Builder?` field.
![Enable TypeScript builder][14]

And that's all. Now when you modify a TS file and save it, it will compile automatically to JavaScript. To change this behavior and other parameters open the `tsconfig.json` file. It shows a nice visual editor that show you the main parameters.

Try edit any file, it should show you the Phaser API auto-completions.

![Phaser auto completion][15]

We recommend you to [read the TypeScript IDE wiki][16] to learn all its features and how to configure them. It is a relative new project so please support them by [providing feedback on its issues][17]. You can open issue [on our repo][18] too.

Enjoy it!


  [1]: https://github.com/angelozerr
  [2]: https://github.com/angelozerr/tern.java/wiki/Tern-Eclipse-IDE
  [3]: https://accounts.eclipse.org/users/azerr
  [4]: https://github.com/angelozerr/typescript.java
  [5]: https://github.com/eclipse/tm4e
  [6]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
  [7]: https://code.visualstudio.com/docs/languages/jsconfig
  [8]: https://github.com/angelozerr/typescript.java
  [9]: http://
  [10]: https://github.com/angelozerr/typescript.java/wiki/New-and-Noteworthy-1.2.0
  [11]: https://phasereditor2d.com/blog/content/images/20170417145905-AddNeonSite.png
  [12]: https://phasereditor2d.com/blog/content/images/20170417150332-TypeScriptIDEInMarketplace.png
  [13]: https://phasereditor2d.com/blog/content/images/20170417150943-AddTypeScriptProject.png
  [14]: https://phasereditor2d.com/blog/content/images/20170417151601-EnableTypeScriptBuilder.png
  [15]: https://phasereditor2d.com/blog/content/images/20170417152142-TSAutoComplete.png
  [16]: http://
  [17]: https://github.com/angelozerr/typescript.java/issues
  [18]: https://github.com/boniatillo-com/PhaserEditor/issues