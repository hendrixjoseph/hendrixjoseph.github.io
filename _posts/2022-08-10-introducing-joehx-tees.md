---
layout: post
title: Introducing JoeHx Tees
tags: [css, java, javascript, html5, github, web]
image: /images/joehxtees.webp
---

Introducing [JoeHx Tees](https://www.joehxtees.com/) - a web site dedicated to showcasing my Merch by Amazon t-shirts.

{% include image.html src="/images/joehxtees.webp" caption="The homepage for JoeHx Tees." %}

Why create a website just to display my t-shirts? Party for fun, partly to make a sales funnel. Each t-shirt has a link - with my Amazon Affiliate tag attached - to my shirt. This means if someone buys one of my shirts through the [JoeHx Tees](https://www.joehxtees.com/) site, I'll get a bit of extra money. Especially if they end up buying something else, too.

## Tech Stack

[JoeHx Tees](https://www.joehxtees.com/) is a static site generated by custom Java code. That is, I wrote the static site generator. The site itself is only HTML, CSS, JavaScript, and, of course, images (webp format to be exact). I did use [Apache Maven](https://maven.apache.org/) so I could import [Google Gson](https://github.com/google/gson) - a JSON parsing library.

I *do* employ [Google Analytics](https://analytics.google.com/analytics/web/) to keep an eye on the traffic to the site. I've also added it to [Google Search Console](https://search.google.com/search-console). Oh, and I also bought the domain (for a whopping twelve bucks per year) from [Google Domains](https://domains.google/).

The FavIcon - the icon that represent the site - is a t-shirt emoji 👕. Specifically it's the t-shirt emoji from the open source project [Twemoji](https://twemoji.twitter.com/) (so it might not be the exact emoji earlier in this paragraph). I generated it over at [favicon.io](https://favicon.io/emoji-favicons/t-shirt/).

I scraped both the Merch by Amazon site and Amazon itself using custom [Tampermonkey](https://www.tampermonkey.net/) scripts - that way I didn't have to deal with authentication.

It's all hosted by the good people at GitHub. The repo itself is over at <https://github.com/hendrixjoseph/joehxtees>.