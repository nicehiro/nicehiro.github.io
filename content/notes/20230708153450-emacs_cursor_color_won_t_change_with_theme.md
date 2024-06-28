+++
title = "Emacs cursor color won't change with theme"
author = ["Fangyuan"]
date = 2023-07-08
slug = "20230708153450-emacs-cursor-color-won-t-change-with-theme"
tags = ["emacs"]
draft = false
+++

There's both a cursor-color frame parameter and a cursor face. One of these settings may be overriding the other. Most themes will set the cursor face appropriately for dark/light frame background colours, so you might consider explicitly setting the cursor-color to nil so that you can rely on the theme's settings.

```shell
(add-to-list 'default-frame-alist '(cursor-color . nil))
```
