+++
title = "Direction Derivative"
author = ["Fangyuan"]
date = 2021-05-10
slug = "20210510144159-direction-derivative"
tags = ["math"]
draft = false
+++

## Description {#description}

[Partial Derivative]({{< relref "20210509203137-partial_derivative.md" >}}) 反映的是函数沿坐标方向的变化率。
而方向导数则是研究函数沿任一指定方向的变化率。

如果函数 \\(f(x,y)\\) 在点 \\((x\_0,y\_0)\\) 出可微分，那么函数在改点沿任一方向 \\(l\\) 的方向导数存在，
且有：

\\[
\frac{\partial{f}}{\partial{l}}|\_{x\_0,y\_0}=
f\_{x}(x\_0,y\_0)\cos\alpha+f\_{y}(x\_0,y\_0)\cos\beta
\\]

其中 \\(\cos\alpha,\cos\beta\\) 是方向 \\(l\\) 的方向余弦。
