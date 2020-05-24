---
layout: post
title: "Today I Learned: A Dangerous Elixir Gotcha"
date: 2020-03-10 05:10:52 -0400
categories: til elixir development
lead_image: https://www.travisfantina.com/images/blog/ice-cream.jpg
placement: bottom
---

Elixir has a datatype called a Charlist. An important thing to remember about
Elixir is that a list of integers below 126 is automatically interpreted as
a Charlist. A Chartist is a list of numbers that correspond to UTF-8 code points.
In UTF encoding every character is assigned a numerical value.

You may have a function that returns a list of integers:
`[65, 66, 67, 68]` but this would be interpreted as:
`’ABCD'`.

This will occur for all UTF-8 code points 32-126. If the list you returns
contains a number smaller or larger than 32 or 126 the list will be interpreted
as a regular List. `[65, 66, 67, 130]` returns `[65, 66, 67, 127]`.

Just because Elixir is interpreting this as a Charlist doesn’t mean your data
has changed, after all a Charlist is just a List of integers anyway.
So while `[65, 66, 67, 68]` returns `'ABCD'` you could still pattern match on
this list and get a a correct value:

```elixir
$> [_, b | _t] [65, 66, 67, 68]
'ABCD'
$> b
66
```
