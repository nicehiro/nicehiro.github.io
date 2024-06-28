+++
title = "Deterministic Policy Gradient"
author = ["Fangyuan"]
date = 2021-05-30
slug = "20210530130547-deterministic-policy-gradient"
tags = ["rl", "dpg"]
draft = false
+++

## Related Works {#related-works}

The basic idea of policy gradient algorithm in continuous action spaces
environment is to represent the policy by a **parametric probability distribution**
\\(\pi\_{\theta}(a|s)=\mathbb{P}[a|s;\theta]\\) that stochastically selects action a
in state s according to parameter vector \\(\theta\\).

In this paper we instead consider deterministic policies \\(a=\mu\_{\theta}(s)\\).

In the stochastic case, the policy gradient integrates over both **state** and
**action** spaces, whereas in the deterministic case it **only** integrates over the
**state** spaces. As a result, computing the stochastic policy gradient may require
more samples, especially if action space has many dimensions.

Then we introduce the off-policy learning algorithm to ensure that our
deterministic policy continue to explore satisfactorily.


### Preliminary {#preliminary}

We denote the density at state \\(s^{\prime}\\) after transitioning for \\(t\\) time
steps from state \\(s\\) by
\\[p(s \rightarrow s^{\prime}, t, \pi)\\]
and the discounted state distribution by
\\[\rho^{\pi}(s^{\prime}) := \int\_{S}\sum\_{t=1}^{\infty}\gamma^{t-1}p\_{1}(s)p(s \rightarrow s^{\prime}, t, \pi)ds\\]


#### Stochastic Policy Gradient Theorem {#stochastic-policy-gradient-theorem}

The basic idea behind these algorithm is to adjust the parameters \\(\theta\\) of
the policy in the direction of the performance gradient \\(\nabla\_{\theta}J(\pi\_{\theta})\\).

We can write the performance objective as an expectation:

\begin{equation\*}
\begin{aligned}
\nabla\_{\theta} J\left(\pi\_{\theta}\right) &=\int\_{\mathcal{S}} \rho^{\pi}(s) \int\_{\mathcal{A}} \nabla\_{\theta} \pi\_{\theta}(a \mid s) Q^{\pi}(s, a) \mathrm{d} a \mathrm{~d} s \\\\
&=\mathbb{E}\_{s \sim \rho^{\pi}, a \sim \pi\_{\theta}}\left[\nabla\_{\theta} \log \pi\_{\theta}(a \mid s) Q^{\pi}(s, a)\right]
\end{aligned}
\end{equation\*}

**Notes**:

1.  \\(\pi\_{\theta}(a|s)\\) is the probability distribution of action spaces.
    For instance, in the discrete action spaces, policy net's outputs are several
    action probability number. Our goal here is to increase the probability of
    good actions.

2.  \\(Q^{\pi}(s,a)\\) is the unbiased expectation of state and action pair.
    We use this to estimate the goodness of the action.

And the derivation procedure of the above is in [Policy Gradient]({{< relref "20210105204602-policy_gradient.md" >}}).


#### Stochastic Actor-Critic Algorithm {#stochastic-actor-critic-algorithm}

The actor-critic is a widely used architecture based on the policy gradient
theorem. The actor adjusts the parameters \\(\theta\\) of the stochastic policy
\\(\pi\_{\theta}\\) by above equation. The critic uses an action-value function
\\(Q^{w}(s,a)\\) with parameter vector \\(w\\) instead of unknown true action-value
function \\(Q^{\pi}(s,a)\\).


#### Off-Policy Actor-Critic {#off-policy-actor-critic}

See [Off Policy Actor Critic]({{< relref "20210518145521-off_policy_actor_critic.md" >}})


## Views {#views}


### Deterministic Policy Gradient Theorem {#deterministic-policy-gradient-theorem}

In continuous action spaces, greedy policy improvement becomes problematic,
requiring a global maximization at every step.
Instead, a simple and computationally attractive alternative is to move the
policy in the direction of the gradient of \\(Q\\), rather than globally
maximizing \\(Q\\). Specifically, for each visited state \\(s\\), the policy parameters
\\(\theta\\) are updated in proportion to the gradient \\(\nabla\_{\theta}Q^{\mu}(s,\mu\_{\theta}(s))\\).

By applying the chain rule we see that the policy improvement may be decomposed
into the gradient of the action value with respect to actions, and the gradient
of the policy with respect to the policy parameters.

\begin{equation\*}
\begin{aligned}
\theta^{k+1} &= \theta^{k} + \alpha\mathbb{E}\_{s\sim\rho^{\mu^{k}}}
\left[
\nabla\_{\theta} Q^{\mu^{k}} (s,\mu\_{\theta}(s))
\right] \\\\
&=
\theta^{k} + \alpha\mathbb{E}\_{s\sim\rho^{\mu^{k}}}
\left[
\nabla\_{\theta}\mu\_{\theta}(s)
\nabla\_{a} Q^{\mu^{k}} (s,a)|\_{a=\mu\_{\theta}(s)}
\right] \\\\
\end{aligned}
\end{equation\*}

And then the deterministic policy gradient theorem is

\begin{equation\*}
\nabla\_{\theta} J(\mu\_{\theta}) =
\mathbb{E}\_{s\sim\rho^{\mu}}
\left[
\nabla\_{\theta}\mu\_{\theta}(s)\nabla\_{a}\mu^{\mu}(s,a)|\_{a=\mu\_{\theta}(s)}
\right]
\end{equation\*}

Actually, the deterministic policy gradient is indeed a **special case** of the
stochastic policy gradient.
We parameterize stochastic policies \\(\pi\_{\mu\_{\theta},\sigma}\\) by a deterministic
policy \\(\mu\_{\theta}:\mathcal{S}\rightarrow\mathcal{A}\\) and a variance parameter
\\(\sigma\\), such that for \\(\sigma = 0\\) the stochastic policy is equivalent to the
deterministic policy.


### On-Policy Deterministic Actor-Critic {#on-policy-deterministic-actor-critic}

Like stochastic actor-critic algorithm, we substitute a differentiable action-
value function \\(Q^{w}(s,a)\\) in place of the true action-value function \\(Q^{\mu}(s,a)\\).

For example, in the following deterministic actor-critic algorithm, the critic
uses Sarsa updates to estimate the action-value function.

\begin{equation}
\begin{aligned}
\delta\_{t} &=r\_{t}+\gamma Q^{w}\left(s\_{t+1}, a\_{t+1}\right)-Q^{w}\left(s\_{t}, a\_{t}\right) \\\\
w\_{t+1} &=w\_{t}+\alpha\_{w} \delta\_{t} \nabla\_{w} Q^{w}\left(s\_{t}, a\_{t}\right) \\\\
\theta\_{t+1} &=\theta\_{t}+\left.\alpha\_{\theta} \nabla\_{\theta} \mu\_{\theta}\left(s\_{t}\right) \nabla\_{a} Q^{w}\left(s\_{t}, a\_{t}\right)\right|\_{a=\mu\_{\theta}(s)}
\end{aligned}
\end{equation}


### Off-Policy Deterministic Actor-Critic {#off-policy-deterministic-actor-critic}

We now consider off-policy methods that learn a deterministic target policy
\\(\mu\_{\theta}(s)\\) from trajectories generated by an arbitrary stochastic
behaviour policy \\(\pi(s,a)\\).

As before, we modify the performance objective to be the value function of
the target policy, averaged over the **state** distribution of the behaviour
policy.

\begin{equation}
\begin{aligned}
\nabla\_{\theta} J\_{\beta}\left(\mu\_{\theta}\right) & \approx \int\_{\mathcal{S}} \rho^{\beta}(s) \nabla\_{\theta} \mu\_{\theta}(a \mid s) Q^{\mu}(s, a) \mathrm{d} s \\\\
&=\mathbb{E}\_{s \sim \rho^{\beta}}\left[\left.\nabla\_{\theta} \mu\_{\theta}(s) \nabla\_{a} Q^{\mu}(s, a)\right|\_{a=\mu\_{\theta}(s)}\right]
\end{aligned}
\end{equation}

**Notes**

1.  We only calculate the expectation over the state distribution cause the
    action is deterministic.
2.  **STILL** don't understand the approximation equation.

We again substitute a differentiable action-value function \\(Q^{w}(s,a)\\) in place
of the true action-value function \\(Q^{\mu}(s,a)\\). A critic estimates the action-
value function \\(Q^{w}(s,a)\\), off-policy from trajectories generated by \\(\beta(a|s)\\),
using an appropriate policy evaluation algorithm.

In the following off-policy deterministic actor-critic algorithm, the critic uses
Q-learning updates to estimate the action-value function.

\begin{equation}
\begin{aligned}
\delta\_{t} &=r\_{t}+\gamma Q^{w}\left(s\_{t+1}, \mu\_{\theta}\left(s\_{t+1}\right)\right)-Q^{w}\left(s\_{t}, a\_{t}\right) \\\\
w\_{t+1} &=w\_{t}+\alpha\_{w} \delta\_{t} \nabla\_{w} Q^{w}\left(s\_{t}, a\_{t}\right) \\\\
\theta\_{t+1} &=\theta\_{t}+\left.\alpha\_{\theta} \nabla\_{\theta} \mu\_{\theta}\left(s\_{t}\right) \nabla\_{a} Q^{w}\left(s\_{t}, a\_{t}\right)\right|\_{a=\mu\_{\theta}(s)}
\end{aligned}
\end{equation}

Because the deterministic policy gradient <span class="underline">removes the integral over action</span>, we
can avoid importance sampling in the actor; and by <span class="underline">using Q-learning</span>, we can
avoid importance sampling in the critic.


## Links to this note {#links-to-this-note}

-   [Deep Deterministic Policy Gradient]({{< relref "20210531135316-deep_deterministic_policy_gradient.md" >}})

    >   DDPG, short for **Deep Deterministic Policy Gradient**, is a model-free off-policy
    > actor-critic algorithm, combining [Deterministic Policy Gradient]({{< relref "20210530130547-deterministic_policy_gradient.md" >}})
    > and [DQN]({{< relref "20210531140718-dqn.md" >}}).
    > Recall that DQN stabilizes learning of Q-function by experience replay buffer
    > and the frozen target network. The original DQN works in discrete space, and
    > DDPG extends it to continuous space with the actor-critic framework while
    > learning a deterministic policy.
