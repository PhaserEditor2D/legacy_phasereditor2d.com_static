<!--t Phaser Editor Development Roadmap for 2018 t-->
<!--d The roadmap for 2018 development. Phaser v3 support. New products. New ideas. Rebranding. d-->
<!--tag news,website,roadmap,ideas tag-->
<!--image https://phasereditor2d.com/blog/content/images/20171213144121-roadmap.jpg image-->

Hi,

2017 is ending and we want to share with you the plan we have for 2018.

## Phaser v3

Yes, to support Phaser v3 is the main target of 2018. What we are going to do is to keep supporting both Phaser v2 (with the Phaser Editor v1 series) and Phaser v3 (with a new Phaser Editor v2 series).

This means that we are going to develop two different products in parallel, Phaser Editor v1, and Phaser Editor v2. In terms of licenses, it keeps the same, you will be able to unlock any version of the editor with the same license key. 

## Phaser Editor v1

Right now, Phaser v2 is the recommended version of Phaser to create serious projects, for that reason, we are going to keep updating Phaser Editor v1. However, no new features will be added, with the exception of Tilemap and BitmapFont support for the scene editor.

As soon as Phaser v3 gets stable and production ready we are going to stop the Phaser Editor v1 updates.

## Phaser Editor v2

The Phaser Editor v2 series will be the first version to support Phaser v3. The fact that Phaser v3 breaks with many of the Phaser v2 API and tooling, allow us to do deeper/breaking changes in many aspects of the editor too. These are some of the changes we have in mind:

* New JavaScript tooling based on the Language Server Protocol and the TypeScript Server. We are evaluating two Eclipse implementations: TypeScript IDE and BlueSky.

* A new windows layout more friendly to scene creators.

* A more friendly assets manager and navigator.

* New asset formats and editors to help professional teams to split the workflow and share the resources across different projects. We are looking forward to creating the basis for a future asset store.

* A scene editor based on WebKit, to build scenes based on Phaser. The current scene editor is based on JavaFX, that is a powerful and stable toolkit, but a Phaser based implementation is going to allow any kind of objects (like emitters or lights) that are Phaser dependent and hard to simulate with JavaFX or any other external technology. Just look the current Text implementation, it renders too different in JavaFX and Browser. At the same time, we look forward to creating a simple extension system, to allow users to create custom properties and operations, in JavaScript. The drawback with the Phaser based solution is the stability of the Phaser implementation, for that reason, this is going to be a change we will do at the end of 2018.

* We are thinking on create a Phaser Editor Designer Edition. Basically the same Phaser Editor, but only with the tooling to manage the assets and create the scenes. This could work for team members that are not coders, or coders that are coding with other editors.

* We believe that Eclipse is a powerful platform to create video-games tools. If there is something is disturbing in Phaser Editor, it is because of our implementation, but Eclipse has all the potential. We should work more on this, on the improvement of the current elements, and catch the spirit of game creation. Going in this direction, at the same time of improving the current tooling, we have some "crazy" ideas, related to a Phaser Editor Server. We are cooking the idea of connecting the core of Phaser Editor with dedicated web applications. Just imagine that in your team, the level makers can connect to a shared Phaser Editor workspace (in your network, we are not thinking on build our own cloud) by just opening its web browser, and start creating there, with a free-distraction application just made for them. That's the concept, lightweight client applications dedicated to specific tasks or roles (packing, coding, leveling, gaming), as a complement (and connected) to the traditional huge IDE. This is not going to happen soon, but we keep that in mind.

* The online Phaser Chains, our first tool related to Phaser, will be updated to support Phaser v3, but we are going to develop it again from scratch, with some nice ideas that we are going to implement after the docs tooling of Phaser v3 is complete.

## Learning resources

Right now the main resource to learn Phaser Editor is the documentation. There are some tutorials from the community and from us, but yet it needs much more. To write detailed tutorials is really time-consuming, so we have to look for alternatives. Something we can do is to create more demos, a demo together with a small article pointing the key aspects of the demo. 


## Eclipse community

One of the nicest surprises of 2017 was the contact we had with the Eclipse community. An article about Phaser Editor was included in the Eclipse Newsletter of November and users from this community sent us congratulations and shown interest in the editor.
 
We want to keep this contact. As we mentioned before, we are going to include the new Language Server Protocol, a field where Eclipse is putting energy, but also we want to collaborate more with it, especially with TypeScript IDE and BlueSky. At the same time, we have the plan to create mini tutorials about the Eclipse Workbench, that is a powerful tool full of tricks and utilities, that are present in Phaser Editor but probably many of the non-Eclipse users just don't know.

## Rebranding

As you can note, we are redirecting all the traffic to our new address [https://PhaserEditor2D.com][1]. We created Boniatillo.com (boniatillo is a funny/easy-to-remember nickname that makes reference to a Cuban popular food) as a personal place to host any kind of idea or project, but Phaser Editor is demanding its own space!

Together with the new website name, we changed the other related accounts (is better now than later!):

* GitHub  [https://github.com/PhaserEditor2D/PhaserEditor][2] (we renamed the user **boniatillo-com** to **PhaserEditor2D**)

* Twitter [https://twitter.com/PhaserEditor2D][3] (**@boniatillo_com** was renamed to **@PhaserEditor2D**, so followers, messages, and tweets remain, however, we renamed an old personal account to **@boniatillo_com** to catch the users coming from older links).

* Facebook [https://facebook.com/PhaserEditor2D][4] (this change is not ready yet, Facebook takes its time to do Page renames).

* Online Phaser Chains [https://Chains.PhaserEditor2D.com][5] 

* Support email **developers@phasereditor2d.com** (the old *developers@boniatillo.com* remains available)

Note we added the 2D word to the website and accounts. We like it, it adds a sense of visuality and gaming, so we will use the names **Phaser Editor** or **Phaser Editor 2D** without distinction, both talks about the same product.

Please, if you have links to our website or accounts, update them!


Best regards,

Arian


  [1]: https://PhaserEditor2D.com
  [2]: https://github.com/PhaserEditor2D/PhaserEditor
  [3]: https://https://twitter.com/PhaserEditor2D
  [4]: https://facebook.com/PhaserEditor2D
  [5]: https://Chains.PhaserEditor2D.com