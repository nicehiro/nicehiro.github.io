+++
title = "Goal Representations for Instruction Following"
author = ["Fangyuan"]
date = 2024-03-25
slug = "20240325104010-goal-representations-for-instruction-followin"
draft = false
+++

This paper tries to achieve: given an image of current state and human language instruction, let the robot achieve it.

By learning an embedding from the labeled data that aligns language instruction with state-goal, they decouple the language-conditioned policy \\(\pi(a|s,l)\\) to a policy network \\(\pi(a|s,z)\\) and a language conditioned task encoder \\(f(l)\\), where \\(z = f(l)\\) is the representation of the task.

For alignment of instruction \\(l\\) and goal \\((s\_0,g)\\), they use contrastive learning by assuming the embedding \\(f(l)\\) and \\(h(s\_0, g)\\) of the same task to be close in the latent space, while they should be far apart for different task.

For \\(f\\) and \\(h\\) used in this paper, they use the fine-tuned CLIP model for both embedding.

For action policy training, they use Behavior Cloning.
