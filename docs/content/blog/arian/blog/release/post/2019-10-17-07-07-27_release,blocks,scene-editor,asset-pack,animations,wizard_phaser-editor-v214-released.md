<!--t Phaser Editor v2.1.4 released t-->
<!--d A new minor version of Phaser Editor 2D. Bug fixes, minor features. Support the latest Phaser and Eclipse versions. d-->
<!--tag release,blocks,scene editor,asset pack,animations,wizard tag-->

Hi,

Today we are releasing Phaser Editor 2D version 2.1.4.

[Download Phaser Editor 2D v2.1.4](/blog/downloads/)


This is a minor update to synchronize the project with the latest versions of [Phaser (v3.20.1)](https://github.com/photonstorm/phaser/releases/tag/v3.20.0) and [Eclipse (v2019-09)](https://www.eclipse.org/eclipse/news/4.13/platform.php) -including the [JavaScript tooling](https://github.com/eclipse/wildwebdeveloper)-. But, as usual, there are some new features and fixes.



<!-- index-start -->

* [Games and tutorials](#games-and-tutorials)
* [Documentation progress](#documentation-progress)
* [Phaser Editor v3](#phaser-editor-v3)
* [Phaser 3.20.1](#phaser-3-20-1)
* [Scene Editor](#scene-editor)
* [Wizards](#wizards)
* [Animations Editor](#animations-editor)
* [Asset Pack Editor](#asset-pack-editor)
* [Online Phaser Chains](#online-phaser-chains)
* [Other changes](#other-changes)


<!-- index-end -->

## Games and tutorials {#games-and-tutorials}


If you are creating games, tutorials or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we will be proud to feature it in our website, newsletter and social channels.

## Documentation progress {#documentation-progress}

We keep writing the [Phaser Editor v2 Documentation](/docs/v2), but we are doing that task together with another that is equally important (see the next section).
Since the last release, we worked on the [Scene Editor chapter](/docs/v2/scene-editor.html). Take a look.

## Phaser Editor v3 {#phaser-editor-v3}

![Phaser Editor v3 Preview](/blog/content/images/v2.1.4/phaser-editor-v3-preview.png)

The Phaser team [announced the next major Phaser version (v4)](https://www.patreon.com/posts/phaser-4-process-29671934). It is very soon to know the direction of that Phaser version, but here at Phaser Editor, we decided to support Phaser v4 with a brand new editor.

We started working on Phaser Editor v3. A new editor? Again? Yes, we are saying good-bye to our beloved Eclipse platform and saying hello to the browser: Phaser Editor v3 will be implemented completely as a web-based IDE and will be:

* Lightweight, focused mainly on level/scene design and asset management. For coding, there is Visual Studio Code.
* Cross-platform: available as a local application in Windows, macOS, and Linux. In theory, the server back-end is very small so it can be ported to Android or other platforms at a reasonable cost.
* At a certain point, we should implement a cloud version, that can be deployed on private or public clouds.
* Completely coded in TypeScript. So it will be easier for you to contribute to the code. Only the server back-end will be implemented on [Go](http://golang.org/).
* Extensible. We are building the IDE on top of a simple extension framework.
* We have to decide if provide the Phaser Labs (Phaser examples browsing and cloning, Phaser API browser, Phaser  Chains, etc...) as a separated product.

This is yet a secret project, [we mentioned it](https://twitter.com/PhaserEditor2D/status/1166039969825247232) and posted a [preview video](https://twitter.com/PhaserEditor2D/status/1180311547987599360) but yet we are not officially announcing it. The development is going fast. We had our reasons to build the first version of Phaser Editor on top of a huge, Java-based IDE like Eclipse, but today we have the opportunity to implement it using the same Phaser technology: the browser, and it boosts everything. We don't have to fight anymore with a native, broken WebView and websocket communication. Now everything, the Phaser scene, and the IDE parts can communicate and run smoothly in the same place.

By the way, it is a new Phaser Editor version, it means, all licenses still valid.

## Phaser 3.20.1 {#phaser-3-20-1}

We updated the **project templates**, **Phaser Labs** tools and the **Scene Editor** to **`Phaser v3.19.0`**. 

The Phaser runtime files of your old projects are not updated. If you wish to update your game runtime to the new Phaser version you should do it manually. [Learn more about it in the docs](/docs/v2/workbench.html#phaser-version-update).

If you created a project in a previous version of the editor, and you want to update to the new Phaser runtime, you should do it manually, by replacing the `WebContent/lib/phaser.js` file.

## Scene Editor {#scene-editor}

Some changes we did in the Scene Editor:

* Updated to the latest Chromium-SWT WebView. Now it works much better on Linux. In Windows 10 it is closer to be stable. We recommend to test it if you are using that platform. [Learn how to change the WebView implementation](/docs/v2/workbench.html#webview-preferences).

* Fixes the Add Object menu, it now shows images.

* The Add Object menu shows the option to create a Group.
![Add Object menu shows Group option](/blog/content/images/v2.1.4/scene-editor-add-object-menu-group.png)

* Fixes the TypeScript compiler, now it does not generate type-annotation comments.

## Wizards {#wizards}

* The New Factory Class File wizard now includes the option to generate a TypeScript file.

![TypeScript option in the New Factory Class File](/blog/content/images/v2.1.4/wizard-new-object-factory-typescript.png)

A TypeScript factory uses an interface to "extends" the `GameObjectFactory` class and add the new factory method to the prototype `GameObjectFactory`:

```
namespace Phaser.GameObjects {
    
    export interface GameObjectFactory {
        enemy(x: number, y: number, texture: string, frame?: string | number) : PlayerFactory;
    }
    
}

class EnemyFactory extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame: string | integer = null) {
        super(scene, x, y, texture, frame);
    }

}

Phaser.GameObjects.GameObjectFactory.prototype.enemy = function (x: number, y: number, texture: string, frame: string | integer = null) : PlayerFactory {
    const scene = this.scene;

    const sprite = new EnemyFactory(scene, x, y, texture, frame);

    scene.sys.displayList.add(sprite);
    scene.sys.updateList.add(sprite);

    return sprite;
};
```

## Animations Editor {#animations-editor}

* Now you can set a prefix to the animations created automatically by dropping frames into the editor. [Learn more in the documentation](/docs/v2/animations-editor.html#automatic-creation-of-animations)
* We added a button to the Properties view to automatically create the animations selected in the Blocks view. [Learn more in the documentation](/docs/v2/animations-editor.html#creating-the-animations-with-the-create-animations-button).
![The Create Animations button](/blog/content/images/v2.1.4/animations-create-animations-button.png)
* Added the tool-tips to the animation fields of the Properties view.
![Animation's fields tooltip](/blog/content/images/v2.1.4/animations-editor-property-hint.png)


## Asset Pack Editor {#asset-pack-editor}

* Added the tool-tips to the Properties fields.
![Help hints in the Properties of the Asset Pack Editor](/blog/content/images/v2.1.4/asset-pack-editor-help-hints.png)

## Online Phaser Chains {#online-phaser-chains}

We updated the online version of Phaser Chains with the latest Phaser v3.20.1 data.

[phasereditor2d.com/chains](https://phasereditor2d.com/chains/)

## Other changes {#other-changes}

* We added a **New Window** item to the perspective switcher button. You can create multiple windows to perform different tasks. For example, a window for coding and designs and a window to browse the Phaser help and examples.
![New Window option in perspective button](/blog/content/images/v2.1.4/workbench-open-new-window.png)


* The files or folders `__MACOSX` and `.DS_Store` are hidden in the Project view by default. [Learn more about resource filtering](/docs/v2/workbench.html#resource-filters).



[Download Phaser Editor 2D v2.1.4](/blog/downloads/)


Keep in touch!

Arian

