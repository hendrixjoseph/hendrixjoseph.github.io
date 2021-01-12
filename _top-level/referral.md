---
layout: page
title: Referral Links
excerpt: This page contains the list of referral link redirects that this blog may make a commission on if used.
---

The following referral links are redirects (i.e. the link says it's this site, but it will take you to the provider's website):

{% for referral in site.referrals %}
* [{{ referral.title | remove : ' Referral' }}]({{ site.url }}{{referral.url}}){% endfor %}
