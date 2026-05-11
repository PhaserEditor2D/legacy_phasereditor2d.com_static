<!--t Phaser Editor v1.3.0 released t-->
<!--d Phaser Editor v1.3.0 released with great stuff: marketplace client, auto updates, canvas improvements and more. d-->
<!--tag marketplace,update,scene tag-->

Hi,

We are happy to announce the  new Phaser Editor v1.3.0 release. We have been working on it during 3 months but with some pauses, caused by personal issues.

However the interruptions, this is a great release:

* The visual level editor is now more robust, it is not a preview component anymore.
* The base platform (Eclipse) was updated to the latest version (Neon.1). Neon introduced very nice features and performance improvements.
* We enabled the Eclipse Marketplace so you can install third party plugins like EGit, to manage repos. There are some TypeScript plugins outthere, we are going to test them in the next days.
*  The Eclipse Provisioning  tooling was included in the editor, it means, now Phaser Editor can be updated with a click! Bug fixes and new Phaser versions support will be available to you quickly, without the need to download the whole editor.

Before to go deeper in the change log we want to comment about the new directions of the Phaser development. 

Now on there are two main directions in the Phaser development:

* Phaser CE (community edition)
* Phaser v2.6.2 and later Phaser v3.

For now, we, the Phaser Editor team, do not plan to support Phaser CE, only Phaser v2.6.2 (the current official release of Phaser) is supported, until the next official release, that should be Phaser v3.

It does not mean that Phaser Editor cannot be used to develop Phaser CE games. For now there are not breaking changes in the API so you can keep using our editor to develop your Phaser CE games.

## Change log

### The new types of licenses

A user asked to us a lifetime license and we liked the idea.  So now you have the option to purchase different types of licenses: a license (the standard one) to unlock the editor for one year. A license to unlock the editor for 2 years and a license to unlock the editor for life. The only differences between them are the expiration time and the price. It looks like many developers prefer the lifetime license.

A teacher from a university contacted with us asking for a discount to purchase a package of licenses to be used by his students. We do not have yet an official license or procedure for that, but if you are a teacher or a studio and you are interested on purchase a package of licenses please do not hesitate to contact with us, we can provide you a discount.


### Spanish support
   
We realized that we have to write in our sites that we can provide support in Spanish. Many Spanish-speaking developers contact with us using the English language. It is a pleasure to us to read and answer your emails in your mother tongue. To write about programming in Spanish could be hard some time, because many technical terms do no have an easy translation, if it is the case, do not worry, you can merge Spanish with English as well.

The only thing we ask to you is that if you are contacting with us through public channels like Github issues, Blog comments, etc... we prefer to use English, in that way the other readers can understand the thread. In any case we are always open to receive private messages specially if you write an email to developers@boniatillo.com.

### New learning content

We strongly recommend to read an article we published in the GameDevAcademy blog. It is a tutorial to learn, step by step, how to make a platformer game:

[Make a Mario-style game with Phaser Editor][1]

It is a perfect complement to the Phaser Editor documentation.

### Scene editor

* Bug fix: the stepping (if enabled) is not applied when dragging many objects.
* Bug fix: wrong size of sprites based on textures from an atlas with Strip Whitespaces enabled.
* Bug fix: select an object (pick it with the mouse) is not working in certain cases.
* Overall performance improved (by enabling the JavaFX image cache): scene loading, objects deletions, undo/redo operations, zoom... 
* Better handling of missing assets. When a file or asset definition (in the asset pack) is missing, the scene shows a special "sprite" with an error message like this:
<br>
![Missing asset sprite][2]
<br>
When the asset or file is restored the sprite will be reconnected with it automatically.
* Improved scene serialization format to reduce the loading speed and file size. Now it uses an asset lookup table. Older files still compatible.
* The animations editor now support two new fields: **Kill On Complete** and **Public**.
  * **Kill On Complete** is a Phaser property (`Phaser.Animation.killOnComplete`) that you can enable to destroy the sprite when the anmiation is completed.
  * **Public** is not a Phaser concept, it is a field you can enable to indicate the editor to generate a public field to references the animation in cuestion. For example, if you have a sprite **player** and make public its **walk** animation, then the editor will generate a `fPlayer_walk` field that you can access like this: `scene1.fPlayer_walk.play()`.
<br>
![Animations editor new fields][3]
* The scene editor toolbar was moved from the editor to the main toolbar. In this way the editor has more space and the toolbar can be docked in other sides of the main window.
<br>
![Canvas toolbar][4]
<br>
* Set snapping based in selection. The snapping allows you to drag the objects in the scene with a fixed step. Now if you press `W`, the snapping step will get the width and height value of the selected object, and enabled.
* To scroll the scene you can press the `ALT` key and drag the scene with the left button of the mouse.

### Asset Pack Editor

* Added undo/redo support.
* Now it requires to save the editor to make the changes available to other components like the Assets viewer and the Scene editor.
* Ask for confirmation if you try to delete an asset that is used by any scene of the project.


### Errors reporting

Improved the algorithm to detect the errors in the Asset Pack and Scene files. These errors are shown in the Problems view and an error icon is placed on top of the file icon in the Project Explorer.

![Error overlay icon][5]

### Project Templates

* The project templates **Platformer**, **Platformer 8-bits** and **Platformer Tiles** were updated to use a hidden collision layer. This technique is explained in the [Make a Mario-style platformer... tutorial][6].
 
### Chains

* Improved loading performance by reducing its metadata size.

### JavaScript editor

The JavaScript editor type inference engine was improved and objects keep the type information in property assign sentences.

### Embedded HTPP server

* Bug fix: linked resources (projects, folders) are not served. It happens for example when you import a project into the workspace but do not copy the content.
* The favicon now shows the Fufu Super Dino logo.

### Eclipse Marketplace

The [Eclipse Marketplace][7] is an app store used by many Eclipse developers and companies to publish their tools and products.

Now you can open the Eclipse Marketplace from Phaser Editor and search for third-party plugins that can be useful for you, for example, you can look for Git tooling.

Note that there are different solutions for the same thing, just look in how many times it was installed and who is providing it (Eclipse, a company or a particular). 

In the next days we are going to evaluate the TypeScript solutions available in the marketplace, then we are going to write a tutorial about how to make games with TypeScript and Phaser Editor.

To open the marketplace client just click on `Help > Eclipse Marketplace`.

If you are an advanced Eclipse user then you can install any other plugin from its update site or your own plugin.

In the editor offline help there is a section dedicated to this marketplace tool: **Eclipse Marketplace User Guide**.

![Eclipse Marketplace][8]

### Phaser Editor updates

This is a great new feature. Now we are going to develiver updates more often, and you will be able to install them quickly and without the need to download the whole Phaser Editor installation.

We are going to release a major version at a rate of 3-4 months, and minor updates probably every month, in addition to the updates related to new Phaser versions.

When the editor starts it looks for new updates. If there are updates it shows a confirmation dialog to install them. You can change that behavior in `Window > Preferences > Install/Update > Automatic Updates`.

Sure, you always has the option to check for updates yourself: `Help > Check for Updates`

![Check for updates][9]

### Updated to the latest Eclipse version

As you know Phaser Editor is based on the Eclipse platform. In this release we updated to Neon.1, the latest Eclipse version. We recommend you to take a look to the new features bundled in Neon. Personally we like the new option to disable the Theming engine, it should improve performance and give to the editor a more native look. You can disable it in `Window > Preferences > General > Appearance > Enable theming`. To make it to work you have to restart the editor: `File > Restart`.

[Read more about the Eclipse Neon news][10]

![Look with disabled theming][11]


  [1]: https://gamedevacademy.org/make-a-mario-style-platformer-with-the-phaser-editor/
  [2]: https://phasereditor2d.com/blog/content/images/20161129155610-CanvasMissingAsset.png
  [3]: https://phasereditor2d.com/blog/content/images/20161129155610-AnimationsEditorFields.png
  [4]: https://phasereditor2d.com/blog/content/images/20161129155610-CanvasToolbar.png
  [5]: https://phasereditor2d.com/blog/content/images/20161129155610-CanvasFileError.png
  [6]: https://gamedevacademy.org/make-a-mario-style-platformer-with-the-phaser-editor/
  [7]: https://marketplace.eclipse.org
  [8]: https://phasereditor2d.com/blog/content/images/20161129155610-Marketplace.png
  [9]: https://phasereditor2d.com/blog/content/images/20161129155610-CheckUpdates.png
  [10]: http://www.eclipse.org/eclipse/news/4.6/platform.php
  [11]: https://phasereditor2d.com/blog/content/images/20161129155610-DisabledThemeing.png