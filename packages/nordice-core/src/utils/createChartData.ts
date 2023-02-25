import type { ChartType, ChartDataset, DefaultDataPoint } from "chart.js";
import type { TDatasetWithoutDefaultKey } from "../types";

export const createChartData = <
  TType extends ChartType,
  TLabel extends unknown,
  TKeyDefaultData = unknown,
>({
  labels,
  datasets,
  defaultDatasets,
}: {
  labels: TLabel;
  datasets: TKeyDefaultData extends keyof ChartDataset<TType, DefaultDataPoint<TType>>
    ? TDatasetWithoutDefaultKey<TType, TKeyDefaultData>[]
    : ChartDataset<TType, DefaultDataPoint<TType>>[];
  defaultDatasets?: TKeyDefaultData extends keyof ChartDataset<TType, DefaultDataPoint<TType>>
    ? Pick<ChartDataset<TType, DefaultDataPoint<TType>>, TKeyDefaultData>
    : ChartDataset<TType, DefaultDataPoint<TType>>;
}) => {
  if (defaultDatasets) {
    const datasetsWithDefaultOptions = datasets.map((value) =>
      Object.assign(value, defaultDatasets),
    );

    return {
      labels,
      datasets: datasetsWithDefaultOptions,
    };
  }

  return {
    labels,
    datasets,
  };
};
