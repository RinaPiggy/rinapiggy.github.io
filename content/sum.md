[← All projects](/projects/)

**Industry deployment · SUM project · 2023–2026**

## The problem

A traveller arriving by public transport needs to know whether a shared vehicle will still be available for the last leg of their journey. Current availability alone cannot answer that question.

## My contribution

As the sole model scientist for the SUM WP2 forecasting tool, I designed the forecasting framework and led model development. I also coordinated work across the delivery process: operator engagement, data-sharing arrangements, data handling, model integration, initial app functionality and user evaluation.

The project brought together **CHECK**, **RET**, **TU Delft**, **Siemens Mobility** and **Infoplaza**. Siemens Mobility provided the cloud API; Infoplaza connected the prediction service with RET’s journey planner. My role combined modelling ownership with coordination across those interfaces.

![Availability predictions displayed in the RET travel-planning app](/images/walkthrough-7-1.png)

## The forecasting service

The XGBoost-based pipeline uses temporal and contextual information to forecast pickup and drop-off demand and the probability that a vehicle will be available. Predictions cover **15-minute intervals up to 90 minutes ahead**, with updates every 15 minutes.

## From pilot to use

The service went live in **2025**, initially at Rotterdam’s **Beurs mobility hub**, and subsequently expanded beyond the initial pilot. I also demonstrated a related forecasting application for Munich’s MVG mobility context.

I designed and analysed the customer survey distributed through the RET app. The final project brief reports **91 valid customer-survey responses**; approximately **61%** rated the feature at least moderately useful. These are self-reported survey findings, rather than a measured increase in ridership.

## What this work involved

Forecasting was one part of delivery. Negotiating access to operational data, agreeing interfaces with platform partners, making probabilities useful in the app and collecting user feedback were all necessary to turn a model into a functioning service.

[SUM project](https://sum-project.eu/) · [RET shared mobility](https://www.ret.nl/home/reizen/deelvervoer.html)
