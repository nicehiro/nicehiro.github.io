+++
title = "Generalization Error"
author = ["Fangyuan"]
date = 2022-01-18
slug = "20220118213418-generalization-error"
draft = false
+++

学习器在训练集上的误差被称为训练误差（training error）或经验误差（empirical error）。
在测试集上的误差被称为泛化误差。

如果对给定数据集进行划分以评估其泛化误差呢？一般有以下几个方法：

1.  [留出法]({{< relref "20220118164804-hold_out.md" >}})
2.  [交叉验证法]({{< relref "20220118165430-cross_validation.md" >}})
3.  [Bootstrapping]({{< relref "20220118212041-bootstrapping.md" >}})

如何对学习器学到的模型的泛化能力进行评估呢？一般有以下几个指标：

1.  错误率或精度
2.  [查准率]({{< relref "20220119134716-precision.md" >}})和[查全率]({{< relref "20220119182852-recall.md" >}})
3.  [PR 曲线]({{< relref "20220119183855-p_r_curve.md" >}})
4.  [ROC]({{< relref "20220119184917-roc.md" >}})

一般来说，查准率和查全率是一对矛盾的变量。只有在简单的训练中，才可能将二者都变得很高。
可以通过保持 \\(TP\\) 不变，来推出上诉关系。

一般学习器会为一个样本产生一个实值或概率预测，然后这个预测值与一个分类阈值（Threshold）
进行比较。若我们更重视查准率，分类阈值可以设高一点；如果我们更重视查全率，分类阈值可以设
低一点。
