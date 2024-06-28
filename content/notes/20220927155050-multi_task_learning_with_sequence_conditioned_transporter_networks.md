+++
title = "Multi-Task Learning with Sequence-Conditioned Transporter Networks"
author = ["Fangyuan"]
date = 2022-09-27
slug = "20220927155050-multi-task-learning-with-sequence-conditioned-transporter-networks"
tags = ["imitation", "sequential", "multi-task", "rl"]
draft = false
+++

This work is based on previous work [Transporter Networks: Rearranging the Visual World for Robotic Manipulation]({{< relref "20220927155233-transporter_networks_rearranging_the_visual_world_for_robotic_manipulation.md" >}}). And like previous, they are focus on seen tasks.

Complex manipulation can be formulated as sequencing multiple individual tasks over a long horizon. Understanding task structure may be a key ingredient in scaling reinforcement learning methods to compositional tasks.

They collect demonstration images as `v` at every time step when the agent receive a reward, e.g., finish a subtask. And in the test process, they try to find a desired next step goal from `v`.

The subtask can be done by using Transporter Networks.
