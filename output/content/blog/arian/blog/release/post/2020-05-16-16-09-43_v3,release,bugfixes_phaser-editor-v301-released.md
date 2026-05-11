<!--t Phaser Editor v3.0.1 released t-->
<!--d Minor Phaser Editor 2D v3 release with bug fixes and support for HiDPI displays. d-->
<!--tag v3,release,bugfixes tag-->

Hi,

A new version of Phaser Editor 2D v3 is public: v3.0.1. It comes with support for HiDPI displays and some bug fixes.

[Download Phaser Editor v3.0.1](https://phasereditor2d.com/blog/downloads/) 

## Games and tutorials {#games-and-tutorials}

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter, and social channels.

### Blasteroids – Conversion of this Flash Game to HTML5 is Complete!

[Cartrell Hampton](https://twitter.com/CartrellHampton) finishes his HTML5 game Blasteroids. He did a series of tutorials about how to migrate the Flash-version of his game to HTML5, with the help of Phaser and [Phaser Editor v2](https://phasereditor2d.com/v2/).

[Read the full article here](https://gameplaycoder.com/blasteroids-conversion-of-this-flash-game-to-html5-is-complete/)

![Blasteroids][1]

### Phaser Editor 2D is the web-based IDE you need for HTML5 game development. Let’s build a game with it

[Emanuel Feronato](https://twitter.com/triqui) did a review of our recent service [Play Phaser Editor 2D](https://play.phasereditor2d.com/). He created the "Block It" game in this cloud-based IDE and you can download it.

[Read the full article](https://www.emanueleferonato.com/2020/05/14/phaser-editor-2d-is-the-web-based-ide-you-need-for-html5-game-development-lets-build-a-game-with-it/)

![Block it][2]

## Phaser Editor 2D v3 HiDPI support

We added better support for HiDPI displays. The viewers inside the Files view and the Outline view now shows clear images and texts. If you have any issues in your HiDPI device, please, [file an issue in the IDE's repository](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/).

## Bug fixes

* Fixed the picking of BitmapText objects in the Scene Editor.
* Fixed the display of BitmapText and Text objects in the Outline view.
* Fixed the wrapping of the title text of the Inspector view sections.

[Read the full Changle Log](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/blob/master/CHANGELOG.MD)

# Play Phaser Editor 2D templates

We updated the project templates of [Play Phaser Editor 2D](https://play.phasereditor2d.com). Now the new projects will not include the `lib/phaser.js` file. To load the Phaser run-time, we added a reference to the [Phaser CDN](https://cdnjs.com/libraries/phaser/3.23.0) in the `index.html` file. This improves the load speed of the games and reduces the storage size of your projects.

If you are working on a project and need another version of  Phaser, you can update the `index.html` file and load the desired version.

[Play Phaser Editor 2D](https://play.phasereditor2d.com) also was updated with the v3.0.1 release of the IDE.

# What's next

This was a very small release to add better support for HiDPI displays and fix the bugs. You can take a look at the [release notes of v3.0.0](https://phasereditor2d.com/blog/2020/05/phaser-editor-v3-released-for-the-public-new-online-service-play-phaser-editor-2d), we expressed some thoughts about the near future of the editor.

Keep in contact!

Arian

  [1]: https://phasereditor2d.com/blog/content/images/20200516154113-blasteroids.png
  [2]: https://phasereditor2d.com/blog/content/images/20200516154742-phasereditor01-feronato.png