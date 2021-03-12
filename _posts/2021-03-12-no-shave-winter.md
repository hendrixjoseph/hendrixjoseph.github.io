---
layout: post
title: No-Shave Winter - 121 Selfies Across 121 Days
tags: [culture]
keywords: [selfie, face, no-shave, no shave, shave, photo]
image: /images/covers/no-shave-winter.png
---

Throughout the winter (from October 31st through February 28th) I took a selfie every night before I went to bed. I also didn't shave.

{% include youtube.html param="YyTrVqy1-bc" %}

## Post Processing

### Orienting the Faces

I used [Facelapse - Selfie A Day & Baby Time Lapse Maker](https://play.google.com/store/apps/details?id=io.skripi.facelapse) to auto-orient the photos and export them as a video.

There was one caveat to the app: it ordered the photos by "last modified date." Since I used my [AutoPhotoSync](https://www.joehxblog.com/introducing-autophotosync-for-google-photos/) to download my files onto my desktop so that I could better organize them, the "last modified date" wasn't necessary when I took the photos... or even in the order that I took the photos.

I *had* named the photos according to the date I took them: `2020-12-31.jpg` was the selfie I took on December 31, 2020, for example. (The initial files were auto-named with the date in the filename - the aforementioned file was called `IMG_20201231_215608354.jpg` before I renamed it. Using the [PowerToys PowerRename utility](https://docs.microsoft.com/en-us/windows/powertoys/powerrename) I was able to quickly rename many at once).

Thankfully, with the Powershell `Set-ItemProperty` command, I was able to [change the last modified date](https://www.online-tech-tips.com/computer-tips/how-to-change-the-last-modified-date-creation-date-and-last-accessed-date-for-files-and-folders/):

    Set-ItemProperty -Path 2020-12-31.jpg -Name LastWriteTime -Value 2020-12-31

Of course, I didn't type each command individually. I copied a list of the files (using the old `dir/b *.jpg > files.txt` MS-DOS-style command), copied that list into [Excel](https://www.microsoft.com/en-us/microsoft-365/excel), and quickly generated the 121 commands I needed. Next, I copied those commands over into [Notepad++](https://notepad-plus-plus.org/) so that I could remove the unnecessary "tab" whitespace and double-check they looked correct.

I was then able to copy those commands directly into the Powershell terminal.

Finally, I had to force Google Drive to update the last modified date - to do this, I merely had to move the images from one directory to another.

### The 11 × 11 Grid of Faces

I used [Inkscape]() to make the 11 × 11 grid of all 121 images of my face, 

I dragged all 121 images at once from my File Explorer onto the Inkscape canvas. Then, making sure all the images were selected in Inkscape (<kbd>CTRL</kbd>-<kbd>A</kbd>), I selected **Object > Arrange** from the menu, and then clicked on the "Arrange" button in the arrange panel that popped up:

![Inkscape arrange panel.](/images/inkscape/arrange-panel.png)

### The Scrolling Text

I created the scrolling text with [DaVinci Resolve 16](https://www.blackmagicdesign.com/products/davinciresolve/).

I also used DaVinci Resolve 16 to insert the 11 × 11 grid of faces along with the title text on the first frame.

DaVinci Resolve 16 also gave me a proper file format, along with the proper resolution, to upload to YouTube.

### The Music

The music comes from [Windows 10 Video Editor](https://support.microsoft.com/en-us/windows/create-films-with-video-editor-94e651f8-a5be-ae03-3c50-e49f013d47f6).

Windows 10 Video Editor comes with several music tracks to use with videos. Some are sillier than others. I listened to several before I settled on one called "Arcade Party."

![The Windows 10 Video Editor Background Music dialog.](/images/windows-10-video-editor-background-music.png)

### The Thumbnail

For whatever reason, YouTube wouldn't let me select the first frame to use as the thumbnail - the frame that contains the title text along with the 11 × 11 grid of faces.

Thankfully, [VLC player](https://www.videolan.org/vlc/index.html) will take snapshots of any frame in any video (**Video > Take Snapshot**), and I was able to upload that snapshot as my thumbnail.


