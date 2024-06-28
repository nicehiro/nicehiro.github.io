+++
title = "Modular Multitask Reinforcement Learning with Policy Sketches"
author = ["Fangyuan"]
date = 2022-09-21
slug = "20220921203957-modular-multitask-reinforcement-learning-with-policies-sketches"
tags = ["curriculum-learning", "rl", "multi-task"]
draft = false
+++

Give the policy sketches, which means the order (or the graph) of subtasks is known as prior. Thus, this paper is mainly focus on the 'low' level of this hierarchical problem, but from a global perspective.

The idea is simple:

1.  train policy \\(\pi\_i\\) for each subtask \\(i\\), thus the policy of whole task is \\(\pi = [\pi\_i]\\)

2.  collect data and curriculum learning methods to learn each sub policy

The most novel idea of this paper is that they use a novel MDP, more specifically, a <span class="underline">novel state transition probability to describe the relationship</span> in multi-task MDP.
