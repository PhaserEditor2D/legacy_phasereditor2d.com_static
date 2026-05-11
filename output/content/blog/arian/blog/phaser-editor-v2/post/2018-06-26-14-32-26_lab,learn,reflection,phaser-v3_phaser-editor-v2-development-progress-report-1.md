<!--t Phaser Editor v2 development progress (report 1) t-->
<!--d Report 1 about the progress of the Phaser Editor v2 development. d-->
<!--tag lab,learn,reflection,Phaser v3 tag-->

Hello,

Many users contacted us to know about the release date of Phaser Editor v2. We are working on it! But yet we do not have a date for the release.

However, we want to do a series of development reports to keep you updated on the progress and the features implemented.

This is the first report.

## Phaser 3 metadata

**100% complete**

The Phaser metadata is an in-memory model with the Phaser API, documentation and examples. We use this data to implement many components, like Project wizards, Chains, Canvas tooltips, Asset Pack tooltips, etc...

This metadata is extracted from the Phaser sources, jsdoc and examples.

## Phaser Example Project wizard

**100% complete**

The Phaser Example Project wizard allows the user to quickly create a project based on one of the official Phaser examples. This is a great resource to learn Phaser by messing with the examples.

## Examples local website

**90% complete**

This is a local website that is launched when you run an example. This is a lightweight website with a quick navigation, that we believe is faster than access the online-official Phaser examples.

![Local website with examples][1]

What is missing here is a better styling.

## Phaser Lab perspective

**100% complete**

![Phaser Lab perspective][2]

Phaser Editor inherits from the Eclipse IDE the option of provides many perspectives. In general terms, a perspective is a windows layout, and you can switch from one perspective to other. Phaser Editor v1 provides one Phaser perspective, but in this new version, we are providing two perspectives: Phaser and Phaser Lab.

The Phaser Lab perspective contains tools to help learn Phaser or experiment with it, something that you (we) really need and more now that Phaser 3 is so fresh and there is a lack of tutorials and books. Let's see them one by one.

### Phaser Chains

This is a popular tool for Phaser. Here you can type a piece of code and it will search the matching elements on the Phaser API and examples.

In this new version there are some changes:

* There is only one table with the list of Phaser API members and Phaser examples lines of code.
* You can show only the Phaser API, only the Phaser examples or both.
* The search is executed in a second thread so now the UI is not frozen in a low-end hardware.
* All colors used are customizable.
* From a Phaser API element you can:
 * Show it in the JavaScript editor.
 * Show it in a separate documentation (Jsdoc) window.
 * Show it in the Phaser Types window.
 * Show it in the Phaser Hierarchy window.
* From a Phaser example you can:
 * Show it in the Phaser Examples window.
 * Run it in a local browser.
 * Quickly create a project with the selected example.
 * The lines of the examples code are syntax-colored with the same colors as the JavaScript editor. 

![Phaser Chains][3]

### Phaser Types

This is a window where you can browse all the types of the Phaser API. It is like a Documentation navigator with some plus you can do:

* Quick searches on namespaces, classes, methods, properties, etc...
* To open the selected element in the JavaScript editor.
* To show the documentation in the Jsdoc window.
* It is synchronized with the other Phaser windows like Phaser Chains, Phaser Files and Phaser Hierarchy.

![Phaser Types][4]

### Phaser Hierarchy

This window shows the hierarchy of a Phaser API type. When you select a Phaser API element in any other window, like in Phaser Chains, Phaser Type or Phaser Files, this window shows the complete hierarchy of the containing type.

![Phaser Hierarchy][5] 

### Phaser Files

This tool allows you to navigate the Phaser source files, and open them in the JavaScript editor. In addition, it shows all the Phaser API elements defined in each file. This helps you understand how Phaser is coded and probably will be a good tool to create custom Phaser builds.

As the other windows, this one is synchronized with the workbench selection.

![Phaser Files][6]

### Phaser Examples

This window shows the official Phaser examples. You can navigate them or do quick searches. If you select an example you can:

* Open it in the JavaScript editor.
* Run it in the browser.
* Quickly create a project with it, so you can modify it and test it.

![Phaser Examples][7]

## JavaScript and TypeScript editors

**50% complete**

In this version of Phaser Editor, we provide support for editing JavaScript and TypeScript. These editors are based on the VS Code language server protocol. The editors are not implemented by us, else by the Eclipse community, under the project Eclipse BlueSky. It is an experimental project yet but we believe the future of the Web editing in Eclipse and is getting a lot of attention.

As usual, Phaser API auto-completion will be ready out of the box.

![JS editor][8]

## Bottom line

The first changes on Phaser Editor v2 where 3 months ago. It is a long time compared with the current progress, but at the same time, we did other stuff like a Phaser Editor v1.5.1 release (that we recommend) and some Phaser 3 learning. Some personal issues were interfering with our time but in general terms, we are satisfied with the current progress. To be honest, we do not feel a lot of rush on delivering Phaser Editor v2, Phaser 3 is very fresh and needs its time to get stable. We feel the editor needs a more or less stable and documented Phaser. The good news is that we think Phaser 3 is moving fast and key components are available and well documented, so it allows us to move faster. This Phaser Lab perspective we did helps us to learn Phaser and develop the other editor features.

The next in line is the Atlas Generator editor (to support multi-atlas), a new Sprite Animations editor (to support the new Phaser animations format) and the Asset Pack editor, to support new asset types introduced in Phaser 3.

We are working full time on this. Often I have family issues that force me to travel a lot, from this little and isolated Isla de la Juventud island to Havana, and I lose some time on it, but besides that, we are working hard on the editor.

If you want a real-time indicator of the development progress you can follow us on our [GitHub repo][9].

Keep in touch! 

Arian


  [1]: https://phasereditor2d.com/blog/content/images/20180626134557-local%20website.png
  [2]: https://phasereditor2d.com/blog/content/images/20180626135739-Phaser%20Lab%20perspective.png
  [3]: https://phasereditor2d.com/blog/content/images/20180626142329-Chains.png
  [4]: https://phasereditor2d.com/blog/content/images/20180627105357-Phaser%20Types.png
  [5]: https://phasereditor2d.com/blog/content/images/20180627105749-Phaser%20Hierarchy.png
  [6]: https://phasereditor2d.com/blog/content/images/20180627110413-Phaser%20Files.png
  [7]: https://phasereditor2d.com/blog/content/images/20180627111040-Phaser%20Examples.png
  [8]: https://phasereditor2d.com/blog/content/images/20180627111923-JS%20Editor.png
  [9]: https://github.com/PhaserEditor2D/PhaserEditor