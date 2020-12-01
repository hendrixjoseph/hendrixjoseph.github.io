---
layout: post
title: My GitHub Game Off 2020 Entry
tags: [android, game, github]
keywords: [moonshot, game off, github game off, game jam, game, java, libgdx, tiled, gamesfromscratch, opengameart, android app, google play]
hashtags: [GitHubGameOff]
image: /images/github-game-off-2020/screenshot.png
---

During November, I participated in the [GitHub Game Off 2020](https://itch.io/jam/game-off-2020).

The GitHub Game Off is an annual game jam held during the month of November and centered around a secret theme.

A [game jam](https://en.wikipedia.org/wiki/Game_jam) is where people try to make a game from scratch. Wikipedia says it's a contest, but the GitHub Game Off has no prizes. 

![GitHub Game Off header image by João Ribeiro](/images/github-game-off-2020/header.png)
*GitHub Game Off header image by [João Ribeiro](https://www.artstation.com/wodzgn )*

## About The Experience

I've never participated in a game off or game jam before, so I had no expectations going in. My main goal was to make a game - it didn't need to be a "good" game. Just so long as it was playable.

Since I am primarily a Java programmer, I decided I would stick to what I know. And, as it turns out, there's a Java gaming engine known as [libGDX](https://libgdx.badlogicgames.com/).

![libGDX logo](/images/github-game-off-2020/libgdx-logo.png)
*The libGDX logo.*

The libGDX tutorials on [GameFromScratch](https://gamefromscratch.com/tag/libgdx/), along with [his YouTube channel](https://www.youtube.com/gamefromscratch), helped me get a hand on how libGDX works.

It also introduced me to another tool I ended up using call [Tiled](https://www.mapeditor.org/). Tiled is a map editor (as evidenced by the domain name [mapeditor.org](https://www.mapeditor.org/)) that is described on its home page as *Your free, easy to use and flexible level editor.*

![Tiled logo](/images/github-game-off-2020/tiled-logo.png)
*The Tiled logo.*

Other tools I used that I was already familiar with include [Android Studio](https://developer.android.com/studio), [Inkscape](https://inkscape.org/), [Paint.net](https://www.getpaint.net/), [Notepad++](https://notepad-plus-plus.org/), [git](https://git-scm.com/), and [GitHub](https://github.com/).

I also got a couple of image assets from [OpenGameArt.org](https://opengameart.org/). Here are the attributions per the creative commons licenses:

* "[Space - cartoony tiled texture](https://opengameart.org/content/space-cartoony-tiled-texture)" by [alpha_rats](https://alpharats.com/) is licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
* "[Meteor (animated)](https://opengameart.org/content/meteor-animated-64x64)" by [Lluc Entertainment](https://opengameart.org/users/lluc-entertainment) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## About My Game

The theme was *moonshot* so my game had to involve the moon somehow.

So I decided *you would be the moon* and you would collect stars while avoiding meteors. Oh, and you roll around to get around.

Yes, it makes no sense. Remember how I said that my goal was to make a game, not necessarily a good game?

Here's a youtube of the game:

{% include youtube.html param="Xb6p44Cm_2k" %}

The controls are simple. On desktop, you use the arrow keys. The left arrow key moves the moon left, the right arrow key moves the moon right. Up moves the moon up. Gravity moves the moon down, so the down button does nothing.

On Android, the screen is split into three parts. Pressing somewhere on the left quarter of the screen moves the moon left. Pressing somewhere on the right quarter of the screen moves the moon right. Finally, pressing anywhere in the "middle half" of the screen moves the moon up.

The goal of the game is to collect as many stars as possible while avoiding meteors. Meteors don't start appearing until after you have ten points, however.

## Thoughts on Next Time

A couple of thoughts on what I need to do differently for my next game:

* For keyboard input, I should allow the player to remap the controls.
* I need to handle scaling better. The Android version has a much higher pixel density than the desktop version, making the sprites and text smaller on Android versus desktop.

## Availability

![Moonshot logo](/images/github-game-off-2020/moonshot-logo.png)

<iframe frameborder="0" src="https://itch.io/embed/838521?linkback=true" width="552" height="167"><a href="https://hendrixjoseph.itch.io/moonshot">Moonshot by JoeHx</a></iframe>

As soon as it passes their reviewers, Moonshot should be available on:

* [the Google Play Store](https://play.google.com/store/apps/details?id=com.joehxblox.moonshot)
* [the Amazon App Store](https://www.amazon.com/gp/product/B08PCBXQHW)

And, of course, you can find [the source code on GitHub](https://github.com/hendrixjoseph/moonshot/).