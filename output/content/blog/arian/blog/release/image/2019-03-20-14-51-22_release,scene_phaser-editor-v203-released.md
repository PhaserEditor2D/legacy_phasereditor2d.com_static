<!--t Phaser Editor v2.0.3 released t-->
<!--d Hi, Today we are publishing the version 2.0.3 of Phaser Editor 2D. The initial goal was to build a release to support the latest Phaser version d-->
<!--tag release,scene tag-->
<!--image https://phasereditor2d.com/blog/content/images/v2.0.3/GameObjectBuildParameter.png image-->

Hi,

Today we are publishing the version `2.0.3` of Phaser Editor 2D. The initial goal was to build a release to support the latest Phaser version (`3.17.0`), but that version is delaying and, in the meantime, we added some nice features to the editor. By the way, some weeks ago we did a small release (`v2.0.2`), to fix an issue with the license validation. It was available only as an automatic update.

[Download v2.0.3](/blog/downloads) or check for updates (**Help** → **Check for Updates**).

## Learning Phaser Editor v2

Many users contact us requesting for learning materials about Phaser Editor v2. We feel this is not the moment to spent a huge amount of time and energies on it. First, we want to reach the state of v1, or a closed state, with the major features implemented. Probably, the only big feature that is missing is the Prefab objects. In addition, we should migrate the current Scene renderer to a Phaser powered renderer. See the last section of this article.

However, you can scroll this blog and check all the release notes and some tutorials about v2 of the editor. In each release notes, we explain the new features in detail, so it can help you a lot. Another good resource you have to learn the editor is the included demos. Right now we have two demos, **Flying Dragon** and **Sunny Land Woods**. To mess with the demos you can create a project with them in the wizard **File** → **New** → **Phaser Example Project**. From time to time we publish some videos in our [YouTube channel](https://www.youtube.com/playlist?list=PLB8gI_5U0MvC9NcEAkcjxoccDd9MQx2yL). And finally, if you have any doubt, please, contact us on any social channel, this blog or via email (`developers@phasereditor2d.com`).

**Update**: See the [latest tutorial](https://phasereditor2d.com/blog/2019/03/commenting-the-sunny-land-woods-demo-tutorial) about how we migrated the Sunny Land Woods demo.

## Games made with Phaser Editor

You can see in this blog some short articles where we feature a game made with the editor. We love to do that, but the reality is that you create the games but never share it with us ;-). Please, if you are making something with the editor, we are more than happy to feature it and follow you on our social channels.

### Moonshine Run, by JomoGames

![Moonshine Run](/blog/content/images/v2.0.3/MoonshineRunGame.png)

It's 1945 and deep in the mountains lives the Buckley clan. The family patriarch Duke Buckley must provide vittles for his kin...

[Read more](https://phasereditor2d.com/blog/2019/03/moonshine-run-game-by-jomogames)

## Project Templates

### Phaser Examples

We improved the scripts to build the Phaser Official Examples and include them in the IDE. In Phaser Editor you can browse the Phaser examples, test them locally or create a new project with the example's code and assets. However, there are examples that do not work, because the originals are broken or because we did not pack them well in the editor. Now, with the new build scripts, we have less broken examples. If you find an example is broken, please contact us.

### Default Phaser Project

We simplified the default Phaser Project. Now it is a completely empty project, without any image. Only a `pack.json`, `animations.json` and `Level.scene` files are included, but empty. You can take a look at the Phaser Editor Demos project templates to see a more complex project.

In addition, we added two new parameters to the wizard (feature request [#108](https://github.com/PhaserEditor2D/PhaserEditor/issues/111)): **Scale Mode** and **Scale Auto Center**.

![Phaser Project wizard Scale parameters](/blog/content/images/v2.0.3/PhaserProjectWizardScaleParameters.png)

### Sunny Land Woods Demo

We added a new Phaser Editor demo, based on one of the great works of Luis Zuno (@ansimuz): Sunny Land Woods. This demo shows you how you can create reusable objects by registering custom `GameObjectFactory` methods and referencing them in the Scene editor. And another interesting thing is that with these factories and "fake" assets, you can add objects to the Scene editor that are not supported yet, like tilemaps. We are going to create a tutorial about this as soon as possible. Object factories is a good mechanism to create custom objects, but yet we have to implement the Prefab concept, that is already present in v1 of the editor.



## Asset Pack editor

As you may know, we use an Asset Pack file (`pack.json`) to declare the keys of the assets of the game. That Pack file is a Phaser format and you can load the assets defined in it in this way: `this.load.pack('pack-key', 'assets/pack.json')`, or `this.load.pack('pack-key', 'assets/pack.json', 'data-key')`. If the `data-key` is set, it means that only will be loaded a section (the `data-key` section) of the pack. We were doing this wrong, using the `data-key` as the first parameter (we were doing like in Phaser v2, but in Phaser v3 it is different). Probably you did not note it, because if not `data-key` is set, Phaser loads the whole pack. In this release we fixed that, and, in addition, we recommend to create different asset pack files instead of different sections in the same asset pack. It has more sense, because you may like to load the pack files by demand, in the same way, you want to load all the other assets by demand. In a few words, now, instead of having a `preload` and `levels` sections in the asset pack, you will create a `preload-pack.json` and `levels-pack.json` files.

So, now that we are not using the sections (or the **Data Key**) there is no need to show them in the UI. We modified the Asset Pack editor and the Assets view (and all other asset viewers) to only show the asset keys grouped by the asset type. It means, now we are not grouping by sections. See how looks the new Asset Pack editor:

![New Asset Pack editor layout](/blog/content/images/v2.0.3/NewAssetPackEditor.png)


In the Sunny Land Woods demo, look we use a `preload-pack.json` to load the assets needed by the **Preload** scene, and a `levels-pack.json` file to load the assets needed by all the other scenes of the game. There is also a `fake-pack.json`, that is never loaded by the game, because we use it to create custom objects in the scene, that is not supported yet but are created by custom factories.

![Assets view of the Sunny Land Woods](/blog/content/images/v2.0.3/NewAssetsView.png)

The code to load an asset pack is:

```javascript

var key = "levels-pack";
var url = "assets/levels-pack.json";
this.load.pack(key, url);

```

It will load all the files defined in `levels-pack.json` file. We recommend to use as key the same name of the file, you cannot use the same key for different files. That key is used to store the data in the cache.

## Scene editor

### Scene File wizard

We reworked the **Loading** page of the **New Scene File** wizard. In this page, you can select an Asset Pack file and a section inside it to include the new Scene file as a key. You have the option of adding the Scene file as a **script** or **sceneFile** key (by default), or do not add the file to a pack.

![Phaser Project wizard Loading parameters](/blog/content/images/v2.0.3/PhaserProjectLoadingPage.png)

### Factory File wizard

We included a wizard to help you create a Phaser Game Object Factory method with just clicks. It is just a JavaScript file with a class that extends `Phaser.GameObjects.Sprite` and register a new factory method. We recommend using factories to create reusable objects in your game. It is a Phaser practice and is supported by the Scene editor of the IDE.

To launch the wizard, click **New** → **Factory Code File**. Enter the name of the file, for example, `Dragon`, and press **Finish**. Then a new file will be created, like this one:

![Code generated by the Factory wizard](/blog/content/images/v2.0.3/NewFactoryWizardCode.png)

Note it registers a `dragon` factory that creates a `Dragon` object and adds it to the Display and Update lists. It is just a start, you can change or add more code.


### New Game Object parameters

We added some new parameters to the **Game Object** section: **Factory Return Type**, **Build Object** and **Name**.

#### Factory Return Type parameter

In v2.0.1 we introduced the Game Object **Factory** parameter, that is used by the scene compiler when generates the expression that creates an object. The new **Factory Return Type** parameter is used to set a type to that expression. Since JavaScript does not support static typing of variables, what we do is to annotate the variable with the `@type` tag of the JSDoc comment. This can help you to get a better intellisense in the JavaScript editor of Phaser Editor or any other external editor. Note this parameter is enabled only if a **Factory** is set.

In the Sunny Land Woods demo, you can see how the **player** object has a **player** factory that returns a **Player** object.

![Factory Return Type parameter](/blog/content/images/v2.0.3/GameObjectFactoryTypeParameter.png)

As we do in other parameters, next to the **Factory R. Type** field there is a menu with some value shortcuts. However, if you set a factory, it automatically looks for other objects that use the same factory and check if all of them use the same return type, and if it is the case, then it set that type by default.

![Factory Return Type parameter](/blog/content/images/v2.0.3/GameObjectFactoryTypeMenu.png)


#### Build Object parameter

Usually, custom objects (like enemies, items, players) needs custom data or custom parameters that are used by the object to perform certain behavior or "build" other private objects or data. The scene compiler uses the **Build Object** flag to generate a `obj.build()` call at the end of the object creation. If you create a custom object type, you can implement a **build** method that takes all the custom data or any other parameter of the object and create the initial state of the object. In the Sunny Land Woods demo, look the **Gator** implementation. It has a **build** method that gets the values (**distance** and **horizontal**) in the **Data Manager** of the object and computes the velocity and range of movements.

![Build parameter](/blog/content/images/v2.0.3/GameObjectBuildParameter.png)

### Scroll Factor parameters

We added a new section with the **Scroll Factor** parameters. We used this parameter in the Sunny Land Woods demo to get a parallax effect. Check the background images in the **Level** file of that demo.

![Scroll Factor parameters](/blog/content/images/v2.0.3/ScrollFactorParameters.png)

### Compiler parameters

We removed some parameters from the **Compiler** section settings: **Generate Method Events** and **Auto Load Assets**.

The **Generate Method Events** is used by the compiler to generate a code that emits events at the start and end of the methods. In this release, we removed it from the UI. We included that events to allow the user to insert custom code (or actions) before and after the scene is created, but we find that using a custom name in for the **Create Method** is a good solution, so we don't need an extra mechanism.

The **Auto Load Assets** parameter was used by the compiler to know if it should generate the **preload** method of the scene. We removed that parameter, and now the compiler will generate the **preload** method only if you set the value of the **Preload Method** parameter.

![Preload Method parameter](/blog/content/images/v2.0.3/PreloadMethodParameter.png)

#### Name parameter

The **Name** parameter is a flag that is unchecked by default, but if you check it, the compiler will set the **name** property of the object, with the same value of the **Variable Name**. (Feature request [#111](https://github.com/PhaserEditor2D/PhaserEditor/issues/111)).

![Game Object name parameter](/blog/content/images/v2.0.3/GameObjectNameParameter.png)

### Compile and Go To Code buttons

In the **Compiler** section we added two buttons: **Compile Scene** and **Go To Code**. Those buttons do the same of the other little buttons in the section's toolbar but are more user-friendly (bigger).

![Compiler section buttons](/blog/content/images/v2.0.3/CompilerSectionButtons.png)

In addition, we added a **Go To Code** button in the **Variable** section. That section is shown when you select an object in the scene, so, if you press the **Go To Code** button it will open the compiled JavaScript file and will scroll to the position of the code where the object is created. I can help you to understand how an object is created.

![Go To Code button in the Variable section](/blog/content/images/v2.0.3/VariableGoToCodeButton.png)


## Other Features and Bug Fixes

* You can set the default size of the scenes of a project. Right click on the project and select **Properties**. In the **Phaser** section, you can set the **Default Scene Width** and **Default Scene Height**. These values are used when you create a new Scene file, to set the border size.
![Default Scene's Size parameter](/blog/content/images/v2.0.3/DefaultSceneSize.png)
* [#110]((https://github.com/PhaserEditor2D/PhaserEditor/issues/110)) Characters color blends poorly with background in Dark Theme.
* The **New JavaScript Class** wizard now creates a file with JS6 "class" syntax.
* Now **audio** keys are well serialized in the Asset Pack editor. Before we generated a wrong **audio** entry in the asset pack file (`pack.js`), so Phaser did not load the audio files.

## What's next?

We are thinking to split the v2 development into two branches. One public branch (`1.0.*`) to fix bugs and add minor features, and another development branch (`1.1.*`) to create a new Scene editor renderer (we really need it!). The new Scene renderer will be implemented in Phaser, running in a WebView. There are a couple of objects that you cannot create in the current Scene editor, like Container, Text, Tilemap, Particles, etc... and we want to include all of them, but using the new Phaser-powered renderer. We do not have an idea of how much time we need to implement it, we hope to do that in two months if we do not have huge interruptions with bugs or family issues.





Keep in contact!

Arian