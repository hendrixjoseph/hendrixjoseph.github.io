---
layout: post
title: Conditionally Display a Single Line of JavaScript in AEM
tags: [programming]
---

The other day I needed to call a JavaScript function only when a certain condition is not true.

Oh, and this was in a script tag in an HTML file within the `ui.apps` section of Adobe Experience Manager.

I ended up with something like the following:

```html
<script>
    // some code
    ${condition ? "" : "console.log('this is false!')" @context='scriptString'}
    // even more code
</script>
```

In my case, the condition was a property for the page that was set.

We probably shouldn't have so much JavaScript in the `ui.apps` section, but we do. It should probably be in the `ui.frontend` section, but it's not.

I just have to work with what we have.
