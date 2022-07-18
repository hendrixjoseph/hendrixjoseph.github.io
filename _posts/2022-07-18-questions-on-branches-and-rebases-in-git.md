---
layout: post
title: Questions on Branches and Rebases in Git
tags: [git]
keywords: [git rebase, rebase, git branch, branch, commit]
---

I've been messing with Git a little more recently, and a question about rebasing popped into my head:

What happens to the branch a branch has been branched off of when I rebase that branch? (Say that ten times fast!)

Will the second branch still look like it was branched off the first? 

I set up a simple git repository with three branched: master, first, and second. Second is branched off of first and first is branched off of master.

There are a grand total of six commits - enough to make each branch's commit history unique:

```
* 30dadfe (second) first commit in second branch
* 09e3b20 (first) second branch commit
* 8ef61d0 first branch commit
| * 7dde8cc (HEAD -> master) three
|/
* 7b0ee1a two.txt
* 2df9648 one.txt
```

I then made sure I was on the second branch and rebased off of master:

```sh
git switch second
git rebase master
```

The commit graph now looks like the second branch was originally branched off of master - plus I now have two more commits than I did before:

```
* 36c7f49 (HEAD -> second) first commit in second branch
* ed403a6 second branch commit
* 4bd7571 first branch commit
* 7dde8cc (master) three
| * 09e3b20 (first) second branch commit
| * 8ef61d0 first branch commit
|/
* 7b0ee1a two.txt
* 2df9648 one.txt
```

I then wondered what would happen if I rebased the first branch - would those commits "merge" into the second branches commits, or would they remain their own?

So I switched to the first branch and rebased off of master:

```sh
git switch first
git rebase master
```

The end result? The second branch and the first branch still look completely different, and I still have eight unique commits:

```
* c79bd25 (HEAD -> first) second branch commit
* 8a2c592 first branch commit
| * 36c7f49 (second) first commit in second branch
| * ed403a6 second branch commit
| * 4bd7571 first branch commit
|/
* 7dde8cc (master) three
* 7b0ee1a two.txt
* 2df9648 one.txt
```

That's all folks.

If you're wondering how I made the ASCII git graphs, I just used the git command `git log --graph --oneline --decorate --all`.