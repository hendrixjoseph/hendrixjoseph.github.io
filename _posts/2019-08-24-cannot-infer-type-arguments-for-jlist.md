---
layout: post
title: Cannot infer type arguments for JList<>
tags: [java]
keywords: [jlist, listmodel, defaultlistmodel, cannot infer type arguments for]
hashtags: [java, programming]
image: /images/Java_logo.jpg
thumbnail: true
---

I was recently adding some type parameters to a raw `JList` in some old Java code.

The [`JList`](https://docs.oracle.com/javase/7/docs/api/javax/swing/JList.html) I was messing with in particular passed a [`ListModel`](https://docs.oracle.com/javase/7/docs/api/javax/swing/ListModel.html) - a [`DefaultListModel`](https://docs.oracle.com/javase/7/docs/api/javax/swing/DefaultListModel.html) to be exact - into its constructor. So, thinking that the `JList` needed to have the `DefaultListModel` as its generic type, I set my types as follows (that's the text between the &lt; and &gt; for my non-programming readers):

```java
DefaultListModel<String> model = new DefaultListModel<>();
JList<DefaultListModel<String>> list = new JList<>(this.model);
```

Welp, [Eclipse](https://www.eclipse.org/ide/) didn't like this. I gave me the following error message:

```
Cannot infer type arguments for JList<>
```

Ok? I tried removing the `&lt;String&gt;` from the `DefaultListModel` in the `JList`:

```java
DefaultListModel<String> model = new DefaultListModel<>();
JList<DefaultListModel> list = new JList<>(this.model);
```

Nope. Eclipse is still telling me:

```
Cannot infer type arguments for JList<>
```

Huh. After a little Googlin' and failing to find anything useful, I take a look at the source code for `JList`, particularly the constructors. Here are the four constructors for a `Jlist`:

```java
public JList()
public JList(final E[] listData)
public JList(final Vector<? extends E> listData)
public JList(ListModel<E> dataModel)
```

Ope. It turns out that the `JList` simply needs the *same* type parameter as the `DefaultListModel`. In other words, this:

```java
DefaultListModel<String> model = new DefaultListModel<>();
JList<String> list = new JList<>(this.model);
```

Pretty simple, honest mistake and misunderstanding.

Keep in mind I have at least ten years of Java experience and have been playing with programming since I was in the single digits. If you're new and feel bad because you have to look things up, well, everyone has to look things up.