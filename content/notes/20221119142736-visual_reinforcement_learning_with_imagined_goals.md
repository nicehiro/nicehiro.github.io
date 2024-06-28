+++
title = "Visual Reinforcement Learning with Imagined Goals"
author = ["Fangyuan"]
date = 2022-11-19
slug = "20221119142736-visual-reinforcement-learning-with-imagined-goals"
draft = false
+++

This paper uses VAE to map the state space to latent representation space, and then do goal-conditioned reinforcement learning in latent space.

**What's the contribution of VAE?**

1.  generate state representation from a distribution
2.  calculate reward function for current state
3.  sample goal state. Goal state and other state are in the same latent space, thus we can sample goal state from latent space directly

**VAE:**
S --encoder--&gt; z --decoder--&gt; S

We can sample latent goal directly from latent space z.

**Brief introduction of algorithm RIG:**

1.  collect data \\({S}\\) and train VAE encoder and decoder
2.  sample goal state \\(g\\)
3.  sample initial state \\(s\_0\\) and collect (s, a, g, r) into replay buffer
4.  minimize universal loss function by any off-policy algorithm
5.  use updated policy to collect data and refine the replay buffer


## Links to this note {#links-to-this-note}

-   [Skew-Fit: State-Covering Self-Supervised Reinforcement Learning]({{< relref "20221121172110-skew_fit_state_covering_self_supervised_reinforcement_learning.md" >}})

    > Try to find subgoals by maximizing the [mutual information]({{< relref "20221104114029-mutual_information.md" >}}):
