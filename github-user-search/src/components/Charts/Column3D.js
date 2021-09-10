import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

const Column3D = ({ dataForChart }) => {
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Most Popular Language',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        yAxisName: 'Stars',
        yAxisNameFontSize: '16px'
      },
      // Chart Data
      data: dataForChart
    }
  };
  return <ReactFC {...chartConfigs} />
};

export default Column3D;
