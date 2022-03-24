---
layout: post
title: Free File Fillable Forms Federal Tax Return XML Error X0000-005 (Again!)
tags: [tax]
keywords: [free file fillable forms, free file, irs, tax return, tax refund]
image: /images/freefilefillableforms/freefile-logo.png
---

C'mon! After getting my Federal tax return rejected for a validation error earlier this month, and receiving two knew forms (a W2C and a K1), I was finally able to refile my return. Only to get another validation error.

Last time it made sense - I entered only 4 of the 5 digits of a ZIP code. This time I entered a period (.) in the company name listed on the form K1.

Here's the validation error:

    Issue : Business Rule X0000-005 - The XML data has failed schema validation. cvc-pattern-valid.
        Value `ENTERPRISE PRODUCTS PARTNERS LP.` is not facet-valid with respect to pattern
        `(([A-Za-z0-9#\-\(\)]|&|`) ?)*([A-Za-z0-9#\-\(\)]|&|`)` for type `BusinessNameLine1Type`.
    
    The following information may help you determine the form at issue:
    Field/Xpath:
    /efile:Return[1]/efile:ReturnData[1]/efile:IRS1040ScheduleE[1]/efile:PartnershipOrSCorpGroup[1]/efile:PartnershipOrSCorporationNm[1]

A bit cryptic for non-programming types. For the uninitiated, ```(([A-Za-z0-9#\-\(\)]|&|`) ?)*([A-Za-z0-9#\-\(\)]|&|`)``` is what is known as a regular expression, or regex for short. This bit of regex is saying the company name can only contain letters, numbers, the symbols #-()&\`, and a space. Oh, and it can't end in a space.

Note that a period (.) is not in the list of acceptable symbols.

After testing the regex over at [RegExr.com](https://regexr.com/6i3t5) I removed the period and resubmitted my return.

This time it was accepted.