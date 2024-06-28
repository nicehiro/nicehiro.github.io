+++
title = "Normal distribution"
author = ["Fangyuan"]
date = 2020-11-14
slug = "20201114212110-normal-distribution"
tags = ["probability"]
draft = false
+++

## Description {#description}

如果一个连续型变量具有概率密度函数：
\\[
f(x)=(\sqrt{2\pi}\sigma)^{-1}e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}}
\\]
其中 \\(-\infty < x < \infty\\) ，则称 \\(X\\) 为正态随机变量，记为 \\(X\sim\mathcal{N}(\mu,\sigma^{2})\\) 。

需要证明 \\(f(x)\\) 的确可以作为一个概率密度，需要证明 \\(f(x)>0\\) 并且 \\(\int\_{-\infty}^{\infty}f(x)dx=1\\) 。
前者显然，为证后者，做变量代换 \\(t=(x-\mu)/\sigma\\) ，转化为证明：
\\[
\mathcal{I}=\int\_{-\infty}^{\infty}e^{-t^{2}/2}dt=\sqrt{2\pi}
\\]
证明上式需要使用高数中非常常见的一个技巧：
\\[
\mathcal{I}^2=\int\_{-\infty}^{\infty}e^{-t^2/2}dt\int\_{-\infty}^{\infty}e^{-u^2/2}du=\int\_{-\infty}^{\infty}\int\_{-\infty}^{\infty}e^{-(t^2+u^2)/2}dtdu
\\]
转化成极座标 \\(t=r\cos{\theta},u=r\sin{\theta}\\) ：
\\[
\mathcal{I}^{2}=\int\_{0}^{2\pi}d\theta\int\_{0}^{\infty}e^{-r^2/2}rdr=2\pi
\\]

当 \\(\mu=0,\sigma^2=1\\) 时，概率密度变成：
\\[
f(x)=e^{-x^2/2}/\sqrt{2\pi}
\\]
记作 \\(\mathcal{N}(0,1)\\) ，称为标准正态分布。
其密度函数和分布函数分别记为 \\(\varphi(x)\\) 和 \\(\Phi(x)\\) ，并有很详细的表可以查询。

若 \\(X\sim\mathcal{N}(\mu,\sigma^2)\\) ，则 \\(Y=(X-\mu)/\sigma\sim\mathcal{N}(0,1)\\) 。


## Links to this note {#links-to-this-note}

-   [Truncated Normal Distribution]({{< relref "20201110111350-truncated_normal_distribution.md" >}})

    > 需要先去了解[正态分布]({{< relref "20201114212110-normal_distribution.md" >}})的相关知识。
-   [Multivariate Gaussian Distributiuon]({{< relref "20201118110534-multivariate_gaussian_distributiuon.md" >}})

    >   随机变量 \\(X=[X\_1\cdots X\_n]^T\\) ，均值为 \\(\mu\in R^n\\) ，协方差 \\(\Sigma\in S^{n}\_{++}\\) ，
    > 概率密度函数为：
