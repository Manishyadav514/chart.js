import React, { useLayoutEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { colors } from "../components/data";
import ChartWrapper from "@/components/ChartWrapper";
import * as utils from "@/components/utils";

const FirstChart = () => {
  // <canvas> reference type
  const canvasEl = useRef<HTMLCanvasElement>(null);
  function adjustRadiusBasedOnData(ctx: any) {
    const v = ctx.parsed.y;
    return v < 10 ? 5 : v < 25 ? 7 : v < 50 ? 9 : v < 75 ? 11 : 15;
  }
  function alternatePointStyles(ctx: any) {
    const index = ctx.dataIndex;
    return index % 2 === 0 ? "circle" : "rect";
  }
  useLayoutEffect(() => {
    if (null !== canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");
      if (ctx !== null) {
        const data = {
          labels: utils.labelGenerator({
            count: 10,
          }),
          datasets: [
            {
              // backgroundColor: colors.cyan.zero,
              label: "My First Dataset",
              data: utils.numberGenerator({
                count: 10,
                min: 10,
                max: 100,
              }),
              // fill: true,
              borderWidth: 2,
              borderColor: colors.pink.default,
              lineTension: 0.2,
              pointBackgroundColor: colors.purple.default,
              pointRadius: 5,
            },
            {
              label: "My First Dataset",
              data: utils.numberGenerator({
                count: 10,
                min: 10,
                max: 100,
              }),
            },
          ],
        };
        const option = {
          plugins: {
            legend: false,
            tooltip: true,
          },
          elements: {
            line: {
              fill: true,
              backgroundColor: colors.cyan.zero,
              borderColor: colors.purple.default,
            },
            point: {
              backgroundColor: colors.purple.default,
              hoverBackgroundColor: colors.cyan.default,
              radius: adjustRadiusBasedOnData,
              pointStyle: alternatePointStyles,
              hoverRadius: 15,
            },
          },
        };

        const myLineChart = new Chart(ctx, {
          type: "line",
          data: data,
          // options: option,
        });

        return function cleanup() {
          myLineChart.destroy();
        };
      }
    }
  });

  return (
    <ChartWrapper title="Line Chart" id="lineChart">
      <canvas id="LineChart" ref={canvasEl} />
    </ChartWrapper>
  );
};

export default FirstChart;
