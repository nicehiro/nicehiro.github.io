+++
title = "Integrate URDF with Gazebo"
author = ["Fangyuan"]
date = 2023-05-16
slug = "20230516160223-integrate-urdf-with-gazebo"
tags = ["urdf", "ros"]
draft = false
+++

Some tips for integrate[ URDF]({{< relref "20230515200714-urdf.md" >}}) with Gazebo.

1.  URDF file should contain `<collision>` element.
2.  URDF file should contain `<inertial>` element.


## material {#material}

```xml
<gazebo reference="base_link">
    <material>Gazebo/Black</material>
</gazebo>
```


## inertial {#inertial}

Standard inertial matrix implements using[ Xacro]({{< relref "20230516152748-xacro.md" >}}).

```xml
<!-- Macro for inertia matrix -->
<xacro:macro name="sphere_inertial_matrix" params="m r">
    <inertial>
        <mass value="${m}" />
        <inertia ixx="${2*m*r*r/5}" ixy="0" ixz="0"
                 iyy="${2*m*r*r/5}" iyz="0"
                 izz="${2*m*r*r/5}" />
    </inertial>
</xacro:macro>
<xacro:macro name="cylinder_inertial_matrix" params="m r h">
    <inertial>
        <mass value="${m}" />
        <inertia ixx="${m*(3*r*r+h*h)/12}" ixy = "0" ixz = "0"
                 iyy="${m*(3*r*r+h*h)/12}" iyz = "0"
                 izz="${m*r*r/2}" />
    </inertial>
</xacro:macro>
<xacro:macro name="Box_inertial_matrix" params="m l w h">
    <inertial>
        <mass value="${m}" />
        <inertia ixx="${m*(h*h + l*l)/12}" ixy = "0" ixz = "0"
                 iyy="${m*(w*w + l*l)/12}" iyz= "0"
                 izz="${m*(w*w + h*h)/12}" />
    </inertial>
</xacro:macro>
```


## launch {#launch}

Load urdf data by using `param` element:

```xml
<!-- For pure urdf file -->
<param name="robot_description" command="$(find pkg)/urdf/xacro/test.xacro" />

<!-- For xacro file -->
<param name="robot_description" command="$(find xacro)/xacro $(find pkg)/urdf/xacro/test.urdf.xacro" />
```

Load Gazebo world:

```xml
<include file="$(find gazebo_ros)/launch/empty_world.launch">
    <arg name="world_name" value="$(find pkg)/worlds/hello.world" />
</include>
```

Start Gazebo node:

```xml
<node pkg="gazebo_ros" type="spawn_model" name="model" args="-urdf -model mycar -param robot_description"  />
```
