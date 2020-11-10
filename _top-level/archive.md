---
layout: affiliate-default
title: Archive
excerpt: This page contains a list of articles by month and year.
---

{% for post in site.posts %}{% assign year = post.date | date: "%Y" %}{% assign month = post.date | date: "%B" %}
{% unless prevyear and year == prevyear %}<h2 id="year-{{ year }}"><a href="#year-{{ year }}">§</a> {{ year }}</h2>{% endunless %}{% assign prevyear = year %}
{% unless prevmonth and month == prevmonth %}<h3 id="{{ month }}-{{ year }}"><a href="#{{ month }}-{{ year }}">§</a> {{ month }} {{ year }}</h3>{% endunless %}{% assign prevmonth = month %}
* {{ post.date | date: "%e" }}: [{{ post.title }}]({{ post.url }})
{% endfor %}
