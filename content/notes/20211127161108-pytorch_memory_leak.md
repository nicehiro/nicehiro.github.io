+++
title = "PyTorch Memory Leak"
author = ["Fangyuan"]
date = 2021-11-27
slug = "20211127161108-pytorch-memory-leak"
tags = ["pytorch"]
draft = false
+++

-   Use memory profiler tools to check which line of code is leaking memory.
-   Use `.detach()` and `.copy()` every time you want to save a copy of tensor.

And what's so wired is that memory leaking happened every time after
calling the Linear and ReLU modules. This is also addressed here:
[Memory Leak with Linear and ReLU layer](https://discuss.pytorch.org/t/memory-leak-with-linear-and-relu-layer/51999)
