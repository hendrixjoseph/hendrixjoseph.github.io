---
layout: post
title: Why a Roth IRA is Better - With Math
tags: [git]
keywords: [commit, book]
---

Which is better? A Roth or a Traditional?

That's a hard question to answer. Better in what way? And a Roth or Traditional *What*? Since IRAs aren't the only thing that can be "Roth" now. Hello, Roth 401k.

I'm going to attempt to answer this question with math. And I'm going to assume we're talking about IRAs, and that "better" means more money in retirement - or whenever you cash out.

I'm also going to make some maybe-not-so-good assumptions:

* The tax rate now and in retirement (later) is the same.

Before I go into details, I'd like to point out what I used to think: there really was no difference between the two, given the same tax rate now and later. This is because of the associative property of multiplication:

    Roth: ((1 - tax) * invested) * growth
    Traditional: (1 - tax) * (invested * growth)

So, if you invested $10,000, the tax rate was 10%, and it doubled by the time you withdrew, you'd end up with $18,000 either way:

    Roth:
    ((1 - 0.1) * $10,000) * 2
    (0.9 * $10,000) * 2
    $9,000 * 2
    $18,000

    Traditional:
    (1 - 0.1) * ($10,000 * 2)
    0.9 * $20,000
    $18,000

So, yeah, it doesn't matter *if all you had was that ten grand*. But I forgot about the rest of your paycheck.

For the following math, I'm going to make some assumptions. Maybe they're a bit off the mark, maybe they won't apply to you. But here they are:

* I'm only going to look at the growth of one year of investment. That is, what is invested in a year, and how much from that year is available years later.
* Taxable income is $100,000.
* IRA max, Roth or otherwise, is $10,000. Which is more than it currently is, but it's to make the math easier.
* Spend is $50,000. The rest is available to invest.
* The tax rate, both now and later, is 10%.

First, let's look at how much someone would have after their investment doubles *without* investing in either a Roth or Traditional IRA:

    Taxable Income = $100,000
    After-Tax Income = 0.9 * $100,000 = $90,000
    Spend = $50,000
    Investment = $90,000 - $50,000 = $40,000
    Investment Return = $40,000 * 2 = $80,000
    Investment Gain = $40,000
    Tax on Gain = 0.1 * $40,000 = $4,000
    After-Tax Return = $80,000 - $4,000 = $76,000

Now, let's look at how much someone would have after their investment doubles with investing in a Traditional IRA:

    Taxable Income = $100,000
    Traditional IRA Investment = $10,000
    Taxable Income after IRA = $100,000 - $10,000 = $90,000
    After-Tax Income = 0.9 * $90,000 = $81,000
    Spend = $50,000
    Investment = $81,000 - $50,000 = $31,000
    Investment Return = $31,000 * 2 = $62,000
    Investment Gain = $31,000
    Tax on Gain = 0.1 * $31,000 = $3,100
    Traditional IRA Return = $20,000
    Tax on Traditional IRA Return = 0.1 * $20,000 = $2,000
    Total Return = $62,000 + $20,000 = $82,000
    After-Tax Return = $82,000 - $3,100 - $2,000 = $76,900

Finally, let's look at how much someone would have after their investment doubles with investing in a Roth IRA:

    Taxable Income = $100,000
    After-Tax Income = 0.9 * $100,000 = $90,000
    Roth IRA Investment = $10,000
    Spend = $50,000
    Investment = $90,000 - $50,000 - $10,000 = $30,000
    Investment Return = $30,000 * 2 = $60,000
    Investment Gain = $30,000
    Tax on Gain = 0.1 * $30,000 = $3,000
    Roth IRA Return = $20,000
    Tax on Traditional IRA Return = $0
    Total Return = $60,000 + $20,000 = $80,000
    After-Tax Return = $80,000 - $3,000 = $77,000

So the clear winner of these three is the Roth IRA, with the investor ending up with $77,000.

The traditional IRA comes in second with the investor ending up with $76,900.

And doing neither comes in last, as expected, with the investor ending up with $76,000.

In case you want to run the numbers yourself, I made a handy-dandy calculator below. Perhaps you can find a situation where a Roth IRA is not better?

<div class="calculator">
<h3>Input</h3>
<input id="taxableIncome" min="0" type="number" placeholder="taxable income" title="taxable income">
<input id="spend" min="0" type="number" placeholder="spend" title="spend">
<input id="rate" min="0" type="number" placeholder="total return; enter 10 for 10%" title="total return">
<input id="tax" min="0" type="number" placeholder="tax rate; enter 10 for 10%" title="tax rate">
<input id="ira" min="0" type="ira" placeholder="IRA contribution" title="IRA contribution">
<button id="calculate">Calculate!</button>
</div>

<div class="calculator">
<h3>Results</h3>
<input id="neither" placeholder="Neither" readonly>
<input id="traditional" placeholder="Traditional" readonly>
<input id="roth" placeholder="Roth" readonly>
</div>

<style>
.calculator {
    padding: 5px;
}

.calculator * {
    width: 25%;
    display: block;
    margin: 10px;
}
</style>

<script>
let getValue = id => {
    let input = document.getElementById(id);
    return new Number(input.value);
};

let setValue = (id, value) => {
    let input = document.getElementById(id);
    let money = value.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
    let type = id.at(0).toUpperCase() + id.slice(1);
    input.value = `${type} ${money}`;
};

let button = document.getElementById('calculate');

button.onclick = () => {
    let taxableIncome = getValue('taxableIncome');
    let spend = getValue('spend');
    let rate = 1 + getValue('rate') / 100;
    let tax = getValue('tax') / 100;
    let ira = getValue('ira');
    
    setValue('neither', neither(taxableIncome, spend, rate, tax));
    setValue('traditional', traditional(taxableIncome, spend, rate, tax, ira));
    setValue('roth', roth(taxableIncome, spend, rate, tax, ira));
};

let roth = (taxableIncome, spend, rate, tax, ira) => {
    let afterTaxIncome = (1 - tax) * taxableIncome;
    let investment = afterTaxIncome - spend - ira;
    let investmentReturn = investment * rate;
    let gain = investmentReturn - investment;
    let taxOnGain = gain * tax;
    let iraReturn = ira * rate;
    let totalReturn = investmentReturn + iraReturn;
    return totalReturn - taxOnGain;
};

let traditional = (taxableIncome, spend, rate, tax, ira) => {
    let taxableIncomeAfterIra = taxableIncome - ira;
    let afterTaxIncome = (1 - tax) * taxableIncomeAfterIra;
    let investment = afterTaxIncome - spend;
    let investmentReturn = investment * rate;
    let gain = investmentReturn - investment;
    let taxOnGain = gain * tax;
    let iraReturn = ira * rate;
    let taxOnIraReturn = iraReturn * tax;
    let totalReturn = investmentReturn + iraReturn;
    return totalReturn - taxOnGain - taxOnIraReturn;
};

let neither = (taxableIncome, spend, rate, tax) => {
    let afterTaxIncome = (1 - tax) * taxableIncome;
    let investment = afterTaxIncome - spend;
    let investmentReturn = investment * rate;
    let gain = investmentReturn - investment;
    let taxOnGain = gain * tax;
    return investmentReturn - taxOnGain;
};
</script>