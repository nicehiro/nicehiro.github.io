+++
title = "Pytorch Stack"
author = ["Fangyuan"]
slug = "PyTorch Stack"
tags = ["pytorch"]
draft = false
+++

Concatenates a sequence of tensors along a new dimension.
把一组向量沿新的维度组合。

```python
a = torch.randn((4, 5))
b = torch.stack((a, a, a), dim=0)
#=> (3, 4, 5)
c = torch.stack((a, a, a), dim=1)
#=> (4, 3, 5)
d = torch.stack((a, a, a), dim=2)
#=> (4, 5, 3)
```


## Links to this note {#links-to-this-note}

-   [Pytorch Cat]({{< relref "20201201215012-pytorch_cat.md" >}})

    >   Concatenates the given sequence of seq tensors in the given dimensions.
    > All tensors must either have the same shape or be empty.
