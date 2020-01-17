---
layout: post
title: "Android Spinner (Drop-Down List) SpinnerAdapter Problem: ArrayAdapter requires the resource ID to be a TextView"
tags: [android, java]
keywords: [spinner, drop down, arrayadapter, spinneradapter, arrayadapter, arrayadapter requires the resource id to be a textview, expected resource of type layout]
hashtags: [java, android]
---

I've been having a bit of trouble with constructing an ArrayAdapter for a "spinner" (aka drop-down list) for an Android app I've been working on.

The second argument for [every ArrayAdapter constructor](https://developer.android.com/reference/android/widget/ArrayAdapter#public-constructors) is "int resource".

Resources are common enough in Android development. They typically refer to some aspect of an XML file and are accessed in Java via the [`R` object](https://developer.android.com/reference/android/R).

If you've been programming Android for any amount of time, you know this. I just wasn't sure which resource I was supposed to pass.

For context, here is [the XML layout file containing the spinner](https://github.com/hendrixjoseph/tagger/blob/master/app/src/main/res/layout/activity_receive.xml):

```java
<?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
     xmlns:app="http://schemas.android.com/apk/res-auto"
     xmlns:tools="http://schemas.android.com/tools"
     android:orientation="vertical"
     android:gravity="center_horizontal"
     android:layout_width="match_parent"
     android:layout_height="match_parent"
     tools:context=".ReceiveActivity">
     
     <TextView
     android:id="@+id/tagItTextView"
     android:layout_width="wrap_content"
     android:layout_height="wrap_content"
     android:layout_marginStart="8dp"
     android:layout_marginLeft="8dp"
     android:layout_marginTop="24dp"
     android:layout_marginEnd="8dp"
     android:layout_marginRight="8dp"
     android:text="Tagger v0.0"
     app:layout_constraintEnd_toEndOf="parent"
     app:layout_constraintStart_toStartOf="parent"
     app:layout_constraintTop_toTopOf="parent" />
     
     <TextView
     android:id="@+id/urlTextView"
     android:layout_width="wrap_content"
     android:layout_height="wrap_content"
     android:layout_marginStart="20dp"
     android:layout_marginLeft="200dp"
     android:layout_marginTop="16dp"
     android:layout_marginEnd="20dp"
     android:layout_marginRight="8dp"
     android:text="UrlTextViewxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
     app:layout_constraintEnd_toEndOf="parent"
     app:layout_constraintStart_toStartOf="parent"
     app:layout_constraintTop_toBottomOf="@+id/tagItTextView" />
     
     <Spinner
     android:id="@+id/tag_spinner"
     android:layout_width="fill_parent"
     android:layout_height="wrap_content" />
     
     <Button
     android:id="@+id/tagItButton"
     android:layout_width="130dp"
     android:layout_height="wrap_content"
     android:layout_marginTop="16dp"
     android:text="TagIt!"
     app:layout_constraintEnd_toEndOf="parent"
     app:layout_constraintStart_toStartOf="parent"
     app:layout_constraintTop_toBottomOf="@+id/urlTextView" />
     
    </LinearLayout >
```

Do I pass the id for the layout file? The id for the spinner itself?

I looked at an [Android spinner example](https://mkyong.com/android/android-spinner-drop-down-list-example/) on the Internet, and they had the following id passed:

```java
ArrayAdapter<String> dataAdapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, list);
```

Nowhere else in the example could I find `simple_spinner_item, list`. I even CTRL-F'd it.

So I tried the id for the layout:

```java
SpinnerAdapter adapter = new ArrayAdapter(this, R.layout.activity_receive, tags);
```

It compiled fine, but when I tried to launch the activity, it crashed with the following exception:

```
java.lang.IllegalStateException: ArrayAdapter requires the resource ID to be a TextView
```

Huh. The id has to be a [TextView](https://developer.android.com/reference/android/widget/TextView). But a TextView is not a layout?

Nevertheless, I tried the id for the spinner (even though a spinner is not a text view):

```java
SpinnerAdapter adapter = new ArrayAdapter(this, R.id.tag_spinner, tags);
```

This time it wouldn't even compile - or at least, my IDE underlined `R.id.tag_spinner` in red and gave me the following error:

```
Expected resource of type layout.
```

Sigh.

I went back to using `R.layout`, but this time I paid attention to the autocomplete.

It seems there's a pseudo-layout called, at least in my case, `R.layout.support_simple_spinner_dropdown_item`. So I tried that:

```java
SpinnerAdapter adapter = new ArrayAdapter(this, R.layout.support_simple_spinner_dropdown_item, tags);
```

And it worked!

Frustratingly enough I could find no documentation that says this is what I have to do. Not saying no one ever mentioned it, just that I never read anywhere that using this "pseudo-layout."