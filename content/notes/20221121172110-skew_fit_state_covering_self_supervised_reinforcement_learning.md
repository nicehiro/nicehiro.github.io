+++
title = "Skew-Fit: State-Covering Self-Supervised Reinforcement Learning"
author = ["Fangyuan"]
date = 2022-11-21
slug = "20221121172110-skew-fit-state-covering-self-supervised-reinforcement-learning"
tags = ["sequential"]
draft = false
+++

Try to find subgoals by maximizing the [mutual information]({{< relref "20221104114029-mutual_information.md" >}}):

\\[
I(S;G) = H(S) - H(S|G) = H(G) - H(G|S)
\\]

that is trying to maximizing \\(H(S)\\) and minimizing \\(H(S|G)\\).

To minimizing \\(H(S|G)\\), we train a policy by maximizing the reward:
\\[
r = log(G|S)
\\]
which is also the distance between \\(G\\) and \\(S\\). This paper use [RIG]({{< relref "20221119142736-visual_reinforcement_learning_with_imagined_goals.md" >}}) to deal with it.

To maximizing \\(H(S)\\), they add a weight on each state to make the probability of less visited state become bigger.


## Links to this note {#links-to-this-note}

-   [Maximum Entropy Gain Exploration for Long Horizon Multi-Goal Reinforcement Learning]({{< relref "20221123152319-maximum_entropy_gain_exploration_for_long_horizon_multi_goal_reinforcement_learning.md" >}})

    > Same idea with [Skew-Fit: State-Covering Self-Supervised Reinforcement Learning]({{< relref "20221121172110-skew_fit_state_covering_self_supervised_reinforcement_learning.md" >}}). Trying to maximize the distribution of less visited archived goals, that is  also the idea of maximize the entropy of \\(H(S)\\).
