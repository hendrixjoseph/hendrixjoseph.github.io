---
layout: post
title: Installing a Shelly EM in my Circuit Breaker Box
tags: [science, technology]
keywords: [electricity, power, energy, shelly]
---

I'm driven by curiosity. I'm also driven by numbers. Recently I've been curious about my electric usage.

Well, maybe not *recently* - I'm always trying to keep my electric costs down - from shopping on for suppliers on [Energy Choice Ohio's Apples to Apples site](https://www.energychoice.ohio.gov/ApplestoApples.aspx), avoiding a credit card fee on my electric bill by paying through [Arcadia Power](https://www.joehxblog.com/arcadiapower/), to even powering off my TV and associated accessories when not in use by using a [power strip with individual switches](https://www.amazon.com/dp/B0BF47TDWS/?tag=hendrixjoseph-20).

My power meter - or rather, the the utility company's power meter - tells me how many kilowatts I'm using. Except it doesn't. It *does* flash between demand, power received, power sent, and two other displays:

![My power meter flashing between displays.](/images/shelly/power-meter.gif)
*My power meter flashing between displays.*

Except this display doesn't update in real-time. It only updates periodically. Meaning power received and sent provides some meaning to me, but the energy reading - the kilowatts, the kilojoules-per-second - is useless.

So, I figured, I'd buy and install something to measure my energy and power usage for me.

It didn't need to be perfect - but I also didn't want it to be something that is dependent on some cloud service that I'd have to pay for, or could be shut down at some point in the future.

Enter Shelly.

Shelly sells an array of smart home products that all seem local-first. I only looked closely at their energy monitoring tools - most notably the [Shelly EM with two 120 amp Clamps](https://us.shelly.com/products/shelly-em-2-x-120a-clamp?variant=49666054947157).

![The Shelly EM with one of the 120 amp clamps](/images/shelly/shelly-em-with-one-120a-clamp.jpg)
*The Shelly EM with one of the 120 amp clamps*

I needed two of the 120 amp clamps because my electric supply is a typical US-based [split phase](https://en.wikipedia.org/wiki/Split-phase_electric_power): I have two "sides", each with a 120 volt AC supply in opposite phase to the other. This setup allows certain breakers to bridge both sides and supply 240 volts when needed - for instance, for AC. (Fun fact: in a previous home, I once had half my power out - meaning one supply was not feeding. That was weird having only some outlets work).

The Shelly EM measures both sides via the 120 amp clamp - the amps is what changes whereas the voltage stays mostly constant. Unfortunately, the Shelly EM only measures the voltage of one side, which means one side the power measurement might be slightly off. "Power" is voltage times amperage.  Thankfully, voltage is *mostly* constant and *mostly* the same on both sides, so it's close enough for what I want.

Installing the unit was straight-forward, albeit a bit nerve-wracking.

First off, in order to install the amp clamps into the Shelly EM unit, I had to cut the black connector off. Cutting the wires on something I just purchased seems wrong - but that's what [the Shelly site itself said to do](
https://support.shelly.cloud/en/support/solutions/articles/103000043901-how-to-connect-120a-transformer-to-shelly-em-).

Second, I had to put the amp clamps - the actual clamping part of the amp clamp - around "hot" wires coming in. After all, I can turn the main breaker off - but that doesn't turn off the supply *before* the main breaker. Except I have a service disconnect (another breaker, basically) outside my house, so I could turn off the supply!

![My outside service disconnect](/images/shelly/service-disconnect.jpg)
*My outside service disconnect*

In preparation for installing I did two things: examined my current breaker box setup:

![My breaker box setup preinstall](/images/shelly/breaker-box-preinstall.jpg)
*My breaker box setup preinstall*

and took a peek at an empty breaker box at my local Lowe's.

![An empty breaker box at Lowe's](/images/shelly/empty-breaker-box.jpg)
*An empty breaker box at Lowe's*

This allowed me not only to plan where to put the Shelly EM, but also to understand and visualize how the split-phase system works.

In the end, I installed the Shelly EM on the empty spot at the bottom left of the breaker box, connecting the power supply (which includes the voltage measurement) to the bottom-right breaker:

![My breaker box with the Shelly EM installed](/images/shelly/breaker-box-with-shelly-em.jpg)
*My breaker box with the Shelly EM installed*

After I turned the power back on - and was grateful there were no sparks! - the red power LED of the Shelly EM device lit up. And, just as the Shelly documentation stated, the device emitted its own WiFi network. First things first, I connected my phone to that network and connected it to my home WiFi network.

Interestingly once the Shelly EM was connected to my home WiFi, it turned off its own WiFi automatically. Which is good, since it was an insecure connection (no password needed). I'd still recommend verifying it turns off, though.

It's been chugging along for about a week now, generating and collecting data. I haven't done much with it as of yet other than watch it go up and down as things - like the AC - kick on and off. I'm thinking in the future I could create some sort of display - maybe with [Home Assistant](https://www.home-assistant.io/), maybe as its own thing - showing current usage, and maybe even tying it in with my bill to show current costs.

![The Shelly EM web interface](/images/shelly/screenshot.png)
*The Shelly EM web interface*
