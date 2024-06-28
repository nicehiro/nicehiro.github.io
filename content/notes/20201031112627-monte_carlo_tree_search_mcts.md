+++
title = "Monte Carlo Tree Search(MCTS)"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031112627-monte-carlo-tree-search-mcts"
tags = ["rl", "mbrl"]
draft = false
+++

## Description {#description}

MCTS 适用于离散动作空间和连续动作空间，这里以离散动作空间举例。

初始状态为 \\(s\_1\\) ，如果遍历了所有从 \\(s\_1\\) 出发的路径，那么自然可以选出哪条路径是最佳路径。
这样做的缺陷是遍历空间太大，而且浪费时间。
我们需要选择那些有较高奖励（这个目的很明显）的状态，同时也会选经过很少次的状态（经过很少，说明对这个状态探索很少）。具体算法如下：
MCTS:

1.  使用 `TreePolicy(s_1)` 得到一个叶子节点（新状态）\\(s\_l\\)
2.  使用 `DefaultPolicy(s_l)` 计算叶子节点的得分（Q 值）
3.  更新从 \\(s\_1\\) 到 \\(s\_l\\) 之间的所有 Q 值，从 `s_1` 选取最佳动作

TreePolicy(\\(s\_t\\)):
如果 \\(s\_t\\) 没有完全被探索，那么就选取新动作 \\(a\_t\\) ；否则选取具有最优 Q 值的动作。

\\[
\operatorname{Q}\left(s\_{t}\right)=\frac{Q\left(s\_{t}\right)}{N\left(s\_{t}\right)}+2 C \sqrt{\frac{2 \ln N\left(s\_{t-1}\right)}{N\left(s\_{t}\right)}}
\\]


## Links to this note {#links-to-this-note}

-   [Model Based RL]({{< relref "20201031101403-model_based_rl.md" >}})

    >   无模型的强化学习不需要知道环境动力学方程，只要不断的进行试错和更新策略的过程就可以很好的进行训练了。
    > 但基于模型的强化学习需要用到环境动力学方程，
    > 在此基础上，对未来进行规划，从而达到加速训练和提高训练结果的效果。
