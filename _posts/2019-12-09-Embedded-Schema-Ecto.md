---
layout: post
title: "Today I Learned: Ecto Embedded Schemas"
date: 2019-12-09 05:10:52 -0400
categories: til ecto elixir development
lead_image: https://images.unsplash.com/photo-1583606638538-e04ea94bebf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1113&q=80
---

Central to the Elixir world is Ecto, self described as "a toolkit for database mapping", similar to ActiveRecord in the Ruby world but Ecto is not an ORM per se.

Ecto comes with a component called `Schema` which is how you structure a database, it's here that you write validations and changesets for your data. Again you can think of this sort of like the Model in Ruby on Rails. Today I learned that Ecto also has an `embedded_schema` function which allows you to create Ecto changesets and validations without a database table. This is handy for making sure that data is valid even if it is not going to be persisted into a database. For example if you were planning to submit form data in an API call you would want to make sure the data was valid even if you weren't going to save it.

I've used this in one of my current projects to validate data on a daily email report before sending it. For more info on Ecto schemas [check out the Ecto docs](https://hexdocs.pm/ecto/Ecto.Schema.html).

---

Photo by: [Jan Huber](https://unsplash.com/@jan_huber)
