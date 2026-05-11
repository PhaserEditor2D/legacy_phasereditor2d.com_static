<!--t Phaser Editor 2D v3.65 released. Powering script nodes, user components, and prefabs. t-->
<!--d We are introducing a groundbreaking update with script libraries, a major step towards a visual programming language. Explore the new tutorial on creating HTML5 projects using Phaser Editor 2D, Webpack, and TypeScript. Additionally, discover enhanced features like Scene Display Name and Object Display Format, along with script node libraries. d-->
<!--tag script nodes,component,prefab,library. tag-->
<!--image https://phasereditor2d.com/blog/content/images/20231211081025-release%203.65%20Large.jpeg image-->

Hi!

I'm glad to announce the latest release of Phaser Editor 2D. This update is a significant milestone as it includes script libraries, bringing us one step closer to implementing a visual programming language.

[Download Phaser Editor 2D v3.65.0](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### Your first HTML5 project using Phaser Editor 2D, Webpack and TypeScript

![tutorial emanuel feronato](https://phasereditor2d.com/blog/content/images/20231130101513-Emanuele%20Feronato%20tutorial%201.png)

A new tutorial from Emanuele Feronato:

> If you are into HTML5 game development, especially if you are using Phaser, you should already know Phaser Editor 2D, an awesome IDE to create HTML5 2D games based on the popular Phaser framework. Although it allows to build simple basic JavaScript games, Phaser Editor 2D gives its best using Webpack and TypeScript. Let’s see a step-by-step tutorial to build this iconic Phaser example...

[Take me to the tutorial](https://www.emanueleferonato.com/2023/11/30/your-first-html5-project-using-phaser-editor-2d-webpack-and-typescript/)

## The new script libraries

I had been working on the script nodes for the whole of 2023. Today is landing a new exciting feature: the script node libraries!

A script node library is a NodeJS module containing script nodes and user components. A script node (and user components) are building blocks you can combine to create behaviors or complex actions. It encourages you to use no-code techniques for making certain parts of your game, but also makes it easy to code new script nodes.

At this moment, I implemented a few libraries you can install in your projects:

* [@phasereditor2d/script-core](https://www.npmjs.com/package/@phasereditor2d/scripts-core): Contains the bases of the script nodes and user components.
* [@phasereditor2d/simple-animations-scripts](https://www.npmjs.com/package/@phasereditor2d/scripts-simple-animations):  Provides scripts for making simple animations, like a push-button effect or a fade-in effect.
* [@phasereditor2d/scripts-camera](https://www.npmjs.com/package/@phasereditor2d/scripts-camera): Gives you scripts to manipulate the camera, perform camera effects like a shake or flash, or set the camera to follow an object.
* [@phasereditor2d/scripts-audio](https://www.npmjs.com/package/@phasereditor2d/scripts-audio): Includes the scripts for the audio playback.
* [@phasereditor2d/scripts-arcade](https://www.npmjs.com/package/@phasereditor2d/scripts-arcade): Provides scripts for changing the physics body of the objects and to catch physics events.
* [@phasereditor2d/scripts-timer](https://www.npmjs.com/package/@phasereditor2d/scripts-timer): A few timer implementations, for repeating or delaying actions.

The above libraries are very basic. I plan to extend them with more options and make new libraries targeting different fields of game development.

[Learn more about the script libraries](https://help-v3.phasereditor2d.com/scene-editor/script-node-libraries.html)

## Scene, prefab, and user component display name

Now that we are going to make a lot of script nodes and user components, we need a more visual style for presenting the scripts. There is room for a lot of improvements. For this version, I implemented the Scene Display Name and the User Component Display Name.

Until now, prefab scenes and user components are displayed in the editor's UI using the class name of the scenes and components. But starting today you can set a different name to be used in the editor's UI.

You can change the Scene Display Name property of a scene:

![Scene Display Name][1]

If this name is present, then the UI will use it instead of the class name:

![The scene's display name in action][2]

[Learn more about the Scene Display Name](https://help-v3.phasereditor2d.com/scene-editor/display-properties.html)

With the user components, it is the same, you can set the Display Name and the editor UI will use it instead.


### Prefab object display name

In addition to the Scene Display Name, you can set the **Object Display Format**. This parameter contains an expression for formatting the display name of prefab instances in the Outline view.

There is a new **Prefab Display** with the **Object Display Format** parameter.

![Object display format][3]

There you can set a string-formatting expression to this parameter, that will be used to show the labels of the objects in the Outline view.

You can use the `${...}` syntax as a placeholder for the value of any of the prefab user properties. The following image is an example of some of the script nodes formatting:

![Script node formatting][4]

You can use this technique with the script nodes but also with your asset prefabs. The next image shows the formatting of controller button prefab instances. The format is `Button - ${action}`, where `action` is the name of a user property of type **Option**, with the possible values of `DOWN`, `UP`, and `FIRE`:

![Button prefab instances formatting][5]

[Learn more about the Object Display Format parameter](https://help-v3.phasereditor2d.com/scene-editor/prefab-display-properties.html)

## Other changes

* Now the Blocks view doesn't show the script nodes unless the scene is a script node prefab. In that case, it shows the script prefabs grouped by library and folder:
![Script nodes in the Blocks view][6]
* The Add Script dialog gets a similar structure to the Blocks view, it groups the scripts by libraries and folder:
![Add script dialog][7]
* The Add User Component dialog highlights the owner library of the component:
![Add user component dialog][8]
* Adds the On World Bounds parameter to the Arcade Physics Body Collection section of a game object.


## What's next

First, I want to try including assets in the script libraries. It will be very handy if I can include assets together with scripts. For example, you will be able to create a UI toolkit for all your products and distribute it as a Node module.

My goal with the script nodes and user components is to create a visual -but flexible enough- language for programming behaviors. Gameplay behaviors or UI behaviors.  Yet I'm figuring out how I will present the "visual script blocks" in the scene editor, but the basis is ready.

Also, I should make a video about the new script libraries and a tutorial about how to create your script libraries.

Keep in touch!

Arian

P.S. Did you read the latest news? [Phaser creator Richard Davey launches Phaser Studio 🚀](https://opencoreventures.com/blog/2023-12-phaser-studio-launched/)



  [1]: https://phasereditor2d.com/blog/content/images/20231211232416-scene-editor-scene-display-name-properties.jpeg
  [2]: https://phasereditor2d.com/blog/content/images/20231211232531-scene-editor-display-name-viewers.jpeg
  [3]: https://phasereditor2d.com/blog/content/images/20231211233216-scene-editor-prefabs-display-name-definition.jpeg
  [4]: https://phasereditor2d.com/blog/content/images/20231213042808-scene-editor-prefabs-display-name-script.jpeg
  [5]: https://phasereditor2d.com/blog/content/images/20231213043123-scene-editor-prefabs-display-name-outline.jpeg
  [6]: https://phasereditor2d.com/blog/content/images/20231213044011-blocks-view-script-nodes.jpeg
  [7]: https://phasereditor2d.com/blog/content/images/20231213045443-add-script-dialog.jpeg
  [8]: https://phasereditor2d.com/blog/content/images/20231213050048-add-user-component-dialog.jpg