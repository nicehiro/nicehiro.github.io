+++
title = "SuSIE: Subgoal Synthesis via Image Editing"
author = ["Fangyuan"]
date = 2023-10-19
slug = "20231019122353-susie-subgoal-synthesis-via-image-editing"
tags = ["diffusion", "subgoal"]
draft = false
+++

SuSIE generates subgoals using an image-editing diffusion model and executes those subgoals using a languages-agnostic low-level policy.

Since subgoal generateing process doesn't require robot actions, they augment the BridgeData (only robot demostrations) with a human manipulation dataset (Something-Something) to train the diffusion model.
