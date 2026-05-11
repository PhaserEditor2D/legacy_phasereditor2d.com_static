<!--t Phaser Editor v2.1.5 released t-->
<!--d New Phaser Editor release to support Phaser v3.21.0. Bug fixes and Scene Editor small new feature. d-->
<!--tag asset pack,scene editor tag-->

Hi,

Phaser Editor v2.1.5 is here!

[Download Phaser Editor 2D v2.1.5](/blog/downloads/)

This is a small release, to keep updated with the latest Phaser release and with the user requests. Also, we have some news about our secret project.

<!-- index-start -->

* [Games and tutorials](#games-and-tutorials)
* [Phaser 3.21.0](#phaser-3-21-0)
* [Scene Editor](#scene-editor)
* [Texture Packer](#texture-packer)
* [Phaser Editor v3](#phaser-editor-v3)

<!-- index-end -->


## Games and tutorials {#games-and-tutorials}


If you are creating games, tutorials or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter and social channels.

## Phaser 3.21.0 {#phaser-3-21-0}

The latest version of Phaser is now built-in. It is included in the project wizards, the Scene Editor, and the Phaser Labs tools. 

The Phaser runtime files of your old projects are not updated. If you wish to update your game runtime to the new Phaser version you should do it manually. [Learn more about it in the docs](/docs/v2/workbench.html#phaser-version-update).

If you created a project in a previous version of the editor, and you want to update to the new Phaser runtime, you should do it manually, by replacing the `WebContent/lib/phaser.js` file.

## Scene Editor {#scene-editor}

We added a new parameter to the Scene settings: the "Scope Blocks to the scene folder". If you set on this parameter, the Blocks view displays only the assets that belong to the same folder (or sub-folder) of the scene. This is a feature requested for one of our clients.

![Scope Blocks is on](/blog/content/images/v2.1.5/scope-blocks-to-scene-on.png)

![Scope Blocks is off](/blog/content/images/v2.1.5/scope-blocks-to-scene-off.png)

## Texture Packer {#texture-packer}

Fixed a bug with the texture packer when the atlas is set to be trimmed. The frame values were set to 0 in certain cases. This was requested by a client.

## Phaser Editor v3 {#phaser-editor-v3}

We keep working on our secret project, at full-time and full-speed! There is a lot of progress. Because we are developing everything from scratch, we have some main tasks: 

- Create a cloud-IDE framework.

- Create Phaser related editors (like a scene or animation editors).

- Create HTML editors (JavaScript, TypeScript, HTML, CSS, etc...).

- Create different backends for the files (in a local or remote HTTP server, in a cloud service like Dropbox, in the browser storage, etc...).

We are progressing on all those tasks. You can open or create new projects. Upload, delete, rename and move files. Create new files with dedicated wizards. Create asset pack files and scene files. We added some buttons to the toolbar and the main menu, where you can change the UI theme. The backend we are implementing is an HTTP server that you can run locally or in a remote machine. Take a look to this demo video:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6PYiRuQiIT4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



Keep in contact!

Arian