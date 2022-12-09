export type TSize = "xs" | "sm" | "md" | "lg";

export type TColorScheme = "primary" | "secondary" | "warning" | "error";

export type TWithIcon = Partial<{
  element: React.ReactElement;
  placement: "start" | "end";
}>;

export type TSolidOrGhost = "solid" | "ghost";

export type TMappedSize = TUnionToKeys<TSize, string>;

export type TUnionToKeys<T extends string | symbol | number, U> = {
  [key in T]: U extends infer R ? R : never;
};
