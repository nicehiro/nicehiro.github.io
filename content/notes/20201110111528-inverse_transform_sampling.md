+++
title = "Inverse transform sampling"
author = ["Fangyuan"]
date = 2020-11-10
slug = "20201110111528-inverse-transform-sampling"
tags = ["probability"]
draft = false
+++

## Description {#description}

已知 \\(U\sim Unif[0,1]\\) ，并且有随机变量 \\(X\\) 的累积分布函数 \\(CDF F\_{X}(x)\\) ，如何生成一个随机数 \\(X\\) ？

如果有一个强变换 \\(T:[0,1]\\) ，使得 \\(T(U)=X\\) ，则
\\[
F\_{X}(x)=Pr(X\leq x)=Pr(T(U)\leq x)=Pr(U\leq T^{-1}(x))=T^{-1}(x),x\in\mathbb{R}
\\]
上诉化简用到了 \\(Pr(U\leq y)=y\\) 这个知识。

因此，我们知道 \\(F\_{X}\\) 和 \\(T\\) 互为反函数，即 \\(T(u)=F\_{X}^{-1}(u),u\in[0,1]\\)
又有 \\(T(U)=X\\) ，所以 \\(X=F\_{X}^{-1}(U)\\) 。

也就是说，如果我们有了 \\([0，1]\\) 的随机分布，就对想要的函数进行采样。


## Links to this note {#links-to-this-note}

-   [Pseudo Random Number Sampling]({{< relref "20201115114323-pseudo_random_number_sampling.md" >}})

    > 伪随机数采样。
-   [Truncated Normal Distribution]({{< relref "20201110111350-truncated_normal_distribution.md" >}})

    > 需要先去了解[正态分布]({{< relref "20201114212110-normal_distribution.md" >}})的相关知识。
