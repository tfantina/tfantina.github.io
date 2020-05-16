---
layout: post
title: "Today I Learned: Recursively Reducing A List of Lists"
date: 2020-01-14 05:10:52 -0400
categories: til elixir development
lead_image: https://images.unsplash.com/photo-1507097489474-c9212a8f8597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80
---

I’ve never been too confident with the `Enum.reduce/3` function or recursion for that matter in Elixir.

Today I was faced with a list of lists that I had to reduce into just one number (these lists were of various sizes
and nested to differing degrees). We went about it slightly differently but I reworked the code to reduce an ugly list of numbers.

```Elixir
list = [1, [2], [[3]], 4, [5]]

defmodule Flat do
  def reduce_list_of_lists(list) do
    Enum.reduce(list, [], fn item, acc -> flattr(item, acc) end)
  end

  def flattr(list, acc) when is_list(list) do
    Enum.reduce(list, acc, fn list, accumulation -> flattr(list, accumulation) end)
  end

  def flattr(itm, acc) do
    case acc do
      [] -> itm + 0
      val -> itm + val
    end
  end
end
```

Lets break this down:
`reduce_list_of_lists/1` takes the master list and gives it to a `reduce/3` function, the `reduce/3` function takes the element to be enumerated over, (in this case `list`), is passed an accumulator\* (the empty list `[]`) and then a function. The function in this case takes an item (whatever item we are on at any given point in the enumeration) and an accumulator that will hold everything.

Now we pass those argue its to the `flattr/2` function.

The first flatter function checks that the item it is passed is a list and if it is it will pass it to yet another reduce function.

The second flatter function is not passed a list but an item and the accumulator. In the case above, when the first item is passed to `flatter/2` the accumulator will be `[]` we can’t add an empty list to a number so we just add 0. For all future functions we will add the item and the accumulator value.

This is recursive because the reduce function will continue to call `flattr/2` until the end of the list is reached.

\* It's important to note that the accumulator is not really an accumulator due to the immutable nature of objects in Elixir, it's simply a starting point that will effectively be built up with each recursion because we are passing the current iteration pass it to the `flattr/2` function.

---

Photo by: [Dan Freeman](https://unsplash.com/@danfreemanphoto)
