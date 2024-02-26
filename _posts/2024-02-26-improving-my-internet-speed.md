---
layout: post
title: Improving my Internet Speed
tags: [technology]
---

Recently my cable Internet service was automatically "upgraded" from 30 Mbps to 300 Mbps (along with an increase in price).

Curious if my speed would truly increase, I made sure to measure my Internet speed - using [SpeedTest.net](https://www.speedtest.net/) - both before and after the supposed upgrade.

Surprise, surprise - there was no increase in speed. I was getting about 20 Mbps down and 40 Mbps up both before and after:

[![download Mbps 22.89 / upload Mbps 37.40](/images/speedtest/wifi-5.png)](https://www.speedtest.net/result/15841739993)

But I'm still curious. Could the issue be my network? Might my modem - an [ARRIS SURFboard SB6141 DOCSIS 3.0 cable modem](https://www.amazon.com/gp/product/B00AJHDZSI/?tag=hendrixjoseph-20) that I got back in February of 2016 - be the problem? Or maybe my WiFi router - a [Linksys AC1200 Wi-Fi 5 router](https://www.amazon.com/gp/product/B00JZWQTKO/?tag=hendrixjoseph-20) which I've had since July of 2017 - be the bottleneck?

Spectrum no longer charges extra if you use their modem (they do charge extra if you use their Wi-Fi router). So I headed down to the local Spectrum Store and asked if I could check what model modem they used. Spectrum's modems are self-branded, or at least the ones that they had in the store, but the modem did have marked that it was a DOCSIS 3.1 modem. So after providing my account info, I took it home. (The customer service rep also further upgraded me to a 1-Gig service and gave me a promotional rate).

I was disappointed after hooking up the modem because my speed still didn't improve.

Maybe my Wi-Fi router was the issue? How could I verify the router was the bottleneck without buying a new router?

That's easy enough. My main computer is connected to the Wi-Fi router not via Wi-Fi but via Ethernet. I plugged my main computer directly into the modem and, thankfully, saw much better speeds - nearly a full gig downloading (although upload wasn't much better):

[![download Mbps / 912.05 upload Mbps 40.74](/images/speedtest/ethernet-to-modem.png)](https://www.speedtest.net/result/15841758029)

I ended up buying a [TP-Link AX6000 Wi-Fi 6 Router](https://www.amazon.com/gp/product/B0BMWHQH1M/?tag=hendrixjoseph-20) and, while I'm not seeing the speeds I saw when connected directly to the modem via ethernet, I am seeing much better speeds:

[![download Mbps 93.46 / upload Mbps 40.11](/images/speedtest/wifi-6.png)](https://www.speedtest.net/result/15905133785)

