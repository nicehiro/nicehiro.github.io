+++
title = "Iterative Linear Quadratic Regression"
author = ["Fangyuan"]
date = 2020-10-31
slug = "20201031113807-iterative-linear-quadratic-regression"
tags = ["math", "lqr", "ilqr"]
draft = false
+++

## Description {#description}

[LQR]({{< relref "20201031112847-linear_quadratic_regression.md" >}}) 方法适用于状态转移方程为线性的，损失函数为二次的环境中，但实际中很多问题都不满足这个条件。
那么我们用一个线性方程来近似拟合现实问题的非线性环境动力学方程吗？

可以使用泰勒展开来近似。
\\[
f\left(\mathbf{x}\_{t}, \mathbf{u}\_{t}\right) \approx f\left(\hat{\mathbf{x}}\_{t}, \hat{\mathbf{u}}\_{t}\right)+\nabla\_{\mathbf{x}\_{t}, \mathbf{u}\_{t}} f\left(\hat{\mathbf{x}}\_{t}, \hat{\mathbf{u}}\_{t}\right)\left[\begin{array}{c}
\mathbf{x}\_{t}-\hat{\mathbf{x}}\_{t} \\\\
\mathbf{u}\_{t}-\hat{\mathbf{u}}\_{t}
\end{array}\right]
\\]
\\[
c\left(\mathbf{x}\_{t}, \mathbf{u}\_{t}\right) \approx c\left(\hat{\mathbf{x}}\_{t}, \hat{\mathbf{u}}\_{t}\right)+\nabla\_{\mathbf{x}\_{t}}, \mathbf{u}\_{t} c\left(\hat{\mathbf{x}}\_{t}, \hat{\mathbf{u}}\_{t}\right)\left[\begin{array}{c}
\mathbf{x}\_{t}-\hat{\mathbf{x}}\_{t} \\\\
\mathbf{u}\_{t}-\hat{\mathbf{u}}\_{t}
\end{array}\right]+\frac{1}{2}\left[\begin{array}{c}
\mathbf{x}\_{t}-\hat{\mathbf{x}}\_{t} \\\\
\mathbf{u}\_{t}-\hat{\mathbf{u}}\_{t}
\end{array}\right]^{T} \nabla\_{\mathbf{x}\_{t}, \mathbf{u}\_{t}}^{2} c\left(\hat{\mathbf{x}}\_{t}, \hat{\mathbf{u}}\_{t}\right)\left[\begin{array}{c}
\mathbf{x}\_{t}-\hat{\mathbf{x}}\_{t} \\\\
\mathbf{u}\_{t}-\hat{\mathbf{u}}\_{t}
\end{array}\right]
\\]

移项之后，化简：
\\[
\bar{f}\left(\delta \mathbf{x}\_{t}, \delta \mathbf{u}\_{t}\right)=\mathbf{F}\_{t}\left[\begin{array}{l}
\delta \mathbf{x}\_{t} \\\\
\delta \mathbf{u}\_{t}
\end{array}\right]
\\]
\\[
\bar{c}\left(\delta \mathbf{x}\_{t}, \delta \mathbf{u}\_{t}\right)=\frac{1}{2}\left[\begin{array}{c}
\delta \mathbf{x}\_{t} \\\\
\delta \mathbf{u}\_{t}
\end{array}\right]^{T} \begin{array}{c}
\mathbf{C}\_{t}\left[\begin{array}{c}
\delta \mathbf{x}\_{t} \\\\
\delta \mathbf{u}\_{t}
\end{array}\right]+\left[\begin{array}{c}
\delta \mathbf{x}\_{t} \\\\
\delta \mathbf{u}\_{t}
\end{array}\right]^{T} \mathbf{c}\_{t}
\end{array}
\\]

其中：
\\[
\mathbf{F}\_t=\nabla\_{\mathbf{x}\_t,\mathbf{u}\_t}f\left(\hat{\mathbf{x}\_t},\hat{\mathbf{u}\_t}\right)
\\]
\\[
\mathbf{C}\_t=\nabla^{2}\_{\mathbf{x}\_t,\mathbf{u}\_t}c\left(\hat{\mathbf{x}\_t},\hat{\mathbf{u}\_t}\right)
\\]
\\[
\mathbf{c}\_t=\nabla\_{\hat{\mathbf{x}\_t},\hat{\mathbf{u}\_t}}c\left(\hat{\mathbf{x}\_t},\hat{\mathbf{u}\_t}\right)
\\]
\\[
\delta\_{\mathbf{x}\_t}=\mathbf{x}\_t-\hat{\mathbf{x}\_t}
\\]
\\[
\delta\_{\mathbf{u}\_t}=\mathbf{u}\_t-\hat{\mathbf{u}\_t}
\\]

我们将其转换成了一个 LQR 问题。至此，我们可以得到 iLQR 算法：

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/rl-sergey/lec-10-8.png" width="100%" >}}

</div>


## Links to this note {#links-to-this-note}

-   [Description]({{< relref "20201031125537-guided_search_method_v1.md#description" >}})

    > [Importance Sampling]({{< relref "20201031155429-importance_sampling.md" >}})
-   [Model Based RL]({{< relref "20201031101403-model_based_rl.md" >}})

    >   无模型的强化学习不需要知道环境动力学方程，只要不断的进行试错和更新策略的过程就可以很好的进行训练了。
    > 但基于模型的强化学习需要用到环境动力学方程，
    > 在此基础上，对未来进行规划，从而达到加速训练和提高训练结果的效果。
