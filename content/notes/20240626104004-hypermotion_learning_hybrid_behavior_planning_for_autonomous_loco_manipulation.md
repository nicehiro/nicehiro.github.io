+++
title = "HYPERmotion: Learning Hybrid Behavior Planning for Autonomous Loco-manipulation"
author = ["Fangyuan"]
date = 2024-06-26
slug = "20240626104004-hypermotion-learning-hybrid-behavior-planning-for-autonomous-loco-manipulation"
tags = ["humanoid"]
draft = false
+++

This paper apply the planning and reasoning features of LLMs to <span class="underline">complex loco-manipulation tasks</span>, constructing a <span class="underline">hierarchical task graph</span> that comprises a series of primitive behaviors to bridge the low-level execution and high-level planning. It leverage the interaction of distilled spatial geometry and 2D observation with a VLM to ground knowledge into a robotic morphology selector to choose appropriate actions.

The basic idea used in this paper is almost same as mine. The differences are:

1.  The paper didn't mention details of obstaining current state, i.e., the task status and the observation. What inputed into the LLM are: prompts, 2D image, depth and human-inputed task state.
2.  The paper proposed is an one-shot planning method, which plan at the beginning of the excution.
3.  Although the paper did process the 2D image and depth raw data, i.e., obtaining pose of the target object and creating voxel map, it is still challenging for the VLM to obtain precise current state.
4.  We also add reachability map.
