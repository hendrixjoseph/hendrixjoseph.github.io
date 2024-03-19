---
layout: post
title: An Interesting Thing with TypeScript Partial
tags: [javascript, typescript]
---

I was assigning an object of one type to another object of another type the other day, and ran into an interesting thing since both types were partials.

[Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype), for those unfamiliar with TypeScript, is a utility type that makes all the fields optional. So if you have a type like:

```typescript
type A = {a: string, b: string, c: string};
```

then the following assignments are valid:

```
const a1: Partial<A> = {};
const a2: Partial<A> = {a: ''};
const a3: Partial<A> = {b: ''};
const a4: Partial<A> = {a: '', b: ''};
const a5: Partial<A> = {a: '', b: '', c: ''};
```

(note that the above is not exhaustive!)

Back to my issue with assigning different partials to one another.

I wanted to make sure the object I was assigning from didn't have any extra properties. So say I have a type like:

```typescript
type B = {c: string, d: string, e: string};
```

It turns out, the following assignments are valid:


```typescript
const a: Partial<A> = {};
const b: Partial<B> = a;
```

I guess it makes sense. So long as the partial types have overlap, they can be assigned to one another.

Thankfully, though, if there's no overlap, the assignment gets rejected.

So if I have another type like:

```typescript
type C = {f: string, g: string, h: string};
```

then if I try to assign something like:

```typescript
const c: Partial<C> = a;
```

I get an error stating `"Type 'Partial<A>' has no properties in common with type 'Partial<C>'. ts(2559)"`.
