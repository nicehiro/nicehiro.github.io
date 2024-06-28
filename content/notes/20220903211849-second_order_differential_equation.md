+++
title = "Second Order Differential Equation"
author = ["Fangyuan"]
date = 2022-09-03
slug = "20220903211849-second-order-differential-equation"
tags = ["differential", "math"]
draft = false
+++

Given a second order differential equation:

\begin{equation\*}
a y^{''} + b y^{'} + c y = 0
\end{equation\*}

Notice that the `nth` order differential of \\(y = e^{rx}\\) is \\(r^n e^{rx}\\), we can use this as the basic formation of \\(y\\),

\begin{equation\*}
(ar^2 + br + c) e^{rx} = 0
\end{equation\*}

where \\(e^{rx} \neq 0\\). Than if we find proper \\(r\\) which can make \\(ar^2 + br + c = 0\\), the problem solved. And we call \\(ar^2 + br + c = 0\\) as `Characteristic equation`.

1.  If \\(b^2 - 4ac > 0\\), which means the Characteristic equation has two different roots \\(r\_1, r\_2\\), thus \\(y = C\_1 e^{r\_1 x} + C\_2 e^{r\_2 x}\\)

2.  If \\(b^2 - 4ac = 0\\), which means the Characteristic equation has two equal roots \\(r\_1\\), thus \\(y = C\_1 e^{r\_1 x} + C\_2 x e^{r\_2 x}\\)

3.  If \\(b^2 - 4ac \leq 0\\), which means the characteristic equation has two complex roots \\(r \pm i\omega\\), thus \\(y = e^{rx} [C\_1 \cos(\omega x) + C\_2 \sin(\omega x)]\\).
