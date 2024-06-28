+++
title = "Binomial Distribution"
author = ["Fangyuan"]
date = 2020-11-03
slug = "20201103083202-binomial-distribution"
tags = ["probability"]
draft = false
+++

## Description {#description}

设某事件 \\(A\\) 在一次试验中发生的概率为 \\(p\\) 。
现把这个试验独立的重复 \\(n\\) 次，以 \\(X\\) 记 \\(A\\) 在这 \\(n\\) 次试验中发生的次数。
\\(X\\) 的取值可以是 \\(0,1,\dots,n\\) 。\\(X\\) 的概率函数是：
\\[
p\_i=b(i;n,p)=\left(\begin{array}{c} n \\\ i\end{array}\right)
p^i(1-p)^{n-1}
\\]
其遵循的概率分布称为二项分布，记为 \\(X\sim B(n,p)\\) 。


## Links to this note {#links-to-this-note}

-   [离散型随机变量]({{< relref "20201103083043-离散型随机变量.md" >}})

    >   设 \\(X\\) 为离散型随机变量，其全部可能值为 \\({a\_1,a\_2,\dots}\\) ，则
    > \\[
    > p\_i=P(X=a\_i)
    > \\]
    > 称为 \\(X\\) 的概率函数。
