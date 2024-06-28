+++
title = "Efficient Online Reinforcement Learning with Offline Data"
author = ["Fangyuan"]
date = 2023-06-27
slug = "20230627162901-efficient-online-reinforcement-learning-with-offline-data"
tags = ["rl"]
draft = false
+++

Three keypoints they used:

1.  Symmetric sampleing. Sampling 50% of the data from replay buffer(online), and the remaining 50% from the offline data buffer(offline).

2.  Layer normalization to mitigate catastrophic overestimation of value function.

3.  Improving sampling efficiency by increasing the number of updates (update-to-data ratio). To avoid introduced over-fitting issue, prior works like L2 normalization, Dropout and random ensemble distillation can be used.

They also use clipped double Q-learning to migarate the over-estimation problem of value function. And adding maximum entropy reward term to maximize exploration.
