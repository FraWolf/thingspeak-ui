import React, { useState, useEffect } from "react";
import { singleComponentData } from "../_functions";
import CanvasJSReact from "./../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart(dataReceived) {
  const [dataLabel, setDataLabel] = useState([]);
  const fieldName = dataReceived.fieldIndex;
  const dataName = dataReceived.name;
  const fieldData = dataReceived.data;
  const formatData = "DD MMMM HH:mm";

  useEffect(() => {
    // Set the first item received in the state
    setDataLabel(fieldData);

    // Interval to update in real time the charts
    const interval = setInterval(async () => {
      // Adding the new data into the dataLabel state
      setDataLabel(await singleComponentData(fieldName));
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [fieldData, fieldName]);

  const dataSeries = {
    type: "line",
    xValueFormatString: formatData,
    dataPoints: dataLabel,
  };
  const data = [dataSeries];

  const options = {
    zoomEnabled: true,
    animationEnabled: true,
    title: {
      text: dataName,
    },
    axisX: {
      valueFormatString: formatData,
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    data: data, // Sensors data
  };

  return (
    <div className="mb-3">
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Chart;
