---
layout: post
title: Preview SVG Files in Windows Explorer with Microsoft PowerToys
tags: [windows]
keywords: [svg, windows explorer, explorer, preview svg, svg preview, svg thumbnail, svg thumbnails, microsoft powertoys, powertoys]
image: /images/microsoft-powertoys/cover.png
---

SVG files are like JPG, PNG, and GIF files. They're all images. But unlike JPG, PNG, and GIF files - which are raster images - SVG files are vector images. And, unlike JPG, PNG, and GIF files, SVG files don't render a thumbnail in Windows Explorer or show up as a preview.

I'm not entirely sure why. They just aren't, as much as I would like them to be.

After all, it would be nice if I had a list of, say, six different Easter egg designs, that I could rely on what those designed look like instead of their filenames:

![A list of six Easter egg SVG files in Windows Explorer with no thumbnail.](/images/microsoft-powertoys/list-of-six-easter-eggs.png)

In my vain effort to fix this most egregious mistake, I searched for "svg preview in windows explorer" on Google.

I did get some results, most notably the following SuperUser posts:

* [How to enable svg preview in file explorer?](https://superuser.com/questions/1401509/how-to-enable-svg-preview-in-file-explorer)
* [How to get SVG thumbnails in Windows Explorer?](https://superuser.com/questions/342052/how-to-get-svg-thumbnails-in-windows-explorer)
* [Why SVG viewer extension fails to show preview of SVG files in windows explorer?](https://superuser.com/questions/1548832/why-svg-viewer-extension-fails-to-show-preview-of-svg-files-in-windows-explorer)

These led me to a few different plug-ins, but none of them worked.

I did, however, eventually enable SVG thumbnails and previews in Windows Explorer.

I got a few cool extras when I did, as well.

I discovered [Microsoft PowerToys](https://github.com/microsoft/PowerToys/releases)

After I installed Microsoft PowerToys, the icon for each file became a thumbnail, just as I always wanted:

![The six Easter egg SVG files in Windows Explorer with a thumbnail.](/images/microsoft-powertoys/svg-preview-of-six-easter-eggs.png)

So that's how to get SVG thumbnails in Windows Explorer.

## More on Microsoft PowerToys

[Microsoft PowerToys](https://github.com/microsoft/PowerToys) is a reimagining of the [Windows 95 PowerToys](https://socket3.wordpress.com/2016/10/22/using-windows-95-powertoys/) that was available over two decades ago.

Written in primarily C++ and C#, Microsoft PowerToys is an open-source project headed by the folks at Microsoft.

It has a number of useful utilities, including:

* [Color picker](https://aka.ms/PowerToysOverview_ColorPicker) which lets you copy and color visible on your display.
* [FancyZones](https://github.com/microsoft/PowerToys/wiki/FancyZones-Overview) lets you create complex window layouts and quickly position windows into those layouts.
* [Markdown and SVG files previews in File Explorer](https://github.com/microsoft/PowerToys/wiki/File-Explorer-Add-ons-Overview) - the whole point of this blog post.
* [Multi-Image Resizer](https://github.com/microsoft/PowerToys/wiki/Image-Resizer-Overview) lets you resize multiple images at once.
* [Keyboard Remapper and Keyboard Shortcut Maker](https://github.com/microsoft/PowerToys/wiki/Keyboard-Manager-Overview) lets you remap (say, swap the *a* and *b* keys) keys and create your own shortcuts.
* [Multifile Renamer](https://github.com/microsoft/PowerToys/wiki/PowerRename-Overview) lets you rename multiple files at once.
* [Power Run](https://github.com/microsoft/PowerToys/wiki/PowerToys-Run-Overview) is an advanced "run" box.
* [Windows Key Shortcut Guide Overview
](https://github.com/microsoft/PowerToys/wiki/Shortcut-Guide-Overview) shows what keyboard shortcuts are currently available.

P.S. If you like my Easter Eggs SVG graphics, they're available on my [Easter Egg Collection on the Noun Project](https://thenounproject.com/joehx/collection/easter-eggs/). (Or at least some of them, for now.)