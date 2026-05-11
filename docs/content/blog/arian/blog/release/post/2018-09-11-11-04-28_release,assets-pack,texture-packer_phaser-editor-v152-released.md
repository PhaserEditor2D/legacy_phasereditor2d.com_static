<!--t Phaser Editor v1.5.2 released t-->
<!--d A minor release with bug fixes and some small new features. d-->
<!--tag release,assets pack,texture packer tag-->

Hi,

Today we are releasing a minor release of the v1 of the editor: v1.5.2.

[Download v1.5.2][1]

We are putting all our energies on releasing a preview of the v2, but v1 is going to be updated until the users request it.

These are the v1 updates:

## Texture Packer

A new parameter was added to the Atlas Generator editor: `Use folders name`. When this option is selected, the name of the frames includes the folder name of the source image. It can help the developer to a certain classification of the images. See [#85][2].

![Atlas Generatorparameter Use folders names][3]

## Asset Pack editor

Now it is possible to add many images (and the other asset types like video, audio, atlas, etc...) at once in the Asset Pack editor. When you press the Add button it shows a dialog with all the images, so you can select those you want to add. See [#84][4].

![Asset pack editor: allows add many images at once][5]

## Canvas editor

Fixed bug [#79][6]: add the tilemap to the parent group. Note the tilemaps are fixed to the camera by default.

Fixed bug [#78][7]: escape string literals of text objects.


## What's next

Now we are going back to the development of v2. We are very exciting because it is the time of migrating the scene editor.

We are considering to do a deep replacement of the scene rendering. Right now we are using the JavaFX toolkit but it is terrible for rendering pixel art (antialiasing and interpolation cannot be disabled), so probably we are going to implement a native SWT renderer. This will take some time and we have to do some investigation on mix SWT with JavaFX in the same scene, but we think the final result will be faster and more accurate.

Keep in touch!

Arian


  [1]: https://phasereditor2d.com/blog/downloads
  [2]: https://github.com/PhaserEditor2D/PhaserEditor/issues/85
  [3]: https://phasereditor2d.com/blog/content/images/20180910103238-Atlas%20generator%20include%20folder%20name.png
  [4]: https://github.com/PhaserEditor2D/PhaserEditor/issues/84
  [5]: https://phasereditor2d.com/blog/content/images/20180910105450-Asset%20pack%20editor%20add%20many%20images%20at%20once.png
  [6]: https://github.com/PhaserEditor2D/PhaserEditor/issues/79
  [7]: https://github.com/PhaserEditor2D/PhaserEditor/issues/78