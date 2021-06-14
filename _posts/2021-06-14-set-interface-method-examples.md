---
layout: post
title: Java Collections Framework - Set Interface Method Examples
tags: [java]
keywords: [java collections, java collections framework, collections framework, collections, set]
hashtags: [java, collections]
---

This is my third week providing examples for the [Java Collections Framework](https://docs.oracle.com/javase/tutorial/collections/index.html). It's actually been four weeks since my first of these posts, but I missed last week due to being sick. I'll miss next week as well due to being on vacation.

Today I will be going over the [Set interface](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html). Remember a *set* contains at most one of any element.

As of Java 8, the Set interface has 20 different methods, 5 of which are `default` methods. Four of the methods simply convert the Map into something else. I don't give an example for those methods here.

Now, the code:

```java
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class SetSample {
  public static void main(String[] args) {

    boolean bool;

    Set<String> set = new HashSet<>();
    // set = []

    bool = set.add("Item");
    // bool = true
    // set = [Item]

    bool = set.add("Item");
    // bool = false
    // set = [Item]

    bool = set.addAll(Arrays.asList("one", "one", "two", "two"));
    // bool = true
    // set = [Item, one, two]

    bool = set.addAll(Arrays.asList("one", "one", "two", "two"));
    // bool = false
    // set = [Item, one, two]

    bool = set.addAll(Arrays.asList("one", "two", "three", "four", "five"));
    // bool = false
    // set = [Item, one, two, three, four, five]

    set.contains("Item");
    // returns true

    set.contains("Not an item");
    // returns false

    set.containsAll(Arrays.asList("one", "one", "two", "two"));
    // returns true

    set.containsAll(Arrays.asList("one", "one", "two", "two", "ten"));
    // returns false

    set.equals(set);
    // returns true

    set.equals(new Object());
    // returns false

    set.equals(new HashSet<>());
    // returns false

    set.hashCode();
    // returns 116003497

    set.isEmpty();
    // returns false

    bool = set.remove("Not an item");
    // bool = false
    // set = [Item, four, one, two, three, five]

    bool = set.remove("Item");
    // bool = true
    // set = [four, one, two, three, five]

    bool = set.removeAll(Collections.emptyList());
    // bool = false
    // set = [four, one, two, three, five]

    bool = set.removeAll(Arrays.asList("one", "one", "two", "two"));
    // bool = true
    // set = [four, three, five]

    bool = set.removeIf(string -> string.endsWith("r"));
    // bool = true
    // set = [three, five]

    bool = set.retainAll(Arrays.asList("three", "three"));
    // bool = true
    // set = [three]

    set.size();
    // returns 1

    set.clear();
    // set = []

    set.size();
    // returns 0

    set.isEmpty();
    // returns true
  }
}
```