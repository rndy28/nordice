import * as React from "react";
import clsx from "clsx";
import type { TUnionToKeys } from "../../types";

type TStatus = "error" | "success" | "warning" | "info";

interface Props {
  status: TStatus;
  children: React.ReactNode;
  className?: string;
}

const mappedStatus: TUnionToKeys<TStatus, string> = {
  success: "bg-aurora3-400",
  error: "bg-aurora0-400",
  info: "bg-frost1-400",
  warning: "bg-aurora2-400",
};

const Alert = ({ status, children, className }: Props) => {
  const mergedClasses = clsx("p-4 text-polarNight1 rounded-md", mappedStatus[status], className);

  return (
    <div role="alert" className={mergedClasses}>
      {children}
    </div>
  );
};

const Title = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"h1">) => {
  return (
    <h1 {...props} className={clsx("", className)}>
      {children}
    </h1>
  );
};

const Description = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"p">) => {
  return (
    <p {...props} className={clsx("", className)}>
      {children}
    </p>
  );
};

Alert.Title = Title;

Alert.Description = Description;

export default Alert;
