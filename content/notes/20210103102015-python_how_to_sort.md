+++
title = "Python How To Sort"
author = ["Fangyuan"]
date = 2021-01-03
slug = "20210103102015-python-how-to-sort"
tags = ["py"]
draft = false
+++

## Python 排序机制 {#python-排序机制}


### `cmp` {#cmp}

Python 2.x 的版本中，所有的排序函数（ `sorted()` ）都支持 `cmp` 参数来支持用户自定义的排序方法。
`cmp` 参数是一个输入为两个值的函数，输出为二者的比较关系，这也是目前绝大多数语言中的实现。
但是在 Python 3.0 之后，彻底的移除了这个参数（作为简化和统一语言更大努力的一部分，
消除丰富比较（rich comparison）和 `__cmp__()` 之间的冲突）。

如果想要继续使用这个方法，可以在你定义的 `cmp` 方法外包上 `functools.cmp_to_key()` 方法，
然后作为 `sorted()` 的 `key` 参数传进去。

但这种方法并不建议，只是为了让来不及做出改变的人继续适应的妥协方法。


### `key` {#key}

`key` 参数是一个输入为一个值的函数，输出为用来比较的值。其输出的值自身是 **可比较** 的。
这种方法之所以要快捷，是因为在比较过程中， `key` 函数只需要被调用一次。

它还可以和 `operator` 中的方法结合起来，让代码看起来更加简洁，执行起来更高效。


## Ref {#ref}

-   <https://docs.python.org/3/howto/sorting.html>
-   <https://stackoverflow.com/questions/20202418/why-is-the-cmp-parameter-removed-from-sort-sorted-in-python3-0>
-   <https://www.zhihu.com/question/30389643>
