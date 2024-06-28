+++
title = "INTERPRET: Interactive Predicate Learning from Language Feedback for Generalizable Task Planning"
author = ["Fangyuan"]
date = 2024-06-03
slug = "20240603210005-interpret-interactive-predicate-learning-from-language-feedback-for-generalizable-task-planning"
draft = false
+++

This paper, like other, using LLM as Reasoner, Coder, Corrector, which I will use too.

It use PDDL planning language to do all the tasks.

One thing still not good, like others did, is that they are still use Language based environmental results to feed into the LLM. This paper did more, they use GPT 4o and perception api (like camera, etc.).

I will use "perception api" as:

1.  augment the instruction of human
2.  give feedback after current subgoal is executed. Like, if subgoal is reachable by using LiDAR sensor, if something is grasped, etc.
3.  Maybe add model: detect which part can be operated, to do more complex stuff.
