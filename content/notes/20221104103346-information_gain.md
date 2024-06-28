+++
title = "Information Gain"
author = ["Fangyuan"]
date = 2022-11-04
slug = "20221104103346-information-gain"
tags = ["math", "probability"]
draft = false
+++

In information theory and machine learning, information gain is a synonym for Kullback–Leibler divergence; the amount of information gained about a random variable or signal from observing another random variable. However, in the context of decision trees, the term is sometimes used synonymously with mutual information, which is the conditional expected value of the Kullback–Leibler divergence of the univariate probability distribution of one variable from the conditional distribution of this variable given the other one.

In general terms, the expected information gain is the reduction in information entropy \\(\mathcal{H}\\) from a prior state to a state that takes some information as given:

\\[
I(D,x) = H(D) - H(D|x)
\\]

where \\(H(D|x)\\) is the [Conditional Entropy]({{< relref "20221104104233-conditional_entropy.md" >}}).


## Links to this note {#links-to-this-note}

-   [Difference Between MI, IG and KL]({{< relref "20221104141232-difference_between_mi_ig_and_kl.md" >}})

    > What's the difference between [Mutual Information]({{< relref "20221104114029-mutual_information.md" >}}), [Information Gain]({{< relref "20221104103346-information_gain.md" >}}) and [KL Divergence]({{< relref "20201031155541-kl_divergence.md" >}})?
