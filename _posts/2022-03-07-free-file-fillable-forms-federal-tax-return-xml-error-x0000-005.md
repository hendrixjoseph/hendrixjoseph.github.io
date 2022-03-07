---
layout: post
title: Free File Fillable Forms Federal Tax Return XML Error X0000-005
tags: [tax]
keywords: [free file fillable forms, free file, irs, tax return, tax refund]
image: /images/freefilefillableforms/2021-validation-error.png
---

I filled my Federal taxes a week or so ago... Or so I thought.

I use [Free File Fillable Forms](https://www.freefilefillableforms.com/) which is a bit more involved than your normal tax software. It required a bit more understanding of the tax code, along with the ability to follow the form instructions. It does do some basic arithmetic for you, but it's really only a single step up from filling the forms out yourself.

After a week of not getting my refund - or any acknowledgment whatsoever that my return has been processed - I logged back into the site and noticed the following error:

![Validation error screen shot.](/images/freefilefillableforms/2021-validation-error.png)

Yep - my return was rejected for a validation error. [In the past](https://www.joehxblog.com/fixing-validation-errors-on-my-2019-free-file-fillable-forms-federal-tax-return/), I've received the validation error via email. For whatever reason this year, I received no proactive notification that my return was rejected (hey, at least it wasn't past April 15th!)

But it's good that my return was rejected - as soon as I filed it and told my wife I just filed it, she said her employer just sent out an email about corrected W2s. Something about not reporting imputed life insurance income and HSA contributions.

Onto the analysis of the error - for completeness sake, here's the error copy-pasted instead of as an image:

    Submission ID:	*********************	IRS Response:	rejected	Submitted On:	02/24/2022 14:31:06
    #1	RuleNumber : X0000-005	DocumentID : IRSW2001
    ErrorCategory :XML Error	DataValue :
    XPath :	/Return[1]/ReturnData[1]/IRSW2[1]/EmployeeUSAddress[1]/ZIPCd[1]
    ErrorMessage :	The XML data has failed schema validation. cvc-pattern-valid. Value `4524` is not facet-valid with respect to pattern `[0-9]{5}(([0-9]{4})|([0-9]{7}))?` for type `ZIPCodeType`.

The biggest hint here is the XPath - namely the `IRSW2[1]/EmployeeUSAddress[1]/ZIPCd[1]` part. Reading it backwards, the error seems to be on the zip code of the employee address of the first W2. (All the ones mean first, so you could interpret it as the first zip code of the first employee address, but there's only one zip code for the one employee address, so first is a bit redundant there).

Hoping on over to the first W2, I do see that I typed `4524` rather than the correct `45424`. And, hey, look! That's what the error message suggested, too!

Now to refile, as soon as I get that corrected W2.