---
layout: post
title: OpenCsv - Register Custom Converter without Annotations
tags: [java, programming]
---

The other day I was using OpenCsv and needed to register a customer converter to convert a string to a simple object. For whatever reason, using OpenCsv's annotations wasn't an option.

After a bit of googlin' - which led me to [an unhelpful post on Stackoverflow](https://stackoverflow.com/questions/51035923/opencsv-register-custom-converter) and another [post on Sourceforge that implied it wasn't possible](https://sourceforge.net/p/opencsv/feature-requests/125/) - I decided to crack open to source code to see if there indeed was a way.

And there is.

OpenCsv has a class it uses to convert most everything called [ConverterPrimitiveTypes](https://opencsv.sourceforge.net/apidocs/com/opencsv/bean/ConverterPrimitiveTypes.html). In that class it uses Apache Common's [ConvertUtilsBean](https://commons.apache.org/proper/commons-beanutils/apidocs/org/apache/commons/beanutils/ConvertUtilsBean.html) class to read and write most everything.

The constructor for ConverterPrimitiveTypes looks like the following:


```java
public ConverterPrimitiveTypes(Class<?> type, String locale, String writeLocale, Locale errorLocale) {
    super(type, locale, writeLocale, errorLocale);
    if(this.locale == null) {
        readConverter = BeanUtilsBean.getInstance().getConvertUtils();
        readConverter.register(true, false, 0);
        readLocaleConverter = null;
    }
    else {
        readLocaleConverter = new LocaleConvertUtilsBean();
        readLocaleConverter.setDefaultLocale(this.locale);
        readConverter = null;
    }
    if(this.writeLocale == null) {
        writeConverter = BeanUtilsBean.getInstance().getConvertUtils();
        writeConverter.register(true, false, 0);
        writeLocaleConverter = null;
    }
    else {
        writeLocaleConverter = new LocaleConvertUtilsBean();
        writeLocaleConverter.setDefaultLocale(this.writeLocale);
        writeConverter = null;
    }
}
```

To register a new converter, implement the [org.apache.commons.beanutils.Converter](https://commons.apache.org/proper/commons-beanutils/apidocs/org/apache/commons/beanutils/Converter.html) interface (note that this is different than OpenCsv's [CsvConverter](https://opencsv.sourceforge.net/apidocs/com/opencsv/bean/CsvConverter.html)) and register it using [BeanUtilsBean](https://commons.apache.org/proper/commons-beanutils/apidocs/org/apache/commons/beanutils/BeanUtilsBean.html) like so:

```java
// Assume we have a POJO called MyObject and a converter called MyObjectConverter
var myObjectConverter = new MyObjectConverter();

var beanUtils = BeanUtilsBean.getInstance().getConvertUtils();
beanUtils.register(myObjectConverter, MyObject.class);
```

Then the next time you try to read your beans using OpenCsv like:

```java
var list = new CsvToBeanBuilder<E>(reader)
    .withType(MyObject.class)
    .build()
    .parse();
```

It should properly parse using you custom converter.