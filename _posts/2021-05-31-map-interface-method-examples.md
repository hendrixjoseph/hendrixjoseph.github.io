---
layout: post
title: Java Collections Framework - List Interface Method Examples
tags: [java]
keywords: [java collections, java collections framework, collections framework, collections, map]
hashtags: [java, collections]
---

This is the second week of my  [Java Collections Framework](https://docs.oracle.com/javase/tutorial/collections/index.html) examples. This week I'm going to give examples for the [Map interface](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html).

As of Java 8, the Map interface has 25 different methods, 11 of which are `default` methods. Three of the methods (which are not `default` methods) simply convert the Map into something else. I don't give an example for those methods here. Those three methods are `entrySet()`, `keySet()`, and `values()`.

Now, the code:

```java
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class MapSample {
  public static void main(String[] args) {
    Integer v;
    boolean contains;
    boolean replaced;

    Map<String, Integer> map = new HashMap<>();
    // map = {}

    v = map.compute("Key", (key, oldValue) -> 1);
    // v = 1
    // map = {Key=1}

    v = map.computeIfAbsent("New Key", key -> 2);
    // v = 2
    // map = {New Key=2, Key=1}

    v = map.computeIfPresent("New Key", (key, oldValue) -> oldValue + 1);
    // v = 3
    // map = {New Key=3, Key=1}

    contains = map.containsKey("Key");
    // contains = true

    contains = map.containsKey("Not a key");
    // contains = false

    contains = map.containsValue(1);
    // contains = true

    contains = map.containsValue(101);
    // contains = false

    map.equals(map);
    // returns true
    map.equals(new Object());
    // returns false

    map.equals(new HashMap<>());
    // returns false

    map.equals(new HashMap<>(map));
    // returns true

    map.equals(new LinkedHashMap<>(map));
    // returns true

    map.forEach((key, value) -> System.out.println("key: " + key + "\tvalue: " + value));
    // Outputs:
    // key: New Key  value: 3
    // key: Key    value: 1

    v = map.get("Key");
    // v = 1

    v = map.get("Not a key");
    // v = null

    v = map.getOrDefault("Key", -1);
    // v = 1

    v = map.getOrDefault("Not a key", -1);
    // v = -1

    map.hashCode();
    // returns

    map.isEmpty();
    // returns false

    v = map.merge("Key", 3, (oldValue, newValue) -> oldValue + newValue);
    // v = 4
    // map = {New Key=3, Key=4}

    v = map.put("Another key", 5);
    // v = null
    // map = {New Key=3, Key=4, Another key=5}

    v = map.put("Another key", 6);
    // v = 5
    // map = {New Key=3, Key=4, Another key=6}

    v = map.putIfAbsent("Key", 10);
    // v = 4
    // map = {New Key=3, Key=4, Another key=6}

    v = map.putIfAbsent("Key 10", 10);
    // v = null
    // map = {Key 10=10, New Key=3, Key=4, Another key=6}

    v = map.remove("Another key");
    // v = 6
    // map = {Key 10=10, New Key=3, Key=4}

    v = map.remove("Not a key");
    // v = null
    // map = {Key 10=10, New Key=3, Key=4}

    v = map.replace("Key", 7);
    // v = 4
    // map = {Key 10=10, New Key=3, Key=7}

    replaced = map.replace("Key", 1, 3);
    // replaced = false
    // map = {Key 10=10, New Key=3, Key=7}

    replaced =  map.replace("Key", 7, 3);
    // replaced = true
    // map = {Key 10=10, New Key=3, Key=3}

    replaced =  map.replace("Key", 7, 3);
    // replaced = false
    // map = {Key 10=10, New Key=3, Key=3}

    map.replaceAll((key, value) -> value * 2);
    // map = {Key 10=20, New Key=6, Key=6}

    map.size();
    // returns 3

    map.clear();
    // map = {}

    map.size();
    // returns 0

    map.isEmpty();
    // returns true
  }
}
```