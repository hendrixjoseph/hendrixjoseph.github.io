---
layout: post
title: Revamping the Vandalia Toastmasters Website
tags: [toastmasters, web]
keywords: [vandalia, vandalia toastmasters, vandalia toastmasters club]
image: /images/toastmasters/vandalia/new-homepage.png
---

I've been trying to improve the web presence of my Toastmasters club - particularly the SEO-ness of the club's webpage.

If you're unfamiliar with how most Toastmaster Club websites work - there's a site called [FreeToastHost](https://www.toastmastersclubs.org/) that provides free web hosting and subdomain for Toastmasters Clubs. The site isn't 100% customizable, however, this means that it provides a consistent look-and-feel across different club websites.

Our club is [the Vandalia Toastmasters Club](https://vandalia.toastmastersclubs.org/).

To help with the club website's [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization), first I read and followed a few tips on FreeToastHost's article [Improving Your Google Ranking](https://support.toastmastersclubs.org/doc/item/improving-google-ranking).

I aimed to just add keywords and tags. Of course, I didn't just want to throw a bunch of words and phrases that looked out of place. I wanted everything to flow organically - I want the website to be as beneficial to readers as it is to search engines.

## Revamping the Homepage

Here's the old homepage:

![Screenshot of the old homepage.](/images/toastmasters/vandalia/old-homepage.png)

The only part of the homepage I can edit is the section in the right column. The old homepage was fairly heavy on images, and light on text.

The text of the old homepage read:

> We are a diverse group devoted to the Toastmasters' mission of providing a supportive learning experience that empowers members to develop communication & leadership skills resulting in greater self-confidence & personal growth!

I wanted to get a bit more text on the homepage. I also wanted to focus on a few keywords - I wanted to mention neighboring cities and communities, as well as add the keyword *public speaking* - especially considering that's what Toastmasters is most well-known for.

Here's what I wrote on the new webpage:

> We are the Vandalia Toastmasters Club, a friendly group devoted to Toastmasters International's mission of providing a supportive learning experience that empowers members to develop the necessary communication, public speaking, and leadership skills for improved self-confidence as well as personal and professional development!
Founded on April 1, 1993, we are a community club and open to the public. Guests are always welcome! We meet in the Dayton suburb of Vandalia, Ohio, but have members and guests from surrounding cities including Huber Heights in Montgomery County and Tipp City in Miami County.
>
> We meet the first and third Tuesday of every month from 7:00 PM to 8:15 PM. We meet on the 1st Floor Conference Room of the Vandalia Justice Center at  245 James Bohanan Dr,  Vandalia, Ohio 45377. Check out the [Meeting Information / Directions page](https://vandalia.toastmastersclubs.org/directions.html) for more details.
Be sure to like [Vandalia Toastmasters Club on Facebook]() and follow [Vandalia Toastmasters Club on Twitter]()!

And here's what the new homepage looks like:

![Screenshot of the old homepage.](/images/toastmasters/vandalia/new-homepage.png)

You may have noticed that I also included things such as the "founding date." That's because in addition to just words humans can read, I also added something called "structured data" which is intended for robots... Err, search engines.

So if you look at the HTML for the few paragraphs I wrote (on the Vandalia Toastmasters site, not the blockquote above) it will look something like the following:

```html
<div itemscope="" itemtype="http://schema.org/Organization">
<p>We are the <span itemprop="name">Vandalia Toastmasters Club</span>, a friendly group devoted to <span itemprop="parentOrganization">Toastmasters International</span>&#39;s mission of providing a supportive learning experience that empowers members to develop the necessary communication, public speaking, and leadership skills for improved self-confidence as well as personal and professional development!</p>

<p>Founded on <span itemprop="foundingDate">April 1, 1993</span>, we are a community club and open to the public. Guests are always welcome! We meet in the <span itemprop="areaServed">Dayton suburb of Vandalia, Ohio</span>, but have members and guests from surrounding cities including <span itemprop="areaServed">Huber Heights in Montgomery County</span> and <span itemprop="areaServed">Tipp City in Miami County</span>.</p>

<p>We meet the first and third Tuesday of every month from 7:00 PM to 8:15 PM. We meet on the 1st Floor Conference Room of <span itemprop="location" itemscope="" itemtype="http://schema.org/Place"><span itemprop="name">the Vandalia Justice Center</span> at <span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress"><span itemprop="streetAddress"> 245 James Bohanan Dr</span>, <span itemprop="addressLocality"> Vandalia</span>, <span itemprop="addressRegion">Ohio</span> <span itemprop="postalCode">45377</span></span></span>. Check out the <a href="https://vandalia.toastmastersclubs.org/directions.html">Meeting Information / Directions page</a> for more details.</p>
</div>
```

See all those `span` tags with `itemprop`, `itemscope`, etc? That's the structured data. And if you run the page through [Google's Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool#url=https%3A%2F%2Fvandalia.toastmastersclubs.org%2F), you'll see how Google can parse the data.

Fun fact though - sometimes people use `meta` tags when creating structured data. FreeToastHost removed any `meta` tags I added.

The structured data can also be done in JSON format inside a `script` tag. FreeToastHost doesn't strip `script` tags, so that might be a viable option.

I'm unsure how much structured data will help the site's "SEO-ness," but considering [Google has a guide to structured data](https://developers.google.com/search/docs/guides/search-gallery), it must be important.

## Revamping the Meeting / Directions Page

Here's how the old meeting / directions page looked:

![Screenshot of the old meeting directions page.](/images/toastmasters/vandalia/old-meeting-directions-page.png)

The part I focused on was the first paragraph (really just a sentence):

> We meet on the 1st and 3rd Tuesday of the month at the Vandalia Justice Center, 245 James Bohanan Dr, Vandalia, Ohio, 45377.

Here's what I modified it too (notice the addition of headers):

> ## Vandalia Toastmasters Club Next Meeting
> Tuesday, October 15, 2019 7:00 PM - 8:15 PM
>
> The Vandalia Justice Center
> 245 James Bohanan Dr
> Vandalia, OH 45377
>
> In our normal meeting, we have one or two speeches, as well as table topics, and evaluations. Guests always welcome!
>
> ## Vandalia Toastmasters Club Meeting Schedule
> We meet on the 1st and 3rd Tuesday of the month.

Here's a screenshot of the changes (notice I also added a header for the directions section):

![Screenshot of the new meeting directions page.](/images/toastmasters/vandalia/new-meeting-directions-page.png)

And yes! I included structured data:

```html
<div class="event-wrapper" itemscope="" itemtype="http://schema.org/Event">
<h2 class="event-title" itemprop="name">Vandalia Toastmasters Club Next Meeting</h2>

<div class="event-date" content="Tuesday, {{nextmtgdate}} 7:00 PM" itemprop="startDate">Tuesday, {{nextmtgdate}} 7:00 PM - 8:15 PM</div>

<div class="event-venue" itemprop="location" itemscope="" itemtype="http://schema.org/Place" style="margin: 1em 0;"><span itemprop="name">The Vandalia Justice Center</span>

<div class="address" itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress"><span itemprop="streetAddress">245 James Bohanan Dr</span><br />
<span itemprop="addressLocality">Vandalia</span>, <span itemprop="addressRegion">OH</span> <span itemprop="postalCode">45377</span></div>
</div>

<div class="event-description" itemprop="description">In our normal meeting, we have one or two speeches, as well as table topics, and evaluations. Guests always welcome!</div>
</div>
```

Notice that I used `{{nextmtgdate}}` in the HTML above? This auto-inserts the next meeting date. [FreeToast host has several web page variables](https://support.toastmastersclubs.org/doc/item/web-page-tools#page-variable) available for use. This way I don't have to update the webpage after every meeting.

## Anything Else?

I think I still have more work to do.

I think I could provide a better description of our meetings than I currently have.

I do have [Google Analytics](https://analytics.google.com) and [Google Webmaster Tools](https://www.google.com/intl/en/webmasters/) enabled for the site. I've yet to see any increase in traffic, but perhaps it's too soon.