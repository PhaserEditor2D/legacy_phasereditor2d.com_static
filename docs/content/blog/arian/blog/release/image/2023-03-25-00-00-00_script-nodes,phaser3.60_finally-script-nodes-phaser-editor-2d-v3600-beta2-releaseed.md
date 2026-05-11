<!--t Finally, Script Nodes! Phaser Editor 2D v3.60 Beta 2 released. t-->
<!--d Let&#039;s welcome Script Nodes! The building blocks for making the behavior of your game elements. d-->
<!--tag script nodes,phaser3.60 tag-->
<!--image https://phasereditor2d.com/blog/content/images/20230324134819-release-3.60-beta.2.jpeg image-->

Hi!

What a day! Finally, after months of planning the development of the new behavior-related objects, the Script Nodes are available to you!

Today we are releasing Phaser Editor 2D v3.60.beta-2., and it is all about this new gameplay tool.

[Download Phaser Editor 2D v3.60.0-beta.2](https://phasereditor2d.com/downloads)

## Games and tutorials

If you are creating games, tutorials, or any other content (no matter if it is your first project) with Phaser Editor 2D, please tell me, and I will be proud to feature it on the website, newsletter, and social channels.

### Web game development with Phaser & Phaser Editor 2D

![Web game development with phaser & phaser editor 2d][1]

From Yudiz Solutions:

> Ready to take your knowledge to the next level? [Join us for our upcoming webinar on web game development with Phaser 3 and Phaser Editor 2D.

[Join us for the webinar](https://www.meetup.com/yudizsolutions/events/292148410/)

### Travelino Game

![Travelino game][2]

> Visit https://travelino.chat/ and register! First Time users will have to play a Human Verification Game made by me Yudiz Solutions in Phaser Editor2 D!

[Play the game here](https://travelino.chat/re-travelino-phaser3/index.html)

## The Script Nodes

Finally, the Script Nodes are ready!

This is a feature I planned a lot of time ago. Every new year, a new promise of implementing this feature. I knew I had to implement an alternative to User Components, which allows adding multiple "components" of the same type to an object, and which allows making a "tree of behaviors".

I considered different ways of implementing this feature, but with the latest improvements in the prefab system, I realized that this system is very powerful in making extensible and reusable objects. So finally I ended up incorporating a new type of object: the Script Node.

A Script Node is a logical object. It is not intended to be rendered in the scene else its purpose is to implement the behavior of the elements of the game.

The interesting part is that you can create a prefab of a Script Node, just like you can create a prefab of a game object. This means you can create reusable behaviors. And it means that you can create nested behaviors and behavior variants, and build a tree of behaviors.

For designing the new Script Node, I got inspiration from the visual programming languages, the Node concept of Godot, and the [Behavior Tree model](https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)).

Visual programming languages are an inspiration, but making a complete visual language is not the goal. The idea is that you are allowed to:

* Create a little framework of scripts dedicated to a particular game, or a family of games.
* Design this framework of scripts in a way a level designer with no experience in programming can connect the objects with the gameplay.
* Combine the script nodes with game object prefabs, user components, and manually written code.

I'm excited about this. I started preparing a [tiny library](http://github.com/PhaserEditor2D/script-nodes-basic) of Script Nodes with basic behaviors and for setting an event-action protocol that you can follow for making your scripts. I also plan to make another tiny library for audio playing and loading screens. Also, I plan to create a UI for browsing and installing these libraries in your projects, pulling them from the [Phaser Editor 2D Marketplace](http://marketplace.phasereditor2d.com). And what about the behavior tree model? I can study it and probably I can make a library about it, too.

[Learn more about the Script Node](https://help-v3-beta.phasereditor2d.com/scene-editor/script-node.html)

## Phaser v3.60 Beta 21

Are you following the Phaser development? It is going crazy there. Richard Davey plans to release Phaser v3.60 on April 14, the day of the Phaser's 10th anniversary.

This release of the editor supports the latest Beta version of Phaser v3.60.

## What's next

I want to keep working on the Script Nodes. I want to make an example of them and probably I video about it. Also, before the release of Phaser v3.60, I want to add support to the new FX. It is a complex task because I want to make them part of the prefab system.

Oh, don't miss the [Yudiz webinar about Phaser & Phaser Editor 2D](https://www.meetup.com/yudizsolutions/events/292148410/). I subscribed!


Keep in touch!

Arian


  [1]: https://phasereditor2d.com/blog/content/images/20230324145139-yudiz%20Medium.jpeg
  [2]: https://phasereditor2d.com/blog/content/images/20230325043306-travelino%20game.jpeg