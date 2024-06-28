+++
title = "Notes on Deep rl at scale: sorting waste in office building with a fleet of mobile manipulators"
author = ["Fangyuan"]
date = 2023-07-16
slug = "20230716021919-notes-on-deep-rl-at-scale-sorting-waste-in-office-building-with-a-fleet-of-mobile-manipulators"
tags = ["off-policy", "rl"]
draft = false
+++

## Intro {#intro}

This paper describe a system to solve large-scale real-world task: sorting wastes in office buildings with a total training set of 9527 hours of robotic experience.


## Highlights {#highlights}

1.  Hybrid data collecting system which contains simulated data and real-world data that is collected through a varity of policy bootstraping approaches.

2.  Learning complex tasks by first bootstraping from simulation, and then use of multi-task training to learn simple tasks as a stepping stone.

3.  RetinaGAN, a transformer which can transform simulated images to look more realistic.


## Can be improved {#can-be-improved}

Not found yet.
