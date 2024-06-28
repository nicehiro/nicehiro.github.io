+++
title = "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"
author = ["Fangyuan"]
date = 2023-11-22
slug = "20231122194612-chain-of-thought-prompting-elicits-reasoning-in-large-language-models"
tags = ["prompt", "LLM", "paper"]
draft = false
+++

<span class="underline">Chain-of-Thought (CoT)</span> has become a standard prompting technique for enhancing model performance on complex tasks. The model is instructed to "think step by step" to utilize more test-time computation to decomposing hard tasks into smaller steps.

For GPT3 (2022), users need to give prompts with details step-by-step thinkings for few-shot learning. While for GPT4 (2023), users only have to add "step-by-step" instruction in prompt for same performace.


## Links to this note {#links-to-this-note}

-   [Tree of Thoughts: Deliberate Problem Solving With Large Language Models]({{< relref "20231122203812-tree_of_thoughts_deliberate_problem_solving_with_large_language_models.md" >}})

    > Tree of Thoughts (ToT) extends [CoT]({{< relref "20231122194612-chain_of_thought_prompting_elicits_reasoning_in_large_language_models.md" >}}) by exploring multiple reasoning possibilities at each step. It first decomposes the problem into multiple thought steps and generate multiple thoughts per step, creating a tree structure. The search process can be BFS or DFS with each state evaluated by a classifier (via a prompt) or majority vote.
-   [Self-Consistency Improves Chain of Thought Reasoning in Language Models]({{< relref "20231122213452-self_consistency_improves_chain_of_thought_reasoning_in_language_models.md" >}})

    > Self-consistency also based on [CoT]({{< relref "20231122194612-chain_of_thought_prompting_elicits_reasoning_in_large_language_models.md" >}}), which aims to replace the "naive" greedy decoding result used in [CoT]({{< relref "20231122194612-chain_of_thought_prompting_elicits_reasoning_in_large_language_models.md" >}}).
