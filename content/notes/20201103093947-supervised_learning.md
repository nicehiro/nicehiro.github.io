+++
title = "Supervised Learning"
author = ["Fangyuan"]
date = 2020-11-03
slug = "20201103093947-supervised-learning"
tags = ["ml"]
draft = false
+++

## Description {#description}

在拟合曲线的过程中，输入变量被称为特性（feature），输出变量被称为目标（target）。
输入数据集合被称为训练集（training set），其中每对输入输出被称为训练样本（training example）。

监督学习的目标就是，给定训练集，训练一个可以很好的预测输出结果的函数 \\(h\\) ，这个函数被称为 **hypothesis** 。

当需要预测的目标函数是连续的，那么称这个问题为回归问题（regression problem）。

如果需要预测的目标函数是离散的，那么称这个问题为分类问题（classification problem）。


### 解决回归问题，常用的方法有： {#解决回归问题-常用的方法有}

-   [Linear Regression]({{< relref "20201103094403-linear_regression.md" >}})


### 解决分类问题，常用的方法有： {#解决分类问题-常用的方法有}

-   [Logistic Regression]({{< relref "20201103094628-logistic_regression.md" >}})
-   [Linear Classification]({{< relref "20201102213824-linear_classification.md" >}})
-   [Gaussian discriminant analysis]({{< relref "20201120153745-gaussian_discriminant_analysis.md" >}})


### [广义线性模型]({{< relref "20201103094754-generalized_linear_models.md" >}}) {#广义线性模型--20201103094754-generalized-linear-models-dot-md}
