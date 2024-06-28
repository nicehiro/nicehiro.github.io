+++
title = "A Synchronous Advantage Actor-Critic"
author = ["Fangyuan"]
slug = "A Synchronous Advantage Actor-Critic"
tags = ["rl"]
draft = false
+++

After reading the [Asynchronous Advantage Actor Critic]({{< relref "20210519181519-asynchronous_advantage_actor_critic.md" >}}),
AI research wondered whether the asynchrony led to improved performance
(e.g. "perhaps the added noise would provide some regularization or
exploration?"), or if it was just an implementation detail that allowed
for faster training with a CPU-based implementation.

A2C is a **synchronous**, **deterministic** version of A3C (with the first "A"
removed). In A3C each agent talks to the global parameters independently,
so it is possible sometimes the thread-specific agents would be playing with
policies of different versions and therefore the aggregated update would not
be optimal. A2C **waits for** each actor to finish its segment of experience before
performing an update, **averaging** over all of the actors.

The synchronized gradient update keeps the training more cohesive and potentially
to make convergence faster. And it can more effectively use of GPUs, which
perform best with large batch sizes.

{{< figure src="/img/a2c/2021-05-24_22-06-26_screenshot.png" caption="<span class=\"figure-number\">Figure 1: </span>The architecture of A3C versus A2C.(From liliweng's blog)" >}}


## Reference {#reference}

-   <https://openai.com/blog/baselines-acktr-a2c/>
-   <https://towardsdatascience.com/understanding-actor-critic-methods-931b97b6df3f>
