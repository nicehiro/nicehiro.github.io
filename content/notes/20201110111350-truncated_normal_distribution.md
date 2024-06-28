+++
title = "Truncated normal distribution"
author = ["Fangyuan"]
date = 2020-11-10
slug = "20201110111350-truncated-normal-distribution"
tags = ["math"]
draft = false
+++

## Description {#description}

需要先去了解[正态分布]({{< relref "20201114212110-normal_distribution.md" >}})的相关知识。

假设随机变量 \\(X\\) 在 \\((a,b)\\) 内服从均值为 \\(\mu\\) 方差为 \\(\sigma^2\\) 的正态分布，
其中 \\(-\infty\leq a < b\leq\infty\\) 。
那么称在 \\(a < X < b\\) 的条件下， \\(X\\) 服从截断正态分布。

其密度函数（probability density function）为：

\\[
f(x;\mu,\sigma,a,b)=\left\\{ \begin{array}{rcl}
\frac{1}{\sigma}\frac{\varphi(\frac{x-\mu}{\sigma})}{\Phi(\frac{b-\mu}{\sigma})-\Phi({\frac{a-\mu}{\sigma}})} & a < x < b \\\\
0 & \mbox{else}
\end{array}
\right.
\\]

其中，

\\[
\varphi(xi)=\frac{1}{\sqrt{2\pi}}\exp(-\frac{1}{2}\xi^2)
\\]

\\(\Phi(x)\\) 为标准正态分布的累积分布函数（cumulative distribution function）。

\\[
\Phi(x)=\frac{1}{2}(1+erf(\frac{x}{\sqrt{2}}))=\int\_{-\infty}^{x}\frac{1}{\sqrt{2\pi}}e^{-\frac{t^2}{2}}dt
\\]

\\(erf(x)\\) 为高斯误差函数，是一个非初等函数：

\\[
erf(x)=\frac{1}{\sqrt{\pi}}\int\_{-x}^{x}e^{-t^2}dt=\frac{2}{\sqrt{\pi}}\int\_{0}^{x}e^{-t^2}dt
\\]


## Computational methods {#computational-methods}

那么一般在计算中如何实现这个分布呢？

使用常见的采样方法 [Inverse transform sampling]({{< relref "20201110111528-inverse_transform_sampling.md" >}}) 即可获得截断正态分布的样本。

计算公式为：

\\[
x=\Phi^{-1}(\Phi(\alpha)+U\cdot(\Phi(\beta)-\Phi(\alpha)))\sigma+\mu
\\]

其中 \\(\Phi^{-1}\\) 为其反函数， \\(U\\) 为均匀分布在 \\((0,1)\\) 上的取值。
这只是模拟随机变量的逆变换方法，虽然这种方法实现比较简单，但在正态分布的尾部采样时，此方法有可能会失败。

推导：
截断正态分布的累积分布函数：

\begin{align\*}
CDF(x)&=\int\_{a}^{x}f(x)dx \\\\
&= \frac{\Phi(\frac{x-\mu}{\sigma})-\Phi(\alpha)}{\Phi(\beta)-\Phi(\alpha)} \\\\
\end{align\*}

其反函数：

\begin{align\*}
\Phi(x-\mu)&=CDF(x)[\Phi(\beta)-\Phi(\alpha)]+\Phi(\alpha) \\\\
CDF^{-1}(y)=x&=\mu+\sigma\Phi^{-1}[\Phi(\alpha)+y[\Phi(\beta)-\Phi(\alpha)]]
\end{align\*}


## Ref {#ref}

-   [Truncated normal distribution - Wikipedia]({{< relref "truncated_normal_distribution_wikipedia.md" >}})
