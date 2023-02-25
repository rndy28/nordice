import type { ChartType, ChartDataset, DefaultDataPoint } from "chart.js";

export type TUnionToKeys<T extends string | symbol | number, U> = {
  [key in T]: U extends infer R ? R : never;
};

export type TReadOnlyArray<A> = A extends readonly (infer T)[] ? T : never;


export type TSize = "xs" | "sm" | "md" | "lg";

export type TMappedSize = TUnionToKeys<TSize, string>;

export type TWithIcon = Partial<{
  element: React.ReactNode;
  placement: "start" | "end";
}>;

export type TDatasetWithoutDefaultKey<
  TType extends ChartType,
  KeyDefaultData extends keyof ChartDataset<TType, DefaultDataPoint<TType>>
> = Omit<ChartDataset<TType, DefaultDataPoint<TType>>, KeyDefaultData>;
