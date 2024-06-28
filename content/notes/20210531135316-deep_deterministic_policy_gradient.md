+++
title = "Deep Deterministic Policy Gradient"
author = ["Fangyuan"]
date = 2021-05-31
slug = "20210531135316-deep-deterministic-policy-gradient"
tags = ["rl"]
draft = false
+++

## Views {#views}

DDPG, short for **Deep Deterministic Policy Gradient**, is a model-free off-policy
actor-critic algorithm, combining [Deterministic Policy Gradient]({{< relref "20210530130547-deterministic_policy_gradient.md" >}})
and [DQN]({{< relref "20210531140718-dqn.md" >}}).
Recall that DQN stabilizes learning of Q-function by experience replay buffer
and the frozen target network. The original DQN works in discrete space, and
DDPG extends it to continuous space with the actor-critic framework while
learning a deterministic policy.

One trick is similar to the target network used in DQN, but modified for actor-
critic and using "soft" target updates. And having both a target actor and critic
is required to have stable targets in order to consistently train the critic
without divergence.

And the other trick used here is that we construct an exploration policy by
adding noise sampled from a noise process \\(\mathcal{N}\\) to our actor policy.


## Methods {#methods}

{{< figure src="/img/ddpg/Methods/2021-05-31_14-20-28_screenshot.png" >}}
