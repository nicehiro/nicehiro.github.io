+++
title = "Text2Motion: From Natual Language Instructions to Feasible Plans"
author = ["Fangyuan"]
date = 2024-02-01
slug = "20240201212449-text2motion-from-natual-language-instructions-to-feasible-plans"
draft = false
+++

It uses feasibility heuristics encoded in Q-functions of a library of skills to guide task planning.

The prior approaches adopt open-loop execution stategies, trusting LLMs to produce correct plans without verifying them on the symbolic or geometric level.

When a skill is executed, an action is sampled from its RL policy and fed to its primitive, executing a series of motor commands on the robot.

The planning objectives are:

1.  Generate a trajectory of skills.
2.  The skill sequence are feasible.

They propose a Geometric feasibility planner, which uses Q-functions evaluated from intial state to the final state.
