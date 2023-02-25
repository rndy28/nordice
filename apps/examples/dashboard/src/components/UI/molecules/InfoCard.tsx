import type { TablerIconsProps } from "@tabler/icons-react";
import { formatCurrency } from "utils/formatCurrency";
import * as React from "react";
import { cn } from "@nordice/core";

interface Props {
  title: string;
  icon: React.ReactNode;
  total: number | string;
  totalInPercent: number;
  isIncrease?: boolean;
}

const InfoCard = ({
  title,
  icon,
  total,
  totalInPercent,
  isIncrease,
}: Props) => {
  return (
    <div className="col-span-3 row-span-2 rounded-md bg-snowStorm2-500 p-4">
      <div>
        <div className="flex h-11 w-11 items-center justify-center rounded-[50%] bg-frost2-200 text-frost2">
          {icon}
        </div>
        <h2 className="mt-2 text-polarNight2">{title}</h2>
      </div>
      <div className="mt-2">
        <h1 className="text-3xl font-bold text-polarNight2">{total}</h1>
        <p className="mt-1 text-sm text-polarNight2">
          <span
            className={cn(
              "font-medium text-frost2",
              !isIncrease && "text-aurora0"
            )}
          >
            {isIncrease ? `+${totalInPercent}` : `-${totalInPercent}`}%
          </span>{" "}
          from last month
        </p>
      </div>
    </div>
  );
};
export default InfoCard;
