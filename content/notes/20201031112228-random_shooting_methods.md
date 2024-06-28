+++
title = "Random Shooting Methods"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031112228-random-shooting-methods"
tags = ["rl", "mbrl"]
draft = false
+++

## Description {#description}

1.  随便找一个分布函数（distribution），使用此分布函数选择不同状态的动作序列 \\(A\_1,\dots,A\_N\\)
2.  根据上诉公式选取使得 \\(J(A\_i)\\) 最大的动作序列 \\(A\_i\\)


## Links to this note {#links-to-this-note}

-   [Model Based RL]({{< relref "20201031101403-model_based_rl.md" >}})

    >   无模型的强化学习不需要知道环境动力学方程，只要不断的进行试错和更新策略的过程就可以很好的进行训练了。
    > 但基于模型的强化学习需要用到环境动力学方程，
    > 在此基础上，对未来进行规划，从而达到加速训练和提高训练结果的效果。
