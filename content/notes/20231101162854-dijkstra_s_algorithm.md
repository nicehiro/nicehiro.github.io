+++
title = "Dijkstra's Algorithm"
author = ["Fangyuan"]
date = 2023-11-01
slug = "20231101162854-dijkstra-s-algorithm"
tags = ["shortest", "path"]
draft = false
+++

We want to get the shortest path starting from \\(s\\) to other nodes.

Let \\(S\\) be the explored nodes. For \\(u \in S\\), \\(d[u] =\\) length of a shortest path from \\(s\\) to \\(u\\).

For \\(x \notin S\\), \\(d(x) = \min\_{(r,x):r \in S}{d[r] + l(r,x)}\\).

It requires no negative values of vertex.

Running time is \\(O(mn)\\). Can be improved to \\(O(m\log n)\\) via priority queue.

Cannot handle the graph with negative cycle.


## Links to this note {#links-to-this-note}

-   [Bellman-Ford Algorithm]({{< relref "20231101214640-bellman_ford_algorithm.md" >}})

    > Bellman-Ford, like [Dijkstra's Algorithm,]({{< relref "20231101162854-dijkstra_s_algorithm.md" >}}) is also a algorithm to find a shortest path in a graph.
-   [Minimum Spanning Tree]({{< relref "20231101165012-minimum_spanning_tree.md" >}})

    > Let \\(H = (V, T)\\) be a subgraph of an <span class="underline">undirected</span> graph \\(G=(V,E)\\). \\(H\\) is a spanning tree of \\(G\\) if \\(H\\) is both acyclic and <span class="underline">connected</span>.
