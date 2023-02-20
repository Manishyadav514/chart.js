import React, { useLayoutEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartWrapper from "@/components/ChartWrapper";
import * as utils from "@/components/utils";

const BubbleChart = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    if (null !== canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");
      if (ctx !== null) {
        const data = {
          datasets: [
            {
              label: "Dataset 1",
              data: [
                [50, 60, 3],
                [10, 30, 30],
                [0, 40, 30],
                [59, 60, 31],
                [1, 30, 3],
                [9, 40, 6],
              ],
            },
            {
              label: "Dataset 2",
              data: [
                [30, 57, 6],
                [60, 35, 3],
                [20, 10, 10],
                [80, 60, 3],
                [40, 30, 30],
                [7, 40, 30],
              ],
            },
            {
              label: "Dataset 3",
              data: [
                [40, 47, 6],
                [50, 25, 3],
                [30, 0, 10],
                [70, 50, 3],
                [50, 20, 30],
                [17, 30, 30],
              ],
            },
          ],
        };

        const myLineChart = new Chart(ctx, {
          type: "bubble",
          data: data,
        });

        return function cleanup() {
          myLineChart.destroy();
        };
      }
    }
  });

  return (
    <ChartWrapper title="Bubble Chart" id="bubbleChart">
      <canvas id="BubbleChart" ref={canvasEl} />
    </ChartWrapper>
  );
};

export default BubbleChart;
