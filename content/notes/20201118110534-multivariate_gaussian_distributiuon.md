+++
title = "Multivariate Gaussian Distributiuon"
author = ["Fangyuan"]
date = 2020-11-18
slug = "20201118110534-multivariate-gaussian-distributiuon"
tags = ["probability"]
draft = false
+++

## Description {#description}

随机变量 \\(X=[X\_1\cdots X\_n]^T\\) ，均值为 \\(\mu\in R^n\\) ，协方差 \\(\Sigma\in S^{n}\_{++}\\) ，
概率密度函数为：

\\[
p(x ; \mu, \Sigma)=\frac{1}{(2 \pi)^{n / 2}|\Sigma|^{1 / 2}} \exp \left(-\frac{1}{2}(x-\mu)^{T} \Sigma^{-1}(x-\mu)\right)
\\]

我们称这组随机变量服从多维正态分布 \\(X\sim\mathcal{N}(\mu,\Sigma)\\) 。

协方差求解方法：
\\[
Cov[X,Y]=E[(X-E[X])(Y-E[Y])]=E[XY]-E[X]E[Y]
\\]

对于任意均值为 \\(\mu\\) 协方差为 \\(\Sigma\\) 的随机变量 \\(X\\) ，有

\\[
\Sigma=E[(X-\mu)(X-\mu)^T]=E[XX^T]-\mu\mu^T
\\]

当协方差矩阵是对角矩阵时，即两向量独立不相关时，多维正态分布和[正态分布]({{< relref "20201114212110-normal_distribution.md" >}})之间的关系为：
\\[
p(x;\mu,\Sigma)=p(x\_1;\mu\_1,\Sigma\_1)\cdot p(x\_2;\mu\_2,\Sigma\_2) \cdots
\\]

多维随机变量的正态分布的轮廓是以 \\(\mu\_1,\mu\_2,\cdots\\) 为中心的椭圆。

若多维随机变量 \\(X\\) 服从多维正态分布，那么对 \\(X\\) 作线性变化后，仍然服从多维正态分布。


## Gaussian facts {#gaussian-facts}

1.  如果已知高斯分布变量的均值 \\(\mu\\) 和协方差矩阵 \\(\Sigma\\) ，就可以直接写出 \\(x\\) 的密度函数。
2.  多维高斯分布的性质：

\\[
\int\_{x \in \mathbf{R}^{n}} p(x ; \mu, \Sigma) d x=\int\_{-\infty}^{\infty} \cdots \int\_{-\infty}^{\infty} p(x ; \mu, \Sigma) d x\_{1} \ldots d x\_{n}=1
\\]

\\[
\int\_{x \in \mathbf{R}^{n}} x\_{i} p\left(x ; \mu, \sigma^{2}\right) d x=\mu\_{i}
\\]

\\[
\int\_{x \in \mathbf{R}^{n}}\left(x\_{i}-\mu\_{i}\right)\left(x\_{j}-\mu\_{j}\right) p\left(x ; \mu, \sigma^{2}\right) d x=\Sigma\_{i j}
\\]

1.  扩展
    -   相互独立的高斯随机变量之和也是高斯分布。
    -   高斯联合分布的边缘分布是高斯分布。
    -   高斯联合分布的条件分布也是高斯分布。


## 多维高斯分布的扩展 {#多维高斯分布的扩展}


### 相互独立的高斯随机变量之和也是高斯分布。 {#相互独立的高斯随机变量之和也是高斯分布}

假设 \\(y\sim\mathcal{N}(\mu,\Sigma)\\) ， \\(z\sim\mathcal{N}(\mu^{\prime},\Sigma^{\prime})\\) ，
二者相互独立，则：
\\[
y+z\sim\mathcal{N}(\mu+\mu^{\prime},\Sigma+\Sigma^{\prime})
\\]

上诉定义中，有两个需要注意的地方：

1.  随机变量需要相互独立。举个极端的例子，当 \\(z=-y\\) 时，显然 \\(y+z\\) 不服从正态分布。
2.  如果两个服从正态分布的随机变量相加，它们的密度函数会变成多峰的图形吗？
    需要注意的是，随机变量相加之后的密度函数，不是简单的叠加。


### 高斯联合分布的边缘分布是高斯分布 {#高斯联合分布的边缘分布是高斯分布}

假设
\\[
\left[\begin{array}{l}
x\_{A} \\\\
x\_{B}
\end{array}\right] \sim \mathcal{N}\left(\left[\begin{array}{l}
\mu\_{A} \\\\
\mu\_{B}
\end{array}\right],\left[\begin{array}{ll}
\Sigma\_{A A} & \Sigma\_{A B} \\\\
\Sigma\_{B A} & \Sigma\_{B B}
\end{array}\right]\right)
\\]

那么其边缘分布：

\begin{aligned}
p\left(x\_{A}\right) &=\int\_{x\_{B} \in \mathbf{R}^{n}} p\left(x\_{A}, x\_{B} ; \mu, \Sigma\right) d x\_{B} \\\\
p\left(x\_{B}\right) &=\int\_{x\_{A} \in \mathbf{R}^{m}} p\left(x\_{A}, x\_{B} ; \mu, \Sigma\right) d x\_{A}
\end{aligned}

且服从：

\begin{array}{l}
x\_{A} \sim \mathcal{N}\left(\mu\_{A}, \Sigma\_{A A}\right) \\\\
x\_{B} \sim \mathcal{N}\left(\mu\_{B}, \Sigma\_{B B}\right)
\end{array}


### 高斯联合分布的条件分布也是高斯分布 {#高斯联合分布的条件分布也是高斯分布}

假设
\\[
\left[\begin{array}{l}
x\_{A} \\\\
x\_{B}
\end{array}\right] \sim \mathcal{N}\left(\left[\begin{array}{l}
\mu\_{A} \\\\
\mu\_{B}
\end{array}\right],\left[\begin{array}{ll}
\Sigma\_{A A} & \Sigma\_{A B} \\\\
\Sigma\_{B A} & \Sigma\_{B B}
\end{array}\right]\right)
\\]

其条件分布为：

\begin{array}{l}
p\left(x\_{A} \mid x\_{B}\right)=\frac{p\left(x\_{A}, x\_{B} ; \mu, \Sigma\right)}{\int\_{x\_{A} \in \mathbf{R}^{m}} p\left(x\_{A}, x\_{B} ; \mu, \Sigma\right) d x\_{A}} \\\\
p\left(x\_{B} \mid x\_{A}\right)=\frac{p\left(x\_{A}, x\_{B} ; \mu, \Sigma\right)}{\int\_{x\_{B} \in \mathbf{R}^{n}} p\left(x\_{A}, x\_{B} ; \mu, \Sigma\right) d x\_{B}}
\end{array}

且服从：

\begin{array}{l}
x\_{A} \mid x\_{B} \sim \mathcal{N}\left(\mu\_{A}+\Sigma\_{A B} \Sigma\_{B B}^{-1}\left(x\_{B}-\mu\_{B}\right), \Sigma\_{A A}-\Sigma\_{A B} \Sigma\_{B B}^{-1} \Sigma\_{B A}\right) \\\\
x\_{B} \mid x\_{A} \sim \mathcal{N}\left(\mu\_{B}+\Sigma\_{B A} \Sigma\_{A A}^{-1}\left(x\_{A}-\mu\_{A}\right), \Sigma\_{B B}-\Sigma\_{B A} \Sigma\_{A A}^{-1} \Sigma\_{A B}\right)
\end{array}


## Ref {#ref}

-   [证明推导](https://zhuanlan.zhihu.com/p/290876484)


## Links to this note {#links-to-this-note}

-   [Gaussian Discriminant Analysis]({{< relref "20201120153745-gaussian_discriminant_analysis.md" >}})

    >   在一个分类问题中，如果输入特征 \\(x\\) 是连续型随机变量，
    > 那么可以考虑使用 GDA(Gaussian Discriminant Analysis) 模型，
    > 它拟合的对象为 \\(p(x|y)\\) ，并假设 \\(p(x|y)\\) 服从[多维正态分布]({{< relref "20201118110534-multivariate_gaussian_distributiuon.md" >}})。
-   [Generative Learning Algorithm]({{< relref "20201120153417-generative_learning_algorithm.md" >}})

    >   不直接学习 \\(p(y|x)\\) ，而是去学习 \\(p(x|y)\\) 的算法被称为
    > generative learning algorithm。
