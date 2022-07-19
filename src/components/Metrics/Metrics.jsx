import React from "react";
import Metric from "./Metric.jsx";
import "./Metrics.scss";
import _ from "lodash";

const Metrics = (props) => {

  return (
    <div className="metrics">
      {_.isArray(props.config.items) && props.config.items.map((m, i) =>
          <Metric key={"metric-" + i} data={props.data} config={m} />
      )}
    </div>
  );
};

export default Metrics;
