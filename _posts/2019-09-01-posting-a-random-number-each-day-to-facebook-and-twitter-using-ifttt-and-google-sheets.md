---
layout: post
title: Posting a Random Number Each Day to Facebook and Twitter using IFTTT and Google Sheets
tags: [facebook, ifttt, twitter, youtube]
keywords: [ifttt, google sheets, sheets]
image: /images/ifttt/cover.png
---

A couple of weeks ago I made a Twitter and Facebook "bot" using IFTTT and Google Sheets to post a random number every day to novelty accounts.

The novelty accounts should be at the bottom of this post. If not, here are the links for the [Random Number of the Day Twitter Page](https://twitter.com/RandNumOfTheDay) and the  [Random Number of the Day Facebook Page](https://www.facebook.com/RandomNumberOfTheDay/).

I recorded myself making this bot, and posted that video along with some narration to YouTube:

{% include youtube.html param="4VWu5159Euw" %}

I case you're not interested in watching the video, below are some screenshots of the key triggers and actions to make each applet necessary for the bot to work:

## Applet 1: Date to Google Sheet

### Create Date Trigger

![Setting the date trigger.](/images/ifttt/date-trigger.png)
*Setting the date trigger.*

### Create Sheet Action

![Setting the sheet action.](/images/ifttt/sheet-action.png)
*Setting the sheet action.*

## Applet 2: Google Sheet to Twitter

### Create Sheet Trigger

![Setting the sheet trigger.](/images/ifttt/sheet-trigger.png)
*Setting the sheet trigger.*

### Create Twitter Action

![Setting the Twitter action.](/images/ifttt/twitter-action.png)
*Setting the Twitter action.*

## Applet 3: Google Sheet to Facebook Page

![Setting the Facebook Page action.](/images/ifttt/facebook-action.png)
*Setting the Facebook Page action.*

### Create Sheet Trigger

![Setting the sheet trigger.](/images/ifttt/sheet-trigger.png)
*Setting the sheet trigger.*

## Google Sheet Settings

Make sure to set the sheet settings to update and recalculate, otherwise the same number might be posted each time:

![Setting the Spreadsheet settings.](/images/ifttt/sheet-update.png)
*Setting the Spreadsheet settings.*

## Twitter

<a class="twitter-timeline" data-width="700" data-height="500" href="https://twitter.com/RandNumOfTheDay?ref_src=twsrc%5Etfw">Tweets by RandNumOfTheDay</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## Facebook

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0&appId=197946313591875&autoLogAppEvents=1"></script>

<div class="fb-page" data-href="https://www.facebook.com/RandomNumberOfTheDay/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/RandomNumberOfTheDay/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/RandomNumberOfTheDay/">Random Number of the Day</a></blockquote></div>