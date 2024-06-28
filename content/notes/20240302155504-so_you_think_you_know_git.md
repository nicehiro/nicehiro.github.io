+++
title = "So You Think You Know Git"
author = ["Fangyuan"]
date = 2024-03-02
slug = "20240302155504-so-you-think-you-know-git"
tags = ["git"]
draft = false
+++

Check the history of specific lines of code.

```sh
git blame -L 15,26 path/to/file
git log -L 15,2:path/to/file
```

REuse, REcorded, REsolution of merge conflicts.

```sh
git config --global rerere.enabld true
```

Use `force-with-lease` rather than `force`.

Start `maintainance` of git will save a lot of time for pre-fetching and others.

```sh
git maintainance start
```

Pull or fetch from different heads (branches) directly.

```sh
git ls-remote
```
