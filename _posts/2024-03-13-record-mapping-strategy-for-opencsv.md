---
layout: post
title: Record Mapping Strategy for OpenCSV
tags: [java, programming]
---

I've deployed yet another artifact to Maven Central - this time a record mapping strategy that allows you to read and write [Java Record Classes](https://docs.oracle.com/en/java/javase/17/language/records.html) with [OpenCSV](https://opencsv.sourceforge.net/).

As always, I have [the code on GitHub](https://github.com/hendrixjoseph/opencsv-record-mapping).

And here's the dependency information for a Maven POM file:

```xml
<dependency>
    <groupId>com.joehxblog</groupId>
    <artifactId>opencsv-record-mapping</artifactId>
    <version>5.9</version>
</dependency>
```

And here's a repeat of the README file:

> ## Record Mapping Strategy for OpenCSV
> 
> A record mapping strategy that allows OpenCSV to read and write Java Records.
> 
> #### How to use
> 
> To read from a CSV:
> 
> ```java
> var fileReader = new FileReader("myRecord.csv");
> 
> var csvReader = new CSVReader(fileReader);
> 
> var csvToBeanBuilder = new CsvToBeanBuilder<MyRecord>(csvReader)
>         .withType(TestRecord.class)
>         .withMappingStrategy(new RecordMappingStrategy<>(MyRecord.class));
> 
> var actualList = csvToBeanBuilder.build().parse();
> 
> csvReader.close();
> ```
> 
> To write to a CSV:
> 
> ```java
> var fileWriter = new FileWriter("myRecord.csv");
> 
> var csvWriter = new StatefulBeanToCsvBuilder<MyRecord>(fileWriter)
>     .withSeparator(CSVWriter.DEFAULT_SEPARATOR)
>     .withMappingStrategy(new RecordMappingStrategy<>(MyRecord.class))
>     .build();
> 
> csvWriter.write(list);
> 
> // If using a FileWriter, don't forget to close it otherwise Java might
> // not finish writing to the file.
> fileWriter.close();
> ```
> 
> #### Why use RecordMappingStrategy to write?
> 
> Why not just use `HeaderColumnNameMappingStrategy`, which `RecordMappingStrategy` extends?
> 
> `HeaderColumnNameMappingStrategy` makes the column headers all-caps, which is okay until you
> try to read the CSV file.
