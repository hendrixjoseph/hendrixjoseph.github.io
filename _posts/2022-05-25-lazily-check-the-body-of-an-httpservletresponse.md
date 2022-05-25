---
layout: post
title: Lazily Check the Body of an HttpServletResponse
tags: [java, programming]
keywords: [httpservletresponse, spring, servlet]
---

A week or so ago I wrote about how I was helping junior developer [analyze the incoming parameters of an HTTP request](https://www.joehxblog.com/lazily-check-the-body-of-an-httpservletrequest/) in a Spring/Java Servlet application.

It turns out she also needed to analyze the body of the corresponding request. Here's how I suggested she do that:

<script src="https://gist.github.com/hendrixjoseph/fda450a5bd00c1004241bf268a9bf20c.js"></script>

You see above that I overrode two methods of `HttpServletResponse`: `getOutputStream()`  and `getWriter()`. In practice, I only noticed that the `getWriter()` method was called, so you might only need to use that override.

You'll still need to watch out in the event the response gets unwrapped via `getResponse()` method of the `ServletResponseWrapper` superclass.