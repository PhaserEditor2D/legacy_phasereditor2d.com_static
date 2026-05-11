<!--t Phaser Editor 2D v3.9.2 released. Loading large projects. t-->
<!--d New hotfix release to improve UI responsiveness dealing with large projects. d-->
<!--tag hotfix,large projects,preload tag-->

Hi!

We just released v3.9.2! The second hotfix for version 3.9.x.

We were working closely with a team who has a huge project (with lots of images, scenes, and prefabs) on improving the responsiveness of the editor.

[Download Phaser Editor 2D v3.9.2](https://phasereditor2d.com/downloads)

Finally, we managed to improve some UI elements (especially tree/grid viewers) and the result is satisfactory. If you are working on a sized project, we strongly recommend updating the editor.

## Scene Editor

As you may know, we generate a thumbnail image of each scene of the project. We use that image to show the prefab files in the Blocks view or preview of the scenes in the Inspector view. Now, those thumbnail images are cached in a browser Indexed DB. It means, the second time you open a project, it will not request all the resources needed to create the scene thumbnail images.

You can clear the thumbnail cache by opening the Commands Platter and executing the **Scene Editor: Clear Scene Thumbnail Cache** command.

We also improved the method to "screenshot" a scene. Now, scenes and prefabs based on containers has more accurate thumbnails. Basically, what we do is to flatten the scene into a list of objects with absolute positions, then we compute the scene bounds.

## Viewers

As we mentioned at the beginning, we improved the way viewers display the project content. We did a better job on loading only the files needed to "paint" the viewers. You should not experience a "freeze" on the UI when you filter the viewers. Also, we realized that "text measuring" is an expensive operation and has a huge impact on performance when you are display lot of items. We improved that method too, using a cache or char and text measuring.

## Other changes

* Fixed a layout issue with dialogs based on viewers.
* Dialogs based on viewers allow to open items with the `Enter` key.
* The Electron-based editor does not disable gzip of text files. It improves loading times.

## What's next?

Phaser v3.50 support!

Keep in contact,

Arian

