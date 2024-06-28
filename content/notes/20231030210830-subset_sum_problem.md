+++
title = "Subset Sum Problem"
author = ["Fangyuan"]
date = 2023-10-30
slug = "20231030210830-subset-sum-problem"
draft = false
+++

## Problem Definition {#problem-definition}

Given \\(n\\) natural numbers \\(w\_1, \cdots, w\_n\\) and an integer \\(W\\), is there a subset that adds up to exactly \\(W\\)? (\\(\sum\_1^n w\_i > W\\))


## Links to this note {#links-to-this-note}

-   [Poly-Time Reductions]({{< relref "20231030180040-poly_time_reductions.md" >}})

    > Problem \\(X\\) polynomial-time reduces to problem \\(Y\\) (\\(X \leq\_p Y\\)) if arbitray instances of problem \\(X\\) can be solved using
-   [Knapsack Problem]({{< relref "20231030211311-knapsack_problem.md" >}})

    > Given a set of \\(n\\) items \\(X\\), size \\(s\_i \geq 0\\), values \\(v\_i \geq 0\\), a weight limit \\(B\\), and a target value \\(V\\), is there a subset \\(S \subseteq X\\) such that:
    > \\(\sum\_{i\in S} s\_i \leq B\\) and \\(\sum\_{i \in S} v\_i \geq V\\)
-   [Partition Problem]({{< relref "20231030212335-partition_problem.md" >}})

    > Given integers \\(v\_1, \cdots, v\_n\\), is there a subset \\(S \subseteq \\{1, \cdots, n\\}\\) such that \\(\sum\_{i\in S} v\_i = \sum\_{i\notin S} v\_i\\).
