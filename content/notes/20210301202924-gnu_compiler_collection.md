+++
title = "GNU Compiler Collection"
author = ["Fangyuan"]
date = 2021-03-01
slug = "20210301202924-gnu-compiler-collection"
tags = ["linux"]
draft = false
+++

是 GNU 对不同语言的编译器集合。

`gcc` ：GNU C Compiler
`g++` ：GNU C++ Compiler

二者的主要区别是：

1.  `gcc` 会对 `*.c,*.cpp` 文件分别使用 `C` 和 `C++` 编译器编译。
2.  `g++` 对 `*.c,*.cpp` 只使用 `C++` 编译器编译。
3.  `g++` 会使用 `C++` 标准库。
4.  `gcc` 编译 `C` 文件会有预定义的宏。
