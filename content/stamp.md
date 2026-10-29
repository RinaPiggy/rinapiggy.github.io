[← All projects](/projects/)

**Manuscript under review · Transportation Research Part C**

## The problem

For an electric shared fleet, predicting demand is not enough: operational decisions also depend on where vehicles will be and whether their batteries make them usable. Demand and available supply evolve together across the network.

## My contribution

I developed **STAMP**, a spatio-temporal multi-task framework that jointly produces probabilistic forecasts for four targets:

- Pickup demand
- Drop-off demand
- Idle fleet size
- The number of low state-of-charge vehicles

Forecasts are produced at an hourly grid level, up to **four hours ahead**.

![Average hourly spatial patterns of pickups, drop-offs, low state-of-charge vehicles and weighted fleet size](/images/stamp-demand-supply-patterns.png)

## Approach

An adaptive graph learner models spatial relationships in the free-floating network. A shared spatio-temporal representation supports task-specific probabilistic decoders through cross-attention. Training uses uncertainty-weighted multi-task losses and a staged schedule.

## Evaluation and limits

Evaluated on real Rotterdam e-scooter data, the study compares point and distributional performance against temporal, spatio-temporal and multi-task benchmarks. Ablations examine the benefit of sharing representations and explicitly coupling demand and supply.

The results are strongest for supply forecasting, while interval calibration for low-battery counts remains a limitation. The model provides potential inputs to fleet operations; it is distinct from the forecasting model deployed in RET’s app.

## Current status

*Multi-Task Spatio-Temporal Probabilistic Forecasting of Demand and Charge-Aware Fleet Availability in Shared E-Micromobility* is **under review at Transportation Research Part C**.
