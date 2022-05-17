---
layout: post
title: Lazily Check the Body of an HttpServletRequest
tags: [java, programming]
keywords: [Httpservletrequest, spring, servlet]
---

Recently I was helping a junior developer analyze the incoming parameters of an HTTP request in a Spring/Java Servlet application.

The issue came down to reading the body of the request: the way an [HttpServletRequest](https://docs.oracle.com/javaee/6/api/index.html?javax/servlet/http/HttpServletRequest.html) is designed, once the body is read, then the body is consumed. It's gone. Any attempt to read the body again will result in reading an empty body.

Of course, that's no good.

After a [few attempts](https://www.baeldung.com/spring-reading-httpservletrequest-multiple-times) at [caching the body](http://www.javabyexamples.com/read-request-body-multiple-times-using-spring-mvc) to [read it twice](https://stackoverflow.com/questions/32763922/spring-reading-request-body-twice) (either using custom wrappers or Spring's [ContentCachingRequestWrapper](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/util/ContentCachingRequestWrapper.html)) I decided it might be better to lazily read the body. That is, only read the body when  it's requested, and then pass the body onto the requesting method.

I did this by creating a custom HttpServletRequest class (that extends [HttpServletRequestWrapper](https://docs.oracle.com/javaee/6/api/javax/servlet/http/HttpServletRequestWrapper.html)).

And then, in a filter class, wrap the request and send in on down the chain

Finally, you'll need to add the filter to your web.xml file:

<script src="https://gist.github.com/hendrixjoseph/1c737841fdc1aa92743fb1140069caf5.js"></script>

There are two caveats, though:

1. If the body never happens to be read (i.e. neither the `getInputStream` or `getReader` methods get called) then it will never be examined.
2. If the request gets unwrapped (via the [`getRequest`](https://docs.oracle.com/javaee/6/api/javax/servlet/ServletRequestWrapper.html#getRequest()) method of `ServletRequestWrapper` inherited by my custom HttpServletRequest class) then my overrided method will not be called.