+++
title = "Bellman-Ford Algorithm"
author = ["Fangyuan"]
date = 2023-11-01
slug = "20231101214640-bellman-ford-algorithm"
tags = ["graph"]
draft = false
+++

Bellman-Ford, like [Dijkstra's Algorithm,]({{< relref "20231101162854-dijkstra_s_algorithm.md" >}}) is also a algorithm to find a shortest path in a graph.

If \\(G\\) has no negative cycles, then there is a shortest path from \\(s\\) to \\(t\\) that is simple (i.e., does not repeat nodes), and hence has at most \\(n-1\\) edges.

Let \\(OPT(i,v)\\) to denote the minimum cost of a \\(v-t\\) path using at most \\(i\\) edges.
Our problem is to compute \\(OPT(n-1,s)\\).
