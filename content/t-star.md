[← All projects](/projects/)

**Published · Transportation Research Part C · 2026**

## The problem

At short time intervals, station-level shared-mobility demand is sparse and variable. Useful operational forecasts need to represent both the expected demand and its uncertainty.

## My contribution

I developed **T-STAR**, a two-stage transformer framework that separates broad demand patterns from short-term fluctuations. The first stage models hourly patterns; the second incorporates recent local observations and demand variations in connected metro services to refine predictions at **15-minute resolution**.

![T-STAR decomposition of hourly demand and short-term fluctuations](/images/t-star.jpg)

## Evaluation

Experiments used Washington D.C.’s **Capital Bikeshare** data across **235 stations**. Evaluation covered point and probabilistic forecast performance, spatial and temporal robustness, and a **zero-shot transfer experiment** in previously unseen service areas without retraining.

The study reports improvements over the evaluated baselines in both point and probabilistic forecasting. This is a research evaluation on Capital Bikeshare data; the separate RET deployment uses an XGBoost-based pipeline.

## Paper and implementation

**Jingyi Cheng, Gonçalo Correia, Oded Cats and Shadi Sharif Azadeh.** T-STAR: A context-aware transformer framework for short-term probabilistic demand forecasting in dock-based shared micro-mobility. *Transportation Research Part C: Emerging Technologies*, 192, 105899 (2026).

[Published paper](https://doi.org/10.1016/j.trc.2026.105899) · [Open-source code](https://github.com/RinaPiggy/T-STAR)
