+++
title = "Gradient Temporal-Difference"
author = ["Fangyuan"]
date = 2021-05-19
slug = "20210519152943-gradient-temporal-difference"
tags = ["rl"]
draft = false
+++

This method cannot be applied directly to neural network because they involve
projection on to the space of the basis functions.

Moreover, GTD for neural networks has been done only for policy evaluation,
not control.

And the "semi-gradient" TD works faster in practice on almost all problems.


## Reference {#reference}

-   <http://incompleteideas.net/Talks/gradient-TD-2011.pdf>

-   <https://www.reddit.com/r/reinforcementlearning/comments/9dh1th/why_are_gradient_td_methods_not_used_in_deep_rl/>


## Links to this note {#links-to-this-note}

-   [Off Policy Actor Critic]({{< relref "20210518145521-off_policy_actor_critic.md" >}})

    > One disadvantage of [REINFORCE]({{< relref "20210107162935-reinforce.md" >}}) is low data utilization.
