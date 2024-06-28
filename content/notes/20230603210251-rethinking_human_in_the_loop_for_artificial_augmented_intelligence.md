+++
title = "Rethinking Human-in-the-Loop for Artificial Augmented Intelligence"
author = ["Fangyuan"]
date = 2023-06-03
slug = "20230603210251-rethinking-human-in-the-loop-for-artificial-augmented-intelligence"
tags = ["augment"]
draft = false
+++

The Human-in-the-Loop contains "human" collecting/relabel data and "machine" training policy by using data, where humans and machines are mutually augmenting each other.

1.  Human label datas only when machine has low-confidence. Thus make labeling data more efficient.
2.  Machine will get more accurate policy by using correct human-labeled data.

This is really similiar to Environment-Human relationship in reinforcement learning, where human generate data by interacting with environment, and environment give feedback(reward) to human.

1.  Human generate datas by interacting with environment, and environment give reward to human. Thus human can generate more efficient data.
2.  For some experience replay buffer, selecting high-prior data from erb to make human policy more perfect.

Besides, we can also add human demostration data in erb first. Maybe at first we need more expert data. But with training time goes on, the policy will become much better and we don't need expert data at all.
