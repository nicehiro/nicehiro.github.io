+++
title = "Shooting Method"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031113422-shooting-methods-i"
tags = ["rl"]
draft = false
+++

## Description {#description}

前面提到的一阶优化方法被称作 `Shooting method` 。它只对动作进行求导，状态是关于动作的函数。

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/rl-sergey/lec-10-4.png" width="10%" >}}

</div>

上图横轴是时间，纵轴是状态。给定初始位置之后，选择动作，根据状态转移方程得到下一个状态，直到结束。
可以看到，如果开始的动作发生一个细微的变化，也会对最后的结果造成很大的影响。


## Links to this note {#links-to-this-note}

-   [Linear Quadratic Regression]({{< relref "20201031112847-linear_quadratic_regression.md" >}})

    >   一般来说，强化学习很少有问题可以使用导数来求解，因为我们无法知道它的状态转移方程（环境动力学函数），
    > 比如在玩 Atari 游戏的时候，下一状态我们是无法通过公式定义来得到的。
    > 假设我们现在知道状态转移方程，那么要如何通过导数来求得最优解呢？
