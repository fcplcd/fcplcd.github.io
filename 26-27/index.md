---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "FCPLCD"
  text: "WS 2026/27"
#  tagline: My great project tagline
#   actions:
#     - theme: brand
#       text: Markdown Examples
#       link: /markdown-examples
#     - theme: alt
#       text: API Examples
#       link: /api-examples
#
# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div class="text-justify">

Welcome to the website for the lecture _Foundations of Certified Programming Languages and Compiler Design_.
The two tables below list all lectures and exercises given so far in the winter semester 2026/27.
The resources — lecture slides, recordings, code examples, and assignment sheets — are linked in these tables and will be updated as the semester progresses.

# General Information {.mt-16! .mb-8!}

<table>
  <tbody>
    <tr><td><strong>Time slot (lecture)</strong></td><td>Tuesday at 9:20 - 10:50 a.m.</td></tr>
    <tr><td><strong>Time slot (exercise)</strong></td><td>Thursday at 1:00 - 2:30 p.m.</td></tr>
    <tr><td><strong>Room (lecture)</strong></td><td><a href="http://navigator.tu-dresden.de/etplan/apb/00/raum/542100.2060">APB/E001/U</a></td></tr>
    <tr><td><strong>Room (exercise)</strong></td><td><a href="http://navigator.tu-dresden.de/etplan/apb/00/raum/542100.2110">APB/E006/U</a></td></tr>
  </tbody>
</table>

</div>


# Lectures {.mt-16! .mb-8!}

<div class="text-justify">

All the relevant lecture materials, including the code shown in the lecture, the exercise sheets and templates
as well as the lecture slides, are made available on the lecture's GitLab repository:

**https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026**
<br><br>

</div>


| No. | Date       | Topic/Slides                                                                                                   | Code                                                          |
|-----|------------|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| 0   | 20.10.2026 | [Motivation](https://pages.barkhauseninstitut.org/versa/teaching/fcplcd/slidev/26-27/00-motivation) ([PDF](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/lectures/slides/00-motivation.pdf))| |
| 1   | 27.10.2026 | [Propositional and First-Order Logic](https://pages.barkhauseninstitut.org/versa/teaching/fcplcd/slidev/26-27/01-logic) ([PDF](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/lectures/slides/01-logic.pdf))| [code](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/tree/main/lectures/code/01-logic) |
| 2   | 03.11.2026 | [Functional Programming in Rocq](https://pages.barkhauseninstitut.org/versa/teaching/fcplcd/slidev/26-27/02-functional) ([PDF](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/lectures/slides/02-functional.pdf))| [code](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/tree/main/lectures/code/02-functional) |
| 3   | 10.11.2026 | [Syntax and Semantics](https://pages.barkhauseninstitut.org/versa/teaching/fcplcd/slidev/26-27/03-semantics) ([PDF](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/lectures/slides/03-semantics.pdf)) | [code](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/tree/main/lectures/code/03-semantics) |
| 4   | 17.11.2026 | [The Untyped Lambda Calculus](https://pages.barkhauseninstitut.org/versa/teaching/fcplcd/slidev/26-27/04-lambda) ([PDF](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/lectures/slides/04-lambda.pdf)) | [code](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/tree/main/lectures/code/04-lambda) |
<!-- |     |            | [Propositional Logic](lectures/slides/2025_10_14_propositional_logic.pdf)                                      | [Prop in Holbert](lectures/code/prop-logic.holbert)           |
| 2   | 21.10.2025 | [First-Order Logic](lectures/slides/2025_10_21_first_order_logic.pdf)                                          |                                                               |
| 3   | 28.10.2025 | Functional Programming                                                                                         | [Fun Prog in Rocq](lectures/code/funprog.v)                   |
|     |            | [Syntax](lectures/slides/2025_10_28_syntax.pdf)                                                                |                                                               |
| 4   | 04.11.2025 | [Semantics (up to determinisim)](lectures/slides/2025_11_04_semantics.pdf)                                     | [Semantics in Rocq](lectures/code/semantics.v)                |
| 5   | 11.11.2025 | [Semantics](lectures/slides/2025_11_04_semantics.pdf)                                                          | [Proof of Determinism in Rocq](lectures/code/semantics_det.v) |
| 6   | 18.11.2025 | [The Untyped Lambda Calculus](lectures/slides/2025_11_18_untyped_lambda.pdf)                                   | [Rocq development](lectures/code/UntypedLambda.v)             |
| 7   | 25.11.2025 | [Typing](lectures/slides/2025_11_25_typing.pdf)                                                                | [Rocq development](lectures/code/typing.v)                    |
| 8   | 02.12.2025 | [The Simply-Typed Lambda Calculus (Semantics and Typing)](lectures/slides/2025_12_02_typed_lambda.pdf)         | [Rocq development](lectures/code/TypedLambda.v)               |
| 9   | 09.12.2025 | [The Simply-Typed Lambda Calculus (Normalization and Extensions)](lectures/slides/2025_12_02_typed_lambda.pdf) | [Rocq development](lectures/code/TypedLambda.v)               |
| 10  | 16.12.2025 | [Quantification for increased modularity](lectures/slides/2025_12_16_quantification.pdf)                       |                                                               |
| 11  | 06.01.2026 | [Curry-Howard-Correspondence](lectures/slides/2026_01_06_curry_howard.pdf)                                     |                                                               |
| 12  | 20.01.2026 | [A Verified Compiler for an Imperative Language](lectures/code/compilerverif/SUMMARY.md)                       | [Rocq development](lectures/code/compilerverif/README.md)     |
| 13  | 27.01.2026 | [System F, Kinds, Lambda Cube and Conclusion](lectures/slides/2026_01_27_higher_order.pdf)                     |                                                               | -->

# Assigments {.mt-16! .mb-8!}

<div class="text-justify">

The course assignments serve to reinforce the lecture material and to acquire
practical knowledge of the [Rocq](https://rocq-prover.org/) theorem prover.
You will generally have two weeks to complete each assignment sheet. The
exercise slot in the first week is meant for discussing the assignment and
clarifying any problems you run into while working on it. The deadline is
typically exactly one day before the second exercise slot, so that we can use
the slot in the second week to go through the solution together.

You can submit your solutions by emailing them to us (fcplcd@barkhauseninstitut.org) by the specified due date.
You are not required to submit the assignments in order to take the exam.
However, we will take your solutions into account when designing your exam questions.
This means, for example, that you are more likely to receive specific programming tasks in the exam
if we cannot tell from your submissions whether you have learned to program in Rocq.

</div>

| No. | Published  | Due        | Assignment                          |
|-----|------------|------------|-------------------------------------|
| 1.  | 28.10.2026 | 04.11.2026 | [PDF](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/exercises/exercise1/exercise1.pdf) / [code](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/blob/main/exercises/exercise1/exercise1.v) / [How to set up Rocq](./setup) |
| 2.  | 05.11.2026 | 18.11.2026 | [PDF](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/exercises/exercise2/exercise2.pdf) / [code](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/blob/main/exercises/exercise2/exercise2.v) / [notes](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/exercises/exercise2/exercise2-notes.v) / [notes'](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/exercises/exercise2/notes'.v) |
| 3.  | 19.11.2026 | 03.12.2026 | [PDF](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/raw/main/exercises/exercise3/exercise3.pdf) / [code](https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026/-/blob/main/exercises/exercise3/exercise3.v) |
<!-- | 1.  | 22.10.2025 | 05.11.2025 | [Assignment1](/exercises/Exercise1) |
| 2.  | 07.11.2025 | 19.11.2025 | [Assignment2](/exercises/Exercise2) |
| 3.  | 20.11.2025 | 03.12.2025 | [Assignment3](/exercises/Exercise3) |
| 4.  | 08.12.2025 | 17.12.2025 | [Assignment4](/exercises/Exercise4) |
| 5.  | 08.01.2026 | 22.01.2026 | [Assignment5](/exercises/Exercise5) | -->

<!-- # Development Setup {.mt-16! .mb-8!}

For the development setup that you will need for the assignments please refer to [setup](./SETUP.md) -->
