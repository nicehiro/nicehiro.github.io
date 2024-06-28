+++
title = "Hierarchical Reinforcement Learning for Zero-shot generalization with Subtask Dependencies"
author = ["Fangyuan"]
date = 2022-09-21
slug = "20220921100426-hierarchical-reinforcement-learning-for-zero-shot-generalization-with-subtask-dependencies"
tags = ["multi-task", "zsl", "rl"]
draft = false
+++

The method proposed is a hierarchical RL algorithm as the title said, but the main part is focus on the 'high' level, which is subtask option choice.

So, the simple and basic solution is:

1.  build graph (not mentioned but I guess it's build by hand)
2.  use R3NN to construct policy model, which use the graph and observation as input, and subtask option as output
3.  use pre-trained(non parameterized) policy to accelerate the training process of R3NN model (hard to understand)
4.  use GAE to refine the policy model

The most novel idea this paper proposed is the subtask graph, which consist of several basic but useful definition: precondition, eligibility and completion vector. It actually gives a clear solution for others to solve this problem.

Hierarchical methods are easy to find out, is this the only method we can use to solve this problem?


## Links to this note {#links-to-this-note}

-   [Meta Reinforcement Learning With Aotonomous Inference of Subtask Dependencies]({{< relref "20220921113243-meta_reinforcement_learning_with_aotonomous_inference_of_subtask_dependencies.md" >}})

    > A future improvement of [Hierarchical Reinforcement Learning for Zero-shot generalization with Subtask Dependencies]({{< relref "20220921100426-hierarchical_reinforcement_learning_for_zero_shot_generalization_with_subtask_dependencies.md" >}}).
