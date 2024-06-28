+++
title = "Python Package Module"
author = ["Fangyuan"]
date = 2021-05-03
slug = "20210503102310-python-package-module"
tags = ["py"]
draft = false
+++

## 模块 Modules {#模块-modules}

一个模块是一个包含 Python 定义和函数的文件，其模块名就是文件名。
模块的最小组织单位是文件。
可以通过模块的 `__name__` 全局变量查看模块名。
模块可以直接通过 `python module.py <arguments>` 执行，
会依次执行模块的每一行代码，此时模块的 `__name__` 属性为 `__main__` 。
因此我们可以在模块的最后用

```python
if __name__ == "__main__":
    pass
```

来执行模块。


## 包 Packages {#包-packages}

为了协助组织模块并土工名称层次解构，Python 引入了包的概念。
为了方便理解，可以将包看成是文件系统的目录，模块看成是目录中的文件。

> **需要注意的是：** 所有的包都是模块，但并非所有的模块都是包。即，包是特殊的模块。
> 任何具有 `__path__` 属性的模块都会被当作包。

Python 定义了两种类型的包，常规包和命名空间包。
常规包是传统的包类型，通常以一个包含 `__init__.py` 文件的目录形式存在。
当一个常规包被导入时，这个 `__init__.py` 文件会被隐式的执行。


## 模块导入机制 {#模块导入机制}

一个模块内的 Python 代码通过 `import` 操作就可以访问另一个模块内的代码。
`import` 是最常见的导入机制， `importlib.import_module()` 以及 `__import__()` 也可以进行导包。
`import` 语句结合了两个操作，它先搜索指定名称的模块，然后将搜索结果绑定到当前作用域中名称。

```python
import res
from ttt import res
import ttt as res
```

上诉三种导包都是将搜索到的包绑定到当前[作用域]({{< relref "20210221095617-python_scope_resolution.md" >}})的 `res` 变量上。

当 `import` 语句被执行时，会调用内置函数 `__import__()` 函数。
其他导包机制可以使用其自定义的方法实现导包。


### <span class="org-todo todo TODO">TODO</span> 搜索路径（QUESTIONS） {#搜索路径-questions}

当我们要导入某个模块时，模块的搜索路径为：

1.  Python 内置（built-in）模块。
    内置模块主要是用 `C` 写的（ `os.py` 也是标准库），提供了对系统功能的访问。
    内置模块虽然不是标准库，但可以划分到标准库的分类中。
2.  `sys.path`
    -   执行文件的当前目录
    -   `PYTHONPATH`
    -   依赖包 `site-packages`

因此，如果本地的模块名和 Python 标准库同名，则会覆盖。

判断标准库是否是内置模块的方法：

1.  标准库可以被覆盖，内置模块不可以。
2.  `sys.built_in_modules`

> 其实这仍然是个不清不楚的问题，详情可以去看 [stackoverflow](https://stackoverflow.com/questions/57187281/difference-between-a-built-in-standard-and-frozen-module) 。
>
> 而且这里 [Modules](https://docs.python.org/3/tutorial/modules.html?highlight=module%20s) 和 [Importing](https://docs.python.org/zh-cn/3/reference/import.html) 两个地方的描述并不相同，
> 但我感觉是在描述同一个问题，只能等之后看源码理解了。


### 相对导入 {#相对导入}

导入的起始模块未必是从包路径开始，使用 `.` 或者 `..` 的方式是显示相对导入，否则是隐式的。
Python3 针对隐式相对导入会直接抛错。


### 绝对导入 {#绝对导入}

从包的根路径开始导入。


## 开发 Lib 构建 {#开发-lib-构建}

在开发的时候，可以通过执行 `python setup.py develop` 安装当前开发的包，
这个命令会在当前环境的 `site-packages` 目录下创建 `.egg-link` 文件，指向当前开发的包，
因此等价与将包安装到了当前环境，就可以直接使用脚本方式运行了。


## Ref {#ref}

-   [Modules](https://docs.python.org/3/tutorial/modules.html)
-   [Importing](https://docs.python.org/zh-cn/3/reference/import.html)
-   [Python 模块导入与包构建](https://www.jianshu.com/p/6bc26b3ba6e5)
-   [Python 内置模块和标准库](https://www.cnblogs.com/pluse/p/8667864.html)
