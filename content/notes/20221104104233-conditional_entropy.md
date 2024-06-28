+++
title = "Conditional Entropy"
author = ["Fangyuan"]
date = 2022-11-04
slug = "20221104104233-conditional-entropy"
tags = ["probability", "math"]
draft = false
+++

In information theory, the conditional entropy quantifies the amount of information needed to describe the outcome of a random variable Y given that the value of another random variable X, X is known. Here, information is measured in shannons, nats, or hartleys. The entropy of Y conditioned on X is written as \\(\mathcal{H}(Y|X)\\).

Remember, the entropy means the uncertainty of the variable. Thus the conditional entropy means the uncertainty of \\(Y\\) when knowing \\(X\\).

\begin{align\*}
\mathcal{H}(Y|X) &= - \sum\_{x,y} p(x, y) \log p(y|x) \\\\
&= - \sum\_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)}
\end{align\*}


## Links to this note {#links-to-this-note}

-   [Information Diagram]({{< relref "20221121204537-information_diagram.md" >}})

    > The diagram relationship between [Entropy]({{< relref "20201117085024-entropy.md" >}}), [Conditional Entropy]({{< relref "20221104104233-conditional_entropy.md" >}}), [Mutual Information]({{< relref "20221104114029-mutual_information.md" >}}).
-   [Information Gain]({{< relref "20221104103346-information_gain.md" >}})

    > In information theory and machine learning, information gain is a synonym for Kullback–Leibler divergence; the amount of information gained about a random variable or signal from observing another random variable. However, in the context of decision trees, the term is sometimes used synonymously with mutual information, which is the conditional expected value of the Kullback–Leibler divergence of the univariate probability distribution of one variable from the conditional distribution of this variable given the other one.
-   [Mutual Information]({{< relref "20221104114029-mutual_information.md" >}})

    > In probability theory and information theory, the mutual information (MI) of two random variables is a measure of the <span class="underline">mutual dependence between the two variables</span>. More specifically, it quantifies the "amount of information" (in units such as shannons (bits), nats or hartleys) obtained about one random variable <span class="underline">by observing the other random variable</span>. The concept of mutual information is intimately linked to that of entropy of a random variable, a fundamental notion in information theory that quantifies the expected "amount of information" held in a random variable.
