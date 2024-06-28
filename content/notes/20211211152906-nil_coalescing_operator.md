+++
title = "Nil Coalescing Operator"
author = ["Fangyuan"]
date = 2021-12-11
slug = "20211211152906-nil-coalescing-operator"
tags = ["swift"]
draft = false
+++

The `nil-coalescing` operator `(a ?? b)` unwraps an optional `a` if it contains
a value, or returns a default value b if a is nil.

The `nil-coalescing` operator is shorthand for the code below:

```swift
a != nil ? a! : b
```

Or we can simple consider it as `or` operator.
