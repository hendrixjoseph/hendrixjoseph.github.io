---
layout: post
title: An Interesting Thing with Groovy For Loops and Threads
tags: [groovy, java, programming]
keywords: [thread, multithreading, for loop]
---

An interesting thing happened the other day when I was spinning off threads in a Groovy for loop.

Now I can't show you *exactly* what I was doing (proprietary code and all that), but I can reproduce the affect for this blog post.

Take this simple Groovy loop, which doesn't use threads:

```groovy
class ForLoopWithMultithreading {
    def doRun() {
        def I = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        for (def i : I) {
            System.out.print(i + "\t")
        }
    }
}

new ForLoopWithMultithreading().doRun()
```

The output is exactly what I'd expect:

    0	1	2	3	4	5	6	7	8	9	

Now let's put the contents of the for loop inside a separate thread:

```groovy
class ForLoopWithMultithreading {
    def doRun() {
        def I = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        for (def i : I) {
            new Thread(new Runnable() {
                public void run() {
                    System.out.print(i + "\t")
                }
            }).start()

        }
    }
}

new ForLoopWithMultithreading().doRun()
// Make sure the main thread remains active while the other threads complete.
Thread.sleep(1000)
```

While I wouldn't expect the numbers to be in order, I'd expect to see each number exactly once. But I don't - instead I get something like:

    3	3	4	5	3	7	7	8	9	9	

Of course, your results might vary.

To rectify this, I put the contents of the for loop into its own method:

```groovy
class ForLoopWithMultithreading {
    def doRun() {
        def I = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        for (def i : I) {
            process(i)
        }
    }

    def process(Integer i) {
        new Thread(new Runnable() {
            public void run() {
                System.out.print(i + "\t")
            }
       }).start()
    }
}

new ForLoopWithMultithreading().doRun()
// Make sure the main thread remains active while the other threads complete.
Thread.sleep(1000)​
```

Now I get each number outputted exactly once, albeit out of order (which is expected):

    0	1	4	3	2	5	6	7	8	9	

For fun, I wanted to reproduce this in Java. Which, because of the nature of Java, was hard to do. *Local variables defined in an enclosing scope must be final or effectively final* and all that.

But I was able to use an "effectively final" variable that could also change - that is, a single-element array:

```java
public class ForLoopWithMultithreading {
    public static void main(String... args) {
        int[] I = new int[1];
        
        for (int i = 0; i < 10; i++) {
            I[0] = i;
            new Thread(() -> System.out.print(I[0] + "\t")).start();
        }
    }
}
```

And here is my output:

    3	5	5	3	7	4	7	9	9	9	

Of course, I'd never expect to see this in production code...