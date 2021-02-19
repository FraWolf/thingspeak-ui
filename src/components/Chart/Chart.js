import React from "react";
import { Chart } from "react-charts";

function SimpleChart(dataReceived) {
  const dataLabel = dataReceived.data;
  const dataName = dataReceived.name;

  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: dataLabel,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
      },
      {
        type: "linear",
        position: "left",
      },
    ],
    []
  );

  // A react-chart hyper-responsively and continuously fills the available
  // space of its parent element automatically
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}

export default SimpleChart;
