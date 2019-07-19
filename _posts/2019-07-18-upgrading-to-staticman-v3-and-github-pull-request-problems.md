---
layout: post
title: Upgrading to Staticman V3 and Github Pull Request Problems
tags: [meta]
keywords: [static blog comments, static blog, jekyll comments, github comments, github pages comments, comments, staticman]
image: /images/staticman/staticman-avatar.png
---

Almost two years ago, I implemented [a new commenting system called Staticman](https://hendrixjoseph.github.io/new-commenting-system-staticman/).

While Staticman has worked well, it also hasn't been smooth sailing.

Previously I had a weird issue where [Staticman was failing to create pull request](https://github.com/eduardoboucas/staticman/issues/217) and another where [entries had additional unset fields](https://github.com/eduardoboucas/staticman/issues/176). Both of these issues have since been resolved, and mostly transparent to any visitors to my site.

I'm now facing a couple more issues, which I'm attempting to resolve.

First, the Staticman Bot has a rate limit if it's used as a user - Github specifically has [a rate limit of 5,000 hits per hour per user](https://developer.github.com/v3/rate_limit/). Now, I do get *a lot* of [spam comments](https://hendrixjoseph.github.io/dealing-with-spam-comments-a-spambot-dumps-it-contents/), but I highly doubt I get more than 5,000 an hour.

![Your comment has been submitted, but their seems to be an error. Check your browser console for more details.
{"error":{"text":"Too many requests in this time frame.","nextValidRequestDate":"2019-07-18T17:05:36.659Z"}}](/images/staticman/too-many-requests-error.png)

What is happening here is that *I am not the only person or site that uses Staticman*. Staticman has become quite popular. As I write this, [Staticman has 1,437 stars on Github](https://github.com/eduardoboucas/staticman/stargazers).

To solve this issue, [Staticman was changed from a Github User to a Github App](https://github.com/eduardoboucas/staticman/issues/243).

I have upgraded to Staticman as an App (known as Staticman v3).

The [steps to upgrade Staticman](https://github.com/eduardoboucas/staticman/issues/243#issuecomment-453754860) from a User to an App are:

1. Remove `staticmanapp` as a collaborator
2. Go to https://github.com/apps/staticman-net and install the application on your repository
3. Submit a comment to the new v3 endpoint, using dev.staticman.net as the base URL – i.e. https://dev.staticman.net/v3/entry/github/[USERNAME]/[REPOSITORY]/[BRANCH]

However, things aren't completely resolved. I'm still occasionally getting the "too many requests" error. When things do go through, Staticman fails to create a pull request, although a branch is made and the comment goes through. Users will see the following message:

![Your comment has been submitted, but their seems to be an error. Check your browser console for more details.
> {"success":false,"rawError":{"name":"HttpError","status":500,"headers":{},"request":{"method":"PUT","url":"https://api.github.com/repos/hendrixjoseph/hendrixjoseph.github.io/contents/_data/comments/new-commenting-system-staticman/entry1563469066354.yml","headers":{"accept":"application/vnd.github.v3+json","user-agent":"Staticman agent octokit.js/16.8.0 Node.js/11.12.0 (Linux 4.4; x64)","authorization":"token v1.9e5fc2ea66ecf8ec0571aaec34ae3c19450c737c","content-type":"application/json; charset=utf-8"},"body":"{\"message\":\"Add Staticman comment from JoeHx at https://hendrixjoseph.github.io/\",\"content\":\"X2lkOiAyOWQyZDU4MC1hOTdkLTExZTktYTE0Yy01MWZhNWM2MzlhZmIKbXNnOiBUZXN0IGNvbW1lbnQhCm5hbWU6IEpvZUh4CmVtYWlsOiBlNTkxZjNhYTdjOGNiZDdkZDllMzM4OTk1ODk0OWVkMwp1cmw6ICdodHRwczovL2hlbmRyaXhqb3NlcGguZ2l0aHViLmlvLycKZGF0ZTogMTU2MzQ2OTA2Ngo=\",\"branch\":\"staticman_29d2d580-a97d-11e9-a14c-51fa5c639afb\"}","request":{"timeout":5000,"validate":{"author":{"type":"object"},"author.email":{"required":true,"type":"string"},"author.name":{"required":true,"type":"string"},"branch":{"type":"string"},"committer":{"type":"object"},"committer.email":{"required":true,"type":"string"},"committer.name":{"required":true,"type":"string"},"content":{"required":true,"type":"string"},"message":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"path":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}}}},"_smErrorCode":"GITHUB_WRITING_FILE"},"errorCode":"GITHUB_WRITING_FILE"}](/images/staticman/long-error.png)

I created [an issue](https://github.com/eduardoboucas/staticman/issues/304) in the Staticman Github repository asking for help (as well as [a nearly identical issue](https://github.com/hendrixjoseph/hendrixjoseph.github.io/issues/6218) on this site's Github) asking for help.

I have three theories as to what is happening:

1. Staticman no longer has pull request permission due to the large number of spam PRs
2. Apps in general no longer have pull request permission due to the large number of spam PRs
3. Something else I'm doing wrong
4. Something else wrong with Staticman

I verified that #2 is not true by [using ImgBot to optimize my images](https://github.com/hendrixjoseph/hendrixjoseph.github.io/pull/6217).

I've not fully resolved everything as of yet. If you see an error, so long as it isn't the "too many requests" error, your comment probably went through. If you do get the "too many requests" error, the timestamp should give you a clue as to when you can resubmit. 