import { colors } from "../components/data";
import { useLayoutEffect, useRef } from "react";
import Chart from "chart.js/auto";
import * as utils from "@/components/utils";
import ChartWrapper from "@/components/ChartWrapper";

export const RadarChart = () => {
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
              backgroundColor: colors.purple.quarter,
              label: "My First Dataset",
              data: utils.numberGenerator({
                count: 10,
                min: 10,
                max: 50,
              }),
              borderWidth: 1,
              borderColor: colors.indigo.default,
              pointBackgroundColor: colors.purple.default,
              pointRadius: 8,
            },
          ],
        };

        const myLineChart = new Chart(ctx, {
          type: "radar",
          data: data,
        });

        return function cleanup() {
          myLineChart.destroy();
        };
      }
    }
  });

  return (
    <ChartWrapper title="Radar Chart" id="radarChart">
      <canvas id="RadarChart" ref={canvasEl} />
    </ChartWrapper>
  );
};
