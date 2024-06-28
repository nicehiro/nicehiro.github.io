+++
title = "Directed Acyclic Graphs"
author = ["Fangyuan"]
date = 2023-10-30
slug = "20231030175630-directed-acyclic-graphs"
tags = ["graph"]
draft = false
+++

## Definition {#definition}

A directed acyclic graph (DAG) is a <span class="underline">directed graph</span> that contains <span class="underline">no directed cycles</span>.

If \\(G\\) has a topological order, then \\(G\\) is a DAG.

If \\(G\\) is a DAG, then \\(G\\) has a node with no entering edges.

If \\(G\\) is a DAG, then \\(G\\) has a topological order.


## Links to this note {#links-to-this-note}

-   [Topological Order]({{< relref "20231030175819-topological_order.md" >}})

    > A topological order of a [Directed Acyclic Graphs]({{< relref "20231030175630-directed_acyclic_graphs.md" >}}) is an ordering of its nodes so that for every edge \\((v\_i, v\_j)\\) we have \\(i < j\\)
