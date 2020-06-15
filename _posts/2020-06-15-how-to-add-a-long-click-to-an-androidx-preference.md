---
layout: post
title: How to Add a Long Click to an AndroidX Preference
tags: [java, programming]
keywords: [android, androidx, preference, long click]
---

As part of [my goals for this year](https://www.joehxblog.com/2020-new-years-resolutions-goals/), I've been working on [a rather simple Android app](https://github.com/hendrixjoseph/tagger).

This app is largely done through the AndroidX Preferences API. This Preference API seemed to lack the ability to handle a long click.

At least it appeared that way initially.

Unfortunately, the only way I found to implement a long click was to extend the preference and override its [onBindViewHolder method](https://developer.android.com/reference/androidx/preference/Preference#onBindViewHolder%28androidx.preference.PreferenceViewHolder%29).

To implement a "long-clickable preference", I extended the Preference class, included a longClickListener listener that does nothing by default, and an onLongClick method that takes an OnLongClickListener: 

```java
import android.view.View;
import androidx.preference.*;

public class LongClickablePreference extends Preference {

    private View.OnLongClickListener longClickListener = v -> true;

    public LongClickableEditTextPreference(final Context context) {
        super(context);
    }

    @Override
    public void onBindViewHolder(final PreferenceViewHolder holder) {
        super.onBindViewHolder(holder);

        View itemView = holder.itemView;
        itemView.setOnLongClickListener(this.longClickListener);
    }

    @Override
    public void onLongClick(final View.OnLongClickListener longClickListener) {
        this.longClickListener = longClickListener;
    }
}
```

If you look at the methods available in the View, you'll see that there is a [setLongClickable](https://developer.android.com/reference/android/view/View#setLongClickable%28boolean%29) method. This doesn't need to be explicitly set to true - note that the JavaDoc for the [setOnLongClickListener](https://developer.android.com/reference/android/view/View#setOnLongClickListener%28android.view.View.OnLongClickListener%29) method states that
"If this view is not long clickable, it becomes long clickable."

Unfortunately, you'll need to make a new class for each type of preference. Preferences that I was able to define that extend Preference include:

 * DialogPreference
 * PreferenceGroup
 * SeekBarPreference
 * TwoStatePreference
 * CheckBoxPreference
 * DropDownPreference
 * EditTextPreference
 * ListPreference
 * MultiSelectListPreference
 * PreferenceCategory
 * PreferenceScreen
 * SwitchPreference
 * SwitchPreferenceCompat

If you don't want to make a new class file, you could always create an anonymous class:

```java
Preference pref = new Preference(context) {
   @Override
    public void onBindViewHolder(final PreferenceViewHolder holder) {
        super.onBindViewHolder(holder);

        View itemView = holder.itemView;
    itemView.setOnLongClickListener(l -> doTheThing());
    }
};
```

A couple of sources from Stack Overflow:
* https://stackoverflow.com/questions/8912388/how-to-add-a-long-click-listener-to-a-preference
* https://stackoverflow.com/questions/29115216/how-to-make-a-preference-long-clickable-in-preferencefragment