---
layout: post
title: My Attempt at a Muppet Classifier Using fast.ai
tags: [artificial intelligence, fast.ai, programming]
keywords: [fast.ia, modulenotfounderror, google colab, colab, deep learning, google drive]
image: /images/fastai/muppet-classifier/working-example.png
---

Or at least a Sesame Street Muppet Classifier.

The thing is - my son is super into Sesame Street right now. He knows most, if not all, of the muppet characters. His absolute favorites are Elmo, Snuffy, and Cookie Monster.

But really, he likes them all.

Over the past month or so, I've been taking [fast.ai's course *Practical Deep Learning for Coders*](https://course.fast.ai/). The first "assignment" (this isn't for credit, so all assignments are optional) is to create my own image classifier.

Since my son likes Sesame Street so much, I decided to make a Sesame Street Muppet classifier.

Things didn't turn out as straightforward as the example in the course. In the example (found in [chapter two](https://github.com/fastai/fastbook/blob/master/02_production.ipynb
) of the [Deep Learning for Coders textbook](https://www.amazon.com/Deep-Learning-Coders-fastai-PyTorch/dp/1492045527/?tag=hendrixjoseph-20)), the system is trained to distinguish between three types of bears: grizzly bears, black bears, and teddy bears.

![Bear types](/images/fastai/muppet-classifier/bear-types.png)
*Examples of the bear types that the example classified.*

There are many more muppets than three. In fact, the [Wikipedia list of Sesame Street Muppets](https://en.wikipedia.org/wiki/List_of_Sesame_Street_Muppets) has *106* different muppets. To be fair, some of those are effectively duplicates - such as "Grover" and "Super Grover."

![Can you tell the difference between Grover and Super Grover?](/images/fastai/muppet-classifier/grover.png)
*Can you tell the difference between Grover and Super Grover? sources: [Super Grover](https://muppet.fandom.com/wiki/Super_Grover) and [Grover](https://muppet.fandom.com/wiki/Grover)*

After narrowing down the list by removing duplicates and generic muppets such as the [Anything Muppets](https://muppet.fandom.com/wiki/Anything_Muppets), I had a list of 100 muppet names.

## Bing Image Search

For the fast.ai code, the images are downloaded from a Bing image search. To help make sure I got Sesame Street Muppets rather than someone (or something) else, I appended "sesame street muppet" to each of my queries. While Cookie Monster is Cookie Monster, there are other entities named "Zoe." Check out the difference between the two searched:

![Bing image search for "Zoe"](/images/fastai/muppet-classifier/bing-image-search-for-zoe.png)
*[Bing image search for "Zoe"](https://www.bing.com/images/search?q=zoe)*

![Bing image search for "Zoe sesame street muppet"](/images/fastai/muppet-classifier/bing-image-search-for-zoe-sesame-street-muppet.png)
*[Bing image search for "Zoe sesame street muppet"](https://www.bing.com/images/search?q=zoe%20sesame%20street%20muppet)*

## Google Colab

Unfortunately, I don't have a graphics card - and I am even running Windows at home, whereas fast.ai is meant for Linux. Thankfully, that doesn't matter because I can do the "homework" (and run the example jupyter notebooks) online, for free, via [Google Colab](https://colab.research.google.com/).

Google Colab allows me (or anyone, really) to run my code on a GPU. I just need to specify which runtime type I want by selecting **Runtime -> Change runtime type** - which gives me the following handy-dandy dialog:

![Google Colab runtime types dialog](/images/fastai/muppet-classifier/google-colab-runtime-types-dialog.png)
*Google Colab runtime types dialog*

*None* is the default setting, so I had to remember to change my runtime type before I ran any code - I noticed that if I switched runtime types after running any code, my session would be cleared (so all my variables would be reset and temporary files - including my image files! - would be deleted). The menu options **Run all**, **Run before**, and **Run after** underneath the **Runtime** menu were helpful at getting me back where I was at whenever this happened.

Also, Since Google Colab is free (or rather, I am using the free tier), there are limitations. I was simply processing too many images, so I eventually ran out of RAM, and got the following error:

> Your session crashed after using all available RAM. If you are interested in access to high-RAM runtimes, you may want to check out Colab Pro.

Here's a screenshot of the error:

![Screenshot of the above quoted error.](/images/fastai/muppet-classifier/ram-crashed-message.png)

## Back to My Muppet Classifier

100 muppets were simply too many muppets to identify on my free tier of Google Colab.

Not only did it use too much RAM, but it also made the confusion matrix to messy (and confusing!):

![A confusion matrix jam-packed with 100 entities.](/images/fastai/muppet-classifier/messy-confusion-matrix.png)
*A confusion matrix jam-packed with 100 entities.*

> A [confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix) is simply a table that maps what the image was identified to be to what the image actually is.

I decided to go with just my son's three favorite muppets (Elmo, Cookie Monster, and Snuffy) plus Zoe - to make four muppets and one more class than the three bear types.

Now my confusion matrix is a lot less... confusing:

![A confusion matrix with just four different muppets.](/images/fastai/muppet-classifier/four-muppet-confusion-matrix.png)
*A confusion matrix with just four different muppets.*

## The Actual Classifier

Or, rather, the attempt.

I can get it to work on Google Colab - and I even installed Jupyter Notebooks and all the required dependencies locally and got it to work there:

![A screenshot of a working example.](/images/fastai/muppet-classifier/working-example.png)

What I haven't been able to do is get it to work somewhere that anyone can access.

I've tried putting it on a service called [Binder](https://mybinder.org/v2/gh/hendrixjoseph/muppet-classifier/HEAD?urlpath=%2Fvoila%2Frender%2Fmuppet_webpage.ipynb) and that didn't work. I also tried it on [Heroku](https://muppet-classifier.herokuapp.com/), but that didn't work either.

If anyone wants to take a look, the code is hosted on [GitHub](https://github.com/hendrixjoseph/muppet-classifier) - the "app" part is [muppet_webpage.ipynb](https://github.com/hendrixjoseph/muppet-classifier/blob/master/muppet_webpage.ipynb) specifically.
