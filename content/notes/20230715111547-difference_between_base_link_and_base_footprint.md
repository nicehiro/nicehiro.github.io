+++
title = "Difference between base_link and base_footprint"
author = ["Fangyuan"]
date = 2023-07-15
slug = "20230715111547-difference-between-base-link-and-base-footprint"
tags = ["ros"]
draft = false
+++

The coordinate frame called `base_link` is rigidly attached to the robot root body. It is recommended to choose the robot waist as its root body. The `base_link` can be attached to the root in any arbitrary position or orientation; for every hardware platform there will be a different place on the base that provides an obvious point of reference.

The `base_footprint` is the **representation** of the robot position on the floor. The floor is usually the level where the supporting leg rests. The translation component of the frame should be the barycenter of the feet projections on the floor. With respect to the odom frame, the roll and pitch angles should be zero and the yaw angle should correspond to the `base_link` yaw angle.

Rationale: `base_footprint` provides a fairly stable 2D planar representation of the humanoid even while walking and swaying with the `base_link`.
