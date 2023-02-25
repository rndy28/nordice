import type { ChartOptions, ChartDataset, DefaultDataPoint } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { TDatasetWithoutDefaultKey } from "../../types";
import { createChartData } from "../../utils";

const defaultOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "90%",
  elements: {
    arc: {
      borderWidth: 0,
      borderAlign: "inner",
      borderJoinStyle: "round",
    },
  },
};

interface Props<TLabel = unknown> {
  labels: TLabel[];
  datasets: ChartDataset<"doughnut", DefaultDataPoint<"doughnut">>[];
  options?: ChartOptions<"doughnut">;
}

const DoughnutChart = ({ datasets, labels, options }: Props) => {
  return (
    <Doughnut
      data={createChartData<"doughnut", typeof labels>({
        datasets,
        labels,
      })}
      options={Object.assign({}, defaultOptions, options)}
    />
  );
};

export default DoughnutChart;
