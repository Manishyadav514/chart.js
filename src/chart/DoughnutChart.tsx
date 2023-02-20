import React, { useLayoutEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartWrapper from "@/components/ChartWrapper";
import * as utils from "@/components/utils";

const DoughnutChart = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    if (null !== canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");
      if (ctx !== null) {
        const data = {
          labels: utils.labelGenerator({ count: 5 }),
          datasets: [
            {
              label: "random data 1",
              data: utils.numberGenerator({
                count: 5,
                min: 10,
                max: 100,
              }),
            },
            {
              label: "random data 2",
              data: utils.numberGenerator({
                count: 5,
                min: 10,
                max: 100,
              }),
            },
          ],
        };
        const myLineChart = new Chart(ctx, {
          type: "doughnut",
          data: data,
        });

        return function cleanup() {
          myLineChart.destroy();
        };
      }
    }
  });

  return (
    <ChartWrapper title="Doughnut Chart" id="doughnutChart">
      <canvas id="DoughnutChart" ref={canvasEl} />
    </ChartWrapper>
  );
};

export default DoughnutChart;
