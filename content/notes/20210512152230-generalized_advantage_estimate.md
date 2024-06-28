+++
title = "Generalized Advantage Estimate"
author = ["Fangyuan"]
date = 2021-05-12
slug = "20210512152230-generalized-advantage-estimate"
tags = ["GAE"]
draft = false
+++

## Preliminaries {#preliminaries}

Policy gradient methods maximize the expected total reward by repeatedly
estimating the gradient \\(g:=\nabla\_{\theta} \mathbf{E}[\sum\_{t=0}^{\infty}r\_{t}]\\) .
There are several different related expressions for the policy gradient,
which have the form

\begin{equation\*}
g = \mathbf{E}\left[
\sum\_{t=0}^{\infty}\Psi\_{t}\nabla\_{\theta}\log\pi\_{\theta}(a\_{t}|s\_{t})
\right]
\end{equation\*}

where \\(\Psi\_{t}\\) may be one of the follows(All unbiased):

1.  \\(\sum\_{t=0}^{\infty}r\_{t}\\): total reward of the trajectory.
2.  \\(\sum\_{t^{\prime}=t}^{\infty}r\_{t^{\prime}}\\): rewards following action \\(a\_t\\).
3.  \\(\sum\_{t^{\prime}=t}^{\infty}r\_{t^{\prime}}-b(s\_{t})\\): baselined version of previous formula.
4.  \\(Q^{\pi}(s\_{t},a\_{t})\\) state-action value function.
5.  \\(A^{\pi}(s\_{t}, a\_{t})\\) advantage function.
6.  \\(r\_t + V^{\pi}(s\_{t+1}) - V^{\pi}(s\_{t})\\): TD residual.

The first three formulas are deduced in [Policy Gradient]({{< relref "20210105204602-policy_gradient.md" >}}).

The latter formulas use the definitions:

\begin{equation\*}
V^{\pi}(s\_t) := \mathbf{E}\_{s\_{t+1}:\infty,a\_{t}:\infty}
\left[
\sum\_{l=0}^{\infty}r\_{t+l}
\right]
\end{equation\*}

\begin{equation\*}
Q^{\pi}(s\_t,a\_t) := \mathbf{E}\_{s\_{t+1}:\infty,a\_{t+1}:\infty}
\left[
\sum\_{l=0}^{\infty}r\_{t+l}
\right]
\end{equation\*}

\begin{equation\*}
A^{\pi}(s\_t, a\_t) := Q^{\pi}(s\_t, a\_t) - V^{\pi}(s\_t)
\end{equation\*}

The advantage function measures whether or not the action is better or worse
than the policy's default behavior. And it's gradient item <span class="underline">points in the</span>
<span class="underline">direction of increased policy if and only if the advantage function \\(>\\) 0</span>.

Then we introduce a parameter \\(\gamma\\) that allow us to reduce variance by
downweighting rewards corresponding to delayed effects, at the cost of
introducing bias.
The discounted value functions are given by:

\begin{equation\*}
V^{\pi,\gamma}(s\_t) := \mathbf{E}\_{s\_{t+1}:\infty,a\_{t}:\infty}
\left[
\sum\_{l=0}^{\infty}\gamma^{l}r\_{t+l}
\right]
\end{equation\*}

\begin{equation\*}
Q^{\pi,\gamma}(s\_t) := \mathbf{E}\_{s\_{t+1}:\infty,a\_{t+1}:\infty}
\left[
\sum\_{l=0}^{\infty}\gamma^{l}r\_{t+l}
\right]
\end{equation\*}

\begin{equation\*}
A^{\pi\gamma}(s\_t, a\_t) := Q^{\pi,\gamma}(s\_t, a\_t) - V^{\pi,\gamma}(s\_t)
\end{equation\*}

It's a biased(but not too biased) estimate of \\(A^{\pi}\\).

And the discounted approximation to the policy gradient is

\begin{equation\*}
g^{\gamma} :=
\mathbf{E}\_{s\_{0:\infty},a\_{0:\infty}}
\left[
\sum\_{t=0}^{\infty}
A^{\pi,\gamma}(s\_t,a\_t)\nabla\_{\theta}\log\pi\_{\theta}(a\_t|s\_t)
\right]
\end{equation\*}

Here we want to concern about unbiased estimate of \\(A^{\pi,\gamma}\\).

**Definition** The estimator \\(\hat{A\_{t}}\\) is $&gamma;$-just if
\\[
\mathbf{E}\_{s\_{0:\infty},a\_{0:\infty}}
\left[
\hat{A\_t}(s\_{0:\infty})\nabla\_{\theta}\log\pi\_{\theta}(a\_t|s\_t)
\right] =
\mathbf{E}\_{s\_{0:\infty},a\_{0:\infty}}
\left[
A^{\pi,\gamma}(s\_t,a\_t)\nabla\_{\theta}\log\pi\_{\theta}(a\_t|s\_t)
\right]
\\]

It follows immediately that if \\(\hat{A\_t}\\) is $&gamma;$-just, then

\begin{equation\*}
\mathbf{E}\_{s\_{0:\infty},a\_{0:\infty}}
\left[
\sum\_{t=0}^{\infty}\hat{A\_t}(s\_{0:\infty})\nabla\_{\theta}\log\pi\_{\theta}(a\_t|s\_t)
\right] = g^{\gamma}
\end{equation\*}

Suppose that \\(\hat{A\_t}\\) can be written in the form
\\(\hat{A\_t}(s\_{0:\infty},a\_{0:\infty})=Q\_{t}(s\_{t:\infty},a\_{t:\infty})-b\_{t}(s\_{0:t},a\_{0:t-1})\\)
such that for all \\((s\_t,a\_t)\\), \\(\mathbf{E}\_{s\_{t+1:\infty},a\_{t+1:\infty}|s\_t,a\_t}Q\_{t}(s\_{t:\infty},a\_{t:\infty})=Q^{\pi,\gamma}(s\_t,a\_t)\\)
then \\(\hat{A\_{t}}\\) is $&gamma;$-just.

**STILL not prove above. Didn't understand the prefix proof in original paper.**

It's easy to verify that the following expressions are $&gamma;$-just
advantage estimators for \\(\hat{A\_t}\\):

-   \\(\sum\_{l=0}^{\infty}\gamma^{l}r\_{t+1}\\)
-   \\(Q^{\pi,\gamma}(s\_t,a\_t)\\)
-   \\(A^{\pi,\gamma}(s\_t,a\_t)\\)
-   \\(r\_t + \gamma V^{\pi,\gamma}(s\_{t+1}) - V^{\pi,\gamma}(s\_t)\\)


## Advantage Function estimation {#advantage-function-estimation}

Our estimator of policy gradient is
\\[
\hat{g} = \frac{1}{N}\sum\_{n=1}^{N}\sum\_{t=0}^{\infty}
\hat{A\_t^{n}}\nabla\_{\theta}\log\pi\_{\theta}(a\_t^n|s^t\_n)
\\]

where \\(n\\) indexes over a batch of episodes.

Let \\(V\\) be an approximate value function.
Define \\(\delta\_t^V=r\_t+\gamma V(s\_{t+1}) - V(s\_t)\\), i.e., the TD residual of
V with dicounted \\(\gamma\\).

If we have correct value function \\(V = V^{\pi,\gamma}\\), then

\begin{aligned}
\mathbf{E}\_{s\_{t+1}}\left[\sigma\_{t}^{V^{\pi,\gamma}}\right] &= \mathbf{E}\_{s\_{t+1}}\left[ r\_t+\gamma V^{\pi,\gamma}(s\_{t+1}) - V^{\pi,\gamma}(s\_t) \right] \\\\
&= \mathbf{E}\_{s\_{t+1}}\left[ Q^{\pi,\gamma}(s\_{t}, a\_{t}) - V^{\pi,\gamma}(s\_t) \right] \\\\
&= A^{\pi,\gamma}(s\_t,a\_t)
\end{aligned}

However, this estimator is only $&gamma;$-just for \\(V=V^{\pi,\gamma}\\),
otherwise it will yield biased policy gradient estimates.

Next let us consider taking the sum of \\(k\\) of these \\(\sigma\\) items,
which we will denote by \\(\hat{A\_t}^{k}\\)
\\[
\hat{A}\_{t}^{(k)}:=\sum\_{l=0}^{k-1} \gamma^{l} \delta\_{t+l}^{V}=-V\left(s\_{t}\right)+r\_{t}+\gamma r\_{t+1}+\cdots+\gamma^{k-1} r\_{t+k-1}+\gamma^{k} V\left(s\_{t+k}\right)
\\]

which is simply the empirical returns minus the value function baseline.

The **GAE(generalized advantage estimator)** is defined as the exponentially-weighted
average of these \\(k\\) -step estimators:

\begin{aligned}
\hat{A}\_{t}^{\mathrm{GAE}(\gamma, \lambda)} &:=(1-\lambda)\left(\hat{A}\_{t}^{(1)}+\lambda \hat{A}\_{t}^{(2)}+\lambda^{2} \hat{A}\_{t}^{(3)}+\ldots\right) \\\\
&=(1-\lambda)\left(\delta\_{t}^{V}+\lambda\left(\delta\_{t}^{V}+\gamma \delta\_{t+1}^{V}\right)+\lambda^{2}\left(\delta\_{t}^{V}+\gamma \delta\_{t+1}^{V}+\gamma^{2} \delta\_{t+2}^{V}\right)+\ldots\right) \\\\
&=(1-\lambda)\left(\delta\_{t}^{V}\left(1+\lambda+\lambda^{2}+\ldots\right)+\gamma \delta\_{t+1}^{V}\left(\lambda+\lambda^{2}+\lambda^{3}+\ldots\right)\right.\\\\
&\left.\quad+\gamma^{2} \delta\_{t+2}^{V}\left(\lambda^{2}+\lambda^{3}+\lambda^{4}+\ldots\right)+\ldots\right) \\\\
=&(1-\lambda)\left(\delta\_{t}^{V}\left(\frac{1}{1-\lambda}\right)+\gamma \delta\_{t+1}^{V}\left(\frac{\lambda}{1-\lambda}\right)+\gamma^{2} \delta\_{t+2}^{V}\left(\frac{\lambda^{2}}{1-\lambda}\right)+\ldots\right) \\\\
=& \sum\_{l=0}^{\infty}(\gamma \lambda)^{l} \delta\_{t+l}^{V}
\end{aligned}

There are two notable special cases of this formula, obtained by setting
\\(\lambda=0\\) and \\(\lambda=1\\).

\begin{array}{ll}
\operatorname{GAE}(\gamma, 0): & \hat{A}\_{t}:=\delta\_{t} \quad=r\_{t}+\gamma V\left(s\_{t+1}\right)-V\left(s\_{t}\right) \\\\
\operatorname{GAE}(\gamma, 1): & \hat{A}\_{t}:=\sum\_{l=0}^{\infty} \gamma^{l} \delta\_{t+l}=\sum\_{l=0}^{\infty} \gamma^{l} r\_{t+l}-V\left(s\_{t}\right)
\end{array}

\\(GAE(\gamma,0)\\) is \\(\gamma\\) -just for \\(V=V^{\pi,\gamma}\\) and otherwise induces
bias, but it typically has much lower variance.
\\(GAE(\gamma,1)\\) is \\(\gamma\\) -just regardless of the accuracy of \\(V\\), but it has
high variance due to the sum of terms.
Empirically, we find that the best value of \\(\lambda\\) is much **lower** than the best
value of \\(\gamma\\), likely because \\(\lambda\\) introduces far less bias than \\(\gamma\\)
for a reasonably accurate value function.

\begin{equation}
g^{\gamma} \approx \mathbb{E}\left[\sum\_{t=0}^{\infty} \nabla\_{\theta} \log \pi\_{\theta}\left(a\_{t} \mid s\_{t}\right) \hat{A}\_{t}^{\mathrm{GAE}(\gamma, \lambda)}\right]=\mathbb{E}\left[\sum\_{t=0}^{\infty} \nabla\_{\theta} \log \pi\_{\theta}\left(a\_{t} \mid s\_{t}\right) \sum\_{l=0}^{\infty}(\gamma \lambda)^{l} \delta\_{t+l}^{V}\right]
\end{equation}

where equality hold s when \\(\lambda=1\\).


### Reward shaping {#reward-shaping}

[Reward Shaping]({{< relref "20210515145234-reward_shaping.md" >}})


### Value function estimation {#value-function-estimation}


## Methods {#methods}

{{< figure src="/img/gae/Methods/2021-05-13_11-54-31_screenshot.png" >}}


## Conclusion {#conclusion}
