+++
title = "Transporter Networks: Rearranging the Visual World for Robotic Manipulation"
author = ["Fangyuan"]
date = 2022-09-27
slug = "20220927155233-transporter-networks-rearranging-the-visual-world-for-robotic-manipulation"
tags = ["imitation", "rl"]
draft = false
+++

This work consider tasks that can be completed by a sequence of two-pose motion primitives: pick and place. Thus this is a optimal pick and place problem.

They use data collected by experts to train their pick and place model. Pick model take as the input the observation, and output the pixel position of the pick location. The Place model take as the input the observation and pick location, output the pixel position of the place location. More detailed information can check the paper.

Problems:

1.  train one model for each specific model
2.  imitation learning needs so much experts work


## Links to this note {#links-to-this-note}

-   [Multi-Task Learning With Sequence-Conditioned Transporter Networks]({{< relref "20220927155050-multi_task_learning_with_sequence_conditioned_transporter_networks.md" >}})

    > This work is based on previous work [Transporter Networks: Rearranging the Visual World for Robotic Manipulation]({{< relref "20220927155233-transporter_networks_rearranging_the_visual_world_for_robotic_manipulation.md" >}}). And like previous, they are focus on seen tasks.
