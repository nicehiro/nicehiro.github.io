+++
title = "Why Generalization in RL is Difficult"
author = ["Fangyuan"]
date = 2021-12-07
slug = "20211207100610-why-generalization-in-rl-is-difficult"
tags = ["rl"]
draft = false
+++

The generalization to unseen test conditions from a limited number of training conditions induces implicit partial observability, effectively turning even fully-observed MDPs into POMDPs.

The uncertainty about MDP parameters can be modeled as a POMDP is well-studied in Bayesian RL when training on a single task in an online setting, primarily in the context of exploration. However, as we will discuss, this POMDP interpretation has significant consequences for the generalization problem in RL, where an agent <span class="underline">cannot collect more data online</span>, and must instead <span class="underline">learn a fixed set of training contexts</span> that generalizes to <span class="underline">new</span> contexts at text-time. So they focus on generalization in contextual MDPs where the agent is only trained on a training set of contexts, and seeks to generalize well to new contexts.

Actually, we can never say we've collected enough data in the real life.


## The Epistemic POMDP {#the-epistemic-pomdp}

The epistemic POMDP is structured as follows: each new episode in the
POMDP begins by sampling a single MDP \\(M \sim P(M|D)\\) from the posterior,
and then the agent interacts with \\(M\\) until the episode ends in this MDP.
The agent doesn't observe which MDP was sampled, and since the MDP remains
fixed for the duration of the episode, this induces implicit partial
observability.

Even if a policy is optimal in many(not all) of the MDPs from the posterior,
this seemingly "optimal" policy can **generalize poorly** at test-time.
(We can see this through normal RL training.)

One may wonder if simple strategies for inducing stochasticity, such as
adding $&epsilon;$-greedy noise or entropy regularization, can alleviate
the sub-optimality that arose with deterministic policies in the previous.
In some cases, this may be true. But you cannot fully exploit the whole
environment. For the more general setting, those general-purpose techniques
can similarly catastrophically fail in epistemic POMDPs.


## A Sequential Classification RL Problem {#a-sequential-classification-rl-problem}

In this task, an agent must keep guessing the label for an image until
it gets it correct. To avoid low test return, policies should change
actions if the label guessed was correct, but standard RL methods fail
to do so, instead guessing the same incorrect label repeatedly.

This RL problem is near identical to supervised classification, the core
distinction being that an agent may interact with the same image over
several timesteps in an episode instead of only one attempt as in supervised
learning.


## Reference {#reference}

-   <https://www.youtube.com/watch?v=mOuf2fvNAhY>
-   <https://zhuanlan.zhihu.com/p/430221668>
