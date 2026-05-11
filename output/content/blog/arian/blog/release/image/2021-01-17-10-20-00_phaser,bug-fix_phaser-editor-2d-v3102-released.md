<!--t Phaser Editor 2D v3.10.2 released t-->
<!--d A new minor release to update to the latest Phaser 3.52.0. Configure external editor and other minor features. Bug fixes. d-->
<!--tag phaser,bug fix tag-->
<!--image  https://phasereditor2d.com/blog/content/images/20210117120824-release3.10.2.png image-->

Hi!

A new version of Phaser Editor 2D is ready for download!

[Download Phaser Editor 2D v3.10.2](https://phasereditor2d.com/downloads)

In this minor release, we update the editor to the latest Phaser version (3.52.0). Also, we added some small features (like configuring the external code editor) and fixed some bugs.

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, and we will be proud to feature it in our website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is essential in providing a more friendly and stable IDE.

## Phaser v3.52.0

We include in this release the latest version of Phaser.

[Read the Phaser v3.52.0 release notes](https://github.com/photonstorm/phaser/releases/tag/v3.52.0)

## Configuring the external code editor

The primary focus of Phaser Editor 2D is providing visual tools for design scenes and gameplay. It also includes a basic JavaScript editor, but we always recommend, if possible, to use Visual Studio Code for editing your JavaScript/TypeScript files.

From the main menu of the editor, you can open the current project in Visual Studio Code:

![Open VS Code][2]

In this version, we added the option to configure a different external code editor. It is similar to the way you configure a different browser. When running the editor server:

```
$ PhaserEditor2D -external-editor-command "'C:\path\to\atom.exe' '$LOC'" -external-editor-name "Atom"
```
The `-external-editor-command` sets the command to execute the editor. The `$LOC` variable is expanded with the full path to the project.

The `-external-editor-name` option sets the display name of the editor:

![Open Atom editor][3]

If you want to set these options by default, you can [modify the flags file](https://help.phasereditor2d.com/v3/misc/server-options.html#getting-the-options-from-a-file).

[Learn more about setting server options](https://help.phasereditor2d.com/v3/misc/server-options.html)

## Minor updates

The **Go To File** (`Ctrl+P`) dialog now shows the full path of the files:

![Go to file dialog][4]

The String User Properties now support multi-line values:

![Multi-line string user property][5]

## Bug fixes

* Scene Editor: Fixes scene creation when a BitmapText font key is missing in a pack file.
* Files view: fixes bug on opening the context menu for files without a registered editor.

## What's next?

We keep working on the new Help Center and the issues reported on GitHub.

Keep in contact!

Arian


  [1]: https://phasereditor2d.com/blog/content/images/20210117120824-release3.10.2.png
  [2]: https://phasereditor2d.com/blog/content/images/20210117100349-open-project-in-vs-code.png
  [3]: https://phasereditor2d.com/blog/content/images/20210117101500-open-atom-editor.png
  [4]: https://phasereditor2d.com/blog/content/images/20210117102312-go-to-file-dialog.png
  [5]: https://phasereditor2d.com/blog/content/images/20210117102539-multi-line-user-property.png