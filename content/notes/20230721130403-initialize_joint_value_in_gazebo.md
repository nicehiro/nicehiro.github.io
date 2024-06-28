+++
title = "Initialize joint value in gazebo"
author = ["Fangyuan"]
date = 2023-07-21
slug = "20230721130403-initialize-joint-value-in-gazebo"
tags = ["gazebo", "ros"]
draft = false
+++

There's two ways to initialize joint value of a give robot model:

1.  modify the `origin` attribute of `<joint>` in urdf file

2.  add `-J JOINT_NAME JOINT_VALUE` when spawn the robot

The first method will make default joints value wired, so I would suggest to use second method.

But there's still a [bug](https://github.com/ros-simulation/gazebo_ros_pkgs/issues/93) on gazebo when initializing joint value. Current workaround is:

```xml
<arg name="paused" default="true" doc="Starts gazebo in paused mode" />

<include file="$(find gazebo_ros)/launch/empty_world.launch">
  <arg name="world_name" default="worlds/empty.world"/>
  <arg name="paused" value="$(arg paused)"/>
  <arg name="gui" value="$(arg gui)"/>
</include>

<node name="spawn_gazebo_model" pkg="gazebo_ros" type="spawn_model" args="-urdf -param robot_description -model robot
            -z 0.0
            -J shoulder_lift_joint -1.57
            -J elbow_joint 1.001
            -unpause
            " respawn="false" output="screen" />
```

We need to launch the Gazebo simulation paused so that physics is off. Then use -unpause flag with the spawner to turn on the physics.
