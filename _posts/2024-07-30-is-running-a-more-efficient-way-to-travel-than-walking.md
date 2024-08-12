---
layout: post
title: Is Running a More Efficient Way to Travel Than Walking?
tags: [health, math]
image: /images/calories-burned-per-distance.png
---

Is running a more efficient way to travel than walking? Does running burn less calories per distance traveled than walking? If so, how fast burns the least calories per distance? And if walking is more efficient - what's the most efficient walking speed.

The answer probably depends on the person. Someone who regularly runs, runs more efficiently than someone who does not.

But we can still generalize.

Each walking and running speed has an associated "MET" value. This MET - or [Metabolic equivalent of task
](https://en.wikipedia.org/wiki/Metabolic_equivalent_of_task) - value determines how many calories burned per mass per unit of time.

The [Compendium of Physical Activities](https://pacompendium.com/) records these MET values, and they are recorded in metric - that is 1 MET is 1 kcal/kg/hr.

1 kcal/kg/hr can also be expressed as 1 kcal/kg·hr in a similar way that (metric) acceleration can be expressed as either m/s/s or m/s².

However, we don't want to know which speed is most efficient *per unit of time*. We want to know which speed is most efficient *per unit of distance*. Since we're working in metric, and we already have an hour unit in the MET unit, we'll divide out MET unit by the speed in kilometers per hour, or km/hr:

    kcal    hr   kcal
    ----- · -- = -----
    kg·hr   km   kg·km

The Compendium of Physical Activities has MET values for in tables grouped by activity.

The values in the [MET table for walking](https://pacompendium.com/walking/) that we're concerned about are:

| MET Value | Activity Description                                                            |
| --------: | ------------------------------------------------------------------------------- |
| 3.0       | Walking, 2.5 mph, firm, level surface                                           |
| 3.8       | Walking, 2.8 to 3.4 mph, level, moderate pace, firm surface                     |
| 4.8       | Walking, 3.5 to 3.9 mph, level, brisk, firm surface, walking for exercise       |
| 5.5       | Walking, 4.0 to 4.4 mph (6.4 to 7.0 km/h), level, firm surface, very brisk pace |
| 7.0       | Walking, 4.5 to 4.9 mph, level, firm surface, very, very brisk                  |
| 8.5       | Walking, 5.0 to 5.5 mph (8.8 to 8.9 km/h), level, firm surface                  |

And the values in the [MET table for running](https://pacompendium.com/running/) that we're concerned about are:

| MET Value | Activity Description                  |
| --------: | ------------------------------------- |
| 6.5       | Running, 4 to 4.2 mph (13 min/mile)   |
| 7.8       | Running 4.3 to 4.8 mph                |
| 8.5       | Running, 5.0 to 5.2 mph (12 min/mile) |
| 9.0       | Running, 5.5 -5.8 mph                 |
| 9.3       | Running, 6-6.3 mph (10 min/mile)      |
| 10.5      | Running, 6.7 mph (9 min/mile)         |
| 11.0      | Running, 7 mph (8.5 min/mile)         |
| 11.8      | Running, 7.5 mph (8 min/mile)         |
| 12.0      | Running, 8 mph (7.5 min/mile)         |
| 12.5      | Running, 8.6 mph (7 min/mile)         |
| 13.0      | Running, 9 mph (6.5 min/mile)         |
| 14.8      | Running, 9.3 to 9.6 mph               |
| 14.8      | Running, 10 mph (6 min/mile)          |
| 16.8      | Running, 11 mph (5.5 min/mile)        |
| 18.5      | Running, 12 mph (5.0 min/mile)        |
| 19.8      | Running, 13 mph (4.6 min/mile)        |
| 23.0      | Running, 14 mph (4.3 min/mile)        |

Interestingly enough, the min/mile doesn't match up with the mph for the 13 min/mile to 4 mph row - 13 min/mile is about 4.6 mph, outside the range of 4 to 4.2 mph given.

Some of the other values appear to be rounded. So, for both walking and running, we'll take the speed (the mph) values at the lower end of the range.

To convert mph to km/hr, we only need to multiply mph by 1.609, the number of kilometers in a mile.

| MET (kcal/kg·hr) | activity | speed (mph) | speed (km/hr) | kcal/kg·km |
| ---------------: | :------: | ----------: | ------------: | ---------: |
| 3.0              | walking  | 2.5         | 4.0           | 0.75       |
| 3.8              | walking  | 2.8         | 4.5           | 0.84       |
| 4.8              | walking  | 3.5         | 5.6           | 0.85       |
| 5.5              | walking  | 4.0         | 6.4           | 0.85       |
| 7.0              | walking  | 4.5         | 7.2           | 0.97       |
| 8.5              | walking  | 5.0         | 8.0           | 1.06       |
| 6.5              | running  | 4.0         | 6.4           | 1.01       |
| 7.8              | running  | 4.3         | 6.9           | 1.13       |
| 8.5              | running  | 5.0         | 8.0           | 1.06       |
| 9.0              | running  | 5.5         | 8.8           | 1.02       |
| 9.3              | running  | 6.0         | 9.7           | 0.96       |
| 10.5             | running  | 6.7         | 10.8          | 0.97       |
| 11.0             | running  | 7.0         | 11.3          | 0.98       |
| 11.8             | running  | 7.5         | 12.1          | 0.98       |
| 12.0             | running  | 8.0         | 12.9          | 0.93       |
| 12.5             | running  | 8.6         | 13.8          | 0.90       |
| 13.0             | running  | 9.0         | 14.5          | 0.90       |
| 14.8             | running  | 9.3         | 15.0          | 0.99       |
| 14.8             | running  | 10.0        | 16.1          | 0.92       |
| 16.8             | running  | 11.0        | 17.7          | 0.95       |
| 18.5             | running  | 12.0        | 19.3          | 0.96       |
| 19.8             | running  | 13.0        | 20.9          | 0.95       |
| 23.0             | running  | 14.0        | 22.5          | 1.02       |

...that's a lot of data. Let's put it into a graph:

![graph of calories burned per distance](/images/calories-burned-per-distance.png)

The walking part of the chart isn't too interesting - as you go faster, you burn more calories per distance.

Running, however, is a bit more interesting. Running becomes more efficient until you hit 14.5 km/hr - about 9 mph or a pace of 6.6 minutes per mile. After that, it starts to get less efficient.

Conclusion? Slow walks are the most efficient. But if you have to run, about a 7 minute mile is the most efficient.