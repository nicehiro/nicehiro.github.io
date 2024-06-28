+++
title = "OK-Robot: What Really Matters in Integrating Open-Knowledge Models for Robotics"
author = ["Fangyuan"]
date = 2024-01-26
slug = "20240126212557-ok-robot-wht-really-matters-in-integrating-open-knowledge-models-for-robotics"
tags = ["robotic"]
draft = false
+++

By combining VLMs (CLIP, Lang-SAM, OWL-ViT) for object detection, navigation primitves for movement, and grasping prmitives (AnyGrasp) for object manipulation, OK-Robot can achieve Pick-and-Place tasks in unseen scenes without any training.

1.  Using iPhone to scan RGB-D images for map building and object detection (OWL-ViT)
2.  Building VoxelMap of objects with CLIP embeddings
3.  Querying the memory to find the target voxel and corresponding position (only for navigation)
4.  Navigating to the target
5.  Generating grasp pose by AnyGrasp net and filter with VLM (GPT-4V)
6.  Do the job.

This paper is using lots of Large Models together to do Open Vocabulary Mobile Manipulation (OVMM). While I think they didn't use the power of GPT-4 in subgoal planning.
