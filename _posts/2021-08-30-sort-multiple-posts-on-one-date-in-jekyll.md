---
layout: post
title: How to Sort Multiple Posts on One Date in Jekyll
tags: [jekyll]
keywords: [Multiple Posts]
---

Two Fridays ago on the twentieth of August I did something on this blog I thought I would never do: I published two posts on one day.

For most blog engines - say, WordPress - that's not a big deal. But this blog runs on [Jekyll](https://jekyllrb.com/) (via [GitHub Pages](https://pages.github.com/)) so an individual post's date is specified in its file name.

The two posts I posted have the following filenames:

* `2021-08-20-august-2021-blog-statistics.md`
* `2021-08-20-august-20-2021-interesting-reads.md`

Only the date is specified, not the time. The question then is... Which post will Jekyll think is first?

It turns out that if the dates are the same, then it is sorted by the "slug." In my case, that's the rest of the file name, minus the dash after the date and the dot-file extension.

So `2021-08-20-a.md` would come before `2021-08-20-b.md`. With a post on either side of the twentieth, it would be sorted like this:

* `2021-08-21-later-post.md`
* `2021-08-20-b.md`
* `2021-08-20-a.md`
* `2021-08-19-earlier-post.md`

> Confused about what a slug is? Check out the article [What the Heck are Content Slugs and How Do I Use Them?](https://www.stackbit.com/blog/what-is-a-content-slug/)

But what if I wanted `2021-08-20-a.md` to come after `2021-08-20-b.md`?

Then I would add a `date` field to the YAML front matter of the latter post:

`yml
date: 2021-08-20 10:08:39 +02:00
`

> Fun fact: I played around with having a different date than in the filename. When I did this, Jekyll just ignored the file altogether. It's as if there were no post.

Why the latter post? Because the default "time" set is 0:00 - e.g. "2021-08-20 00:00:0 +02:00". So setting the time of the latter post, I make it posted later.

Source of my answer: [Jekyll gets confused with two post at the same](date https://github.com/jekyll/jekyll/issues/30).