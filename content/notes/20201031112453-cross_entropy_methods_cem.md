+++
title = "Cross Entropy Methods(CEM)"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031112453-cross-entropy-methods-cem"
tags = ["rl"]
draft = false
+++

## Description {#description}

交叉熵方法一般适用于状态空间连续的环境，分布函数一般选择高斯分布。

1.  使用高斯分布 \\(p(A)\\) 生成动作序列 \\(A\_1,\dots,A\_N\\)
2.  计算 \\(J(A\_1),\dots,J(A\_N)\\)
3.  选取上诉计算结果中表现最好（\\(J(A\_i)\\) 值最高）的几组动作序列 \\(A\_{i\_1},\dots,A\_{i\_M}\\) ，其中 \\(M<N\\)
4.  修改高斯分布参数，使得此高斯分布更加贴合 \\(A\_{i\_1},\dots,A\_{i\_M}\\) ，返回 1 步继续执行


## Links to this note {#links-to-this-note}

-   [Model Based RL]({{< relref "20201031101403-model_based_rl.md" >}})

    >   无模型的强化学习不需要知道环境动力学方程，只要不断的进行试错和更新策略的过程就可以很好的进行训练了。
    > 但基于模型的强化学习需要用到环境动力学方程，
    > 在此基础上，对未来进行规划，从而达到加速训练和提高训练结果的效果。
