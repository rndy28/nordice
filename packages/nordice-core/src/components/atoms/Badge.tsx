import * as React from "react";
import clsx from "clsx";
import type { TWithIcon, TUnionToKeys } from "../../types";

type TStatus =
  | "positive"
  | "negative"
  | "neutral"
  | "warning"
  | "error"
  | "outline";

type Props<T> = {
  status: TStatus;
  text: string;
  className?: string;
  icon?: TWithIcon;
  as?: keyof JSX.IntrinsicElements | React.FC;
} & (T extends React.FC<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never);

const mappedStatus: TUnionToKeys<TStatus, string> = {
  positive: "text-[#561ffe] bg-[#f3f0fe]",
  negative: "text-[#fc2154] bg-[#fef2f4]",
  neutral: "text-polarNight2 bg-snowStorm2-500",
  outline: "text-polarNight2 border border-polarNight2-100",
  warning: "text-[#ff6b00] bg-[#fef6f0]",
  error: "text-snowStorm1 bg-aurora0",
};

const Badge = <T extends keyof JSX.IntrinsicElements | React.FC>({
  status,
  className,
  text,
  icon,
  as,
  ...props
}: Props<T>) => {
  const Component = as || "span";
  const mergedClasses = clsx(
    "font-medium text-[13px] rounded-2xl px-4 py-[3px]",
    mappedStatus[status],
    className
  );

  return (
    <Component {...props} className={mergedClasses}>
      {icon?.element}
      {text}
    </Component>
  );
};

export default Badge;
