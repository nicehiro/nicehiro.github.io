+++
title = "Cross Validation"
author = ["Fangyuan"]
date = 2022-01-18
slug = "20220118165430-cross-validation"
draft = false
+++

将数据集分为 \\(k\\) 个大小相同的互斥子集，每个子集都尽可能保持数据分布的一致性。
然后每次使用 \\(k-1\\) 个子集的并集作为训练集，余下的那个子集作为测试集，从而进行 \\(k\\) 组测试。
通常把交叉验证法又称为 \\(k\\) 折交叉验证集。

\\(k\\) 折交叉验证集通常要随机使用不同的划分重复 \\(p\\) 次，最终的结果是这 \\(p\\) 次 \\(k\\) 交叉验证集
结果的均值。


## Links to this note {#links-to-this-note}

-   [Bootstrapping]({{< relref "20220118212041-bootstrapping.md" >}})

    >   [留出法]({{< relref "20220118164804-hold_out.md" >}})和[交叉验证法]({{< relref "20220118165430-cross_validation.md" >}})由于保留了一部分样本进行测试，因此实际使用的训练集比数据集要小，
    > 这必然会引入一些因训练样本规模不同而导致的估计偏差。
-   [Generalization Error]({{< relref "20220118213418-generalization_error.md" >}})

    >   学习器在训练集上的误差被称为训练误差（training error）或经验误差（empirical error）。
    > 在测试集上的误差被称为泛化误差。
