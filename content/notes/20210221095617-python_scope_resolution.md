+++
title = "Python Scope Resolution"
author = ["Fangyuan"]
date = 2021-02-21
slug = "20210221095617-python-scope-resolution"
tags = ["py"]
draft = false
+++

作用域是 Python 程序可以直接访问[命名空间]({{< relref "20210221095523-python_namespaces.md" >}})的正文区域。

在一个 Python 程序中，直接访问一个变量，会从内到外依次访问所有的作用域，
直到找到那个变量，否则就会报未定义的错误。


## Links to this note {#links-to-this-note}

-   [Python Package Module]({{< relref "20210503102310-python_package_module.md" >}})

    >   一个模块是一个包含 Python 定义和函数的文件，其模块名就是文件名。
    > 模块的最小组织单位是文件。
    > 可以通过模块的 `__name__` 全局变量查看模块名。
    > 模块可以直接通过 `python module.py <arguments>` 执行，
    > 会依次执行模块的每一行代码，此时模块的 `__name__` 属性为 `__main__` 。
    > 因此我们可以在模块的最后用
