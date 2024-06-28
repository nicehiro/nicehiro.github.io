+++
title = "MOKA: Open-Vocabulary Robotic Manipulation throuh Mark-Based Visual Prompting"
author = ["Fangyuan"]
date = 2024-03-16
slug = "20240316170822-moka-open-vocabulary-robotic-manipulation-throuh-mark-based-visual-prompting"
tags = ["robotic"]
draft = false
+++

This paper propose Marking Open-vocabulary Keypoint Affordances (MOKA), which employs VLMs to solve manipulation tasks by free-form language descriptions.

The novel part of this paper is that they annotate marks as regions for the VLM to choose the points from, convertin the original problem of directly generating coordinates into <span class="underline">multiple-choice questions</span>. Then perform farthest point sampling on the object contour to obtain \\(K\\) boundary points.
