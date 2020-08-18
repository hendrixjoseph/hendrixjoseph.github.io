---
layout: post
title: 3 Ways to Create New Directories in the GitHub Web Interface
tags: [github]
keywords: [directory, folder, web app, web interface, github web app, github web interface]
image: /images/covers/youtube/3-ways-to-create-new-directories-in-the-github-web-interface.jpg
---

Sometimes I want to upload something to a brand new directory in one of my GitHub repositories, and I want to do it via the web interface. Maybe I'm on another computer that doesn't have git - perhaps a public computer where I do not have the necessary permission to install new software.

However, at first glance, it doesn't seem this is possible. Actually, there are at least three different ways to create and upload new directories in a GitHub repository in the web interface.

![Text that says "3 Ways to Create New Directories in the GitHub Web Interface"](/images/covers/youtube/3-ways-to-create-new-directories-in-the-github-web-interface.jpg)

## Creating a Dummy File

The first way to create new directories is when creating new files. When you're naming a new file on the GitHub web interface, if you type forward-slash ("/") in the filename, it assumes that part is a new folder:

{% include youtube.html param="z2WwC6jlMXw?start=4&end=33" %}

What I've done in the past is create a dummy "deleteme.txt" file, and then upload any binary files to GitHub in the newly created folder. Then, once I've uploaded my files, I delete the dummy file.

## Modifying the Upload URL

Once while I was doing the "dummy file" method I just described I peeked up at the URL bar in my browser. It looked something like the following:

    https://github.com/hendrixjoseph/hendrixjoseph.github.io/upload/master/images

Let's focus on everything from the word "upload" on:

    upload/master/images

It seems that the directory I'm uploading to is encoded in the URL. So I tried changing the URL to include additional directories - new directories that do not exist:

    upload/master/images/test/test/test/

It worked beautifully, and I was able to upload to a brand new directory. In other words, I was able to create new directories in my GitHub repository by modifying the URL:

{% include youtube.html param="z2WwC6jlMXw?start=33&end=72" %}

## Drag n Dropping

The final method is by far the easiest. Whereas the first requires creating a to-be-deleted file, and the second requires some typing in the URL, this method you simply drag a directory with all its contents into to web interface:

{% include youtube.html param="z2WwC6jlMXw?start=72" %}

Some caveats with this method, however. The directory cannot be empty, and text files need to be non-empty.

## So There You Have It

In this post, I listed three ways to upload a file in the GitHub web app to a new directory. A couple of ways involved merely creating a folder in the GitHub web app, whereas the third involved uploading a folder in the GitHub web app.

Are there any other ways to create directories in the GitHub web interface that I failed to mention? Be sure to comment below!