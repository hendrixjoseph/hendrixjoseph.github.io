---
layout: post
title: How To Find All Assignments to a Variable in Eclipse
tags: [java, programming]
keywords: [eclipse, call hierarchy, write access, find every assignment, find all assignments]
hashtags: [java, android]
image: /images/eclipse/call-hierarchy-view-menu.png
---

If you've ever programmed in Eclipse, you're probably familiar with the call hierarchy window. You know the part that lets you find all instances of a variable? When you right-click on a variable and select "Open Call Hierarchy" or simply type CTRL-ALT-H?

While a nice feature, sometimes I want to find all the assignments to the variable... Not every instance.

Previously I had been searching for assignments by just using the normal "find" tool (CTRL-F) and searching for "variable =", but that doesn't always find every assignment, plus the view isn't as helpful as the "Call Hierarchy" window.

Well, it turns out there an option in the view menu of the Call Hierarchy menu that lets you filter by read accesses or write accesses. Write accesses are assignments - in other words, it finds all occurrences where a variable is written.

The view menu is found by clicking on the little triangle in the top-right corner of the Call Hierarchy window. I've circled it with a red circle in the below screenshot to help you find it:

![The field access filter in the Call Hierarchy window.](/images/eclipse/call-hierarchy-view-menu.png)
*The field access filter in the Call Hierarchy window.*

Source: [Find all assignments to variable, Stack Overflow](https://stackoverflow.com/questions/9333634/find-all-assignments-to-variable)