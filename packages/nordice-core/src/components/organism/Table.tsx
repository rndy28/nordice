import clsx from "clsx";
import * as React from "react";

type ChildProps = Pick<React.ComponentPropsWithoutRef<"div">, "children" | "className">;

const Table = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      role="table"
      className={clsx(
        "2lg:table 2lg:w-full 2lg:border-collapse 2lg:p-3 2lg:overflow-hidden 2lg:rounded-md 2lg:shadow-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Table.Head = ({ children, className }: ChildProps) => {
  return (
    <div role="rowgroup" className={clsx("2lg:table-header-group hidden", className)}>
      {children}
    </div>
  );
};

Table.Body = ({ children, className }: ChildProps) => {
  return (
    <div
      role="rowgroup"
      className={clsx(
        "2lg:table-row-group grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

Table.Tr = ({ children, className }: ChildProps) => {
  return (
    <div role="row" className={clsx("bg-snowStorm2-100 2lg:table-row rounded-md p-4", className)}>
      {children}
    </div>
  );
};

Table.Th = ({ children, centered, className }: ChildProps & { centered?: boolean }) => {
  return (
    <span
      role="columnheader"
      className={clsx(
        "text-polarNight2-800 2lg:table-cell text-sm font-semibold capitalize",
        centered ? "2lg:text-center" : "2lg:text-left",
        "2lg:p-3",
        className,
      )}
    >
      {children}
    </span>
  );
};

Table.Td = ({ children, className }: ChildProps) => {
  return (
    <div
      role="cell"
      className={clsx(
        "even:bg-snowStorm1-100 2lg:even:bg-inherit 2lg:rounded-none 2lg:table-cell 2lg:p-3 flex items-center justify-between rounded-md p-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

Table.Text = ({ children, className }: ChildProps) => {
  return (
    <span
      className={clsx(
        "text-polarNight0 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Table;
