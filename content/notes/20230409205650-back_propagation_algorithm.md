+++
title = "Back Propagation Algorithm"
author = ["Fangyuan"]
date = 2023-04-09
slug = "20230409205650-back-propagation-algorithm"
draft = false
+++

1.  Forward pass: Computation of function signals for each neuron,
2.  Backward pass: Starts at the output layer, recursively compute \\(\sigma\\) for each neuron from output layer towards the first hidden layer. At each layer, the synaptic weights are changed accordingly to the delta rule:
