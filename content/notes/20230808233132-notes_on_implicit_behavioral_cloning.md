+++
title = "Notes on Implicit Behavioral Cloning"
author = ["Fangyuan"]
date = 2023-08-08
slug = "20230808233132-notes-on-implicit-behavioral-cloning"
tags = ["bc"]
draft = false
+++

## Key idea {#key-idea}

Behavioral cloning policies are often represented by explicit continuous feed-forward models that mappingg directly from input observations \\(o \in \mathcal{O}\\) to output action \\(a \in \mathcal{A}\\).

\\[
\hat{a} = F\_{\theta} (o)
\\]

In this work, they reformulate BC using the composition of `argmin` with an energy function \\(E\\) to represent the policy,

\\[
\hat{a} = \arg\min\_{a} E\_{\theta} (o, a)
\\]

Then train the model with different EBM training methods.


## What you can learn? {#what-you-can-learn}

1.  From explicit to implicit.
    If there's a way to transfer the methods/optimization goal from explicit to implicit, there's a way to write a paper.


## Drawbacks {#drawbacks}

Not found.
