+++
title = "Stable Baselines3 RL 源码阅读"
author = ["Fangyuan"]
date = 2021-07-30
slug = "20210730193019-stable-baselines3-rl"
draft = false
+++

## 新语法 {#新语法}


### `typing` {#typing}

-   可以为类型设置 `type aliases` ，例如 `Vector = list[int]` 。
-   `Union[A, B]` 表示要么是类型 `A` ，要么是类型 `B` 。
-   `Optional[A]` 等同于 `Union[A, None]` 。


### `f` string {#f-string}

用 `f` 开头的字符串，类似于 `string.format()` 的方法，可以用来格式化字符串，用起来和之前没有什么太大的变化。


## 思想 {#思想}


### `return self` 的目的是什么？ {#return-self-的目的是什么}

[Purpose of return self python](https://stackoverflow.com/questions/43380042/purpose-of-return-self-python/43380360)

为了流式编程。Python 官方是不推荐这种方法的，只有在 `iterator` 中用的比较常见。
