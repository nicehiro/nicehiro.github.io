+++
title = "Deterministic Case"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031110620-deterministic-case"
tags = ["rl", "mbrl"]
draft = false
+++

## Description {#description}

当状态和动作确定时，下一状态也是确定的。即下一状态是由当前状态和动作相关的函数所确定的。
在已知状态转移方程的情况下，Agent 可以依据模型生成一系列的动作。

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/rl-sergey/lec-10-1.png" width="100%" >}}

</div>

\\[
\mathbf{a}\_{1}, \ldots, \mathbf{a}\_{T}=\arg \max \_{\mathbf{a}\_{1}, \ldots, \mathbf{a}\_{T}} \sum\_{t=1}^{T} r\left(\mathbf{s}\_{t}, \mathbf{a}\_{t}\right) \text { s.t. } \mathbf{a}\_{t+1}=f\left(\mathbf{s}\_{t}, \mathbf{a}\_{t}\right)
\\]


## Links to this note {#links-to-this-note}

-   [Model Based RL]({{< relref "20201031101403-model_based_rl.md" >}})

    >   无模型的强化学习不需要知道环境动力学方程，只要不断的进行试错和更新策略的过程就可以很好的进行训练了。
    > 但基于模型的强化学习需要用到环境动力学方程，
    > 在此基础上，对未来进行规划，从而达到加速训练和提高训练结果的效果。
