+++
title = "Backpropagate Gradient"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031124503-backpropagate-gradient"
tags = ["rl"]
draft = false
+++

## Description {#description}

之前学习了如何训练好的环境动力学模型，以及基于模型的强化学习的基本训练方法，
这节主要讲如何使用模型来训练策略。
当然可以用我们最熟悉的梯度下降法。

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/rl-sergey/lec-12-1.png" width="100%" >}}

</div>

这种方法有什么缺点呢？

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/rl-sergey/lec-12-2.png" width="100%" >}}

</div>

上图是基于模型的方法的反向传播示意图。其中，由于模型是训练到的函数，所以模型函数也会参与到梯度的传播过程中，
就会导致一系列的梯度相乘叠加。
由于梯度在传播过程中叠加性，越靠 Trajectory 结尾，其梯度越小，越靠 Trajectory 开头，梯度越大。
所以很容易发生梯度爆炸的问题。其次就是之前提到的全局策略的缺点，牵一发而动全身，误差会不断累积增大。


## Links to this note {#links-to-this-note}

-   [Model Based RL]({{< relref "20201031101403-model_based_rl.md" >}})

    >   无模型的强化学习不需要知道环境动力学方程，只要不断的进行试错和更新策略的过程就可以很好的进行训练了。
    > 但基于模型的强化学习需要用到环境动力学方程，
    > 在此基础上，对未来进行规划，从而达到加速训练和提高训练结果的效果。
