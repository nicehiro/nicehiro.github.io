+++
title = "Model Free with Model"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031124856-model-free-with-model"
tags = ["rl", "mbrl"]
draft = false
+++

## Description {#description}

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/rl-sergey/lec-12-3.png" width="100%" >}}

</div>

可以看出，免模型的策略梯度方法中，梯度不是相乘而是相加的，因此，如果给定足够多的样本数据，策略梯度是可以收敛的。
但是，直接对模型进行梯度下降的时候，梯度是相乘的，因此很容易发生梯度爆炸。

提出一种 Dyna 算法，它的本质是在线 Q-Learning 算法的一种改进。

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/rl-sergey/lec-12-4.png" width="100%" >}}

</div>


## Links to this note {#links-to-this-note}

-   [Model Based RL]({{< relref "20201031101403-model_based_rl.md" >}})

    >   无模型的强化学习不需要知道环境动力学方程，只要不断的进行试错和更新策略的过程就可以很好的进行训练了。
    > 但基于模型的强化学习需要用到环境动力学方程，
    > 在此基础上，对未来进行规划，从而达到加速训练和提高训练结果的效果。
