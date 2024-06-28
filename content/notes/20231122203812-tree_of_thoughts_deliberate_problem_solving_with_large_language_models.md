+++
title = "Tree of Thoughts: Deliberate Problem Solving with Large Language Models"
author = ["Fangyuan"]
date = 2023-11-22
slug = "20231122203812-tree-of-thoughts-deliberate-problem-solving-with-large-language-models"
tags = ["paper", "LLM", "prompt"]
draft = false
+++

Tree of Thoughts (ToT) extends [CoT]({{< relref "20231122194612-chain_of_thought_prompting_elicits_reasoning_in_large_language_models.md" >}}) by exploring multiple reasoning possibilities at each step. It first decomposes the problem into multiple thought steps and generate multiple thoughts per step, creating a tree structure. The search process can be BFS or DFS with each state evaluated by a classifier (via a prompt) or majority vote.
