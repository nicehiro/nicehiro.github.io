+++
title = "Collocation Method"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031113554-collocation-method"
tags = ["rl"]
draft = false
+++

## Description {#description}

`Collocation method` 对状态和动作求导，有约束性。
\\[
\min \_{\mathbf{u}\_{1}, \ldots, \mathbf{u}\_{T}, \mathbf{x}\_{1}, \ldots, \mathbf{x}\_{T}} \sum\_{t=1}^{T} c\left(\mathbf{x}\_{t}, \mathbf{u}\_{t}\right) \text { s.t. } \mathbf{x}\_{t}=f\left(\mathbf{x}\_{t-1}, \mathbf{u}\_{t-1}\right)
\\]

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="./img/rl-sergey/lec-10-5.png" width="100%" >}}

</div>


## Links to this note {#links-to-this-note}

-   [Linear Quadratic Regression]({{< relref "20201031112847-linear_quadratic_regression.md" >}})

    >   一般来说，强化学习很少有问题可以使用导数来求解，因为我们无法知道它的状态转移方程（环境动力学函数），
    > 比如在玩 Atari 游戏的时候，下一状态我们是无法通过公式定义来得到的。
    > 假设我们现在知道状态转移方程，那么要如何通过导数来求得最优解呢？
