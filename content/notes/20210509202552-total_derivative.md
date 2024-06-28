+++
title = "Total Derivative"
author = ["Fangyuan"]
date = 2021-05-09
slug = "20210509202552-total-derivative"
tags = ["probability"]
draft = false
+++

## Description {#description}

在微积分中，函数 \\(f\\) 在某一点的全微分是指：该函数在该点附近关于其自变量的最佳线性近似。
与[Partial Derivative]({{< relref "20210509203137-partial_derivative.md" >}})不同，全微分反映了函数关于其所有自变量的线性近似，而非单个自变量。

对于二元函数 \\(f(x,y)\\) ，设 \\(f\\) 在点 \\((x\_0,y\_0)\\) 的某个邻域内有定义，
\\((x\_0+\delta x,y\_0+\delta y)\\) 为该邻域内的任意一点，
则该函数在点 \\((x\_0,y\_0)\\) 的变化量 \\(\delta f=f(x\_0+\delta x,y\_0+\delta y)-f(x\_0,y\_0)\\)
可表示为：

\begin{equation\*}
\delta f = A\delta x + B\delta y + o(\rho)
\end{equation\*}

其中， \\(A,B\\) 皆为常值且仅与点 \\((x\_0,y\_0)\\) 有关，而与 \\(\delta x,\delta y\\) 无关，
\\(\rho = \sqrt{(\delta x)^2+(\delta y)^2}\\) 。
若 \\(o(\rho)\\) 是当 \\(\rho\rightarrow 0\\) 时的高阶无穷小，则称函数 \\(f\\) 在点 \\((x\_0,y\_0)\\) 可微分，
向量 \\((A,B)\\) 为函数 \\(f\\) 在 \\((x\_0,y\_0)\\) 的全微分。


### 充分条件 {#充分条件}

一个多元函数在某点的全微分存在的充分条件是：
此函数在该点某邻域内的各个偏导数存在且偏导数在该点都连续，则此函数在该点可微。

证明略。


### 必要条件 {#必要条件}

如果函数 \\(z=f(x,y)\\) 在点 \\((x,y)\\) 可微分，则该函数在点 \\((x,y)\\) 的偏导数
\\(\frac{\partial{z}}{\partial{x}},\frac{\partial{z}}{\partial{y}}\\) 必定存在，且函数 \\(z=f(x,y)\\) 在点 \\((x,y)\\) 的全微分为

\\[
\delta z=\frac{\partial{z}}{\partial{x}}\delta{x}+
\frac{\partial{z}}{\partial{y}}\delta{y}
\\]

**证明** ：
令 \\(\delta{y}=0\\) ，

\\[
f(x+\delta{x},y)-f(x,y)=A\delta{x}+o(|\delta{x}|)
\\]

两边各除以 \\(\delta{x}\\) ，再令 \\(\delta{x}\rightarrow 0\\) 而取极限，

\\[
\lim\_{\delta{x}\rightarrow 0}\frac{f(x+\delta{x},y)-f(x,y)}{\delta{x}}=A
=\frac{\partial{z}}{\partial{x}}
\\]

证毕。


## 几何意义 {#几何意义}

在函数 \\(f(x,y)\\) 上经过点 \\((x,y)\\) 的某条曲线，在该点处的切线的斜率，即全微分。
这条曲线在 \\(xoz\\) 平面上投影的斜率为 \\(A\\) ，在 \\(yoz\\) 平面上投影的斜率为 \\(B\\) 。

偏导和方向导数都是特殊的全微分。

偏导和方向导数所对应的曲线是在一个平面中的，所以它在映射到对应平面的时候不会变形，
但普通的曲线（不在一个平面中的），拍扁的过程中会变形，因此这些曲线没有全微分。


## Ref {#ref}

-   <https://www.zhihu.com/question/26966355/answer/154857139>
