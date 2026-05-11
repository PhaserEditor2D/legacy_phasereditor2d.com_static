<!--t New Phaser Editor 2D v3.30.0 is ready for the cloud &amp; the desktop. t-->
<!--d Phaser Editor 2D v3.30.0 is released and is re-branded in two products: Phaser Editor 2D Core and Phaser Editor 2D All-in-One. d-->
<!--tag release,core,all in one,electron,desktop,cloud,gitpod tag-->
<!--image https://phasereditor2d.com/blog/content/images/20210916235412-release-330.png image-->

Hi! I'm glad to announce a new release of Phaser Editor 2D: version 3.30.0! 

This version is 10 points ahead of the previous one (v3.20.0), it comes with some awesome new additions and breaking changes.

[Download Phaser Editor 2D](https://phasereditor2d.com/downloads)

Don't worry, the breaking changes are not going to break your projects. It is all about how the editor is distributed and integrated into your development environment.

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

## Collaboration

A lot is happening in our [Discord server](https://discord.com/invite/4DdpMMD). Join us for collaboration. Ask questions or tell us your ideas. Your feedback is highly appreciated and is very important in the process of providing a more friendly and stable IDE.

## A bit of history

(I'm going to write a bit here, please, sorry for my poor English, I don't even write my native Spanish very well)

Since the first time I released v3 of the editor, I had in mind to make an editor capable to run in different environments: the cloud and the desktop.

My first idea was to follow a server-client architecture. And provide different servers (backends) for the different contexts where you can run the editor. For example, a backend for the cloud and a backend for the desktop.

It worked. I implemented a PHP backend for hosting the editor in the phasereditor2d.com website, and a Go-based backend for running the editor on the desktop, or private networks.

However, this had some limitations:

* When you run the editor in shared hosting, you can't provide access to "local" tools like a Terminal, an advanced code editor like VS Code, the TypeScript compiler, or Webpack. You can make games only with JavaScript, but we all know that's not the way for making HTML5 games (or apps) these days. So, the shared hosting is fine for testing the editor, but not for making real games.
* The desktop distribution of the editor wasn't very desktop-friendly. You had to launch it in the command line, and create/open projects in a dedicated folder called "workspace".

For the first point, I had no solution at all. I only own a shared hosting on top of PHP and Apache, so my resources in terms of infrastructure are very limited.

For the second point, I tried wrapping the editor in an ElectronJS app. It solved some issues, like launching the editor just with a click, but questions like creating a new project in different locations were not solved.

These are not too complex problems. But I decided to focus more on the Phaser development tools, which is the real value of the editor.

However, after the release of the nested prefabs feature, I decided to give another try to the way the editor is distributed and integrated with your development workflow.

## The new distributions

This is my solution.

First, let's forget about providing an online platform for making games with Phaser Editor 2D. With the limited resources I have, I just can make a toy. What's the solution? A third-party platform. I especially like [Gitpod.io](https://gitpod.io).

That's a real platform for running a development environment in the cloud. Gitpod allows opening a GitHub repository in a remote container (or workspace) and it welcomes you with a VS Code instance running in your browser! So you can code with a powerful editor, run tools like the TypeScript compiler, and, open Phaser Editor 2D alongside VS Code!

![Phaser Editor 2D and Gitpod][1]

This is something you can do since the first version of the editor, but now I have made it a lot easier.

This is what I did:

### Phaser Editor 2D Core

For adapting the editor to the cloud:

* Create a couple of project templates as GitHub repositories, ready for the Gitpod platform.
* Simplify the Phaser Editor 2D backend (I removed the project templates,  the auto-update functions, etc...)
* Remove the workspace concept and embrace the project concept. This means the backend works only in a single project.
* Remove from the client (IDE) the advanced code editors based in Monaco. I replaced them for CodeMirror editors. In the end, in Gitpod you have access to the powerful VS Code.
* Create a [node module for installing the editor via NPM](https://www.npmjs.com/package/phasereditor2d-launcher).

This new "minimal" backend had the new name of **Phaser Editor 2D Core**. And I find it is not only useful for cloud-based development, else I think that's the right setup for developing games locally. I love that you can install/update it via NPM and "force" your teammates to use the same version of the editor.

[Learn more about Phaser Editor 2D Core](https://help.phasereditor2d.com/v3/intro/core.html)

But what about the project templates? I created a [Phaser Editor 2D Start](https://phasereditor2d.com/start) page, it lists a few of project templates with different setups:

* For basic JavaScript-based development.
* For basic TypeScript-based development.
* For advanced TypeScript-Webpack-based development.

And also a few example games.

You can download a template, open it on Gitpod, or go to the GitHub project. So, the workflow for starting with **Phaser Editor 2D Core** is like you do with other web tools: you start cloning/downloading a repository.

![Phaser Editor 2D start page][2]

Phaser Editor 2D Core is the solution for you if you want to make Phaser games following a modern web development workflow.

### Phaser Editor 2D All-in-One

Second point. An editor for the desktop.

We have a "minimal" Phaser Editor 2D Core, so we need something with deeper integration with the desktop. Many of you come to Phaser Editor 2D because want to have a traditional IDE-like experience. 

This is what I did:

* Create an ElectronJS app for wrapping Phaser Editor 2D Core.
* Show a Start page with buttons for creating a new project, for opening an existent project, and show a list of the recent projects.
    ![All in one welcome page][3]
* Include the starter project templates and show them on the New Project page, so you don't need an Internet connection for starting a new project.
    ![All in one new project][4]
* Show native dialogs (thanks to ElectronJS) for opening a folder.
* Include the advanced Monaco editors in the IDE, for better JavaScript coding (yet I recommend using VS Code for coding).

This distribution of the editor has the name of **Phaser Editor 2D All-in-One**. 

"All-in-One" because it includes the tools you need for working offline. If you are used to traditional game development IDEs (Unity, Godot, GameMaker,...), and don't want to adopt the web development workflow. Or if you want just to try the editor, then **Phaser Editor 2D All-in-One** is for you.

[Learn more about Phaser Editor 2D All-in-One](https://help.phasereditor2d.com/v3/intro/all-in-one.html)

## Breaking changes

In the process of simplifying Phaser Editor 2D Core, I changed or removed some features:

* Removed the options to update/download the editor (the flags `-update`, `-download`). Now you can install & update the editor via NPM. Check [phasereditor2d-launcher](https://www.npmjs.com/package/phasereditor2d-launcher).
* Removed the workspace concept (`-ws` flag). You cannot create a new project with Phaser Editor 2D Core. When you start it, you should set the project path, with the `-project` flag.
   ```$ PhaserEditor2D -project path/to/game```
 For starting a project in Core, you can download a [starter template](https://phasereditor2d.com/start). Or create it with Phaser Editor 2D All-in-One. 
* Phaser Editor 2D All-in-One allows creating new projects and opening a project at any location of your system.
* In Phaser Editor 2D Core, I replaced the Monaco editors for CodeMirror editors. It doesn't provide code auto-completion and other advanced Monaco features. Code editing is great in VS Code. However, the Monaco editors remain in Phaser Editor 2D All-in-One.

## What's next?

The Marketplace! I want to implement a marketplace for keeping in a single place all content related to the editor. If you are working with the editor (or plain Phaser), making tutorials, videos, games, plugins, assets, you will be able to publish (or link) them in the marketplace.

This will take some time for me, I'm not skilled in traditional web development, but I believe it will help to grow the community around the editor.

Maybe in the future, I can add payments to the marketplace. I want to diversify my sources of income. I think about it every day. Because I want someday to release the editor for free and fully open source. Maybe I can do it, providing services for game development, like game hosting, game servers, a marketplace. It is a lot of work, and the competition is huge, but I keep dreaming about it. For now, the most important task is adding the features the editor needs, like a Timeline Animator. Maybe I will work on it after complete the marketplace.

Keep in contact!

Arian


  [1]: https://phasereditor2d.com/blog/content/images/20210917214823-PhaserEditor2D-Gitpod.jpg
  [2]: https://phasereditor2d.com/blog/content/images/20210918072455-phaser%20editor%20start%20page.png
  [3]: https://phasereditor2d.com/blog/content/images/20210918072732-All%20in%20one%20start%20page.png
  [4]: https://phasereditor2d.com/blog/content/images/20210918073015-all%20in%20one%20new%20project.png