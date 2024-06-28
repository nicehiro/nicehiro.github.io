+++
title = "Goal-Conditioned Reinforcement Learning with Imagined Subgoals"
author = ["Fangyuan"]
date = 2022-11-25
slug = "20221125112544-goal-conditioned-reinforcement-learning-with-imagined-subgoals"
tags = ["sequential"]
draft = false
+++

This paper

1.  tries to find subgoal \\(s\_g\\) from initial state \\(s\_i\\) to final state \\(s\_j\\) which have the maximum distance to \\(s\_i\\) and \\(s\_j\\)

2.  train policy \\(\pi(a|s,g)\\) by minimize the [KL Divergence]({{< relref "20201031155541-kl_divergence.md" >}}) between \\(\pi(a|s,g)\\) and \\(\pi(a|s,s\_g)\\), and use \\(\pi(a|s,g)\\) in test phase

The second part increase the training time and difficulty cause it need to fit two policy. But it reduce the subgoal inference phase in test cases. This is a compromise, and I don't think it deserves it.

Inferring subgoals and conducting subgoals are unsplitable in a complete task.

Besides, a lot of subgoal searching algorithms are specifying the threshold between two subgoals. Is there some way to automatic do this job?

Update @<span class="timestamp-wrapper"><span class="timestamp">&lt;2023-08-26 Sat&gt;</span></span>

1.  What is the subgoal here?

    Middle state between \\(s\\) and \\(g\\).

2.  How to generate subgoals?

    By using \\(\pi^{H}(s\_g|s,g)\\).

3.  How to make sure subgoal is valid?
    1.  Log probability of real subgoal.
    2.  Weighted by advantage.

4.  How to use subgoal?

    Minimize the \\(D\_{KL}(\pi(s,g) || \pi(s,s\_g))\\). Transfer the knowledge in subgoal to final goal.
