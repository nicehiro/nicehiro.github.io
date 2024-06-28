+++
title = "Perceptron Learning Algorithm"
author = ["Fangyuan"]
date = 2023-04-09
slug = "20230409203153-perceptron-learning-algorithm"
draft = false
+++

1.  Start with a randomly chosen weight vector \\(w\_0\\),
2.  Let \\(k=1\\),
3.  While there exist input vectors that are <span class="underline">misclassified</span> by \\(w\_{k-1}\\), do
    1.  Let \\(x^'\\) be the misclassified input vector,
    2.  Update the weight \\(w\_k\\) = w<sub>k-1</sub> + &eta; (d - y) x^'$,
    3.  Increment \\(k\\),
