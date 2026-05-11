<!--t Phaser Editor 2.1.2 released (important bug fixes) t-->
<!--d Phaser Editor v2.1.2 release for important bug fixes related to the Scene Editor. d-->
<!--tag release,bug fixes tag-->
<!--image https://phasereditor2d.com/blog/content/images/v2.1.2/multiple-windows.png image-->


Hi,

Today we are releasing Phaser Editor v2.1.2 with important fixes.

[Download Phaser Editor 2D v2.1.2](/blog/downloads/)

<!-- index-start -->

* [Games and tutorials](#games-and-tutorials)
* [Scene Editor](#scene-editor)
 * [Paint loop](#paint-loop)
 * [Keys processing](#keys-processing)
 * [Optimizing hit tests](#optimizing-hit-tests)
* [Multiple windows](#multiple-windows)
* [Filtering node_modules and git folders](#filtering-node-modules-and-git-folders)
* [Asset Pack Editor](#asset-pack-editor)
* [Start view links](#start-view-links)
* [What's next](#whats-next)


<!-- index-end -->

## Games and tutorials {#games-and-tutorials}

If you are creating games, tutorials or any other content (no matter if it is your first project) with Phaser Editor, please, tell us, we are more than happy to feature it in our website, newsletter and social channels.

## Scene Editor {#scene-editor}

### Paint loop {#paint-loop}

Thanks to the Github user [@j2l](https://github.com/j2l), who found the Scene Editor was consuming all the CPU and GPU: [#127: I noticed the GPU went loco with PhaserEditor](https://github.com/PhaserEditor2D/PhaserEditor/issues/127).

We fixed an important part of the bug, and we need you to test the fix and report if you notice a high consumption of your CPU/GPU. The Scene Editor runs Phaser inside an embedded browser to render the scene. By default, Phaser runs an update/render loop at a high FPS. We stop that loop and update the screen only when it is needed. But this bug was starting the loop after a new image was loaded in the scene. A huge canvas (like that used by the Scene Editor) running at 60 FPS is a big problem.

We added a new **Debug Paint Calls** parameter in the WebView section. When it is enabled, the Scene Editor shows the number of paints. You can keep an eye to that number, that should be incremented only by demand when you move the camera or change the scene content. If you see it is incremented too fast and does not stop, please, report it in our [GitHub Issues](https://github.com/PhaserEditor2D/PhaserEditor/issues).

![Debug paint calls](/blog/content/images/v2.1.2/debug-paint-calls.png)

If you experience a wrong behavior a browser refresh could be a workaround, but please, report it.

![Refresh Scene Editor](/blog/content/images/v2.1.2/refresh-scene-editor.png)

### Keys processing {#keys-processing}

The embedded browser technique (WebView) we use in the Scene Editor presents some challenges. Not all keys pressed in the browser are propagated to the IDE. For example, `Ctrl+A`, `Ctrl-X`, `Ctrl+Y`, etc... Before we implemented a listen-all-system-keys strategy, to catch all the keys, but it never worked 100%. Now we implemented a new strategy, we catch these special keys in the browser and send it to the IDE via websocket. It is working better now. If you find any bug here, please, report it.

### Optimizing hit tests {#optimizing-hit-tests}

When you have interactive game objects, Phaser runs hit tests each time you move the mouse. We implemented a way to perform the hit tests by demand (when you click on the scene). This way should reduce the resources consuming of the Scene Editor.


## Multiple windows {#multiple-windows}

Do you know you can open many windows in Phaser Editor? It is a feature inherited from Eclipse IDE. This could be a nice practice, especially for those who work with multiple monitors. You can show the Scene perspective in a window and the Phaser Labs perspective in another window (without the need to run two instances of the editor). We are thinking about how to get more advantage of this feature, but for now, we fixed some related bugs:

* We fixed a "Widget disposed" error when you close a window. That error is emitted by the main toolbar we introduced in the last release.
* We use a hidden WebView to create snapshots of the scene files, that is created as a child of a window. Now if you close that window a new hidden browser is created in any other available window.

![Multiple windows](/blog/content/images/v2.1.2/multiple-windows.png)

## Filtering node_modules and git folders {#filtering-node-modules-and-git-folders}

We noticed in a video from a user that Phaser Editor delays a lot opening a project. After investigating the issue, we found the user included a `node_modules` folder in the `WebContent` folder. That's not good. Phaser Editor scans all the files of the `WebContent` folder looking for asset pack files, scene files, atlas files, etc... Sometimes, to detect the content type of a file, it has to read the whole file, so, if you have a lot of files that process will take a lot.

The practice we recommend is to create a project for the server-side (where nodejs runs) and another project for the game (client-side). Or you can create resource filters, to exclude the `node_modules` from the Phaser Editor project. By the way, you should exclude `.git` folders too.

The good news is that now new projects are created with those filters by default. This means, `node_modules` and `.git` folders will be excluded from the project.


![Resource filters](/blog/content/images/v2.1.2/create-resource-filters.png)


## Asset Pack Editor {#asset-pack-editor}

We removed a confusing copyright message in the Asset Pack Editor files [#128](https://github.com/PhaserEditor2D/PhaserEditor/issues/128).

## Start view links {#start-view-links}

Fixed the URL of the links to open the Phaser Editor website.

## What's next {#whats-next}

This release was not in the plan, but the CPU/GPU related bug is an important one, and we had to spend time to fix it. If everything going well, we will continue writing the Phaser Editor v2 documentation. We just finished the first chapter: [First Steps](https://phasereditor2d.com/docs/v2/first-steps.html). You can read our [main roadmap](https://phasereditor2d.com/blog/2019/06/phaser-editor-211-released#whats-next) in the notes of the previous release.



Keep in contact!
<br>
Arian