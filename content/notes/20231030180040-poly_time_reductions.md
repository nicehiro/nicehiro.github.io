+++
title = "Poly-Time Reductions"
author = ["Fangyuan"]
date = 2023-10-30
slug = "20231030180040-poly-time-reductions"
tags = ["np"]
draft = false
+++

Problem \\(X\\) polynomial-time reduces to problem \\(Y\\) (\\(X \leq\_p Y\\)) if arbitray instances of problem \\(X\\) can be solved using

1.  Polynomial number of standard computational steps, and
2.  Polynomial number of calls to oracle that solves problem \\(Y\\).


## Prove \\(X \leq\_p Y\\) {#prove-x-leq-p-y}

1.  Construct problem Y by using problem X
2.  Verify contruction is correct. \\(X \rightarrow Y\\) and \\(Y \rightarrow X\\)
3.  Verify there's polynomial times contruction and calls.
4.  Done


## Known reductions {#known-reductions}

1.  [SAT Problem]({{< relref "20231030173642-sat_satisfiability_problem.md" >}}) \\(\leq\_P\\) [3-SAT Problem]({{< relref "20231030174320-3_sat.md" >}}) \\(\leq\_P\\) [Independent Set Problem]({{< relref "20231030210144-independent_set_problem.md" >}}) \\(\leq\_P\\)[ Vertex Cover Problem]({{< relref "20231030180853-vertex_cover_problem.md" >}}) \\(\leq\_P\\) [Set Cover Problem]({{< relref "20231030180639-set_cover_problem.md" >}})

2.  [3-SAT Problem]({{< relref "20231030174320-3_sat.md" >}}) \\(\leq\_P\\) [Subset Sum Problem]({{< relref "20231030210830-subset_sum_problem.md" >}})

3.  [Subset Sum Problem]({{< relref "20231030210830-subset_sum_problem.md" >}}) \\(\leq\_P\\) [Knapsack Problem]({{< relref "20231030211311-knapsack_problem.md" >}})

4.  [Subset Sum Problem]({{< relref "20231030210830-subset_sum_problem.md" >}}) \\(\leq\_P\\) [Partition Problem]({{< relref "20231030212335-partition_problem.md" >}})

5.  [Partition Problem]({{< relref "20231030212335-partition_problem.md" >}}) \\(\leq\_P\\) [Subset Sum Problem]({{< relref "20231030210830-subset_sum_problem.md" >}})

6.  [Hamiltonian Cycle]({{< relref "20231031205901-hamiltonian_cycle.md" >}}) \\(\leq\_P\\) [TSP]({{< relref "20231031211757-travelling_salesman_problem.md" >}})
