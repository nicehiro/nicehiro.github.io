+++
title = "Mutual Information"
author = ["Fangyuan"]
date = 2022-11-04
slug = "20221104114029-mutual-information"
tags = ["probability", "math"]
draft = false
+++

In probability theory and information theory, the mutual information (MI) of two random variables is a measure of the <span class="underline">mutual dependence between the two variables</span>. More specifically, it quantifies the "amount of information" (in units such as shannons (bits), nats or hartleys) obtained about one random variable <span class="underline">by observing the other random variable</span>. The concept of mutual information is intimately linked to that of entropy of a random variable, a fundamental notion in information theory that quantifies the expected "amount of information" held in a random variable.

The mutual information can be defined as:

\begin{equation\*}
I(X;Y) = D\_{KL}( P\_{X,Y} || P\_{X} P\_{Y} )
\end{equation\*}

where \\(D\_{KL}\\) is the [KL Divergence]({{< relref "20201031155541-kl_divergence.md" >}}).

<span class="underline">If two variables are independent, \\(P\_{X,Y} = P\_{X} P\_{Y}\\), which means we can not obtain any information about \\(Y\\) by observing \\(X\\), and currently the KL divergence is 0. Thus mutual information is actually the distance between \\(P\_{X,Y}\\) and \\(P\_{X}P\_{Y}\\).</span>

Specifically, For discrete distributions:

\\[
\mathrm{I}(X ; Y)=\sum\_{y \in \mathcal{Y}} \sum\_{x \in \mathcal{X}} P\_{(X, Y)}(x, y) \log \left(\frac{P\_{(X, Y)}(x, y)}{P\_X(x) P\_Y(y)}\right)
\\]

For continuous distributions:

\\[
\mathrm{I}(X ; Y)=\int\_{\mathcal{Y}} \int\_{\mathcal{X}} P\_{(X, Y)}(x, y) \log \left(\frac{P\_{(X, Y)}(x, y)}{P\_X(x) P\_Y(y)}\right) d x d y
\\]

The relation between mutual information and [Entropy]({{< relref "20201117085024-entropy.md" >}}) and [Conditional Entropy]({{< relref "20221104104233-conditional_entropy.md" >}}) is:

\\[
I(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X) = I(Y;X)
\\]


## Links to this note {#links-to-this-note}

-   [Information Diagram]({{< relref "20221121204537-information_diagram.md" >}})

    > The diagram relationship between [Entropy]({{< relref "20201117085024-entropy.md" >}}), [Conditional Entropy]({{< relref "20221104104233-conditional_entropy.md" >}}), [Mutual Information]({{< relref "20221104114029-mutual_information.md" >}}).
-   [Difference Between MI, IG and KL]({{< relref "20221104141232-difference_between_mi_ig_and_kl.md" >}})

    > What's the difference between [Mutual Information]({{< relref "20221104114029-mutual_information.md" >}}), [Information Gain]({{< relref "20221104103346-information_gain.md" >}}) and [KL Divergence]({{< relref "20201031155541-kl_divergence.md" >}})?
-   [Skew-Fit: State-Covering Self-Supervised Reinforcement Learning]({{< relref "20221121172110-skew_fit_state_covering_self_supervised_reinforcement_learning.md" >}})

    > Try to find subgoals by maximizing the [mutual information]({{< relref "20221104114029-mutual_information.md" >}}):
