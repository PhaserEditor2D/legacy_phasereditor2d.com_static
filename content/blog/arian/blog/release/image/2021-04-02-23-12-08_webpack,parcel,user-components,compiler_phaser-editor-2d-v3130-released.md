<!--t Phaser Editor 2D v3.13.0 released! t-->
<!--d New version with the latest Phaser. New project templates for Webpack and Parcel. Scene &amp; Component&#039;s compiler improvements. d-->
<!--tag Webpack,Parcel,User Components,compiler tag-->
<!--image https://phasereditor2d.com/blog/content/images/20210402123857-release3.13.0.png image-->

Hi!

A new Phaser Editor 2D version is ready for download!

This is a small update, but I'm particularly happy with this version. It introduces changes that remove some friction when you start with the editor. I'm talking about the new project templates for Webpack and Parcel. The new settings for compiling the scenes and user components to ES modules. And a new helper class for user components.

[Download Phaser Editor 2D v3.13.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it in the website, newsletter, and social channels.

### Using the Component Pattern with Phaser 3.50+

Tommy Leung from [Ourcade.co](https://ourcade.co) is making a new tutorial series about the Component Pattern. It is not about Phaser Editor 2D but it explains basic principles about the Component Pattern and how you can use it in your games. In Phaser Editor 2D the component pattern is a central concept, so I think this tutorial can help you in making better use of the editor.

> Need a better way to organize and reuse logic in your game? Then the Component Pattern may be what you are looking for! We go over a Unity-inspired implementation for use in Phaser 3.50+ and typescript.

[Watch the video](https://www.youtube.com/watch?v=a1MlMgRzsDU)

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is very important in the process of providing a more friendly and stable IDE.

## Phaser v3.54.0

The Phaser team recently released Phaser v3.45.0. It is now built-in supported in Phaser Editor 2D.

[Read more about this new Phaser release](https://github.com/photonstorm/phaser/releases/tag/v3.54.0)

## Welcome Webpack and Parcel!

I'm very pleased to include in the editor better support for developers using Webpack or Parcel.

That was an old request, but is better now than never!

Now, when you open the New Project dialog, you will see there are two four new templates, grouped in the Webpack and Parcel folders:

![New Project dialog shows new webpack and parcel templates][1]

You can create a JavaScript or TypeScript project with Webpack or Parcel.

**Side note**: *Phaser Editor 2D allows editing JavaScript files using the Monaco editor. It is fine for basic project structures, but not for Webpack or any other bundler-based project. I always recommend using Visual Studio Code for editing your JavaScript/TypeScript files.*

*Phaser Editor 2D integrates with VS Code by default. You can launch it with the `Ctrl+Alt+U` keys. Also, you can open the active scene in VS Code with `Ctrl+Alt+E`.*

Just read the README file included in the project when it is created. It shows the instructions for compiling and testing it.

The Parcel project template is a fork of the [phaser3-parcel-template](https://github.com/ourcade/phaser3-parcel-template) created by the [Ourcade](https://ourcade.co) team. I hope it will help you on following the amazing tutorials they are making and apply your learnings to Phaser Editor 2D.

## Configuring public folders

Phaser Editor 2D uses Asset Pack files for importing the assets in the projects and loading them in the games. Each file configuration has an URL field that points to the file. The editor computes that URL automatically, by taking the relative path of the file, starting at the root of the project.

That works if the root of your project is the root of the website. However, in Webpack (and similar), you can use a very different project structure, and store the assets in a folder that is not at the root of the project.

For this reason, now the editor supports changing the public root folder for the asset packs. It is very simple, just create a `publicroot` file in the folder that will be at the root of the website:

![configuring a public root folder][2]

In the above image, the `static` folder is a "public root" folder of the project. All Asset Pack files inside the `static` folder will use as a URL for the files, a relative path that starts in the `static` folder and not in the project's root.

For example, the URL to the `Background_01.png` file is `assets/Background_01.png` and not `static/assets/Background_01.png`.

[Learn more about the public root folders](https://help.phasereditor2d.com/v3/asset-pack-editor/public-root.html)

The Webpack and Parcel project templates provided by the editor are well configured, so you don't have to care about it.

## ES modules support

There are two new parameters for the scene compilers: **Export Class** and **Auto import**. 

When the **Export Class** is on, the compiler includes the `export default` modifiers in the scene's class declaration.

When the **Auto Import** parameter is on, the compiler looks for the classes used by the scene and generates the `import` statements. The compiler only knows the types it generates, but if you use other types and elements in the user code sections, then you have to import them manually:

![Automatic import and export in ES modules][3]

These parameters are also present in the User Components Editor, and it works the same. The component compiler automatically exports and imports elements of ES modules.

## A base class for your components

If you are using User Components in your projects, then you may use a common class for all our components. Or for most of them. This base class registers listeners to the Phaser events and call special methods that are overridden in the derived classes.

In this version, the editor proposes you use a base class for your components, which may be useful for the majority of the cases. This class is named **UserComponent**, and you can add it to your project with a single click.

In the User Components editor, open the context menu and select the **Resources** → **Create UserComponent.js**:

![User components menu to create usercomponent.js file][4] 

Look there are options for generating the file with an ES module format, JavaScript, or TypeScript.

You only need to generate this file once. Then you can use it in your components, setting the **Super Class** parameter to **UserComponent**.

The **UserComponent** class is very simple. It listens to different Phaser events and call the correspondent method: **awake()**, **start()**, **update()**, and **destroy()**.

[Learn more about the User Component class](https://help.phasereditor2d.com/v3/scene-editor/user-components-super-class.html)

## The awake event

User components can listen to Phaser events for implementing a particular behavior. One important event to catch is when the component "starts". That event is emitted in the next scene update. However, you want to execute an initialization routine right away after the component is created and all its properties are set. It is not possible by listening to Phaser events.

In this version, the Scene compiler generates the code to emit the **components-awake** event. When you implement a component, you can listen to this event and perform your initialization routine.

If your component extends the **UserComponent** class, then the only thing you have to do is to implement an **awake** event:

```
class PushOnClick extends UserComponent {

    constructor(gameObject) {
        super(gameObject);
    }

    awake() {
        // write your init code here
    }
}
```

[Learn more about the awake event](https://help.phasereditor2d.com/v3/scene-editor/user-components-awake-event.html)

## Other changes

### Class fields

The scene compiler now generates class fields instead of constructor initialized fields. Maybe that code is not compatible with all browsers. If you are making professional games, I recommend using a build tool like TypeScript, Babel, Webpack, etc...

### Scene settings: Method Create

The scene compiler generates all the "creation" code inside a create method. The **Method Create** parameter of the scene settings allows changing the name of that method. Before, it has the **create** name by default, in concordance with that special method of a Phaser scene. However, many of you get confused the first time you want to add custom code to the "create" method.

In this release, the **Method Create** parameter has the **editorCreate** value by default. And the compiler, the first time generates the scene code, includes a "create" method in the user code. This means, that now you can add custom code to the **create** method. Something like this:

```
export default class Level extends Phaser.Scene {
	
	editorCreate() {
		// the objects created by the editor
	}
	
	/* START-USER-CODE *
	
	create() {
		// you can write code here
		this.editorCreate();
	}
	
	/* END-USER-CODE */
}
```

The **Create Method** parameter of the scene settings allows changing the name of the method generated by the scene compiler.

[Learn more about the Create Method parameter](https://help.phasereditor2d.com/v3/scene-editor/scene-compiler-scene-settings.html)

### Change Log

[Take a look at the complete CHANGELOG](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/releases/tag/v3.13.0)

## What's next?

The next in line is the support of nine-slice objects! I'm delayed with the Phaser Help Center, but... did you see the new docs from Phaser? It improved a lot! Take a look: 

[newdocs.phaser.io](https://newdocs.phaser.io/)

Keep in contact!

Arian


  [1]: https://phasereditor2d.com/blog/content/images/20210402132036-new-project-dialog-webpack.png
  [2]: https://phasereditor2d.com/blog/content/images/20210402135212-publicroot-folder.png
  [3]: https://phasereditor2d.com/blog/content/images/20210402155858-automatic-export-and-import.png
  [4]: https://phasereditor2d.com/blog/content/images/20210402161127-create-user-component-base-class.png