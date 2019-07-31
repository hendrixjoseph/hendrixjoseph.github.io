---
layout: post
title: Introducing AutoPhotoSync for Google Photos
tags: [java]
keywords: [autophotosync, google drive, google photos]
image: /images/autophotosync/aps.png
---

Google Drive no longer syncs with Google Photos, meaning viewing your Google Photos on your desktop or laptop is no longer simple.

Instead, you have to go to [Google Photos online](https://photos.google.com/).

Google did alert Google Drive and Google Photo users of this change.

You may have seen the following on your phone:

![Android Screenshot](/images/autophotosync/android-screenshot.png)

Or the following warning pop up in your Windows notifications:

![Windows Screenshot](/images/autophotosync/windows-screenshot.png)

Google announced that, on July 10, 2019, [Google Photos and Google Drive will no longer automatically sync](https://support.google.com/photos/answer/9316089). This was a hindrance to people who needed to have their photos automatically downloaded to their PC or laptop.

People such as bloggers, eBay resellers, designers, and photographers.

People like me.

I decided that this was an opportunity in disguise.

I decided to do something.

I created AutoPhotoSync for Google Photos.

## Introducing AutoPhotoSync for Google Photos

![My not-so-good AutoPhotoSync logo.](/images/autophotosync/aps.png)
*My not-so-good AutoPhotoSync logo.*

AutoPhotoSync is a desktop Java application. It runs in the system tray (known as the Notification Area in Windows) with a simplistic GUI.

When first run, it will ask where you want to save your photos. Then it will run its first syncronizing task - syncing all images in your Google Photo account since July 10, 2019. It will then sync new photos every 24 hours.

If somehow AutoPhotoSync closes, it will syncronize once the program is run again, and then sync again every 24 hours.

Syncing can be forced by selecting the Sync Now option in the right-click menu.

AutoPhotSync is currently [an unverified app](https://support.google.com/cloud/answer/7454865). I'm currently working on getting it verified.

Download [AutoPhotoSync on GitHub](https://github.com/hendrixjoseph/AutoPhotoSync/releases).

## Technical and Privacy Details

AutoPhotoSync only uses Google's `photoslibrary.readonly`  scope. It does not need, nor should have, scopes for anything other than photos, or write and delete access. If the user consent screen indicates otherwise, do not authorize AutoPhotoSync.

AutoPhotoSync is a native (Java) application that provides local sync or automatic backup of users’ Photo files.

AutoPhotoSync does not collect or submit end-user data, private or otherwise. It only downloads users' photos to a local directory.

It uses the [Java Preferences API](https://docs.oracle.com/javase/8/docs/technotes/guides/preferences/index.html) to store user preferences. Currently, this includes only the download path, last sync date, and last sync time.

It also uses the [Java System Tray API](https://docs.oracle.com/javase/tutorial/uiswing/misc/systemtray.html) to run in the system tray.

Finally, it uses a [ScheduledThreadPoolExecutor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ScheduledThreadPoolExecutor.html) to run scheduled tasks.
