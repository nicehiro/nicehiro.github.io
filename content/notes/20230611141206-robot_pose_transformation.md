+++
title = "Robot Pose Transformation"
author = ["Fangyuan"]
date = 2023-06-11
slug = "20230611141206-robot-pose-transformation"
tags = ["ros"]
draft = false
+++

The relative pose \\(^{W}\xi\_{R}\\) describes the **frame** \\({R}\\) with respect to the **frame** \\({W}\\). \\({W}\\) is the reference coordinate frame and \\({R}\\) is the frame being described. It can be seen as some motion: first applying a displacement and then a rotation to frame \\({W}\\).

Thus the point \\(P\\) can be described with respect to each coordinate frame:
\\[
^{W}P = ^{W} \xi \_{R} ^{R} P
\\]

To describe a coordinate frame \\({R}\\) wrt a reference frame \\({W}\\), it can be noticed that:

1.  **Translation**
2.  **Rotation**


## Pose Transformation in 2D {#pose-transformation-in-2d}

Let \\({V}\\) be a new coordinate frame, centered in \\({R}\\) but rotated as \\({W}\\).

Point \\(P\\) in \\({R}\\) is: \\(^{R}P = ^{R}x \hat{x}\_R + ^{R}y \hat{y}\_R\\), where \\(^{R}x\\) is the value of axis \\(x\\) and \\(\hat{x}\_R\\) is the unit vector.

Point \\(P\\) in \\({V}\\) is: \\(^{V}P = ^{V}x \hat{x}\_V + ^{V}y \hat{y}\_V = [\hat{x}\_V, \hat{y}\_V][^{V}x, ^{V}y]^T\\).


### Rotation {#rotation}

And the unit vector of frame \\({R}\\) can be described in reference frame \\({V}\\):

\begin{equation}
\begin{bmatrix}
\hat{x}\_R & \hat{y}\_R
\end{bmatrix}
=
\begin{bmatrix}
\hat{x}\_V & \hat{y}\_V
\end{bmatrix}

\begin{bmatrix}
\cos\theta & -\sin\theta \\\\
\sin\theta & \cos\theta
\end{bmatrix}
\end{equation}

Thus,

\\[
{ }^{\mathrm{R}} \mathbf{P}=\left[\begin{array}{ll}
\hat{\mathbf{x}}\_{\mathrm{v}} & \hat{\mathbf{y}}\_{\mathrm{v}}
\end{array}\right]\left[\begin{array}{cc}
\cos (\theta) & -\sin (\theta) \\\\
\sin (\theta) & \cos (\theta)
\end{array}\right]\left[\begin{array}{l}
\mathrm{R}\_{\mathrm{x}} \\\\
\mathrm{R}\_{\mathrm{y}}
\end{array}\right]
\\]

And we call that matrix as rotation matrix \\(^{W}R\_R(\theta)\\).

\\[
\left[\begin{array}{c}
v\_x \\\\
v\_y
\end{array}\right]={ }^v \mathbf{R}\_{\mathrm{R}}(\theta)\left[\begin{array}{l}
\mathrm{R}\_x \\\\
\mathrm{R}\_{\mathrm{y}}
\end{array}\right]
\\]


### Translation {#translation}

Frame \\({W}\\) and \\({V}\\) have parallel coordinate axes:
\\[
{ }^W \mathbf{P}=\left[\begin{array}{l}
{ }^W \mathrm{x} \\\\
W\_{\mathrm{y}}
\end{array}\right]=\left[\begin{array}{l}
V\_{\mathrm{x}} \\\\
V\_{\mathrm{y}}
\end{array}\right]+\left[\begin{array}{l}
\mathrm{x} \\\\
\mathrm{y}
\end{array}\right]
\\]

The rotation-translation matrix \\(T\\) is a homogenous transformation.

\\[
\left[\begin{array}{l}
W\_{\mathrm{X}} \\\\
W\_{\mathrm{y}}
\end{array}\right]=\left[\begin{array}{ccc}
\cos (\theta) & -\sin (\theta) & \mathrm{x} \\\\
\sin (\theta) & \cos (\theta) & \mathrm{y}
\end{array}\right]\left[\begin{array}{c}
R\_{\mathrm{X}} \\\\
R\_{\mathrm{y}} \\\\
1
\end{array}\right]
\\]

Thus,

\begin{gathered}
F \tilde{\mathbf{P}}=F \mathbf{T}\_R^R \tilde{\mathbf{P}} \\\\
{ }^F \mathbf{T}\_R=\left[\begin{array}{ccc}
\cos (\theta) & -\sin (\theta) & \mathrm{x} \\\\
\sin (\theta) & \cos (\theta) & \mathrm{y} \\\\
0 & 0 & 1
\end{array}\right]
\end{gathered}


## Pose Transformation in 3D {#pose-transformation-in-3d}
