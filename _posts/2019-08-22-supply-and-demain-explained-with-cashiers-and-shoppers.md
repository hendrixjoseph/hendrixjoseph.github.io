---
layout: post
title: Supply and Demand Explained With Cashiers and Shoppers
tags: [money]
keywords: [supply, demand, supply and demand, prices, cashier, shopper]
image: /images/checkouts-and-shoppers/ten-shoppers-ten-checkouts.png
---

Supply and demand. Somehow it explains prices.

Increase supply, and prices go down. Increase demand... And prices go up.

But why? Shouldn't prices be purely determined by the costs involved? If it costs me five dollars to make a widget, shouldn't I determine the price to put on the market? Perhaps only increase the price a little - say, to seven dollars?

While the costs of production play a part in determining market prices, ultimately, the law of supply and demand determine the final price.

Let's see how supply and demand work with an example.

For this example, we'll imagine a typical retail store where shoppers have to checkout. 

Shoppers will represent demand and checkouts will represent supply.

Each shopper takes five minutes to checkout. We'll assume there is no time spent between checkouts.

Speaking of time spent - the unit of money will be time instead of dollars.

We'll examine five different cases, and then take a deeper look into each case.

## Case 1: 10 Shoppers and 1 Cashier

![10 Shoppers and 1 Cashier](/images/checkouts-and-shoppers/ten-shoppers-one-checkout.png)
*10 Shoppers and 1 Cashier*

With just one checkout for ten shoppers to use, each shopper has to wait for the shopper before them to checkout.

The first shopper takes five minutes.

The second shopper has to wait five minutes for the first shopper to checkout, and then takes five more minutes to checkout, meaning the second shopper spent ten minutes checking out.

The third shopper has to wait ten minutes for the first two shoppers to checkout, and then also takes five more minutes to checkout, meaning the third shopper spent fifteen minutes checking out.

See a pattern here? The *n*th shopper takes 5*n* minutes to checkout. So the tenth shopper takes 50 minutes to checkout! 

The longest any individual shopper has to wait is 50 minutes.

## Case 2: 10 Shoppers and 5 Cashiers

![10 Shoppers and 5 Cashiers](/images/checkouts-and-shoppers/ten-shoppers-five-checkouts.png)
*10 Shoppers and 5 Cashiers*

Let's increase the number of checkouts to five. This means five shoppers can check out in five minutes.

After the first five shoppers spend their five minutes checking out, the next five shoppers can checkout. The next five each spend five minutes waiting for the first five to checkout, plus another five more minutes to checkout, meaning they spend a total of ten minutes checking out.

The longest any individual shopper has to wait is ten minutes.

## Case 3: 10 Shoppers and 10 Cashiers

![10 Shoppers and 10 Cashiers](/images/checkouts-and-shoppers/ten-shoppers-ten-checkouts.png)
*10 Shoppers and 10 Cashiers*

Now we will see what happens with ten checkouts for ten shoppers.

This one is simple - since ten shoppers can checkout in five minutes, and there are ten shoppers, each shopper spends five minutes checking out.

The longest any individual shopper has to wait is five minutes.

## Case 4: 5 Shoppers and 10 Cashiers

![5 Shoppers and 10 Cashiers](/images/checkouts-and-shoppers/five-shoppers-ten-checkouts.png)
*5 Shoppers and 10 Cashiers*

Ok, so what happens if there are fewer shoppers than there are checkouts?

Each shopper still needs to spend a minimum of five minutes checking out - they can't split their orders among checkouts.

So the longest any individual shopper has to wait is still five minutes.

## Case 5: 7 Shoppers and 5 Cashiers

![7 Shoppers and 5 Cashiers](/images/checkouts-and-shoppers/seven-shoppers-ten-checkouts.png)
*7 Shoppers and 5 Cashiers*

Each of the previous cases (except maybe case 4) involved an even split of shoppers to checkouts.

But what if there is not an even split?

Let's look at seven shoppers split among five checkouts.

Just like in case 2, the first five shoppers spend five minutes checking out. Once they're done checking out, the remaining two can checkout.

These two spend five minutes each checking out (at the same time). This means they each spent five minutes waiting for the shoppers before them to checkout, and another five minutes checking out themselves, for a total of ten minutes.

The longest any individual shopper has to wait is ten minutes.

## Another Look

The best cases for the shoppers above were when the number of checkouts equaled or exceeded the number of shoppers.

When this was the case, the most any single shopper had to wait was five minutes.

Intuitively, something feels off about this. My gut - and perhaps yours, too - says that the most efficient cases were when the number of shoppers equaled the number of checkouts.

I'll propose three more measurements: grand total time spent by everyone (even if that time is the same time), average time, and the ratio of the grand total time spent by shoppers to the grand total time spent by cashiers (simply referred to henceforth as "the ratio").

With grand total time, each shopper spends five minutes with a cashier. This means the shopper spent five minutes, and the cashier spent five minutes, for a grand total of ten minutes.

Average time is a function of grand total time. Divide grand total time by the number of shoppers and cashiers. So, above, where a shopper and a cashier spends a grand total time of ten minutes, their average time is ten divided by two, or five minutes.

Finally, with one shopper spending five minutes with one cashier, each spends five minutes, giving a ratio of 5:5, or 1.

Let's go through each case again.

## Case 1: 10 Shoppers and 1 Cashier

We know that the first shopper spends five minutes, the second shopper spends ten minutes, and so on until the tenth shopper spends fifty minutes. We just need to add these numbers up:

    5 + 10 + 15 + 20+ 25 + 30 + 35 + 40 + 45 + 50

We can do this quite easily without manually adding everything together - simply add the outside terms together, and you'll notice that the amounts are equal each time:

    (5 + 50) + (10 + 45) + (15 + 40) + (20 + 35) + (25 + 30)
    55 + 55 + 55 + 55 + 55

Note that there are exactly half as many terms as shoppers. So, we get:

    55 × 5 = 275

Remember that the cashier spent the entire 50 minutes. Add that 50 minutes to the 275 minutes that the shoppers spent:

    275 + 50 = 325

There are 11 participants (ten shoppers and on cashier). The average time is thus:

    325 / 11 ≈ 29.6

The ratio is as follows:

    275 / 50 = 5.5

Therefore, a grand total of 325 minutes was spent with an average of about 29.6 minutes spent. The ratio was 5.5.

## Case 2: 10 Shoppers and 5 Cashiers

Each of the first five shoppers spends five minutes, meaning a grand total of twenty-five minutes spent for that group.

The second set of five shoppers each spends ten minutes, meaning a grand total of fifty minutes spent for that group.

The cashiers each spend ten minutes - five minutes with one shopper, and five minutes with another. That means the group of cashiers spends a grand total of fifty minutes.

Adding the twenty-five minutes from the first five shoppers to the fifty minutes from the second five shoppers and the fifty minutes spent by the cashiers gives us a grand total of 125 minutes spent:

    25 + 50 + 50 = 125

There are fifteen total people (ten shoppers and five cashiers) which gives us an average time of:

    125 / 15 ≈ 8.3

The shoppers spent a grand total of seventy-five minutes, and the cashiers spent a grand total of fifty minutes, meaning the ratio is:

    75 / 50 = 1.5

A grand total of 125 minutes was spent with an average of about 8.3 minutes spent. The ratio is 1.5.

## Case 3: 10 Shoppers and 10 Cashiers

This case is simple - each shopper and each cashier spends five minutes.

Each *individual* spends five minutes.

So multiply five by the number of individuals:

     5 × 10 = 50

Figuring out the average time is just undoing the previous equation:

    50 / 10 = 5

The ratio is simple as well:

    50 / 50 = 1

A grand total of 50 minutes was spent with an average of about 5 minutes spent. The ratio is 1.

## Case 4: 5 Shoppers and 10 Cashiers

With five shoppers and ten cashiers, each shopper spends five minutes.

However, even though some aren't doing anything, each cashier *also* spends five minutes.

The five shoppers spend a grand total of twenty-five minutes, while the cashiers spend a grand total of fifty minutes.

Together, they spend a grand total of seventy-five minutes.

There are a total of fifteen people, so the average is:

    75 / 15 = 5

The ratio is:

    25 / 50 = 0.5

A grand total of 125 minutes was spent with an average of about 8.3 minutes spent. The ratio is 0.5.

## Case 5: 7 Shoppers and 5 Cashiers

The first five shoppers spend five minutes for a grand total of twenty-five minutes.

The last two shoppers each spend ten minutes (five minutes waiting and five minutes checking out). This means they spend a grand total of twenty minutes.

All the shoppers together thus spend a grand total of forty-five minutes.

Each cashier has to spend a full ten minutes, even the three who are doing nothing while the final two shoppers checkout. This means the five cashiers spend a grand total of fifty minutes.

Add these two groups together:

   45 + 50 = 95

And then divide by the total number of participants (12):

     95 / 12 ≈ 7.9

Finally, the ratio is:

    45 / 50 = 0.9

A grand total of 95 minutes was spent with an average of about 7.9 minutes spent. The ratio is 0.9.

## Conclusion?

If you've made it to here, wow. That's a lot of math.

But what we saw was that if we increased the supply (cashiers) the cost went down (time). Conversely, if we increase the demand (shoppers) the cost went up.

The most efficient scenario seemed to be when there was an equal number of shoppers and cashiers.

In reality, the often isn't an "equal amount" of supply and demand, even in the real world of shoppers and cashiers.

Furthermore, supply and demand affect one another. For instance, an increase in shoppers might cause more cashiers to open their lanes (stop laughing - I said *might*). Or shoppers might choose to abandon their carts if the wait (cost) is too long, causing demand to lower.

Price affects both supply and demands as well. Shoppers might flock to stores with faster cashiers, for instance. Or leave stores with slow cashiers.

## Further Reading:

* [Supply and demand on Wikipedia](https://en.wikipedia.org/wiki/Supply_and_demand)
* [Law of Supply and Demand on Investopedia](https://www.investopedia.com/terms/l/law-of-supply-demand.asp)

## Images include the following vectors from Pixabay:

* [Cash Register](https://pixabay.com/vectors/billing-machine-cash-register-machine-311746/)
* [Shopping Cart with Running Man](https://pixabay.com/vectors/shopping-cart-man-woman-running-3225130/)
* [Shopping Cart with Running Woman](https://pixabay.com/vectors/shopping-cart-woman-running-run-4059182/)

I will probably make another post about this with charts, graphs, and table, but little other content. Stay tuned!