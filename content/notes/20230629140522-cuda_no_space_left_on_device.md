+++
title = "CUDA: No space left on device"
author = ["Fangyuan"]
date = 2023-06-29
slug = "20230629140522-cuda-no-space-left-on-device"
tags = ["cuda"]
draft = false
+++

When using pytorch in docker with cuda, I always encounter the error `no space left on device`. That means the `shm` is full and we can check it by `df -h | grep shm`.

There's two way to solve this problem:

1.  Reboot the docker container. Make sure stop `xrdp` service in advance.

2.  Increase `shm` size.

**The wired thing is I've already shutdown all training process, but the `shm` size still fully occupied.**
