+++
title = "Tiago: Navigation"
author = ["Fangyuan"]
date = 2024-02-27
slug = "20240227142422-tiago-navigation"
tags = ["navigation", "tiago"]
draft = false
+++

## Pre-requirements {#pre-requirements}

1.  Make sure `ROS_IP` of development machine is set correctly
2.  Navigation module is not paused.

<!--listend-->

```bash
# on development machine
rosservice call /pal_navigation_sm "input: 'LOC'"
rosrun rviz rviz -d `rospack find tiago_dual_2dnav` /config/rviz/navigation.rviz
```


## Problems {#problems}


### Navigation is paused! {#navigation-is-paused}

This warning keep shows in Diagnose page even there's no charger or docker connected to the robot. After asking PAL company, they give an alternative method to handle this:

```bash
# on tiago machine
rosparam set /docking/was_docked False
rostopic pub /pause_navigation std_msgs/Bool "data: false"
```

Check the diagnostics tb and when the navigation turns green press `Control C`.

Then modify:

```bash
sudo vim ~/.pal/was_docked.yaml
```

and change the value from `True` to `False.`
