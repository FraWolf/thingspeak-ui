var React = require("react");
var CanvasJSReact = require("canvasjs-react-charts");
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart2(dataReceived) {
  const dataLabel = dataReceived.data;
  const dataName = dataReceived.name;
  const formatData = "DD MMMM HH:MM";

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
    data: data, // random data
  };

  return <CanvasJSChart options={options} />;
}

export default Chart2;
