import type { ChartOptions, ScriptableContext } from "chart.js";
import { Line } from "react-chartjs-2";
import { TDatasetWithoutDefaultKey } from "../../types";
import { createChartData } from "../../utils";

//* register this when using chart
// Chart.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Title,
//   Filler,
//   ArcElement,
//   BarElement,
//   TimeScale
// );

const defaultOptions: ChartOptions<"line"> = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        align: "end",
        color: "#83919e",
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        display: true,
        drawBorder: false,
        lineWidth: 0.5,
        color: "#d6dadf",
      },
      ticks: {
        color: "#83919e",
        precision: 0,
        font: {
          size: 12,
        },
      },
    },
    ticks: {
      display: false,
    },
  },
  plugins: {
    filler: {
      propagate: false,
    },
    legend: {
      labels: {
        font: {
          size: 14,

          weight: "bold",
        },
      },
    },
  },
  interaction: {
    intersect: true,
  },
};

const defaultDatasetOptions = {
  borderWidth: 1.5,
  tension: 0.3,
  pointHoverRadius: 10,
  pointBorderWidth: 1.5,
  pointBackgroundColor: "#ffffff",
  pointHoverBackgroundColor: "#ffffff",
  borderColor: "#5E81AC",
  pointBorderColor: "#5E81AC",
  backgroundColor: (context: ScriptableContext<"line">) => {
    const { ctx } = context.chart;
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#eff2f7");
    gradient.addColorStop(0.2, "#dfe6ee");
    gradient.addColorStop(0.6, "#ffffff");
    gradient.addColorStop(1, "#ffffff");
    return gradient;
  },
};

export type TAreaChartDatasetWithoutDefaultKey = TDatasetWithoutDefaultKey<
  "line",
  keyof typeof defaultDatasetOptions
> & {
  radius?: number[];
};

interface Props<TLabel = unknown> {
  labels: TLabel[];
  datasets: TAreaChartDatasetWithoutDefaultKey[];
  options?: ChartOptions<"line">;
}

const AreaChart = ({ labels, datasets, options }: Props) => {
  return (
    <Line
      data={createChartData<"line", typeof labels, keyof typeof defaultDatasetOptions>({
        labels,
        datasets,
        defaultDatasets: defaultDatasetOptions,
      })}
      options={Object.assign({}, defaultOptions, options)}
    />
  );
};

export default AreaChart;
