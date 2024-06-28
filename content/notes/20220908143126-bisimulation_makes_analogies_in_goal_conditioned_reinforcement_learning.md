+++
title = "Bisimulation Makes Analogies in Goal-Conditioned Reinforcement Learning"
author = ["Fangyuan"]
date = 2022-09-08
slug = "20220908143126-bisimulation-makes-analogies-in-goal-conditioned-reinforcement-learning"
tags = ["representation-learning", "goal-conditioned", "rl"]
draft = false
+++

In traditional goal-conditioned RL, an agent is provided with exact goal they intend to reach. However it is not realistic to know the configuration of goal before performing a task.

This paper propose a new representation learning algorithm, which can be used in goal-conditioned RL (also common RL), using bisimulation relation to use seen state-goal representation to replace unseen state.

> Two states are bisimilar if they share both the same immediate reward and equivalent distributions over the next bisimilar states.

Let \\(\phi(s\_i, g\_i)\\) as state-goal encoder, \\(\psi(s\_i)\\) as state encoder.

1.  directly optimize \\(\phi\\)
    The bisimulation relation can be described as the distance of two state \\(s\_i, s\_j\\):

    \begin{equation\*}
    d = \phi(s\_i, g\_i) - \phi(s\_j, g\_j) = (R\_i - R\_j) + (P(s^{'}\_i) - P(s^{'}\_j)
    \end{equation\*}

    The distance closer, the bisimulation relation stronger.

2.  state abstraction
    The information \\(\phi(s\_i, g\_i)\\) contained only need to consist of the difference of goal state and current state, which is \\(\phi(s\_i, g\_i) = \psi(g\_i) - \psi(s\_i)\\). For any state \\(s\_j\\) who has strong bisimulation relation with \\(s\_i\\), \\(\psi(g\_j) - \psi(s\_j) = \psi(g\_i) - \psi(s\_i)\\).

3.  reinforcement learning algorithm update

So, at test time the task goal g is unknown but instead specified by a separate state-goal pair \\(s\_a, g\_a\\) that achieves an analogous outcome with respect to another state.

But how to find a bisimulation state?

-   Use value function to choose.
