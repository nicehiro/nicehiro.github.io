+++
title = "MultiPLY: A Multisensory Object-Centric Embodied Large Language Model in 3D World"
author = ["Fangyuan"]
date = 2024-01-30
slug = "20240130105620-multiply-a-multisensory-object-centric-embodied-large-language-model-in-3d-world"
draft = false
+++

The structure of MultiPLY:

-   LLaVA (VLM) as backbone
-   Using lightweight adapter (one-layer linear projector) to project the sensor features into the text token embedding space
-   Modality Alighment for audio, tactile, sound, thermal data
-   Collecting data and finetune it

Inputs contain RGBD data, tactile, sound sensors' data, and outputs Action tokens.

They extract 3D features aggregated from 2D CLIP features and add position embeddings to the 3D features.
