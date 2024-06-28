+++
title = "Which Mutual Information Representation Learning Objectives are Sufficient for Control"
author = ["Fangyuan"]
date = 2021-11-22
slug = "20211122110902-which-mutual-information-representation-learning-objectives-are-sufficient-for-control-org"
tags = ["fs", "rl"]
draft = false
+++

This paper formalize the sufficiency of a state representation for learning
and representing the optimal policy, and study several popular mutual-information(MI)
based objectives through this lens.

A useful state representation should be sufficient to learn and represent
the optimal policy or the optimal value function, while discarding irrelevant
and redundant information.


## Mutual information {#mutual-information}

In information theory, the mutual information(MI) between two random variables,
\\(X\\) and \\(Y\\), is defined as:

\\[
I(X;Y) = \mathbb{E}\_{p(x,y)}\log\frac{p(x,y)}{p(x)p(y)}=H(X)-H(X|Y)
\\]

MI measures the **reduction** in the uncertainty of one random variable
from observing the value of the other.
So, the goal of the representation learning for RL is to maximize the
MI between the original state and the compact state representation.


## Sufficient Representations for RL {#sufficient-representations-for-rl}

**Definition 1** A stochastic representation \\(\phi\_{Z}(s)\\) is a mapping from
states \\(s\in S\\) to a probability distribution \\(p(Z|S=s)\\) over elements
of a new representation space \\(z \in Z\\).

**Definition 2** A representation \\(\phi\_{Z}\\) is $&pi;<sup>*</sup>$-sufficient
with respect to a set of reward functions \\(R\\) if
\\(\forall r \in R, \phi\_{Z}(s\_1)=\phi\_{Z}(s\_2) \rightarrow \pi\_r^{\star}(A|s\_1)=\pi\_r^{\star}(A|s\_2)\\).

**Definition 2** A representation \\(\phi\_{Z}\\) is $Q<sup>*</sup>$-sufficient
with respect to a set of reward functions \\(R\\) if
\\(\forall r \in R, \phi\_{Z}(s\_1)=\phi\_{Z}(s\_2) \rightarrow Q\_r^{\star}(A|s\_1)=Q\_r^{\star}(A|s\_2)\\).


## Mutual Information for Representation Learning in RL {#mutual-information-for-representation-learning-in-rl}

Several MI objectives:

**Forward information**
\\[
J = I(Z\_{t+1};Z\_t,A\_t)
\\]

**State-only transition information**
\\[
J = I(Z\_{t+k};Z\_t)
\\]

**Inverse information**
\\[
J = I(A\_t;Z\_{t+k}|Z\_t)
\\]


## Experiments {#experiments}

They first optimize each representation learning objective on a dataset
which is collected from a uniform random policy, then freeze
the weights of the state encoder learned in the first phase and train
RL agent with the representation as state input.
