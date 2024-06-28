+++
title = "Bootstrap Ensembles"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031154530-bootstrap-ensembles"
tags = ["rl", "mbrl"]
draft = false
+++

## Description {#description}

基于高斯过程的环境模型能够衡量环境的不确定性，
在少量数据上也可以有很好的拟合效果。缺点是无法有效的对高维环境建模。

基于神经网络的环境模型能够对高维环境很好建模，
但缺点是容易在少量数据中产生过拟合，且一般的 NN 难以对不确定性进行评价。

使用多个概率环境模型的 Ensemble 来作为总体的环境模型。
其中的每个概率模型输出的方差可以用来衡量数据不确定性（aleatoric uncertainty），
多个模型之间的采样方差来衡量模型不确定性（epistemic uncertainty）.

**Bootstrap ensembles** 训练多个模型，那么其结果的期望可以近似看作多个模型的均值。
模型在不同参数 \\(\theta\\) 下的期望为：（ \\(\theta\\) 的概率由 \\(D\\) 确定 ）
\\[
\int p(s\_{t+1}|s\_t,a\_t,\theta)p(\theta|D)d\theta\sim\frac{1}{N}\sum\_{i}p(s\_{t+1}|s\_t,a\_t,\theta\_i)
\\]
现在，目标函数就变成了：
\\[
J\left(\mathbf{a}\_{1}, \ldots, \mathbf{a}\_{H}\right)=\frac{1}{N} \sum\_{i=1}^{N} \sum\_{t=1}^{H} r\left(\mathbf{s}\_{t, i}, \mathbf{a}\_{t}\right), \text { where } \mathbf{s}\_{t+1, i}=f\_{i}\left(\mathbf{s}\_{t, i}, \mathbf{a}\_{t}\right)
\\]
整体算法流程为：

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/rl-sergey/lec-11-8.png" width="100%" >}}

</div>


## Links to this note {#links-to-this-note}

-   [Idea 2. 计算模型本身的不确定性]({{< relref "20201031123333-with_model_uncertainty.md#idea-2-dot-计算模型本身的不确定性" >}})

    > 训练模型时，很容易就会陷入 overfit 的问题中。如下图所示，
