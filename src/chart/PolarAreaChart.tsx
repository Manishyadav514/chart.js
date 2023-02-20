import { colors } from "../components/data";
import { useLayoutEffect, useRef } from "react";
import Chart from "chart.js/auto";
import * as utils from "@/components/utils";
import ChartWrapper from "@/components/ChartWrapper";

export const PolarAreaChart = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    if (null !== canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");
      // const ctx = document.getElementById("pieChart");
      if (ctx !== null) {
        const gradient = ctx.createLinearGradient(0, 16, 0, 600);

        gradient.addColorStop(0, colors.purple.half);
        const data = {
          labels: utils.labelGenerator({
            count: 10,
          }),
          datasets: [
            {
              backgroundColor: colors.random,
              label: "My First Dataset",
              data: utils.numberGenerator({
                count: 10,
                min: 10,
                max: 100,
              }),
              borderWidth: 2,
              borderColor: colors.indigo.default,
            },
          ],
        };

        const myLineChart = new Chart(ctx, {
          type: "polarArea",
          data: data,
        });

        return function cleanup() {
          myLineChart.destroy();
        };
      }
    }
  });

  return (
    <ChartWrapper title="Polar Area Chart" id="polarAreaChart">
      <canvas id="PolarAreaChart" ref={canvasEl} />
    </ChartWrapper>
  );
};
