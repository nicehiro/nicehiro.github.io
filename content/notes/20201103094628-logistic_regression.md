+++
title = "Logistic Regression"
author = ["Fangyuan"]
date = 2020-11-03
slug = "20201103094628-logistic-regression"
tags = ["ml"]
draft = false
+++

## Description {#description}

逻辑回归虽然叫做是回归，但其实是分类算法。
为了简单，本节以二分类问题为例。

我们可以忽略标签是离散的，然后直接将线性回归算法应用到分类问题上，例如[Linear Classification]({{< relref "20201102213824-linear_classification.md" >}})。

逻辑回归其实也是在线性回归的基础上改进的。

Logistic 分布是连续的概率分布，其分布函数为：
\\[
F(x)=P(X\leq x)=\frac{1}{1+e^{-(x-\mu)/\gamma}}
\\]
密度函数为：
\\[
f(x)=\frac{e^{-(x-\mu)/\gamma}}{\gamma(1+e^{-(x-\mu)/\gamma})^2}
\\]
其中 \\(\mu\\) 表示位置参数， \\(\gamma > 0\\) 为形状参数。

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/logistic-regression/cdf_logistic.png" caption="<span class=\"figure-number\">Figure 1: </span>CDF of Logistic distribution" >}}

</div>

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/logistic-regression/pdf_logistic.png" caption="<span class=\"figure-number\">Figure 2: </span>PDF of Logistic distribution" width="400" >}}

</div>

Sigmoid 方程就是 Logistic 函数在 \\(\mu=0,\gamma=1\\) 时的函数。

Sigmoid 函数的导数为：

\begin{aligned}
g^{\prime}(z) &=\frac{d}{d z} \frac{1}{1+e^{-z}} \\\\
&=\frac{1}{\left(1+e^{-z}\right)^{2}}\left(e^{-z}\right) \\\\
&=\frac{1}{\left(1+e^{-z}\right)} \cdot\left(1-\frac{1}{\left(1+e^{-z}\right)}\right) \\\\
&=g(z)(1-g(z))
\end{aligned}

对于二分类问题，我们做一下假设：

\\[
P(y=1|x;\theta)=h\_{\theta}(x)
\\]
\\[
P(y=0|x;\theta)=1-h\_{\theta}(x)
\\]
其中， \\(h\_{\theta}(x)=g(\theta^{T}x)\\) 。

即：
\\[
P(y|x;\theta)=h\_{\theta}(x)^{y}(1-h\_{\theta}(x))^{1-y}
\\]

我们的目标是要使得真实分类的概率越大越好，运用[Maximum likelihood Estimation]({{< relref "20201103085205-maximum_likelihood_estimation.md" >}})，得到：

\begin{aligned}
L(\theta) &=p(\vec{y} \mid X ; \theta) \\\\
&=\prod\_{i=1}^{n} p\left(y^{(i)} \mid x^{(i)} ; \theta\right) \\\\
&=\prod\_{i=1}^{n}\left(h\_{\theta}\left(x^{(i)}\right)\right)^{y^{(i)}}\left(1-h\_{\theta}\left(x^{(i)}\right)\right)^{1-y^{(i)}}
\end{aligned}

化简损失函数：

\begin{aligned}
\ell(\theta) &=\log L(\theta) \\\\
&=\sum\_{i=1}^{n} y^{(i)} \log h\left(x^{(i)}\right)+\left(1-y^{(i)}\right) \log \left(1-h\left(x^{(i)}\right)\right)
\end{aligned}

求解梯度：

\begin{aligned}
\frac{\partial}{\partial \theta\_{j}} \ell(\theta) &=\left(y \frac{1}{g\left(\theta^{T} x\right)}-(1-y) \frac{1}{1-g\left(\theta^{T} x\right)}\right) \frac{\partial}{\partial \theta\_{j}} g\left(\theta^{T} x\right) \\\\
&=\left(y \frac{1}{g\left(\theta^{T} x\right)}-(1-y) \frac{1}{1-g\left(\theta^{T} x\right)}\right) g\left(\theta^{T} x\right)\left(1-g\left(\theta^{T} x\right)\right) \frac{\partial}{\partial \theta\_{j}} \theta^{T} x \\\\
&=\left(y\left(1-g\left(\theta^{T} x\right)\right)-(1-y) g\left(\theta^{T} x\right)\right) x\_{j} \\\\
&=\left(y-h\_{\theta}(x)\right) x\_{j}
\end{aligned}

运用[Gradient Descent]({{< relref "20201103101531-gradient_descent.md" >}})不断更新参数：

\\[
\theta\_{j}:=\theta\_{j}+\alpha(y^{(i)}-h\_{\theta}(x^{(i)}))x\_{j}^{(i)}
\\]

线性分类器是在线性回归的基础上对最后一层的输出做不同的处理，使用设计的损失函数来进行分类的。
同样的，逻辑回归在线性回归的基础上加了一层逻辑分布，逻辑分布的结果被当作当前输入对应不同输出的概率分布，
然后再比较不同分类输出的概率的大小来确定分类。

即：
\\[
h\_{\theta}(x)=g(\theta^{T}x)=\frac{1}{1+e^{-\theta^{T}x}}
\\]


## Links to this note {#links-to-this-note}

-   [Supervised Learning]({{< relref "20201103093947-supervised_learning.md" >}})

    >   在拟合曲线的过程中，输入变量被称为特性（feature），输出变量被称为目标（target）。
    > 输入数据集合被称为训练集（training set），其中每对输入输出被称为训练样本（training example）。
-   [Gaussian Discriminant Analysis]({{< relref "20201120153745-gaussian_discriminant_analysis.md" >}})

    >   在一个分类问题中，如果输入特征 \\(x\\) 是连续型随机变量，
    > 那么可以考虑使用 GDA(Gaussian Discriminant Analysis) 模型，
    > 它拟合的对象为 \\(p(x|y)\\) ，并假设 \\(p(x|y)\\) 服从[多维正态分布]({{< relref "20201118110534-multivariate_gaussian_distributiuon.md" >}})。
-   [Discriminative Learning Algos]({{< relref "20201120153057-discriminative_learning_algos.md" >}})

    >   直接学习 \\(p(y|x)\\) 的算法（例如[Logistic Regression]({{< relref "20201103094628-logistic_regression.md" >}})），
    > 或者直接学习输入和标签 \\({0,1}\\) 的算法被称为 discriminative learning algorithm。
