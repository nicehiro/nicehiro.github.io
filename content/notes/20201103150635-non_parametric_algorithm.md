+++
title = "Non-parametric algorithm"
author = ["Fangyuan"]
date = 2020-11-03
slug = "20201103150635-non-parametric-algorithm"
tags = ["ml"]
draft = false
+++

## Description {#description}

To make predictions using locally weighted linear regression,
we need to keep the entire training set around.
The term "non-parametric" roughly refers to the fact that
the amount of stuff we need to keep in order to represent the
hypothesis h grows linearly with the size of the training set.

为了对输入进行预测，我们预测过程中需要保存所有训练集。
在进行预测时，我们需要使用的数据与训练集的大小成正比。


## Links to this note {#links-to-this-note}

-   [Linear Regression]({{< relref "20201103094403-linear_regression.md" >}})

    > 在回归问题中，如果使用线性函数去拟合给定数据集，这种方法称为线性回归法。
