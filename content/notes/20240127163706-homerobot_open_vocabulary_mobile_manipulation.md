+++
title = "HomeRobot: Open-Vocabulary Mobile Manipulation"
author = ["Fangyuan"]
date = 2024-01-27
slug = "20240127163706-homerobot-open-vocabulary-mobile-manipulation"
tags = ["robotic"]
draft = false
+++

This paper introduce a Challenge in NIPS, with two baseline methods introduced for solving OVMM problems.

Open-Vocabulary Mobile Manipulation (OVMM) is the problem of picking any object in any unseen environment, and placing it in a commanded location.

For heurstic solution, they use scripted motion planner for real-world object search

For RL solution, they learn a model to navigate to objects.

They use open-vocbulary object detector DETIC and ground truth to provide object segmentation.

The default baseline used here is a state-machine that calls `FindObj`, `Gaze`, `Pick`, `FindRec` and `Place` in that order, where `Pick` is a grasping policy provided by the robot library.


## Performance Results {#performance-results}

1.  Ground truth results better than DETIC detected
2.  Heurstic better than RL


## Brainstoms {#brainstoms}

1.  The proposed state-machine order is not optimal, and can be improved by:
    -   What if failed? How to replan?
    -   What if interupt or cooperated by humans?

2.  `Gaze` is the most important part here. The goal of `Gaze` is to improve the success rate of grasp by <span class="underline">move close</span> enough to an object, and <span class="underline">orient head</span> to get a good view of the object, and then <span class="underline">generate good pose</span> to grasp it.

3.  For the low level part (navigation), I don't want to focus on that.
