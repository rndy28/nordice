import type { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { TDatasetWithoutDefaultKey } from "../../types";
import { createChartData } from "../../utils";

const defaultOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: "#83919e",
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
      },
    },
  },
  interaction: {
    intersect: false,
  },
};

const defaultDatasetOptions = {
  borderWidth: 1,
  borderRadius: {
    topLeft: 6,
    topRight: 6,
  },
  barPercentage: 0.5,
  categoryPercentage: 0.6,
  borderSkipped: "bottom",
  
};

type TBarChartDatasetWithoutDefaultKey = TDatasetWithoutDefaultKey<
  "bar",
  keyof typeof defaultDatasetOptions
>;

interface Props<TLabel = unknown> {
  labels: TLabel[];
  datasets: TBarChartDatasetWithoutDefaultKey[];
  options?: ChartOptions<"bar">;
}

const BarChart = ({ labels, datasets, options }: Props) => {
  return (
    <Bar
      data={createChartData<"bar", typeof labels, keyof typeof defaultDatasetOptions>({
        datasets,
        labels,
        defaultDatasets: defaultDatasetOptions,
      })}
      options={Object.assign({}, defaultOptions, options)}
    />
  );
};

export default BarChart;
