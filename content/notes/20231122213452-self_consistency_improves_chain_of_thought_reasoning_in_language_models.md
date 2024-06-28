+++
title = "Self-Consistency Improves Chain of Thought Reasoning in Language Models"
author = ["Fangyuan"]
date = 2023-11-22
slug = "20231122213452-self-consistency-improves-chain-of-thought-reasoning-in-language-models"
tags = ["prompt", "LLM", "paper"]
draft = false
+++

Self-consistency also based on [CoT]({{< relref "20231122194612-chain_of_thought_prompting_elicits_reasoning_in_large_language_models.md" >}}), which aims to replace the "naive" greedy decoding result used in [CoT]({{< relref "20231122194612-chain_of_thought_prompting_elicits_reasoning_in_large_language_models.md" >}}).

The intuition is really simple: a model can generate several plausible responses to a math question that all arive at the same correct answer; it can also produce an incorrect reasoning path but those solutions are less likely to arrive at the same answer.

Specific instructions:

1.  Prompted with a set of manually written chain-of-thought examples
2.  Sample a set of candidate outputs from the LLM's decoder
3.  Aggregate the answers and choose the answer that is the most consistent
