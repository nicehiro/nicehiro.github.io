+++
title = "SAGE: Briding Semantic and Actionable Parts for GEneralizable Articulated-Object Manipulation under Language Instructions"
author = ["Fangyuan"]
date = 2024-01-15
slug = "20240115203612-sage-briding-semantic-and-actionable-parts-for-generalizable-articulated-object-manipulation-under-language-instructions"
tags = ["robotic", "LLM"]
draft = false
+++

This paper is not a finished paper I think. Here are some unclear model definitions left.

Generalized VLMs lack the capability to provide exact task-related facts, while GAPartNet can detect the actionable parts. So SAGE pass the images, instructions and detected actionable parts together into the VLMs to provide more accurate, executable descriptions.

Scene context parser: joining the forces of generalist VLMs and domain-specialist part perception models

Generalizable Actionable Parts (GAParts): maps the object semantic parts (suggested by the instruction interpreter) to actionable part labels

Actionable part grounding model: takes both the 2D and 3D part as input and outputs the grounded GAPart labels.

Pose and joint estimation model: takes the point cloud as input and estimates the 6D part pose.

Questions:

1.  how to train and what's the structure of the proposed models
