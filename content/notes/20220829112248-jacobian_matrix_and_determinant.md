+++
title = "Jacobian Matrix and Determinant"
author = ["Fangyuan"]
date = 2022-08-29
slug = "20220829112248-jacobian-matrix-and-determinant"
draft = false
+++

The Jacobian matrix of a vector-valued function of several variables is the matrix of all its first-order partial derivatives. When this matrix is square, that is, when the function takes the same number of variables as input as the number of vector components of its output, its determinant is referred to as the Jacobian determinant[^fn:1].

Suppose \\(f: R^n \rightarrow R^m\\) is a function such that each of the first-order partial derivatives exist on \\(R^n\\).

\begin{equation\*}
f(
\begin{bmatrix}
x\_1 \\\\
x\_2 \\\\
\cdots \\\\
x\_n
\end{bmatrix}
) =
\begin{bmatrix}
f\_1(x\_1, x\_2, \cdots, x\_n) \\\\
f\_2(x\_1, x\_2, \cdots, x\_n) \\\\
\cdots \\\\
f\_m(x\_1, x\_2, \cdots, x\_n) \\\\
\end{bmatrix}
\end{equation\*}

Then the Jacobian matrix of \\(f\\) is defined to be \\(m\times n\\) matrix, denoted by \\(J\\).

\begin{equation\*}
J = \begin{bmatrix}
\frac{\partial f\_1}{x\_1} & \frac{\partial f\_1}{x\_2} \cdots \frac{\partial f\_1}{x\_n} \\\\
\frac{\partial f\_2}{x\_1} & \frac{\partial f\_2}{x\_2} \cdots \frac{\partial f\_2}{x\_n} \\\\
\cdots \\\\
\frac{\partial f\_m}{x\_1} & \frac{\partial f\_m}{x\_2} \cdots \frac{\partial f\_m}{x\_n} \\\\
\end{bmatrix}
\end{equation\*}


## Meaning {#meaning}

Check here[^fn:2].

{{< figure src="/img/jacobian/Meaning/2022-08-30_10-41-32_screenshot.png" >}}

[^fn:1]: <https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant>
[^fn:2]: <https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/jacobian/v/the-jacobian-matrix>
