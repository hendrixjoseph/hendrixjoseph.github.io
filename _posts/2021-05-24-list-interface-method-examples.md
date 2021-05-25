---
layout: post
title: Java Collections Framework - List Interface Method Examples
tags: [java]
keywords: [java collections, java collections framework, collections framework, collections, list]
hashtags: [java, collections]
---

Over the next few weeks, I'm going to go over the [Java Collections Framework](https://docs.oracle.com/javase/tutorial/collections/index.html) and just so examples for each method. This week being the first week I'll start with what is probably the most commonly used collections: the [List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html).

My goal is to publish one of these each Monday. So feel free to tune out Mondays if programming isn't your thing. Or if it is, feel free to be sure to tune in Mondays.

If there's a Monday that happens to coincide with one of my normal monthly posts (which, as of right now, is just my monthly blog stats reports that I do on the twentieth) then I'll either post it a day early, a day late... Or, get this, I might skip a week.

But the next time the 20th falls on Monday is in September - three months or 17 weeks from now - so I might be finished by then anyway.

I plan to focus on Java 8, since (I feel, so citation needed) that is the most used Java version in production.

As of Java 8, `List` has 32 separate methods. I've used every one below except for `spliterator`, `parallelStream`, and `stream`.

The code, in all its glory:

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class ListSample {
  public static void main(String[] args) {
    // Just some variables to reuse
    boolean changed;
    boolean isTrue;
    String string;
    int index;

    List<String> list = new ArrayList<>();
    // list = []

    changed = list.add("Hello");
    // changed = true
    // list = [Hello]

    list.add(1, "Hi");
    // list = [Hello, Hi]


    changed = list.addAll(Arrays.asList("Bonjour", "Hola"));
    // changed = true
    // list = [Hello, Hi, Bonjour, Hola]

    changed = list.addAll(0, Arrays.asList("Ciao", "Hallo"));
    // changed = true
    // list = [Ciao, Hallo, Hello, Hi, Bonjour, Hola]

    changed = list.addAll(list);
    // changed = true
    // list = [Ciao, Hallo, Hello, Hi, Bonjour, Hola, Ciao, Hallo, Hello, Hi, Bonjour, Hola]

    isTrue = list.contains("Hello");
    // isTrue = true

    isTrue = list.contains("Goodbye");
    // isTrue = false

    isTrue = list.containsAll(list);
    // isTrue = true

    isTrue = list.containsAll(Arrays.asList("Hi"));
    // isTrue = true

    isTrue = list.containsAll(Arrays.asList("Hi, Goodbye"));
    // isTrue = false

    isTrue = list.equals(list);
    // isTrue = true

    string = list.get(0);
    // string = Ciao

    string = list.get(list.size() - 1);
    // string = Hola

    int hash = list.hashCode();
    // hash = 1027746517

    index = list.indexOf("Hello");
    // index = 2

    index = list.indexOf("Goodbye");
    // index = -1

    index = list.lastIndexOf("Hello");
    // index = 8

    index = list.lastIndexOf("Goodbye");
    // index = -1

    string = list.remove(0);
    // string = Ciao
    // list = [Hallo, Hello, Hi, Bonjour, Hola, Ciao, Hallo, Hello, Hi, Bonjour, Hola]

    changed = list.remove("Hello");
    // changed = true
    // list = [Hallo, Hi, Bonjour, Hola, Ciao, Hallo, Hello, Hi, Bonjour, Hola]

    changed = list.remove("Goodbye");
    // changed = false
    // list = [Hallo, Hi, Bonjour, Hola, Ciao, Hallo, Hello, Hi, Bonjour, Hola]

    changed = list.removeAll(Arrays.asList("Ciao", "Hallo"));
    // changed = true
    // list = [Hi, Bonjour, Hola, Hello, Hi, Bonjour, Hola]

    list.replaceAll(String::toUpperCase);
    // list = [HI, BONJOUR, HOLA, HELLO, HI, BONJOUR, HOLA]

    changed = list.retainAll(list);
    // changed = false
    // list = [HI, BONJOUR, HOLA, HELLO, HI, BONJOUR, HOLA]

    changed = list.retainAll(Arrays.asList("HELLO", "HI"));
    // changed = true
    // list = [HI, HELLO, HI]

    string = list.set(0, "Goodbye");
    // string = HI
    // list = [Goodbye, HELLO, HI]

    int size = list.size();
    // size = 3

    list.sort(Comparator.naturalOrder());
    // list = [Goodbye, HELLO, HI]

    list.sort(Comparator.reverseOrder());
    // list = [HI, HELLO, Goodbye]

    List<String> sublist = list.subList(0, 2);
    // sublist = [HI, HELLO]

    Object[] objects = list.toArray();
    // objects = [Ljava.lang.Object;@4f023edb

    String[] strings = list.toArray(new String[0]);
    // strings = [Ljava.lang.String;@3a71f4dd

    list.clear();
    // list = []

    list.addAll(Arrays.asList("Hallo", "Hello", "Hi", "Bonjour", "Hola", "Ciao", "Hallo", "Hello", "Hi", "Bonjour", "Hola"));
    // list = [Hallo, Hello, Hi, Bonjour, Hola, Ciao, Hallo, Hello, Hi, Bonjour, Hola]
    System.out.println(list);

    //list.forEach(System.out::println);
    // just prints each string; if strings weren't immutable I could change them here

    list.removeIf(s -> s.startsWith("H"));
    // list = [Bonjour, Ciao, Bonjour]
    System.out.println(list);

    changed = list.retainAll(Arrays.asList("Goodbye"));
    // changed = true
    // list = []
  }
}
```