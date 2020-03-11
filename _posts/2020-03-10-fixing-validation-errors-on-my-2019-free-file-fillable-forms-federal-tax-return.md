---
layout: post
title: Fixing Validation Errors on my 2019 Free File Fillable Forms Federal Tax Return
tags: [tax]
keywords: [free file fillable forms, free file, irs, tax return, tax refund]
image: /freefilefillableforms/freefile-logo.png
---

I like to be hands-on with my finances, including my taxes. I also like to fill out forms. That's why I like to use Free File Fillable Forms from the IRS.

Unlike other Free File options, there are no limitations for income, age, location or any other criteria with Free File Fillable Forms. That said, Free File Fillable Forms only provides basic arithmetic and form validation.

![The Free File logo.](/freefilefillableforms/freefile-logo.png)
*The Free File logo.*

The basic arithmetic is pretty straight-forward and performs in on the form for you; you can't even edit the form values that are calculated.

The validation isn't as great - it's neither "real time" nor is there a "validate" button. Instead, you have to submit your return for it to be validated.

If there are validation errors, your return will be rejected and you will receive an email detailing what those validation errors are.

...except those messages can be rather cryptic.

For instance, after I submitted my tax forms towards the end of February, I received the following rejection email:

> ## Free File Fillable Forms: Federal Tax Return Rejected - Action Needed!
>
> We were not able to accept your 2019 federal tax return because of the error(s) listed below.
>
> Your Submission ID is: --------------------
>
> Get help resolving your errors by using the Error Search Tool at [https://www.irs.gov/filing/individuals/free-file-fillable-forms/search-tip](https://www.irs.gov/filing/individuals/free-file-fillable-forms/search-tip). You must follow the search instructions to find solutions.
>
> When you have your solution(s), sign in to your Free File Fillable Forms account at [https://www.freefilefillableforms.com](https://www.freefilefillableforms.com). Fix your error(s) and resubmit your return. Be sure to re-enter the direct debit date (if used) and the e-file date in the Step 2 tab of Free File Fillable Forms.
>
> If you are unable to resolve the error(s), you can mail your tax return and your payment by April 15, 2020 to avoid penalties and interest.
>
> Here is your error(s):
>
> Issue   : Business Rule X0000-005 - The XML data has failed schema validation. cvc-complex-type.2.4.b. The content of element 'AlimonyAmountGrp' is not complete. One of '{"http://www.irs.gov/efile":RecipientSSN}' is expected.
>
> The following information may help you determine the form at issue:
>
> Field/Xpath: /efile:Return[1]/efile:ReturnData[1]/efile:IRS1040Schedule1[1]/efile:AlimonyAmountGrp[1]/efile:AlimonyPaidAmt[1]
>
> Issue   : Business Rule X0000-005 - The XML data has failed schema validation. cvc-complex-type.2.4.a. Invalid content was found starting with element 'PersonNm'. One of '{"http://www.irs.gov/efile":EIN, "http://www.irs.gov/efile":MissingEINReasonCd, "http://www.irs.gov/efile":SSN, "http://www.irs.gov/efile":QlfyBusinessIncomeOrLossAmt}' is expected.
>
> The following information may help you determine the form at issue:
>
> Field/Xpath: /efile:Return[1]/efile:ReturnData[1]/efile:IRS8995[1]/efile:QualifiedBusinessIncomeDedGrp[2]/efile:PersonNm[1]
>
> Issue   : Business Rule X0000-005 - The XML data has failed schema validation. cvc-complex-type.2.4.a. Invalid content was found starting with element 'PersonNm'. One of '{"http://www.irs.gov/efile":EIN, "http://www.irs.gov/efile":MissingEINReasonCd, "http://www.irs.gov/efile":SSN, "http://www.irs.gov/efile":QlfyBusinessIncomeOrLossAmt}' is expected.
>
> The following information may help you determine the form at issue:
>
> Field/Xpath: /efile:Return[1]/efile:ReturnData[1]/efile:IRS8995[1]/efile:QualifiedBusinessIncomeDedGrp[1]/efile:PersonNm[1]
>
> This email was generated from an automatic system, which is not monitored for responses.

There are three errors - but only two different errors. The second two errors are identical - this gives me a hint that I did something "wrong" twice.

Let's look at the two errors one-by-one.

## Missing Alimony Recipient SSN

Here's the error again:

> Issue   : Business Rule X0000-005 - The XML data has failed schema validation. cvc-complex-type.2.4.b. The content of element 'AlimonyAmountGrp' is not complete. One of '{"http://www.irs.gov/efile":RecipientSSN}' is expected.
>
> The following information may help you determine the form at issue:
>
> Field/Xpath: /efile:Return[1]/efile:ReturnData[1]/efile:IRS1040Schedule1[1]/efile:AlimonyAmountGrp[1]/efile:AlimonyPaidAmt[1]

Judging by the `Field/Xpath` part, it looks as if this error occurred on my Schedule 1. The confusing thing is that - according to the `Issue` part - it looks as if I didn't put the social security number ("SSN") of the person I'm paying alimony to.

The thing is, I'm not paying alimony to anyone. There is no social security number to put.

It turns out, though, that I put a value of "0" (that's zero) for how much alimony I'm paying:

![Error on Schedule 1, Line 18a.](/freefilefillableforms/schedule-1-line-18a-error.png)
*Error on Schedule 1, Line 18a.*

You see, when I do my taxes, in my mind "0" means something different than a blank value. "0" means I looked over that line and concluded that it should be zero - after all, I did pay zero dollars in alimony in 2019. A blank value, however, means I need to take another look at the line.

To fix the error, I just had to erase the "0" and leave the line blank:

![Corrected Schedule 1, Line 18a.](/freefilefillableforms/schedule-1-line-18a-correct.png)
*Corrected Schedule 1, Line 18a.*

## Enter Only EIN or SSN, not Both

Here's the error again:

> Issue   : Business Rule X0000-005 - The XML data has failed schema validation. cvc-complex-type.2.4.a. Invalid content was found starting with element 'PersonNm'. One of '{"http://www.irs.gov/efile":EIN, "http://www.irs.gov/efile":MissingEINReasonCd, "http://www.irs.gov/efile":SSN, "http://www.irs.gov/efile":QlfyBusinessIncomeOrLossAmt}' is expected.
>
> The following information may help you determine the form at issue:
>
> Field/Xpath: /efile:Return[1]/efile:ReturnData[1]/efile:IRS8995[1]/efile:QualifiedBusinessIncomeDedGrp[1]/efile:PersonNm[1]

I wasn't 100% sure at first what form "QualifiedBusinessIncomeDedGrp" referred to - but I had a hunch it was [Form 8995](https://www.irs.gov/forms-pubs/about-form-8995), the Qualified Business Income Deduction Simplified Computation form.

This form is new for 2019, although it existed as a worksheet in the instructions for the previous year. Before that, there was no [Qualified Business Income Deduction](https://www.irs.gov/newsroom/qualified-business-income-deduction) since it's part of that [Tax Cut and Jobs Act](https://en.wikipedia.org/wiki/Tax_Cuts_and_Jobs_Act_of_2017).

To see where I made an error, first take a look at line 1b of that form:

![Form 8995, Line 1b.](/freefilefillableforms/form-8995-line-1b.png)
*Form 8995, Line 1b.*

There are multiple rows for multiple businesses - I filed two [schedule C](https://www.irs.gov/forms-pubs/about-schedule-c-form-1040)s so I filled out two rows. Each row asks for an <abbr title="Social Security Number">SSN</abbr> and an <abbr title="Employer Identification Number">EIN</abbr>.

It makes sense that if you have both you'd fill out both, right? After all, the form allows for both, and both social security numbers and employer identification numbers are nine digits. If they only wanted one or the other, they'd only have one row?

The [instructions for line 1](https://www.irs.gov/instructions/i8995#idm139766571133936) aren't clear on this, either:

> Enter on line 1(b) the employer identification number (EIN). If you don’t have an EIN, enter your social security number (SSN) or individual taxpayer identification number (ITIN). If you’re the sole owner of an LLC that isn’t treated as a separate entity for federal income tax purposes, enter the EIN given to the LLC. If you don’t have an EIN, enter the owner's name, and tax identification number.

But look what happens when I hover the mouse over the field:

![Tooltip for Form 8995, Line 1b. It reads: "Line 1. Row: iv. Column: (b) Taxpayer identification number (SSN - Enter only EIN or SSN, not both).](/freefilefillableforms/form-8995-line-1b-tooltip.png)
*Tooltip for Form 8995, Line 1b.*

That's right - a tooltip, which is mostly hidden, tells me that I should "Enter only EIN or SSN, not both."

Gee, that would've been nice to know the first time around.

To fix this error, I delete my SSN and leave my EIN.

## The IRS Has Accepted My Return

After fixing the two (three?) errors mentioned above, I submit my return once again. This time, I get the following email:

> ## Congratulations, the IRS has accepted your federal tax return.
>
> Your Submission ID is: --------------------
>
> If your tax return showed that you have a tax refund due to you, in about 72 hours you'll be able to track your refund at [http://www.irs.gov/Refunds](http://www.irs.gov/Refunds) on the IRS website.
>
> You'll need to enter your Social Security number, filing status and exact whole dollar amount of your expected refund.
>
> The IRS website is updated every 24 hours so wait at least 24 hours from filing before checking the site.
>
> You can also call (800) 829-4477 for refund status, but wait at least 4 weeks from the day you e-filed.
>
> A few things to note:
>
>  1. If you haven't already, it's always a good idea to print a copy of your return for your records.
>
>  2. If you owe taxes, don't forget your payment is due by April 15, 2020.
>
>  3. If you're paying by check, mail your payment voucher with your check. Your voucher, which includes the mailing address, is included when you print a copy of your return.
>
>  4. If you filed Form 8379 with your return, allow 11 weeks from your e-file date before checking your refund status.
>
> To confirm your tax return status, log in to your Free File Fillable Forms account at [https://www.freefilefillableforms.com](https://www.freefilefillableforms.com) and click/select the "Check E-File Status" button.
>
> This email was generated from an automatic system which is not monitored for responses.

And eight days after I filed my Federal Tax Return, my refund was in my bank account.

Onto state and local!