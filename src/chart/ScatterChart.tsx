import React, { useLayoutEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartWrapper from "@/components/ChartWrapper";
import * as utils from "@/components/utils";

const ScatterChart = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    if (null !== canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");
      if (ctx !== null) {
        const data = {
          datasets: [
            {
              label: "Scatter Dataset",
              data: [
                {
                  x: -10,
                  y: 0,
                },
                {
                  x: 0,
                  y: 10,
                },
                {
                  x: 10,
                  y: 5,
                },
                {
                  x: 0.5,
                  y: 5.5,
                },
              ],
              backgroundColor: "rgb(255, 99, 132)",
              
            },
          ],
        };
        const myLineChart = new Chart(ctx, {
          type: "scatter",
          data: data,
        });

        return function cleanup() {
          myLineChart.destroy();
        };
      }
    }
  });

  return (
    <ChartWrapper title="Scatter Chart" id={"scatterChart"}>
      <canvas id="ScatterChart" ref={canvasEl} />
    </ChartWrapper>
  );
};

export default ScatterChart;
