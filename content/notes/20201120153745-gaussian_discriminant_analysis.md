+++
title = "Gaussian discriminant analysis"
author = ["Fangyuan"]
date = 2020-11-20
slug = "20201120153745-gaussian-discriminant-analysis"
tags = ["ml"]
draft = false
+++

## Description {#description}

在一个分类问题中，如果输入特征 \\(x\\) 是连续型随机变量，
那么可以考虑使用 GDA(Gaussian Discriminant Analysis) 模型，
它拟合的对象为 \\(p(x|y)\\) ，并假设 \\(p(x|y)\\) 服从[多维正态分布]({{< relref "20201118110534-multivariate_gaussian_distributiuon.md" >}})。

GDA 模型为：

\begin{aligned}
y &\sim \text{Bernoulli}(\phi) \\\\
x|y=0 &\sim \mathcal{\mu\_0,\Sigma} \\\\
x|y=1 &\sim \mathcal{\mu\_1,\Sigma} \\\\
\end{aligned}

展开为：

\begin{aligned}
p(y) &=\phi^{y}(1-\phi)^{1-y} \\\\
p(x \mid y=0) &=\frac{1}{(2 \pi)^{d / 2}|\Sigma|^{1 / 2}} \exp \left(-\frac{1}{2}\left(x-\mu\_{0}\right)^{T} \Sigma^{-1}\left(x-\mu\_{0}\right)\right) \\\\
p(x \mid y=1) &=\frac{1}{(2 \pi)^{d / 2}|\Sigma|^{1 / 2}} \exp \left(-\frac{1}{2}\left(x-\mu\_{1}\right)^{T} \Sigma^{-1}\left(x-\mu\_{1}\right)\right)
\end{aligned}

请注意，此模型中两个随机变量分别有各自的均值 \\(\mu\_0,\mu\_1\\) ，
但二者的协方差矩阵都是 \\(\Sigma\\) 。

使用[极大似然法]({{< relref "20201103085205-maximum_likelihood_estimation.md" >}})求解，计算其 log-likelihood

\begin{aligned}
\ell\left(\phi, \mu\_{0}, \mu\_{1}, \Sigma\right) &=\log \prod\_{i=1}^{n} p\left(x^{(i)}, y^{(i)} ; \phi, \mu\_{0}, \mu\_{1}, \Sigma\right) \\\\
&=\log \prod\_{i=1}^{n} p\left(x^{(i)} \mid y^{(i)} ; \mu\_{0}, \mu\_{1}, \Sigma\right) p\left(y^{(i)} ; \phi\right)
\end{aligned}

求得其中参数为：

\begin{aligned}
\phi &=\frac{1}{n} \sum\_{i=1}^{n} 1\left\\{y^{(i)}=1\right\\} \\\\
\mu\_{0} &=\frac{\sum\_{i=1}^{n} 1\left\\{y^{(i)}=0\right\\} x^{(i)}}{\sum\_{i=1}^{n} 1\left\\{y^{(i)}=0\right\\}} \\\\
\mu\_{1} &=\frac{\sum\_{i=1}^{n} 1\left\\{y^{(i)}=1\right\\} x^{(i)}}{\sum\_{i=1}^{n} 1\left\\{y^{(i)}=1\right\\}} \\\\
\Sigma &=\frac{1}{n} \sum\_{i=1}^{n}\left(x^{(i)}-\mu\_{y^{(i)}}\right)\left(x^{(i)}-\mu\_{y^{(i)}}\right)^{T}
\end{aligned}

上诉参数其实都可以从统计的角度给出合理解释，用样本估计分布参数。

其输出类似下图：

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/cs229/2/gda.png" caption="<span class=\"figure-number\">Figure 1: </span>GDA Output" width="400" >}}

</div>

图中，训练集中的两类数据被两个高斯分布拟合，这两个高斯分布形状相同，只有中心位置不同。


### GDA 和 Logistic Regression 的关系 {#gda-和-logistic-regression-的关系}

仔细观察上诉的密度函数 \\(p(y=1|x;\phi,\mu\_0,\mu\_1,\Sigma)\\) ，它可以展开成：

\\[
p\left(y=1 \mid x ; \phi, \Sigma, \mu\_{0}, \mu\_{1}\right)=\frac{1}{1+\exp \left(-\theta^{T} x\right)}
\\]

其中 \\(\theta\\) 是关于 \\(\phi,\Sigma,\mu\_0,\mu\_1\\) 的近似参数。
这其实就是 [Logistic Regression]({{< relref "20201103094628-logistic_regression.md" >}}) \\(p(y=1|x)\\) 的表达式。

前面我们提到，使用 GDA 需要在随机变量 \\(x\\) 服从多维正态分布才行。
而 Logistic Regression 没有这些限制。
因此，在模型输入可以满足 GDA 的假设时，使用 GDA 会有更高的数据利用率，
并且拟合效果很好；而 Logistic Regression 具有鲁棒性，更适合其他的场景。


## Links to this note {#links-to-this-note}

-   [Supervised Learning]({{< relref "20201103093947-supervised_learning.md" >}})

    >   在拟合曲线的过程中，输入变量被称为特性（feature），输出变量被称为目标（target）。
    > 输入数据集合被称为训练集（training set），其中每对输入输出被称为训练样本（training example）。
-   [Generative Learning Algorithm]({{< relref "20201120153417-generative_learning_algorithm.md" >}})

    >   不直接学习 \\(p(y|x)\\) ，而是去学习 \\(p(x|y)\\) 的算法被称为
    > generative learning algorithm。
