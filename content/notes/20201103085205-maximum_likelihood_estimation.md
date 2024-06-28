+++
title = "Maximum Likelihood Estimation"
author = ["Fangyuan"]
date = 2020-11-03
slug = "20201103085205-maximum-likelihood-estimation"
tags = ["probability"]
draft = false
+++

## Description {#description}

设总体有分布 \\(f(x;\theta\_1,\dots,\theta\_k)\\) ， \\(X\_1,\dots,X\_n\\) 为自这个总体中抽出的样本，
则样本 \\((X\_1,\dots,X\_n)\\) 的分布（即其概率密度函数或概率函数）为：
\\[
f(x\_1;\theta\_1,\dots,\theta\_k)f(x\_2;\theta\_1,\dots,\theta\_k)\dots f(x\_n;\theta\_1,\dots,\theta\_k)
\\]
记为 \\(L(x\_1,\dots,x\_n;\theta\_1,\dots,\theta\_k)\\) 。

当参数 \\(\theta\_1,\dots,\theta\_k\\) 固定时，函数 \\(L\\) 是一个概率密度函数。
其意义为，样本 \\(X\_1,\dots,X\_n\\) 出现的概率。反过来理解，当 \\(X\_1,\dots,X\_n\\) 固定时，函数 \\(L\\) 的意义为，
给定样本，生成样本的参数为 \\(\theta\_1,\dots,\theta\_k\\) 的概率。但参数没有概率这个说法，就选用了“似然”这个词。

因此，我们要找的参数，其实就是使得 \\(L\\) 最大的参数，即：
\\[
L(X\_1,\dots,X\_n;\theta\_1,\dots,\theta\_n) = \max\_{\theta\_1,\dots,\theta\_n}L(X\_1,\dots,X\_n;\theta\_1,\dots,\theta\_k)
\\]
若 \\(f\\) 连续可导，
\\[
\ln L=\sum\_{i=1}^{n}\ln f(X\_i;\theta\_1,\dots,\theta\_k)
\\]


## Links to this note {#links-to-this-note}

-   [Gaussian Discriminant Analysis]({{< relref "20201120153745-gaussian_discriminant_analysis.md" >}})

    >   在一个分类问题中，如果输入特征 \\(x\\) 是连续型随机变量，
    > 那么可以考虑使用 GDA(Gaussian Discriminant Analysis) 模型，
    > 它拟合的对象为 \\(p(x|y)\\) ，并假设 \\(p(x|y)\\) 服从[多维正态分布]({{< relref "20201118110534-multivariate_gaussian_distributiuon.md" >}})。
-   [Navie Bayes]({{< relref "20201120154028-navie_bayes.md" >}})

    > 朴素贝叶斯用来对离散随机变量进行分类。
-   [Logistic Regression]({{< relref "20201103094628-logistic_regression.md" >}})

    >   逻辑回归虽然叫做是回归，但其实是分类算法。
    > 为了简单，本节以二分类问题为例。
-   [Linear Regression]({{< relref "20201103094403-linear_regression.md" >}})

    > 在回归问题中，如果使用线性函数去拟合给定数据集，这种方法称为线性回归法。
-   [Mathematical Statistics]({{< relref "20201103084613-mathematical_statistics.md" >}})

    >   **统计量** ：完全有样本决定的量叫做统计量。统计量只依赖于样本，不能依赖与任何其他未知变量。
    > 特别的，它不能依赖于总体分布中所包含的任何参数。
