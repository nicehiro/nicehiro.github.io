+++
title = "Weight Initialization"
author = ["Fangyuan"]
date = 2021-09-23
slug = "20210923162355-weight-initialization"
tags = ["ml"]
draft = false
+++

权重初始化的目的是防止在训练过程中，神经网络经过激活函数的输出爆炸或者消失。
当上诉二者任一发生时，损失函数的梯度要么太大，要么太小，以至于反向传播不能很好的进行，
从而导致神经网络无法收敛。

好的权重分布应该是：均值在 0 附近，方差在 0-1 之间。

若 \\(a \sim \mathcal{N}(0,1), b \sim \mathcal{N}(0,1)\\), 则 \\(s=a\*b \sim \mathcal{N}(0,1)\\).
若输出有 512 维，那么该输出 \\(\sim \mathcal{N}(0, \sqrt{512})\\) 。
可见，神经网络输出的分布与输出的维度有关。

因此，我们可以设计神经网络参数 \\(\theta \sim \mathcal{N}(0, \sqrt{512})\\) ，
使得该层输出满足 \\(\sim \mathcal{N}(0, 1)\\) 。

当加入激活函数时，简单的除以 \\(\sqrt{layer size}\\) 已经无法使得输出的方差在满意的范围内。

Xavier initialization 方法对 tanh 效果不错。

Kaiming initialization 方法对 relu 效果不错。


## Reference {#reference}

[Weight initialization in neural networks](https://towardsdatascience.com/weight-initialization-in-neural-networks-a-journey-from-the-basics-to-kaiming-954fb9b47c79)
