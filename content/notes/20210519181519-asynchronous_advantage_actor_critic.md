+++
title = "Asynchronous Advantage Actor Critic"
author = ["Fangyuan"]
date = 2021-05-19
slug = "20210519181519-asynchronous-advantage-actor-critic"
tags = ["rl"]
draft = false
+++

## Related Works {#related-works}

Experience replay buffer and the approximation of the real action(or state)
function share a common idea: the sequence of observed data encountered by an
online RL is no-stationary, and on-line RL updates are strongly correlated.
Aggregating over memory in this way reduces non-stationarity and decorrelates
updates, but at the same time limits the methods to off-policy algorithms.

Experience replay has several drawbacks:

1.  it uses more memory and computation per real interaction;
2.  it requires off-policy learning algorithms that can update from data generated
    by an old policy.

In this paper, we asynchronously execute multiple agents in parallel instead of
experience replay. This parallelism also decorrelates the agents' data into more
stationary process. So A3C is a on-policy algorithm.


## Methods {#methods}

{{< figure src="/img/a3c/Methods/2021-05-20_17-41-20_screenshot.png" >}}

1.  The policy and the value function are updated after every \\(t\_{\max}\\) actions or
    when a terminal state is reached.
2.  While the parameters \\(\theta\\) of the policy and \\(\theta\_{v}\\) of the value
    function are shown as being separate for generality, we always share some of
    the parameters in practice. We typically use a convolutional neural network
    that has one softmax output for the policy and one linear output for the
    value function, **with all non-output layers shared**.
3.  Adding the entropy of the policy \\(\pi\\) to the objective function improved
    exploration by discouraging premature convergence to suboptimal deterministic
    policies.


## Links to this note {#links-to-this-note}

-   [A Synchronous Advantage Actor-Critic]({{< relref "A Synchronous Advantage Actor-Critic.md" >}})

    >   After reading the [Asynchronous Advantage Actor Critic]({{< relref "20210519181519-asynchronous_advantage_actor_critic.md" >}}),
    > AI research wondered whether the asynchrony led to improved performance
    > (e.g. "perhaps the added noise would provide some regularization or
    > exploration?"), or if it was just an implementation detail that allowed
    > for faster training with a CPU-based implementation.
