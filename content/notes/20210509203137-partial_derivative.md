+++
title = "Partial Derivative"
author = ["Fangyuan"]
date = 2021-05-09
slug = "20210509203137-partial-derivative"
tags = ["math"]
draft = false
+++

## Description {#description}

一个多元函数，对其中一个变量微分，而保持其他变量恒定（相对于全导数，其所有变量都允许变化）。

设函数 \\(z=f(x,y)\\) 在点 \\((x\_0,y\_0)\\) 的某一邻域内有定义，
当 \\(y\\) 固定在 \\(y\_0\\) 而 \\(x\\) 在 \\(x\_0\\) 处有增量 \\(\delta x\\) 时，相应的函数有增量

\\[
f(x\_0+\delta x,y\_0)-f(x\_0,y\_0)
\\]

如果

\\[
\lim\_{\delta x\rightarrow 0} \frac{f(x\_0+\delta x,y\_0)-f(x\_0,y\_0)}{\delta x}
\\]

存在，则称此极限为函数 \\(f(x,y)\\) 在点 \\((x\_0,y\_0)\\) 处对 \\(x\\) 的偏导数。


## 几何意义 {#几何意义}

函数 \\(z=f(x,y)\\) 对 \\(x\\) 的偏导数，就是其在 \\(xoz\\) 平面上的投影对 \\(x\\) 的导数。


## Ref {#ref}

-   <https://www.zhihu.com/question/26966355/answer/154857139>


## Links to this note {#links-to-this-note}

-   [Direction Derivative]({{< relref "20210510144159-direction_derivative.md" >}})

    >   [Partial Derivative]({{< relref "20210509203137-partial_derivative.md" >}}) 反映的是函数沿坐标方向的变化率。
    > 而方向导数则是研究函数沿任一指定方向的变化率。
-   [Total Derivative]({{< relref "20210509202552-total_derivative.md" >}})

    >   在微积分中，函数 \\(f\\) 在某一点的全微分是指：该函数在该点附近关于其自变量的最佳线性近似。
    > 与[Partial Derivative]({{< relref "20210509203137-partial_derivative.md" >}})不同，全微分反映了函数关于其所有自变量的线性近似，而非单个自变量。
