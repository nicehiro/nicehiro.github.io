+++
title = "Towards Byzantine-resilient Learning in Decentralized Systems"
author = ["Fangyuan"]
date = 2021-06-23
slug = "20210623093830-towards-byzantine-resilient-learning-in-decentralized-systems"
tags = ["decentralized", "ml", "byzantine-resilient"]
draft = false
+++

## Related Works {#related-works}

Past work have focused on the centralized distributed and federated learning with
Byzantine-resilient Stochastic Gradient Descent(SGD) solutions.
The essential task for the parameter server is to distinguish between benign and
malicious gradients and select potential benign ones for model update.

Current solutions will fall into one of the two categories:

1.  distance based defense
    the parameter server selects the gradients closer to the mean or median value in
    terms of vector distance. Q-C
2.  performance based defense
    the server measures the model performance of each gradient using an extra
    validation dataset and choose the ones with better performance. GAA

Disadvantages of above two categories:

1.  Distance based defenses are vulnerable to elaborately designed Byzantine attack.
2.  Performance based defenses have large computation overhead and scalability issue
    when conducting performance evaluation for each update.


## Views {#views}

MOZI integrates both distance based and performance based stategies to detect Byzantine
parameters.

At first stage, each benign node perfroms a distance-based strategy to select candidate
pool of potential benign nodes from its neighbors. The selection is made by comparing
the Euclidean distance of the estimate of each neighbor node with its own estimate.

At second stage, each benign node performs a performance based strategy to pick the final
nodes from the candidate pool for estimate update. It reuses the training sample as the
validation data to test the performance of each estimate.
