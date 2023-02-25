import { IconX } from "@tabler/icons";
import clsx from "clsx";
import * as React from "react";

interface Props
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  variant?: "solid" | "ghost";
  rounded?: boolean;
  iconClassName?: string;
}

const Close = ({
  className,
  iconClassName,
  rounded,
  variant = "solid",
  ...props
}: Props) => {
  const mergedClasses = clsx(
    "cursor-pointer border-2 border-solid border-transparent w-10 flex items-center justify-center transition-all ease-in",
    rounded ? "rounded-[50%] h-10" : "rounded-[0.3rem] h-9",
    variant === "solid" &&
      "bg-polarNight2 text-snowStorm0-100 hover:border-polarNight2-500",
    variant === "ghost" && "text-polarNight2 hover:bg-snowStorm0-400",
    className
  );

  return (
    <div className={mergedClasses} {...props}>
      <IconX className={clsx("text-inherit", iconClassName)} />
    </div>
  );
};

export default Close;
