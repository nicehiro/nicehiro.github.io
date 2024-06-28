+++
title = "Off Policy Actor Critic"
author = ["Fangyuan"]
date = 2021-05-18
slug = "20210518145521-off-policy-actor-critic"
tags = ["rl", "off-policy"]
draft = false
+++

## Preliminary {#preliminary}

One disadvantage of [REINFORCE]({{< relref "20210107162935-reinforce.md" >}}) is low data utilization.

The advantages of off-policy methods:

1.  Learning about an optimal policy while executing an **exploratory** policy.
2.  Learning from demonstration.
3.  Learn multiple tasks in parallel.

The objective function is

\begin{equation\*}
J\_{\gamma}(\mu) = \sum\_{s \in S} d^{b}(s)V^{\pi\_{u},\gamma}(s)
\end{equation\*}

where \\(d^{b}(s)\\) is the limiting distribution of states under \\(b\\) and
\\(P(s\_t = s | s\_0, b)\\) is the probability that \\(s\_t = s\\) when starting
in \\(s\_0\\) and executing \\(b\\). In the off-policy settings, data is obtained
according to this behavior distribution \\(b\\).

In this paper, we consider the version of off-PAC that update its critic
weights by the [Gradient Temporal-Difference]({{< relref "20210519152943-gradient_temporal_difference.md" >}}).


## Off-PAC policy gradient estimation {#off-pac-policy-gradient-estimation}

\begin{aligned}
&\nabla\_{u} J\_{\gamma}(u) \\\\
&= \nabla\_{u} \left[ \sum\_{s\in S} d^{b}(s) \sum\_{a\in A} \pi(a|s) Q^{\pi,\gamma}(s,a) \right] \\\\
&= \sum\_{s\in S}d^{b}(s) \sum\_{a\in A} \left[ \nabla\_{u}\pi(a|s)Q^{\pi,\gamma}(s,a) + \pi(a|s)\nabla\_{u}Q^{\pi,\gamma}(s,a) \right] \\\\
&\approx \sum\_{s\in S}d^{b}(s) \sum\_{a\in A} \nabla\_{u}\pi(a|s)Q^{\pi,\gamma}(s,a) \\\\
&= \mathbb{E}\_{s\sim d^{b}} \sum\_{a\in A} \nabla\_{u}\pi(a|s)Q^{\pi,\gamma}(s,a) \\\\
&= \mathbb{E}\_{s\sim d^{b}} \sum\_{a\in A} b(a|s) \frac{\pi(a|s)}{b(a|s)}\frac{\nabla\_{u}\pi(a|s)}{\pi(a|s)}Q^{\pi,\gamma}(s,a) \\\\
&= \mathbb{E}\_{s\sim d^{b},a\sim b} \frac{\pi(a|s)}{b(a|s)}\frac{\nabla\_{u}\pi(a|s)}{\pi(a|s)}Q^{\pi,\gamma}(s,a) \\\\
&= \mathbb{E}\_{b} \frac{\pi(a|s)}{b(a|s)}\frac{\nabla\_{u}\pi(a|s)}{\pi(a|s)}Q^{\pi,\gamma}(s,a) \\\\
&= \mathbb{E}\_{b} \frac{\pi(a|s)}{b(a|s)}\nabla\_{u}\log\pi(a|s)Q^{\pi,\gamma}(s,a) \\\\
\end{aligned}

The derivation above use [Importance Sampling]({{< relref "20201031155429-importance_sampling.md" >}}).


## Links to this note {#links-to-this-note}

-   [Deterministic Policy Gradient]({{< relref "20210530130547-deterministic_policy_gradient.md" >}})

    >   The basic idea of policy gradient algorithm in continuous action spaces
    > environment is to represent the policy by a **parametric probability distribution**
    > \\(\pi\_{\theta}(a|s)=\mathbb{P}[a|s;\theta]\\) that stochastically selects action a
    > in state s according to parameter vector \\(\theta\\).
