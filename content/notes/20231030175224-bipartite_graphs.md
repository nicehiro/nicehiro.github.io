+++
title = "Bipartite Graphs"
author = ["Fangyuan"]
date = 2023-10-30
slug = "20231030175224-bipartite-graphs"
tags = ["graph"]
draft = false
+++

## Definition {#definition}

Let \\(G\\) be a connected graph, and let \\(L\_0, \cdots, L\_k\\) be the layers produced by BFS starting at node \\(s\\). Exactly one of the following holds,

1.  No edge of \\(G\\) joins two nodes of the same layer, and \\(G\\) is bipartite.
2.  An edge of \\(G\\) joins two nodes of the same layer, and \\(G\\) contains an <span class="underline">odd_legth</span> cycle.
