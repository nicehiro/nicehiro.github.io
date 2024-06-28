+++
title = "Planning to Practice: Efficient Online Fine-Tuning by Composing Goals in Latent Space"
author = ["Fangyuan"]
date = 2022-10-26
slug = "20221026203917-planning-to-practice-efficient-online-fine-tuning-by-composing-goals-in-latent-space"
tags = ["rl", "sequential"]
draft = false
+++

This paper is exactly what I what do and published recently. That gives me a lot of confidence to continue this work. At least this is not some simple or unnecessary work.(Jeffery do give me big help! The partial order idea!)

This paper consists of two parts. First one to decompose the long-horizon tasks (maybe contains order, sequential) to goal-reaching problem, and use a high-level planner to generate subgoals for low-level policy. Another part try to train the low-level policy by using offline data and fine-tuned by online data which trained on a shorten task (subgoal reinforcement learning problem).

Previous methods either propose subgoals from the set of previously seen states, or directly optimize over subgoals, often by utilizing a latent variable model to obtain a concise representation of image-based states.

1.  Train low-level policy \\(\pi(a|s,s\_g)\\) by offline data. (Q: How to promise all goal has been trained? --&gt; Exploration, Distribution of goal)

2.  Use `conditional variational encoder` to sample a set of subgoals, and choose the optimal subgoals as subgoals

3.  For each subgoals, use \\(\pi\\) to generate actions and fine-tune it by online data

Recommend to check the part how to generate a set of subgoals which I think is the most novel part of this paper.
