---
layout: post
title: Content Security Policy for Spring
tags: [java, programming]
---

To help secure Spring applications, I created a Content Security Policy builder and bean and [published it to Maven Central](https://mvnrepository.com/artifact/com.joehxblog/spring-content-security-policy/0.6.0.3).

The [code is available on GitHub](https://github.com/hendrixjoseph/spring-content-security-policy).

Here's the dependency information for a Maven POM file:

```xml
<dependency>
    <groupId>com.joehxblog</groupId>
    <artifactId>spring-content-security-policy</artifactId>
    <version>0.6.0.3</version>
</dependency>
```

And here's a repeat of the README file:

> ## Content Security Policy for Spring
> 
> ### What is a Content Security Policy?
> 
> <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy>
> 
> ### How to use
> 
> ```java
> import org.springframework.context.annotation.Bean;
> import org.springframework.context.annotation.Configuration;
> import org.springframework.security.config.annotation.web.builders.HttpSecurity;
> import org.springframework.security.web.SecurityFilterChain;
> 
> import com.joehxblog.spring.csp.ContentSecurityPolicy;
> 
> @Configuration
> public class Config {
>     private ContentSecurityPolicy csp = new ContentSecurityPolicy();
>     
>     @Bean
>     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
>         return csp.filterChain(http);
>     }
> }
> ```
> 
> Or write your own:
> 
> 
> ```java
> import org.springframework.context.annotation.Bean;
> import org.springframework.context.annotation.Configuration;
> import org.springframework.security.config.annotation.web.builders.HttpSecurity;
> import org.springframework.security.web.SecurityFilterChain;
> 
> import com.joehxblog.spring.csp.ContentSecurityPolicy;
> 
> @Configuration
> public class Config {
>     private ContentSecurityPolicy csp = new ContentSecurityPolicy("default-src 'self'");
>     
>     @Bean
>     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
>         return csp.filterChain(http);
>     }
> }
> ```
> 
> Or use the builder:
> 
> ```java
> import org.springframework.context.annotation.Bean;
> import org.springframework.context.annotation.Configuration;
> import org.springframework.security.config.annotation.web.builders.HttpSecurity;
> import org.springframework.security.web.SecurityFilterChain;
> 
> import com.joehxblog.spring.csp.ContentSecurityPolicy;
> import com.joehxblog.spring.csp.directive.FetchDirective;
> import com.joehxblog.spring.csp.value.KeywordValue;
> 
> @Configuration
> public class Config {
>     private ContentSecurityPolicy csp = ContentSecurityPolicy.build()
>             .add(FetchDirective.DEFAULT_SRC, KeywordValue.SELF)
>             .build();
>     
>     @Bean
>     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
>         return csp.filterChain(http);
>     }
> }
> ```

Enjoy!