---
layout: post
title: Comments Temporarily Disabled
tags: [meta]
keywords: [comments]
image: /images/staticman/staticman-avatar.png
---

If you've visited my blog recently, you may have noticed that I've disabled comments.

If you were here a little bit before I disabled comments, and you tried to comment, you would have received the following error:

> Your comment has been submitted, but their seems to be an error. Check your browser console for more details.
>
> Failed to fetch

*And* if you looked at your console, you would have noticed a 503 error.

That's because Heroku, the platform I used to process comments, got rid of their free plan. So if I ever want to reenable comments, I'm either going to have to pay, or find another free service.

If you *really* want to comment, you can make a pull request over at [the "back end" of my site at GitHub](https://github.com/hendrixjoseph/hendrixjoseph.github.io). Check out the [_data/comments/](https://github.com/hendrixjoseph/hendrixjoseph.github.io/tree/master/_data/comments) directory to see the file format.