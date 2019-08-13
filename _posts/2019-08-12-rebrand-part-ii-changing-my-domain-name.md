---
layout: post
title: "Rebrand Part II: Changing My Domain Name"
tags: [meta]
keywords: [blog, blogging, github, rebrand]
image: /images/rebrand/rebrand.jpg
---

My [previous post on the rebrand](https://www.joehxblog.com/rebrand-from-joes-github-blog-to-joehx-blog/) involved merely changing the name of my blog. You'll notice that I've now changed the domain of the site.

The old domain - [hendrixjoseph.github.io](https://hendrixjoseph.github.io/) - now has a 301 redirect to the new domain - [www.joehxblog.com](https://www.joehxblog.com/).

Changing the domain hasn't been simple. I'm not done with the process.

The point of this post is to document what changes I've made.

## Setting Up Google Domain for GitHub Pages

The first major change was to set up the domain itself. I bought the [domain from Google](https://domains.google.com/), and I serve the site via GitHub Pages.

I had to do two things concurrently: modify the [CNAME](https://github.com/hendrixjoseph/hendrixjoseph.github.io/blob/master/CNAME) file in the GitHub repository for this site, and add some custom resource records on Google Domains.

The CNAME was easy enough, and consisted of only two lines:

```
www.joehxblog.com
joehxblog.com
```

For Google Domains, I had to set a type *A* resource with the following values:
* 185.199.108.153
* 185.199.109.153
* 185.199.110.153
* 185.199.111.153

And a type CNAME record with a name of `www` and value of `hendrixjoseph.github.io.`

![Google Domains Custom Resource Records for GitHub Pages](/images/rebrand/google-domains-custom-resource-records.png)
*Google Domains Custom Resource Records for GitHub Pages*

I referenced the following help documents:
* [Setting up an apex domain](https://help.github.com/en/articles/setting-up-an-apex-domain)
* [Setting up a www subdomain](https://help.github.com/en/articles/setting-up-a-www-subdomain)
* [Adding or removing a custom domain for your GitHub Pages site](https://help.github.com/en/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site)

Next, I needed to submit my new URL to various indexing sites.

Thankfully, submitting to some of these sites is as easy as searching for my sites.
* [hendrixjoseph.github.io on Alexa](https://www.alexa.com/siteinfo/hendrixjoseph.github.io)
* [joehxblog.com on Alexa](https://www.alexa.com/siteinfo/joehxblog.com)
* [hendrixjoseph.github.io on Netcraft Site Report](https://toolbar.netcraft.com/site_report?url=hendrixjoseph.github.io
* [joehxblog.com on Netcraft Site Report](https://toolbar.netcraft.com/site_report?url=joehxblog.com)

## Update Google Properties with New Domain

I also needed to change my URL on a few Google Properties, including Google Webmaster Tools / Google Search Console, Google AdSense, and Google Analytics.

### Update Google Webmaster Tools / Google Search Console with New Domain

To change the URL in Google Search Console, I first had to add the domain as if it were a new domain. Then I followed the instructions on the [Use the change of address tool](https://support.google.com/webmasters/answer/83106?hl=en) and [Move a site with URL changes](
https://support.google.com/webmasters/answer/6033049?hl=en) help pages.

### Update Google AdSense with New Domain

For Google AdSense, I just added the site as if it were new.

### Update Google Analytics with New Domain

In Google Analytics, I [edited the property](https://support.google.com/analytics/answer/3467852?hl=en) that had 

## Update My Social Media Sites with the new Domain

Updating this site's [Facebook Page](https://www.facebook.com/JoeHxBlog/) and [Twitter Account](https://twitter.com/JoeHxBlog) was easy enough.

### Update Facebook Page with New Domain

![Facebook Logo](/images/rebrand/facebook-logo.png)

The website URL is on [the about page](https://www.facebook.com/JoeHxBlog/about/), underneath the Contact Info section. If your the page's admin (which I am) you can edit the URL there.

### Update Twitter Account with New Domain

![Twitter Logo](/images/rebrand/twitter-logo.png)

For Twitter, the homepage URL is on [the profile page](https://twitter.com/settings/profile).

### Update Mix.com with New Domain

![Mix Logo](/images/rebrand/mix-logo.png)

I can't seem to find a way to change previous submissions to Mix.com (StumbleUpon's successor). 

That said, I do have a link to my site on [my Mix.com profile](https://mix.com/joehx). I changed this on [Mix.com's setting page](https://mix.com/settings).

Going forward, I'll just submit to Mix.com using the new domain. I may also resubmit some content.

Here are some links showing what's been submitted for each domain:
* [hendrixjoseph.github.io on Mix.com](https://mix.com/search/hendrixjoseph.github.io/domain
* [joehxblog.com on Mix.com](https://mix.com/search/joehxblog.com/domain)

### Update Reddit with New Domain

![Reddit Logo](/images/rebrand/reddit-logo.png)

I can't change previously submitted linked to Reddit. Going forward, I will have to simply use the new domain when I post a link to Reddit (which I do sparingly!).

I do keep a list of referral links pinned on [my profile page](https://www.reddit.com/user/joehx/). 

I updated that on [08/12/2019](https://www.reddit.com/user/joehx/comments/cpec2n/welcome_to_my_profile_referral_other_links_in/). It's nearly identical to the one updated on [08/01/2019](https://www.reddit.com/user/joehx/comments/ckpqzt/welcome_to_my_profile_referral_other_links_in/), though.

I'll continue to monitor Reddit submission for both domains:
* [hendrixjoseph.github.io on Reddit](https://www.reddit.com/domain/hendrixjoseph.github.io/)
* [joehxblog.com on Reddit](https://www.reddit.com/domain/joehxblog.com/)

### Update Quora with New Domain

![Quora Logo](/images/rebrand/quora-logo.png)

I have quite a few backlinks on Quora. For the most part, I'm not worried about updating them to my new domain.

I did update [my Quora Profile description](https://www.quora.com/profile/Joseph-Hendrix) to include the new site name and domain, as well as one credential that had my URL.

### Update Pinterest with New Domain

I don't have a Pinterest account, at least none associated with this site. That said, I can monitor submissions for both domains on Pinterest:

* [hendrixjoseph.github.io on Pinterest](https://www.pinterest.com/source/hendrixjoseph.github.io/)
* [joehxblog.com on Pinterest](https://www.pinterest.com/source/joehxblog.com/)

## Update Affiliate Accounts with New Domain

### Update Amazon Associate Account with New Domain

I added the new domain to [the profile site list for my Amazon Associate account](https://affiliate-program.amazon.com/home/account/profile/sitelist). I kept the old domain, as well.

This was also a good time to double-check that the social account URLs in the site list were up-to-date. They weren't, so I added the changed ones and deleted the old ones.

### Update VigLink with New Domain

To update VigLink (well, formally VigLink, but now called Sovrn //Commerce, but they still serve their site at viglink.com) I added the new domain to [the VigLink Sites setting page](https://publishers.viglink.com/publisher/sites).

This gave me a new key to use, so I updated that on the bit of VigLink JavaScript.

## Update Backlinks with New Domain

I try to keep a list of places this site has been backlinked on the [Featured section](https://www.joehxblog.com/featured/).

Since every page is a 301 redirect from the old domain to the new domain, I'm not going to worry too much about changing those links.

However, this site is in a few blog directories. Changing these might involve contacting the site admins.

These blogs directories are:

* [Rockstar Finance Personal Finance Blog Directory](https://directory.rockstarfinance.com/personal-finance-blogs/) / [actual page](https://directory.rockstarfinance.com/blogs/1988/Joes-GitHub-Blog)
* [Modest Money Top Finance Blogs](https://www.modestmoney.com/top-finance-blogs/)
* [Fly to Fi Know Your Blogger](https://flytofi.com/know-your-blogger/) / [actual page](https://flytofi.com/know-your-blogger-joes-github-blog/)
* [My Sons Father Personal Finance Blogs by Personality](http://www.mysonsfather.com/personal-finance-by-personality/)
* [Camp FIRE Finance Directory](https://www.campfirefinance.com/directory/) / [actual page](https://www.campfirefinance.com/directory/joes-github-blog/)
* [Abandoned Cubicle's Blogroll](https://www.abandonedcubicle.com/blogroll/)

I'll ~~strikethrough~~ the blogs if and when I get them updated.

### Other Places to Update Domain

## Update ViralContentBee with New Domain

![ViralContentBee Logo](/images/rebrand/viralcontentbee-logo.png)

I had to manually edit each of my projects on [ViralContentBee](https://www.viralcontentbee.com/).

However, simply clicking on the refresh icon next to my Twitter account on the [Social Account Settings Page](https://member.viralcontentbee.com/profiles/social_accounts) automatically updated my Twitter handle.

## Update Internet Archive Wayback Machine with New Domain

![Wayback Machine Logo](/images/rebrand/waybackmachine-logo.png)

One place I submit every post is to the [Internet Archive Wayback Machine](https://archive.org/web/).

Since the Wayback Machine is meant to provide snapshots of how the Internet and various websites look at certain points in time, it doesn't make sense to "update" old snapshots with the new domain.

This means that going forward, I'll submit new posts using the new domain, and try to submit my old posts over time.

I did try executing the following bit of JavaScript on the [Sitemap](/sitemap/) section to automate,  but Firefox didn't like me trying to open over 200 new tabs:

```javascript
$('#main table a').each((i,e) => 
    window.open('https://web.archive.org/save/https://www.joehxblog.com'
    + $(e).attr('href'), '_blank'));
```

### Update My User Page on Wikipedia 

I have a link or two to this site on [my Wikipedia User Page](
https://en.wikipedia.org/wiki/User:Hendrixjoseph), so I made sure to update that.

## There's Probably More...

I've probably forgotten a link somewhere out there in the world wide web. As I find them, I'll update this page.

Until then, the 301 Permanent Redirect should take care of them.