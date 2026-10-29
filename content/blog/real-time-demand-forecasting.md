Urban transportation is undergoing a massive shift, moving away from fragmented transit systems toward heavily integrated Mobility as a Service (MaaS) ecosystems. Based on a recent SUM Project (Horizon Europe) expert session delivered by the TU Delft team, this post explores the mechanics, applications, and challenges of predicting shared mobility demand in real time.

You can watch the full presentation here: [https://youtu.be/WrjhwhzVD8Y](https://youtu.be/WrjhwhzVD8Y)

## The First and Last Mile Challenge

Urban transportation is heavily defined by how efficiently people can connect to major transit hubs. In the Netherlands, an incredible train network connects cities, but a significant gap remains because not everyone lives immediately next to a station. Traditional solutions involve personal bicycles, but modern urban mobility introduces a variety of dynamic, shared alternatives:

* **Shared Micromobility:** E-bikes, e-scooters, and shared bicycles allow commuters to complete their journeys without worrying about parking or vehicle ownership.
* **On-Demand Transit:** Shuttle buses, minivans, and carpooling services provide crucial accessibility for passengers who require point-to-point connections but cannot utilize micromobility.

For city planners and private operators alike, the central question dictating the success of these networks is simple: *Where is the demand, and how do we match our supply to it?*

## Rethinking Spatial and Temporal Forecasting

As AI pioneer Yann LeCun notes, the essence of intelligence is fundamentally about predicting what is going to happen next. To efficiently manage shared mobility fleets, we must build models that predict demand across both space and time:

* **Spatial Granularity:** Mobility services operate as either dock-based (fixed stations) or free-floating (parked anywhere). For free-floating fleets, a common industry practice is disaggregating the city map into connected hexagonal grids—such as Uber's H3 system. Hexagons offer equal edge lengths and form a triangular network at their centers, making optimization and demand matching computationally efficient.
* **Temporal Precision:** Historically, transportation literature has focused on one-hour forecast horizons. However, shared micromobility trips often last only 10 to 30 minutes. Scaling forecasting intervals down to 15 minutes allows operators to make real-time pricing and fleet rebalancing decisions that match the actual operational heartbeat of the city.

## Real-World Applications of Demand Prediction

Accurate spatial-temporal forecasting—often leveraging models like XGBoost combined with time-series analysis—empowers several critical applications:

* **Public Transit Integration:** By predicting how many passengers will check out at sequential metro stations, platforms can proactively align demand-responsive transit to meet them, shortening overall journey times.
* **Proactive Fleet Rebalancing:** Predicting demand hotspots before they materialize allows operators to proactively move vehicles from low-demand areas to high-demand areas ahead of peak hours.
* **Demand and Supply Nudging:** Ride-hailing platforms utilize dynamic "surge" pricing and real-time heat maps to nudge both user and driver behavior, incentivizing supply to move where it is most needed.
* **Real-Time MaaS Ecosystems:** In a Rotterdam living-lab implementation, real-time data from public transport (RET), cloud infrastructure (Siemens), and a shared e-scooter operator (Check) is combined to give users an immediate "availability likelihood." If a user knows they are highly likely to find an e-scooter at their destination station, they are much more likely to commit to a multimodal trip.

## Implementation Challenges

Bringing these machine learning pipelines into real-world city infrastructure involves overcoming several hurdles:

* **Data Privacy & Trust:** Private operators are often hesitant to share raw fleet data with public platforms out of fear that competitors might access it or that it compromises their operational security.
* **Estimating "Missed" Demand:** Historical trip data only shows realized demand. It fails to capture the "missing" demand of users who opened the app but found no vehicles available, skewing forecasting models if not properly accounted for.
* **Understanding Passenger Behavior:** Forecasting aggregate population demand is only one piece of the puzzle. Understanding how individual passengers value time, pricing, and mode choices is essential for delivering optimized, real-time travel recommendations.
