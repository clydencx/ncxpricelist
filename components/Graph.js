import htm from "htm";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

import { plot } from 'svg-line-chart'

const x = [
  "2021-01-01",
  "2021-02-01",
  "2021-03-01",
  "2021-04-01",
  "2021-05-01",
].map((d) => new Date(d));

const y = [1, 2, 3, 4, 5];

// chart is a html string that can be rendered by the browser
const Chart = plot(html)(
  { x, y },
  {
    props: {
      style: "display:block;margin:0 auto;",
    },
    margin: 25,
    width: 70,
    height: 20,
    title: "A line chart",
    polygon: {
      fill: 'none',
      style: 'fill:url(#polygrad);',
      strokeWidth: 0.01,
      stroke: "white",
    },
    line: {
      fill: "none",
      strokeWidth: 0.1,
      stroke: "black",
    },
    polygonGradient: {
      offSet1: "0%",
      stopColor1: "#ffffff00",
      offSet2: "100%",
      stopColor2: "#ffffff00",
    },
    xAxis: {
      strokeWidth: 0.1,
      stroke: "black",
    },
    yAxis: {
      strokeWidth: 0.1,
      stroke: "black",
    },
    xLabel: {
      fontSize: 1.5,
    },
    yLabel: {
      fontSize: 1.5,
      name: "PRICE (EUR)",
      locale: "en-US",
    },
    xGrid: {
      strokeWidth: 0.05,
      stroke: "lightgrey",
    },
    yGrid: {
      strokeWidth: 0.05,
      stroke: "lightgrey",
    },
    yNumLabels: 10,
  }
)

export default Chart;