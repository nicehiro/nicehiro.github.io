+++
title = "Robotic Table Wiping via Reinforcement Learning and Whole-body Trajetory Optimization"
author = ["Fangyuan"]
date = 2023-04-10
slug = "20230410164628-robotic-table-wiping-via-reinforcement-learning-and-whole-body-trajetory-optimization"
tags = ["sequential"]
draft = false
+++

Clean spills and crumbs in the table is still challenging, as it requires palnning while reasoning over uncertain latent dynamics via high-dimensional visual observations. The main contributions are:

1.  Describe the uncertain dynamics of dirty particles on the table using stochastic differential equation (SDE).
2.  Use visual observations of the table state to plan high-level wiping actions by using RL, entairely in simulation built above.
3.  Use whole-body trajectory optimization algorithm for navigation in the environment and table wiping.

Ideas:
Only use RL to generate high-level actions, then use trajectory optimization to finish that subgoal. Actually that is not subgoal, just action.

We can extend this experiments by using "subgoal".
