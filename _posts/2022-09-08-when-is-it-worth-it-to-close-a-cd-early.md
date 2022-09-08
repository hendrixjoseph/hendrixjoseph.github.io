---
layout: post
title: When is it Worth It to Close a CD Early?
tags: [money]
keywords: [bond, bonds, cd, interest, interest rate]
---

Interest rates are rising. I Bonds are paying 9.62%. A couple of months ago I opened a 5-year CD at 2.9%. I just got an email from my credit union about a 3.2% 23-month CD.

Of course, the "catch" with I Bonds and CDs is that, if I withdrawal too early, I lose interest. In the case of I Bonds, it's 3 months of interest. For my 5-year CD, it's 150 days of interest.

Which made me think - would it ever be worth it to close a CD early? Outside of an emergency, that it? In other words, what interest rate would I have to earn in order to make up the lost money?

After thinking for a bit, I came to the conclusion: **I would have to make up the money lost in the same time as the remaining term of the original CD.**

For instance, if my 5-year CD is half over, I'll lose 150 days of 2.9% interest. That's about 1.2% of the balance of the CD (2.9% &times; 150/365). If my balance were $1000, that's $11.92.

So the new investment (say, another CD) would have to earn $11.92 more than 2.9% in the remaining two-and-a-half years. Originally the CD would have earned $74.08 more in interest ($1,000 &times; (100% + 2.9%) ^ 2.5 - $1,000). Therefore, the new CD would have to earn more than $86. In two-and-a-half years, that's about 3.4%:

    $1,000 × (100% + x%) ^ 2.5 = $1,086
    solving for x% = ($1,086 / $1,000) ^ 0.4 - 100%

If you really want to be lazy, I made a little calculator below (just fill in the first three fields and it will autocalculate):

> <label for="interest">Interest rate, in percent (%)</label>
>
> <input type="number" id="interest" />
>
> <label for="time_lost">Time lost, in years (so 6 months would be 0.5, 146 days would be 0.4)</label>
>
> <input type="number" id="time_lost" />
>
> <label for="time_remaining">Time remaining in years (two years six months would be 2.5)</label>
>
> <input type="number" id="time_remaining" />
>
> <label for="answer">Interest rate must be above</label>
>
> <input type="number" id="answer" readonly />

<script>
let findAnswer = () => {
    let interest = document.querySelector('#interest').value / 100;
    let time_lost = document.querySelector('#time_lost').value;
    let time_remaining = document.querySelector('#time_remaining').value;
    
    let interest_lost = time_lost * interest;
    let interest_remaining = Math.pow(1 + interest, time_remaining) - 1;
    
    let new_rate = Math.pow(1 + interest_lost + interest_remaining, 1 / time_remaining) - 1;
    
    document.querySelector('#answer').value = Math.ceil(new_rate * 1000) / 10;
}

let doWhenFieldsAreFilledOut = () => {
    if (document.querySelector('#interest').value
        && document.querySelector('#time_lost').value
        && document.querySelector('#time_remaining').value) {
        findAnswer();
    }
}

document.querySelector('#interest').addEventListener('input', doWhenFieldsAreFilledOut);
document.querySelector('#time_lost').addEventListener('input', doWhenFieldsAreFilledOut);
document.querySelector('#time_remaining').addEventListener('input', doWhenFieldsAreFilledOut);
</script>