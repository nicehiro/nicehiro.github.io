+++
title = "Poisson Distribution"
author = ["Fangyuan"]
date = 2020-11-03
slug = "20201103083300-poisson-distribution"
tags = ["probability"]
draft = false
+++

## Description {#description}

若随机变量 \\(X\\) 的可能取值为 \\(0,1,2,\dots\\) ，其概率分布为：
\\[
P(X=i)=e^{-\lambda}\lambda^{i}/i!
\\]
称 \\(X\\) 服从泊松分布，记为 \\(X\sim P(\lambda)\\) 。

对于二项分布，当 \\(n\\) 很大， \\(p\\) 很小时， \\(X\\) 的分布接近于泊松分布 \\(P(\lambda)\\) 。


## Links to this note {#links-to-this-note}

-   [离散型随机变量]({{< relref "20201103083043-离散型随机变量.md" >}})

    >   设 \\(X\\) 为离散型随机变量，其全部可能值为 \\({a\_1,a\_2,\dots}\\) ，则
    > \\[
    > p\_i=P(X=a\_i)
    > \\]
    > 称为 \\(X\\) 的概率函数。
