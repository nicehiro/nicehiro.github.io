+++
title = "Probability Theory"
author = ["Fangyuan"]
date = 2020-11-03
slug = "20201103082521-probability-theory"
tags = ["probability"]
draft = false
+++

## Description {#description}


### 事件的概率 {#事件的概率}

**事件的蕴含、包含和相等** ：在同一试验下的两个事件 A 和 B，如果当 A 发生时 B 必发生，则称 A 蕴含 B，或者说 B 包含 A，即为 \\(A \subset B\\) 。
若 A，B 互相蕴含，即 \\(A \subset B\\) 且 \\(B \subset A\\) ，则称 A，B 两事件相等，即为 \\(A=B\\) 。

**事件的互斥与对立** ：若两事件 A，B 不能在同以此试验中都发生（但可以都不发生），则称它们是互斥的。
如果一些事件中任意两个都互斥，则称这些事件是两两互斥的，或简称互斥的。
互斥的另一个重要情况是“对立事件”，若 A 为一事件，则事件 \\(B={A 不发生}\\) 为 A 的对立事件，记为 \\(\bar{A}\\) 。
即： \\(对立事件 \subset 互斥事件\\) 。

**事件的和（并）** ：设有两个事件 A，B，定义新事件 \\(C={A 发生，或 B 发生}\\) ，这样的事件称为事件 A 和 B 的和，记为 \\(C=A+B\\) 。
事件的和也被称为事件的并，也常被记为 \\(A\cup B\\) 。

**事件的积（交）** ：设有两个事件 A，B，定义新事件 \\(C={A，B 都发生}\\) ，这样的事件被称为事件 A 和 B 的积，记为 \\(C=AB\\) 。
事件的积也被称为事件的交，也常被记为 \\(A\cap B\\) 。

**事件的差** ：两个事件 A，B 之差，定义为 \\(A-B={A 发生，B 不发生}={A\bar{B}}\\) 。

**条件概率** ：设有两个事件 A，B，而 \\(P(B)\neq0\\) 。则“在给定 B 发生的条件下 A 的条件概率”，记为 \\(P(A|B)\\) ，定义为：
\\[
P(A|B)=P(AB)/P(B)
\\]

**事件的独立性** ：若 \\(P(A)=P(A|B)\\) ，则 B 的发生与否对 A 发生的可能性毫无影响，这是称 A，B 两事件相互独立。可推出：
\\[
P(AB)=P(B)P(A|B)=P(B)P(A)
\\]

**多个事件的独立性** ：设 \\(A\_1,A\_2,\dots\\) 为有限或无限个事件，如果从其中任意取出有限个 \\(A\_{i\_1},A\_{i\_2},\dots,A\_{i\_m}\\) ，都成立
\\[
P(A\_{i\_1} A\_{i\_2} \dots A\_{i\_m})=P(A\_{i\_1})P(A\_{i\_2})\dots P(A\_{i\_m})
\\]

1.  独立事件的任一部分也独立。
2.  相互独立必两两独立，反之不一定。

**加法定理** ：若干个互斥事件之和的概率，等于各事件的概率之和。

**乘法定理** ：若干个独立事件之积的概率，等于各事件的概率之积。

**完备事件群** ：设 \\(B\_1,B\_2,\dots\\) 为有限个或无限个事件，它们两两互斥且在每次试验中至少发生一个，即：

\begin{align\*}
B\_{i}B\_j &= \varnothing \\\\
B\_1+B\_2+\dots &=\Omega
\end{align\*}

把具有这些性质的一组事件称为一个“完备事件群”。

**全概率公式** ： \\(P(A)=P(B\_1)P(A|B\_1)+P(B\_2)P(A|B\_2)+\dots\\)

**贝叶斯公式** ： \\(P(B\_i|A)=P(AB\_i)/P(A)=P(A|B\_i)P(B\_i)/\sum\_jP(B\_j)P(A|B\_j)\\)


### 随机变量和概率分布 {#随机变量和概率分布}

**随机变量** ：随机变量是“其值随机会而定”的变量，是关于试验结果的函数。
**分布函数** ：设 \\(X\\) 为一随机变量，则函数 \\(P(X\leq x)=F(x) (-\infty<x<\infty)\\) 称为 \\(X\\) 的分布函数。
根据定义，很容易等到分布函数的两个性质：

1.  单调递增不减
2.  当 \\(x\rightarrow\infty\\) ， \\(F(x)\rightarrow 1\\) ；当 \\(x\rightarrow-\infty\\) ， \\(F(X)\rightarrow0\\)


#### [离散型随机变量]({{< relref "20201103083043-离散型随机变量.md" >}}) {#离散型随机变量--20201103083043-离散型随机变量-dot-md}


#### [连续型随机变量]({{< relref "20201103083416-连续型随机变量.md" >}}) {#连续型随机变量--20201103083416-连续型随机变量-dot-md}


#### [多维随机变量]({{< relref "20201103083521-多维随机变量.md" >}}) {#多维随机变量--20201103083521-多维随机变量-dot-md}


#### [边缘分布]({{< relref "20201103083557-边缘分布.md" >}}) {#边缘分布--20201103083557-边缘分布-dot-md}


#### [条件概率分布]({{< relref "20201103083711-条件概率分布.md" >}}) {#条件概率分布--20201103083711-条件概率分布-dot-md}


### 数学期望与中位数 {#数学期望与中位数}


#### [数学期望]({{< relref "20201103083925-expectation.md" >}}) {#数学期望--20201103083925-expectation-dot-md}


#### [方差]({{< relref "20201103084109-variance.md" >}}) {#方差--20201103084109-variance-dot-md}


#### [矩]({{< relref "20201103084218-moment.md" >}}) {#矩--20201103084218-moment-dot-md}


#### [协方差和相关系数]({{< relref "20201103084313-covariance.md" >}}) {#协方差和相关系数--20201103084313-covariance-dot-md}
