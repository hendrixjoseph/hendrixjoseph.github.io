---
layout: page
title: Tools
permalink: /tools/
excerpt: This page contains a list of the various web tools available on this blog.
---

## Tools

{% for tool in site.tools %}
* [{{ tool.title }}]({{ site.url }}{{ tool.url }}){% endfor %}
