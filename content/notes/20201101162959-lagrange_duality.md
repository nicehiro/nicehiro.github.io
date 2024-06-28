+++
title = "Lagrange duality"
author = ["Fangyuan"]
date = 2020-11-01
slug = "20201101162959-lagrange-duality"
tags = ["math"]
draft = false
+++

在约束最优化问题中，常常利用拉格朗日对偶性将原始问题转换为对偶问题，通过解对偶问题而得到原始问题的解。


## 原始问题 {#原始问题}

假设 \\(f(x),c\_i(x),h\_j(x)\\) 是定义在 \\(\mathbf{R}^n\\) 上的连续可微函数。
考虑约束最优化问题：

\begin{aligned}
\min\limits\_{x\in\mathbf{R}^n} \quad & f(x) \\\\
s.t. \quad & c\_i(x)\leq 0, i=1,2,\cdots,k \\\\
& h\_{j}(x)=0, j=1,2,\cdots,l
\end{aligned}

称此最优化问题为原始最优化问题或原始问题。

首先，引入广义拉格朗日函数（generalized Lagrange function）
\\[
L(x,\alpha,\beta)=f(x)+\sum\_{i=1}^{k}\alpha\_{i}c\_{i}(x)+\sum\_{j=1}^{l}\beta\_{j}h\_{j}(x)
\\]

这里， \\(x=(x^{(1)},x^{(2)},\cdots,x^{(n)})^T\in\mathbf{R}^n,\alpha\_i,\beta\_j\\) 是[拉格朗日乘子]({{< relref "20201101162755-lagrange_multiplier.md" >}})，
\\(\alpha\_i\geq0\\) 。考虑 \\(x\\) 的函数：

\\[
\theta\_{P}(x) = \max\_{\alpha,\beta:\alpha\geq0}L(x,\alpha,\beta)
\\]

这里， \\(P\\) 表示原始问题。 \\(\max\\) 下标只有 \\(\alpha,\beta\\) ，可以理解为，
先保持 \\(x\\) 不变， \\(\alpha,\beta\\) 是使得 \\(L\\) 最大的参数。

假设给定某个 \\(x\\) 。如果 \\(x\\) 违反原始问题的约束条件，即存在某个 \\(i\\) 使得 \\(c\_i(x)>0\\)
或者存在某个 \\(j\\) 使得 \\(h\_{j}(x)\neq0\\) ，那么就有：
\\[
\theta\_{P}(x)=\max\_{\alpha,\beta:\alpha\_i\geq0}\left[
f(x)+\sum\_{i=1}^{k}\alpha\_{i}c\_{i}(x)+\sum\_{j=1}^{l}\beta\_{j}h\_{j}(x)
\right]=+\infty
\\]

因为如果某个 \\(i\\) 使约束 \\(c\_{i}(x)>0\\) ，则可令 \\(\alpha\_{i}\rightarrow+\infty\\) ；
若某个 \\(j\\) 使 \\(h\_{j}(x)\neq0\\) ，则可令 \\(\beta\_{j}\\) 使 \\(\beta\_{j}h\_{j}(x)\rightarrow+\infty\\) ，
而将其余各 \\(\alpha\_i,\beta\_j\\) 均取 0 。

相反地，如果 \\(x\\) 满足约束条件，则此问题和原始问题等价。即：

\begin{aligned}
\theta\_{P}(x)= \quad & f(x), &x s.t. Constrain \\\\
&+\infty, & others \\\\
\end{aligned}

所以，如果考虑极小化问题

\\[
\min\_{x}\theta\_{P}(x)=\min\_{x}\max\_{\alpha,\beta:\alpha\_{i}\geq0}L(x,\alpha,\beta)
\\]

它是与原始问题等价的，即它们有相同的解。
问题 \\(\min\_{x}\max\_{\alpha,\beta:\alpha\_{i}\geq0}L(x,\alpha,\beta)\\) 称为广义拉格朗日函数的极小极大问题。
为了方便，定义原始问题的最优值

\\[
p^{\*}=\min\_{x}\theta\_{P}(x)
\\]

称为原始问题的值。


## 对偶问题 {#对偶问题}

定义
\\[
\theta\_{D}(\alpha,\beta)=\min\_{x}L(x,\alpha,\beta)
\\]

这里 \\(\theta\_{D}\\) 是关于 \\(\alpha,\beta\\) 的函数，
\\(\min\\) 的下标为 \\(x\\) 可以理解为在给定 \\(\alpha,\beta\\) 不变的条件下，
\\(x\\) 是使得 \\(L\\) 最小的参数。
再考虑极大化 \\(\theta\_D\\) ，即
\\[
\max\_{\alpha,\beta:\alpha\_{i}\geq0}\theta\_{D}(\alpha,\beta)=\max\_{\alpha,\beta:\alpha\_{i}\geq0}\min\_{x}L(x,\alpha,\beta)
\\]

此问题被称为广义拉格朗日函数的极大极小问题。

定义对偶问题的最优值
\\[
d^{\*}=\max\_{\alpha,\beta:\alpha\_{i}\geq0}\theta\_{D}(\alpha,\beta)
\\]

称为对偶问题的值。


## 原始问题和对偶问题的关系 {#原始问题和对偶问题的关系}

<div class="theorem">

若原始问题和对偶问题都有最优值，则
\\[
d^{\*} = \max\_{\alpha,\beta:\alpha\_{i}\geq0}\min\_{x}L(x,\alpha,\beta)\leq\min\_{x}\max\_{\alpha,\beta:\alpha\_{i}\geq0}L(x,\alpha,\beta)=p^{\*}
\\]

</div>

<div class="proof">

易知：
\\[
\theta\_{D}(\alpha,\beta)=\min\_{x}L(x,\alpha,\beta)\leq L(x,\alpha,\beta)\leq\max\_{\alpha,\beta:\alpha\_{i}\geq0}L(x,\alpha,\beta)=\theta\_{P}(x)
\\]

即
\\(\theta\_{D}(\alpha,\beta)\leq\theta\_{P}(x)\\)

由于原始问题和对偶问题均有最优值，所以，
\\[
\max\_{\alpha,\beta:\alpha\_{i}\geq0}\theta\_{D}(\alpha,\beta)\leq\min\_{x}\theta\_{P}(x)
\\]

即
\\[
d^{\*} = \max\_{\alpha,\beta:\alpha\_{i}\geq0}\min\_{x}L(x,\alpha,\beta)\leq\min\_{x}\max\_{\alpha,\beta:\alpha\_{i}\geq0}L(x,\alpha,\beta)=p^{\*}
\\]

</div>


### 定理 {#定理}

考虑原始问题和对偶问题。假设函数 \\(f(x)\\) 和 \\(c\_i(x)\\) 是凸函数， \\(h\_j(x)\\) 是[仿射函数]({{< relref "20201230112703-affine_function.md" >}})；
并且假设不等式约束 \\(c\_i(x)\\) 是严格执行的，即存在 \\(x\\) ，对所有 \\(i\\) 有 \\(c\_i(x)<0\\) ，
则存在 \\(x^\*,\alpha^\*,\beta^\*\\) ，使 \\(x^\*\\) 是原始问题的解， \\(\alpha^\*,\beta^\*\\) 是对偶问题的解，
并且

\\[
p^\*=d^\*=L(x^\*,\alpha^\*,\beta^\*)
\\]


### KKT 条件 {#kkt-条件}

对原始问题和对偶问题，假设函数 \\(f(x)\\) 和 \\(c\_i(x)\\) 是凸函数， \\(h\_j(x)\\) 是仿射函数，
并且不等式约束 \\(c\_i(x)\\) 是严格执行的，则 \\(x^{\*},\alpha^{\*},\beta^\*\\) 被称为是原始问题和对偶问题的解
的充分必要条件是其满足：

\begin{align}
\nabla\_xL(x^\*,\alpha^\*,\beta^\*)=0 \\\\
\alpha\_i^\*c\_i(x^\*)=0 \\\\
c\_i(x^\*)\leq0 \\\\
\alpha\_i^\*\geq0 \\\\
h\_j(x^\*)=0 \\\\
\end{align}


## Links to this note {#links-to-this-note}

-   [多类支持向量机损失（SVM）]({{< relref "20201103080641-多类支持向量机损失_svm.md" >}})

    >   支持向量机（Support Vector Machine）是一种二类分类模型。
    > 它的基本模型是定义在特征空间上的间隔最大的线性分类器。
    > 它是最好的 “off-the-shelf” 监督学习算法。
-   [Dual Gradient Descent]({{< relref "20201031155750-dual_gradient_descent.md" >}})

    > [Lagrange multiplier]({{< relref "20201101162755-lagrange_multiplier.md" >}})
