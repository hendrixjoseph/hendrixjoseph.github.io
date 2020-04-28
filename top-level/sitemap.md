---
layout: affiliate-default
title: Sitemap
permalink: /sitemap/
---

## Top Level

* [Front Page](/index.html){% assign pages = site.pages | where_exp: "page", "page.path contains 'top-level'" %}{% for page in pages %}
* [{{ page.title }}]({{ site.url }}{{page.url}}){% endfor %}
* [Sitemap.xml](/sitemap.xml)
* [robots.txt](/robots.txt)

## Redirects

{% for redirect in site.redirects %}
* [{{ redirect.title }}]({{ site.url }}{{ redirect.url }}){% endfor %}

## RSS Feeds

{% assign pages = site.pages | where_exp: "page", "page.path contains 'rss'" %}{% for page in pages %}
* [{{ page.url }}]({{ site.url }}{{page.url}}){% endfor %}

## Tools

{% assign pages = site.pages | where_exp: "page", "page.path contains 'tools/'" %}{% for page in pages %}
* [{{ page.title }}]({{ site.url }}{{page.url}}){% endfor %}

## Data

{% assign pages = site.pages | where_exp: "page", "page.path contains 'data'" %}{% for page in pages %}
* [{{ page.url }}]({{ site.url }}{{page.url}}){% endfor %}

## Posts

| Date | Title | Tags |
|-------|--------|{% for post in site.posts %}{% assign tags = post.tags | sort %}
| {{ post.date | date: "%B %e, %Y" }} | [{{ post.title }}]({{ post.url }}) | {% for tag in tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %} | {% if post.pages %}{% for page in (2..post.pages) %}
| {{ post.date | date: "%B %e, %Y" }} | [{{ post.title }} Page {{ page }}]({{ post.url }}page{{ page }}/) | {% for tag in tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %} | {% endfor %}{% endif %}{% endfor %}

## Pages

{% for page in (1..45) %}
* [Page {{ page }}]({% unless page == 1 %}{{ site.paginate_path | replace: ':num', page }}{% endunless %}){% endfor %}

## 404s

* [404](/404.html)
