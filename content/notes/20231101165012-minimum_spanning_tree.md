+++
title = "Minimum Spanning Tree"
author = ["Fangyuan"]
date = 2023-11-01
slug = "20231101165012-minimum-spanning-tree"
tags = ["graph"]
draft = false
+++

## Spanning Tree {#spanning-tree}

Let \\(H = (V, T)\\) be a subgraph of an <span class="underline">undirected</span> graph \\(G=(V,E)\\). \\(H\\) is a spanning tree of \\(G\\) if \\(H\\) is both acyclic and <span class="underline">connected</span>.

The following are equivalent:

1.  \\(H\\) is spanning tree of \\(G\\).
2.  \\(H\\) is acyclic and connected.
3.  \\(H\\) is connected and has \\(|V| - 1\\) edges.
4.  \\(H\\) is acylic and has \\(|V| - 1\\) edges.
5.  \\(H\\) is minimally connected.
6.  \\(H\\) is maximally acyclic.


## Minimum Spanning Tree {#minimum-spanning-tree}

Spanning tree with minimum costs.

**Cayley's theorem**: The complete graph on \\(n\\) nodes has \\(n^{n-2}\\) spanning trees.


### Cut Property {#cut-property}

Let \\(S\\) be any subset of nodes \\(S \neq V\\).
Let edge \\(e = (v,w)\\) be the minimum cost edge with one end in \\(S\\) and the other in \\(V-S\\).

Then every MST contains the edge \\(e\\).


### Kruskal's Algorithm {#kruskal-s-algorithm}

1.  Starts without any edges and insert edges from \\(E\\) in order of increasing cost.
2.  For edge \\(e\_i\\), insert it if it does not create a cycle with all inserted edges, and discard otherwise.


### Prim's Algorithm {#prim-s-algorithm}

1.  Start with a root node \\(S = {s}\\), and try to grow a tree from \\(S\\)
2.  Add the node \\(v\\) connected with \\(S\\) that can be attached as cheaply as possible.

Inspired by [Dijkstra's Algorithm]({{< relref "20231101162854-dijkstra_s_algorithm.md" >}}) with difference:

1.  Compare with every node in known set \\(S\\), not root node. Thus no distance needed.


### Cycle Property {#cycle-property}

Let \\(C\\) be any cycle in \\(G\\).
Let edge \\(e\\) be the most expensive edge on C. Then \\(e\\) does not belong to any MST.


### Reverse-Delete Algorithm {#reverse-delete-algorithm}

1.  Start with the full graph \\((V,E)\\) and being deleting edges in order of decreasing cost.
2.  Delete edges as long as doing do would not actually disconnect the graph.
