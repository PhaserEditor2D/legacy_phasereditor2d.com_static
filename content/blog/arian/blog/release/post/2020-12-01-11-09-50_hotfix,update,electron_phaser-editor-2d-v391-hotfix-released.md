<!--t Phaser Editor 2D v3.9.1 hotfix released t-->
<!--d A release with fixes for the Electron-based distribution on macOS. Includes small features. d-->
<!--tag hotfix,update,electron tag-->

Hi,

Phaser Editor 2D v3.9.1 is available to download or update. This is a hotfix release for [previous v3.9.0](https://phasereditor2d.com/blog/2020/11/phaser-editor-2d-v390-released-black-friday-50-off-sales-electronjs), but there are also small improvements.

[Download Phaser Editor 2D v3.9.1](https://phasereditor2d.com/downloads)

## Electron-based editor

Some users reported the Cut, Copy, and Paste commands are not available in macOS. We fixed it. We included the whole Edit menu in Electron's application menu.

## Update notifications

The editor shows a notification if there is a new version available: 

![Update notification](/blog/content/images/v3.9.1/update-notification.png)

Also, the main menu shows an option to check for updates:

![Check for updates](/blog/content/images/v3.9.1/check-for-updates.png)

Other changes about the updating:

* The `flags.txt` is preserved after an update.
* The `-force-update` flag forces to update the editor even if there isn't a new version.

## Resource filtering (skip files)

We improved the way you can exclude files from your project. Now you can add glob patterns to the `.skip` files. This means, you can exclude particular files and even you can create a single `.skip` file in the root of the project, and write the patterns to exclude the files at any location. For backward compatibility, an empty `.skip` file is converted to the `*` rules, to exclude all the folder's content.

[Learn more about resource filtering](https://help.phasereditor2d.com/v3/misc/resources-filtering.html)

## What's next

We want to do a bit of cleaning in the GitHub issues. But what is really important, is that we will start adding support for some of the new features included in Phaser v3.50.

Keep in contact!

Arian