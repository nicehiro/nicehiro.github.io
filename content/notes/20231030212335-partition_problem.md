+++
title = "Partition Problem"
author = ["Fangyuan"]
date = 2023-10-30
slug = "20231030212335-partition-problem"
draft = false
+++

## Problem Definition {#problem-definition}

Given integers \\(v\_1, \cdots, v\_n\\), is there a subset \\(S \subseteq \\{1, \cdots, n\\}\\) such that \\(\sum\_{i\in S} v\_i = \sum\_{i\notin S} v\_i\\).


## Prove Partition problem is [NP-complete]({{< relref "20231030205540-np_complete.md" >}}) {#prove-partition-problem-is-np-complete--20231030205540-np-complete-dot-md}

1.  Prove it is NP.
2.  Choose [Subset Sum Problem]({{< relref "20231030210830-subset_sum_problem.md" >}}).
3.  Prove that [Subset Sum Problem]({{< relref "20231030210830-subset_sum_problem.md" >}}) \\(\leq\_P\\) Partition problem.
    Given Subset Sum instance \\(w\_1, \cdots, w\_n\\) and an integer \\(W\\), set \\(v\_i = w\_i\\), and \\(W = \frac{1}{2} \sum\_{i\in [n]} v\_i\\).


## Links to this note {#links-to-this-note}

-   [Poly-Time Reductions]({{< relref "20231030180040-poly_time_reductions.md" >}})

    > Problem \\(X\\) polynomial-time reduces to problem \\(Y\\) (\\(X \leq\_p Y\\)) if arbitray instances of problem \\(X\\) can be solved using
-   [NP-Complete]({{< relref "20231030205540-np_complete.md" >}})

    > A problem \\(Y \in NP\\) with the property that for every problem \\(X \in NP\\), \\(X \leq\_P Y\\).
