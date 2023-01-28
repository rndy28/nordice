import * as React from "react";
import clsx from "clsx";
import type { TUnionToKeys, TWithIcon } from "../../types";

type TStatus = "positive" | "negative" | "neutral" | "warning" | "error" | "outline";

interface Props extends React.ComponentPropsWithoutRef<"span"> {
  status: TStatus;
  text: string;
  icon?: TWithIcon;
}

const mappedStatus: TUnionToKeys<TStatus, string> = {
  positive: "text-[#561ffe] bg-[#f3f0fe]",
  negative: "text-[#fc2154] bg-[#fef2f4]",
  neutral: "text-[#434c5e] bg-[#ecedef]",
  outline: "text-polarNight1 border border-polarNight2-100",
  warning: "text-[#ff6b00] bg-[#fef6f0]",
  error: "text-snowStorm1 bg-aurora0",
};

const Badge = ({ status, className, text, icon, ...props }: Props) => {
  const mergedClasses = clsx(
    "font-medium text-[13px] rounded-2xl px-4 py-[3px]",
    mappedStatus[status],
    className,
  );

  return (
    <span {...props} className={mergedClasses}>
      {icon?.element}
      {text}
    </span>
  );
};

export default Badge;
