+++
title = "Notes on Decomposing the generalization gap in imitation learning for visual robotic manipulation"
author = ["Fangyuan"]
date = 2023-07-16
slug = "20230716020013-notes-on-decomposing-the-generalization-gap-in-imitation-learning-for-visual-robotic-manipulation"
tags = ["simu2real", "imitation"]
draft = false
+++

## Intro {#intro}

What's are the **factors** that contribute most to the diffculty of **generalization** to new environment in vision-based robotic manipulation?

To answer this question, this paper characterize environmental variables as a combination of independent factors, namely the background, lighting conditions and so on.


## Highlights {#highlights}

The results are really helpful for future experiments on simu-to-real.

1.  Random crop augmentation improves generalization. This rule actually used already.
2.  Visual diversity from **out-of-domain data** dramatically improves generalization. For example, data from opening a fridge can improve performance on picking an object.


## Can be improved {#can-be-improved}

Not read so deeply.
