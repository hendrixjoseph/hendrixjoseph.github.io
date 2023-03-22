---
layout: post
title: Git is Like a Book
tags: [git]
keywords: [commit, book]
---

In trying to understand things - like the version control system [Git](https://git-scm.com/) - I like to compare it to something much more mundane and easy to understand. For instance, Git is like a book.

Commit hashes are like the page numbers in a book. Like page numbers, they point to a specific place. They're also a function of the previous one. A commit's hash uses the previous commit's hash as part of its input. A page number is a function of the previous page number.

Branches are like bookmarks. At any given time, a branch points to a specific commit. A bookmark points to a specific page. But, as you read more pages, you move the bookmark forward. As you make commits, you move the branch to the latest commit. If you remove the bookmark, the page still exists. If you delete a branch, the commit still exists.

Tags are like the chapters in a book. Or at least the chapter heading. They don't move around much. They tend to be permanent. And, like a tag is similar to a branch in that it points to a specific commit, a chapter points to a specific page much like a bookmark.

## Git is Not Like a Book

But the analogy does eventually break down.

In Git, a commit contains the entire repository. A page does not contain the entire book. And two commits tend to have a reasonable diff between them. Two pages are likely to be very different.

Also, page numbers are linear. Even in those [Choose-Your-Own-Adventure books](https://www.amazon.com/s?k=choose+your+own+adventure+books&tag=hendrixjoseph-20), you can only go forward or backward.

Git, by contrast, can have commits that fork and merge with one another, making the history - the flow of commits - be as complex and nonlinear as one want. A commit doesn't have to have one previous commit - one parent - it can have multiple.

So that's how Git is like - and not like - a book.