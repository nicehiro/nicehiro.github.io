+++
title = "Difference between camera_color_optical_frame and camera_optical_color_frame"
author = ["Fangyuan"]
date = 2023-07-14
slug = "20230714144256-difference-between-camera-color-optical-frame-and-camera-optical-color-frame"
tags = ["camera", "ros", "realsense"]
draft = false
+++

`camera_link` is the reference frame of the camera.

`_optical_frame` is the original frame coordinate system.

In eye-hand calibration, we use `_optical_frame` as camera frame.
