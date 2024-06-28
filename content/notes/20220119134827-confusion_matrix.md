+++
title = "Confusion Matrix"
author = ["Fangyuan"]
date = 2022-01-19
slug = "20220119134827-confusion-matrix"
draft = false
+++

| 真实情况 | 预测正例 | 预测反例 |
|------|------|------|
| 正例 | 真正例 TP | 假反例 FN |
| 反例 | 假正例 FP | 真反例 TN |

T: True
P: Positive
F: False
N: Negative


## Links to this note {#links-to-this-note}

-   [Recall]({{< relref "20220119182852-recall.md" >}})

    > 首先构建[混淆矩阵]({{< relref "20220119134827-confusion_matrix.md" >}})，查全率表示真正例占所有正例的比率。即：
-   [Precision]({{< relref "20220119134716-precision.md" >}})

    > 首先构建[混淆矩阵]({{< relref "20220119134827-confusion_matrix.md" >}})，查准率表示真正例占预测结果中正例的比率。即：
-   [ROC]({{< relref "20220119184917-roc.md" >}})

    > 在[混淆矩阵]({{< relref "20220119134827-confusion_matrix.md" >}})的基础上，我们定义
