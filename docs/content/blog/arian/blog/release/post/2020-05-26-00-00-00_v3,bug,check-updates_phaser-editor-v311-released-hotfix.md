<!--t Phaser Editor v3.1.1 released. Hotfix. t-->
<!--d Hotfix of the previous 3.1.0 release. Fixes BitmapText bug. New Check for updates function. d-->
<!--tag v3,bug,check updates tag-->

Hi!

This is a hotfix release! A client reported a bug with the BitmapText default origin, which is on `0,0` and not `0.5, 0.5` as many other object types:

[#33: Wrong BitmapText by default](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/33)

Another user asked for in-app updates, as v2 does. We are thinking of a solution to it. We have some ideas. But for now, we implemented a simple "check for updates" function in the server and it is great to release it today.

Each time you start the server, it checks if there is a new version of the editor and shows a message if it is the case.

You can join the discussion in the GitHub issue:

[#32: In-App Update](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/32)

Some of you are experiencing confusion with the TypeScript project template. Now the editor opens the README file when a TypeScript project is created. We hope this will help you to properly run the project: [#37: Guide for TypeScript project template](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/issues/37)

[Read the full Change Log](https://github.com/PhaserEditor2D/PhaserEditor2D-v3/blob/master/CHANGELOG.MD)

We did this quick update because we think the BitmapText bug is blocking. If you find any issue or have any idea, please contact us.

We also updated [Play Phaser Editor 2D](https://play.phasereditor2d.com)

Keep in contact!

Arian