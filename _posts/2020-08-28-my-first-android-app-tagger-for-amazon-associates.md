---
layout: post
title: "My First Android App: Tagger for Amazon Associates"
tags: [android]
keywords: [tagger, amazon, associate, associates, affiliate, affiliates, amazon associate, amazon affiliate, android app, google play]
hashtags: [android]
---

One of my [goals for this year](https://www.joehxblog.com/2020-new-years-resolutions-goals/#develop-personally--professionally) (and indeed, it was a failed [goal for last year](https://www.joehxblog.com/2019-goal-check-in/#1-publish-an-android-app) as well) was to create and publish an Android app. I'm happy to report that I have reached that goal.

The app? *Tagger* for Amazon Associates.

## The Problem

Sometimes I want to share something I've seen on Amazon to one of my social media accounts. When I do so, I want to use an affiliate link so that I can earn revenue if someone should purchase the item using my link. Furthermore, I don't want to type in my associate id every time - just once is enough.

This is easy enough to do on the Amazon website in desktop - simply use [SiteStripe](https://affiliate-program.amazon.com/help/stripe.html). However, I want to be able to do this on my phone.

## My Solution

I designed, created, and published an Android app that can receive a share request from other apps (known as an "intent"), takes the Amazon URLs from that intent and ensures it has your affiliate tag in it, and sends out another share intent with the modified URLs.

This allows the user to search for Amazon products on the Amazon app itself, via the phone's web browser, or any other app that searches for Amazon products, and still be able to tag the links with their affiliate id.

In essense, Tagger is an Amazon Affiliate link generator.

I named this app Tagger. I also gave it an ugly icon:

![Tagger Icon](https://raw.githubusercontent.com/hendrixjoseph/tagger/master/app-store-stuff/tagger_logo.png)

Here's a quick animated gif of example usage:

![Example usage](https://github.com/hendrixjoseph/tagger/blob/master/app-store-stuff/example-usage.gif)

## Availablity

[Tagger for Amazon Associates](https://play.google.com/store/apps/details?id=com.joehxblog.tagger) is available on the Google Play Store.

The [code for Tagger](https://github.com/hendrixjoseph/tagger) is on GitHub.

I would like to have Tagger available on [additional app stores](https://github.com/hendrixjoseph/tagger/issues/4).

## Future Work

I do have additional ideas to improve the app, which I've begun documenting on [the app's GitHub Issues page](https://github.com/hendrixjoseph/tagger/issues).

Right now I've identified five additional improvement ideas:

1. [don't duplicate history item when sharing from history](https://github. com/hendrixjoseph/tagger/issues/1)
2. [allow deletion of individual history item](https://github. com/hendrixjoseph/tagger/issues/2)
3. [share "ReceiveActivity" shouldn't be full screen](https://github. com/hendrixjoseph/tagger/issues/3)
4. [identify additional app stores](https://github. com/hendrixjoseph/tagger/issues/4)
5. [create & write privacy policy](https://github. com/hendrixjoseph/tagger/issues/5)

Feel free to add an issue if you have any ideas, or comment below if you don't have a GitHub account.
