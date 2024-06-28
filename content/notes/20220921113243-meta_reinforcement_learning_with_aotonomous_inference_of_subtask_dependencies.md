+++
title = "Meta Reinforcement Learning with Aotonomous Inference of Subtask Dependencies"
author = ["Fangyuan"]
date = 2022-09-21
slug = "20220921113243-meta-reinforcement-learning-with-aotonomous-inference-of-subtask-dependencies"
tags = ["sequential", "zsl", "rl", "multi-task"]
draft = false
+++

A future improvement of [Hierarchical Reinforcement Learning for Zero-shot generalization with Subtask Dependencies]({{< relref "20220921100426-hierarchical_reinforcement_learning_for_zero_shot_generalization_with_subtask_dependencies.md" >}}).

This work is still focus on 'high' level of multi-task decision making problem, which is decide which subtask should be execute at time step \\(t\\).

They use classification and regression tree to infer the precondition function, which can used to build the whole subtask tree. Once we have this subtask tree, we can use the policy training method mentioned before(previous work) to train a subtask decision policy.
