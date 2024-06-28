+++
title = "Arch Linux xhci_hcd keep resuming"
author = ["Fangyuan"]
date = 2023-03-10
slug = "20230310201941-arch-linux-xhci-hcd-keep-resuming"
tags = ["linux"]
draft = false
+++

The arch linux keep saying `xhci_hcd xHC error in resume` when I suspend the system. After chat with openai chatgpt and google, temporaly solve this problem by **disable** and **enable** the `xhci_hcd` module before and after suspending.
