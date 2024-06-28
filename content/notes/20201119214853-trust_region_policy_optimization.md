+++
title = "Trust Region Policy Optimization"
author = ["Fangyuan"]
date = 2020-11-19
slug = "20201119214853-trust-region-policy-optimization"
tags = ["rl"]
draft = false
+++

## Preliminaries {#preliminaries}

考虑一个无限长度的马尔科夫决策过程（MDP） \\((\mathcal{S},\mathcal{A},P,r,\rho\_0,\gamma)\\) ,
其中， \\(\mathcal{S}\\) 是关于状态的有限集， \\(\mathcal{A}\\) 是关于动作的有限集，
\\(P:\mathcal{S}\times\mathcal{A}\times\mathcal{S}\\) 是条件转移概率分布，
\\(r:\mathcal{S}\rightarrow R\\) 是奖励函数，
\\(\rho\_0:\mathcal{S}\rightarrow R\\) 是初始状态的分布，
\\(\gamma\in(0,1)\\) 是折扣因子。

令 \\(\pi:\mathcal{S}\times\mathcal{A}\rightarrow[0,1]\\) 为随机策略，
\\(\eta(\pi)\\) 为期望折扣奖励：
\\[
\eta(\pi)=E\_{s\_0,a\_0,\dots}\left[
\sum\_{t=0}^{\infty}\gamma^{t}r(s\_t)
\right]
\\]

其中， \\(s\_0\sim\rho\_0(s\_0),a\_t\sim\pi(a\_t|s\_t),s\_{t+1}\sim P(s\_{t+1}|s\_t,a\_t)\\)

定义状态-动作值函数 \\(Q\_{\pi}\\) ，值函数 \\(V\_{\pi}\\) ，奖励函数 \\(A\_{\pi}\\) ：

\begin{array}{l}
Q\_{\pi}\left(s\_{t}, a\_{t}\right)=\mathbb{E}\_{s\_{t+1}, a\_{t+1}, \ldots}\left[\sum\_{l=0}^{\infty} \gamma^{l} r\left(s\_{t+l}\right)\right] \\\\
V\_{\pi}\left(s\_{t}\right)=\mathbb{E}\_{a\_{t}, s\_{t+1}, \ldots}\left[\sum\_{l=0}^{\infty} \gamma^{l} r\left(s\_{t+l}\right)\right] \\\\
A\_{\pi}(s, a)=Q\_{\pi}(s, a)-V\_{\pi}(s), \text { where } \\\\
a\_{t} \sim \pi\left(a\_{t} \mid s\_{t}\right), s\_{t+1} \sim P\left(s\_{t+1} \mid s\_{t}, a\_{t}\right) \text { for } t \geq 0
\end{array}

下面这个式子表示随着步长积累的另一个策略 \\(\tilde{\pi}\\) 与当前策略 \\(\pi\\) 的关系：

\begin{equation}
\eta(\tilde{\pi})=\eta(\pi)+E\_{s\_0,a\_0,\dots\sim\tilde{\pi}}\left[
\sum\_{t=0}^{\infty}\gamma^{t}A\_{\pi}(s\_t,a\_t)
\right]
\end{equation}

上面的期望表明动作是取样自 \\(a\_t\sim\tilde{\pi}(\cdot|s\_t)\\) 。

证明如下：

\begin{equation\*}
\begin{split}
&\mathbb{E}\_{\tau \sim \tilde{\pi}}\left[\sum\_{t=0}^{\infty} \gamma^{t} A\_{\pi}\left(s\_{t}, a\_{t}\right)\right] \\\\
&=\mathbb{E}\_{\tau \sim \tilde{\pi}}\left[\sum\_{t=0}^{\infty} \gamma^{t}\left(r\left(s\_{t}\right)+\gamma V\_{\pi}\left(s\_{t+1}\right)-V\_{\pi}\left(s\_{t}\right)\right)\right] \\\\
&=\mathbb{E}\_{\tau \sim \tilde{\pi}}\left[-V\_{\pi}\left(s\_{0}\right)+\sum\_{t=0}^{\infty} \gamma^{t} r\left(s\_{t}\right)\right] \\\\
&=-\mathbb{E}\_{s\_{0}}\left[V\_{\pi}\left(s\_{0}\right)\right]+\mathbb{E}\_{r \mid \tilde{\pi}}\left[\sum\_{t=0}^{\infty} \gamma^{t} r\left(s\_{t}\right)\right] \\\\
&=-\eta(\pi)+\eta(\tilde{\eta})
\end{split}
\end{equation\*}

令 \\(\rho\_{\pi}\\) 表示状态的折扣访问频率：
\\[
\rho\_{\pi}(s)=P(s\_0=s)+\gamma P(s\_1=s)+\gamma^2 P(s\_2=s)+\dots
\\]

其中， \\(s\_0\sim\rho\_0\\) ，动作取样自 \\(\pi\\) 。

将等式（1）展开：

\begin{equation}
\begin{aligned}
\eta(\tilde{\pi}) &=\eta(\pi)+\sum\_{t=0}^{\infty} \sum\_{s} P\left(s\_{t}=s \mid \tilde{\pi}\right) \sum\_{a} \tilde{\pi}(a \mid s) \gamma^{t} A\_{\pi}(s, a) \\\\
&=\eta(\pi)+\sum\_{s} \sum\_{t=0}^{\infty} \gamma^{t} P\left(s\_{t}=s \mid \tilde{\pi}\right) \sum\_{a} \tilde{\pi}(a \mid s) A\_{\pi}(s, a) \\\\
&=\eta(\pi)+\sum\_{s} \rho\_{\tilde{\pi}}(s) \sum\_{a} \tilde{\pi}(a \mid s) A\_{\pi}(s, a)
\end{aligned}
\end{equation}

从上式可以看出，如果每次策略的更新 \\(\pi\rightarrow\tilde{\pi}\\) 中，每个状态 \\(s\\) 都有非负期望优势 \\(A\\) ，即
\\(\sum\_{a}\tilde{\pi}(a|s)A\_{\pi}(s,a)\geq0\\) ，那么就可以确保策略的期望回报是不断增加的。但是在训练过程中，我们很难保证
每个状态的期望优势都是非负的。由于 \\(\rho\_{\tilde{\pi}}(s)\\) 使等式二变得更复杂，因此我们做第一次近似：
\\[
L\_{\pi}(\tilde{\pi})=\eta(\pi)+\sum\_{s}\rho\_{\pi}(s)\sum\_{a}\tilde{\pi}(a|s)A\_{\pi}(s,a)
\\]

\\(L\_{\pi}\\) 忽视了由于策略改变引起的状态访问频率的变化，那么我们可以保证对 \\(L\_{\pi}\\) 的优化等同于对 \\(\eta\\) 的优化吗？

可以发现：

\begin{aligned}
L\_{\pi\_{\theta\_{0}}}\left(\pi\_{\theta\_{0}}\right) &=\eta\left(\pi\_{\theta\_{0}}\right) \\\\
\left.\nabla\_{\theta} L\_{\pi\_{\theta\_{0}}}\left(\pi\_{\theta}\right)\right|\_{\theta=\theta\_{0}} &=\left.\nabla\_{\theta} \eta\left(\pi\_{\theta}\right)\right|\_{\theta=\theta\_{0}}
\end{aligned}

即，在 \\(\pi\_{\theta\_0}\\) 作一个很小的改变，如果提高 \\(L\_{\pi}\\) ，那么也会提高 \\(\eta\\) 。
但这个式子并没有给出步长应该走多少。

为了解决这个问题，Kakade 和 Langford 给出了一个策略更新方法——conservative policy iteration，
提供了一个能够提高 \\(\eta\\) 的明确的下限。
令 \\(\pi\_{old}\\) 表示当前策略， \\(\pi^{\prime}=\arg\max\_{\pi^{\prime}}L\_{\pi\_{old}}(\pi^{\prime})\\) ，
新的策略为：
\\[
\pi\_{new}(a|s)=(1-\alpha)\pi\_{old}(a|s)+\alpha\pi^{\prime}(a|s)
\\]

下限为：

\begin{equation}
\begin{aligned}
\eta\left(\pi\_{\text {new }}\right) & \geq L\_{\pi\_{\text {old }}}\left(\pi\_{\text {new }}\right)-\frac{2 \epsilon \gamma}{(1-\gamma)^{2}} \alpha^{2} \\\\
& \text { where } \epsilon=\max \_{s}\left|\mathbb{E}\_{a \sim \pi^{\prime}(a \mid s)}\left[A\_{\pi}(s, a)\right]\right|
\end{aligned}
\end{equation}

等式（3）表明，对等式右边的提升可以确保左边的提升。
我们的主要理论结果是，通过用 \\(\pi\\) 和 \\(\tilde{\pi}\\) 之间的距离替换 \\(\alpha\\) ，并适当更改常数 \\(\varepsilon\\) 使
等式（3）中策略改进范围扩展到一般随机策略，而不仅仅是混合策略（ \\(\pi\_(new)\\) ）。
我们使用 total variation divergence 来衡量两个策略之间的距离。对于离散环境， \\(D\_{TV}(p||q)=\frac{1}{2}\sum\_{i}|p\_i-q\_i\\) ，
连续环境中使用密度函数。

\\[
D\_{TV}^{\max}=\max\_{s}D\_{TV}(\pi(\cdot|s)||\tilde{\pi}(\cdot|s))
\\]

<div class="theorem">

令 \\(\alpha=D\_{TV}^{\max}(\pi\_{old},\pi\_{new})\\) ，下限为：

\begin{equation}
\begin{array}{c}
\eta\left(\pi\_{\text {new }}\right) \geq L\_{\pi\_{\text {old }}}\left(\pi\_{\text {new }}\right)-\frac{4 \epsilon \gamma}{(1-\gamma)^{2}} \alpha^{2} \\\\
\text { where } \epsilon=\max \_{s, a}\left|A\_{\pi}(s, a)\right|
\end{array}
\end{equation}

</div>

可以发现 TV 散度和 KL 散度之间的关系为： \\(D\_{TV}(p||q)^2\leq D\_{KL}(p||q)\\) 。
令 \\(D\_{KL}^{\max}(\pi,\tilde{\pi})=\max\_{s}D\_{KL}(\pi\_(\cdot|s)||\tilde{\pi}(\cdot|s))\\) ，
等式（4）可以写成：

\begin{equation}
\begin{aligned}
\eta(\tilde{\pi}) & \geq L\_{\pi}(\tilde{\pi})-C D\_{\mathrm{KL}}^{\max }(\pi, \tilde{\pi}) \\\\
& \text { where } C=\frac{4 \epsilon \gamma}{(1-\gamma)^{2}}
\end{aligned}
\end{equation}

算法 1 描述了基于等式（5）的策略梯度更新算法：

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

{{< figure src="/img/trpo/algo_1.png" caption="<span class=\"figure-number\">Figure 1: </span>Algorithm 1" >}}

</div>

使用算法 1 可以使策略回报随着时间变化而递增， \\(\eta(\pi\_0)\leq\eta(\pi\_2)\leq\dots\\) ，
令 \\(M\_{i}(\pi)=L\_{\pi\_i}(\pi)-CD\_{KL}^{\max}(\pi\_i,\pi)\\) ，

\begin{equation}
\begin{split}
&\eta(\pi\_{i+1}\geq M\_{i}(\pi\_{i+1}))\quad by\quad Equation\quad (5) \\\\
&\eta(\pi\_i)=M\_{i}(\pi\_i),\quad therefore, \\\\
&\eta(\pi\_{i+1})-\eta(\pi\_{i})\geq M\_{i}(\pi\_{i+1})-M(\pi\_i)
\end{split}
\end{equation}

通过在每一步最大化 \\(M\_i\\) ，我们可以确保目标 \\(\eta\\) 是非递减的。

接下来介绍的 TRPO 算法是算法 1 的近似，通过对 KL 散度加约束而不是使用它作为惩罚项，
来获得最大程度的更新。


### Optimization of Parameterized Policies {#optimization-of-parameterized-policies}

对前面的标记做个简化： \\(\eta(\theta):=\eta(\pi\_{\theta}),L\_{\theta}(\tilde{\theta}),D\_{KL}(\theta||\tilde{\theta}):=D\_{KL}(\pi\_{\theta}||\pi\_{\tilde{\theta}})\\) 。

之前得到的不等式为 \\(\eta(\theta)\geq L\_{\theta\_{old}}(\theta)-CD\_{KL}^{\max}(\theta\_{old},\theta)\\) ，
\\(\theta=\theta\_{old}\\) 时等式成立。通过实现下式来保证目标不断被优化：
\\[
\max\_{\theta}[L\_{\theta\_{old}}(\theta)-CD\_{KL}^{\max}(\theta\_{old},\theta)]
\\]

在实际运算时，理论算法可能会有问题。


#### 更新步长太小 {#更新步长太小}

如果我们使用推导的 \\(C\\) 作为更新步长，更新步幅是很小的。
但上诉问题可以转化为约束问题，把 KL 散度当成约束，这样更新步幅就会变大了：

\begin{equation}
\begin{array}{l}
\underset{\theta}{\operatorname{maximize}} L\_{\theta\_{\mathrm{old}}}(\theta) \\\\
\text { subject to } D\_{\mathrm{KL}}^{\max }\left(\theta\_{\mathrm{old}}, \theta\right) \leq \delta
\end{array}
\end{equation}


#### 计算复杂度很高 {#计算复杂度很高}

理论上的 KL 散度是对所有状态空间的策略都要进行计算，我们使用平均 KL 散度进行替代。

\\[
D\_{KL}^{\rho}(\theta\_1,\theta\_2):=\mathbb{E}\_{s\sim\rho}[D\_{KL}(\pi\_{\theta\_1}(\cdot|s)||\pi\_{\theta\_2}(\cdot|s))]
\\]

我们的优化函数变成了这样：

\begin{equation}
\begin{array}{l}
\underset{\theta}{\operatorname{maximize}} L\_{\theta\_{\mathrm{old}}}(\theta) \\\\
\text { subject to } \bar{D}\_{\mathrm{KL}}^{\rho\_{\theta \mathrm{old}}}\left(\theta\_{\mathrm{old}}, \theta\right) \leq \delta
\end{array}
\end{equation}


### Sample-Based Estimation of the Objective and Constraint {#sample-based-estimation-of-the-objective-and-constraint}

将上诉优化函数展开：

\begin{equation}
\begin{array}{r}
\underset{\theta}{\operatorname{maximize}} \sum\_{s} \rho\_{\theta\_{\text {old }}}(s) \sum\_{a} \pi\_{\theta}(a \mid s) A\_{\theta\_{\text {old }}}(s, a) \\\\
\text { subject to } \bar{D}\_{\mathrm{KL}}^{\rho\_{\text {old }}}\left(\theta\_{\text {old }}, \theta\right) \leq \delta
\end{array}
\end{equation}

接下来我们对上式做三处近似：

1.  使用期望 \\(\frac{1}{1-\gamma}\mathbb{E}\_{s\sim\rho\_{\theta\_{old}}}[\dots]\\) 来近似 \\(\sum\_{s}\rho\_{\theta\_{old}}(s)[\dots]\\)
2.  使用 Q 值 \\(Q\_{\theta\_{old}}\\) 近似 \\(A\_{\theta\_{old}}\\)
3.  使用重要性采样估计 \\(\sum\_{a}[\dots]\\)

\\[
\sum\_{a} \pi\_{\theta}\left(a \mid s\_{n}\right) A\_{\theta\_{\mathrm{old}}}\left(s\_{n}, a\right)=\mathbb{E}\_{a \sim q}\left[\frac{\pi\_{\theta}\left(a \mid s\_{n}\right)}{q\left(a \mid s\_{n}\right)} A\_{\theta\_{\mathrm{old}}}\left(s\_{n}, a\right)\right]
\\]

得到了最后的优化方程：
\begin{equation}

\begin{array}{l}
\underset{\theta}{\operatorname{maximize}} \mathbb{E}\_{s \sim \rho\_{\theta \mathrm{old}}, a \sim q}\left[\frac{\pi\_{\theta}(a \mid s)}{q(a \mid s)} Q\_{\theta\_{\mathrm{old}}}(s, a)\right] \\\\
\text { subject to } \mathbb{E}\_{s \sim \rho\_{\theta \mathrm{old}}}\left[D\_{\mathrm{KL}}\left(\pi\_{\theta\_{\mathrm{old}}}(\cdot \mid s) \\| \pi\_{\theta}(\cdot \mid s)\right)\right] \leq \delta
\end{array}

\begin{equation}


#### Single Path {#single-path}

先取样第一个状态 \\(s\_0\sim\rho\_0\\) ，然后用策略 \\(\pi\_{\theta\_{old}}\\) 生成一条轨迹：
\\(s\_0,a\_0,s\_1,a\_1,\dots,s\_{T-1},a\_{T-1},s\_{T}\\) 。
因此 \\(q(a|s)=\pi\_{\theta\_{old}}(a|s)\\) ，Q 值是在每次轨迹结束之后计算的折扣奖励和。


#### Vine {#vine}

先取样第一个状态 \\(s\_0\sim\rho\_0\\) ，然后用策略 \\(\pi\_{\theta\_i}\\) 生成一系列轨迹。
然后，从这些轨迹中选 N 个状态 \\(s\_1,s\_2,\dots,s\_N\\) 组成 rollout 集。
对 rollout 集中每一个状态 \\(s\_n\\) ，使用 \\(q\\) 进行动作采样 \\(a\_{n,k}\sim q(\cdot|s\_n)\\) 。
对每个在 \\(s\_n\\) 采样到的动作 \\(a\_{n,k}\\) ，对其继续采样一个短的轨迹，来计算其 Q 值 \\(\hat{Q}(s\_n,a\_n,k)\\) 。


### Practical Algorithm {#practical-algorithm}

1.  使用 Single-Path 或 Vine 方法进行采样
2.  计算最终优化函数中的目标值的期望
3.  近似的去解这个优化问题来更新策略参数 \\(\theta\\) 。


## Links to this note {#links-to-this-note}

-   [Model Free RL]({{< relref "20201119214221-model_free_rl.md" >}})

    > 免模型强化学习算法。
