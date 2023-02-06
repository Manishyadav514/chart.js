import React, { useLayoutEffect, useRef } from "react";
import Chart from "chart.js/auto";

const FirstChart = () => {
  // <canvas> reference type
  const canvasEl = useRef<HTMLCanvasElement>(null);

  //  color used
  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)",
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };

  // graph data
  const chartData = {
    weight: [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2],
    label: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ],
  };

  useLayoutEffect(() => {
    if (null !== canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");
      // const ctx = document.getElementById("myChart");
      if (ctx !== null) {
        const gradient = ctx.createLinearGradient(0, 16, 0, 600);

        gradient.addColorStop(0, colors.purple.half);
        const data = {
          labels: chartData.label,
          datasets: [
            {
              backgroundColor: gradient,
              label: "My First Dataset",
              data: chartData.weight,
              fill: true,
              borderWidth: 2,
              borderColor: colors.purple.default,
              lineTension: 0.2,
              pointBackgroundColor: colors.purple.default,
              pointRadius: 3,
            },
          ],
        };
        const option = {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Line Chart",
            },
          },
        };

        const myLineChart = new Chart(ctx, {
          type: "line",
          data: data,
          options: option,
        });

        return function cleanup() {
          myLineChart.destroy();
        };
      }
    }
  });

  return (
    <div className="flex h-screen w-full max-w-[1600px] justify-center items-center flex-col gap-20 p-20 phone:p-2 tablet:p-4">
      <div className="flex flex-nowrap w-full justify-center items-center text-8xl tablet:5xl phone:text-2xl">
        <p> Line Chart</p>
      </div>
      <canvas id="myChart" ref={canvasEl} />
    </div>
  );
};

export default FirstChart;
