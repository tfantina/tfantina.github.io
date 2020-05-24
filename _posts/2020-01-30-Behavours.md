---
layout: post
title: "Today I Learned: Behaviours in Elixir"
date: 2020-01-30 05:10:52 -0400
categories: til elixir development
lead_image: https://www.travisfantina.com/images/blog/ducklings.jpeg
placement: botttom
---

Elixir is Dynamically typed, but you can add a bit of typing with typespecs in functions
to specify a return type, (from the [Elixir getting started docs](https://elixir-lang.org/getting-started/typespecs-and-behaviours.html))

```elixir
@spec round(number()) :: integer()
```

Here we know that the round function takes one argument and returns an integer.

Keep that syntax in mind when I move on to behaviours (note the non US spelling):

Behaviours in Elixir - are basically like inherited functions definitions/rules that you can pass to other modules.

For example:

```elixir
@callback format_name(Employee.t() :: String.t()
```

Here in our behaviour we are creating a format_name which excepts an employee object and will return a string.

```elixir
@behaviour MyBehaviour

@impl true
def format_name(%{first_name: first_name, last_name: last_name}) do
	“#{first_name} #{last_name}”
end
```

This implements our behaviour - `@impl true` is a flag for the compiler to say “this should be inheriting
from the behaviour”. In implementations we have to include any and all functions defined in the behaviour itself.
Then the function is passed whatever the behaviour expects and will in turn provide the expected result.
For format name an Employee map will return a string.

---

Photo: [Travis Fantina](https://www.travisfantina.com)
