import { IconMenu2 } from "@tabler/icons";
import clsx from "clsx";
import * as React from "react";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  type: "block" | "line";
}

const line =
  "w-inherit h-[2px] absolute bg-polarNight1 transition-all duration-200 ease-in";

const Hamburger = ({
  type,
  "aria-pressed": pressed,
  className,
  ...props
}: Props) => {
  return type === "block" ? (
    <div
      role="button"
      className={clsx(
        "transition-[border-color] ease-in border-2 border-solid border-transparent cursor-pointer h-[2.68rem] w-[2.7rem] flex items-center justify-center rounded-[0.3rem] bg-snowStorm2-500 text-polarNight2-800 hover:border-frost2",
        className
      )}
      {...props}
    >
      <IconMenu2 />
    </div>
  ) : (
    <div
      role="button"
      tabIndex={0}
      className={clsx("relative z-10 w-6 h-[0.9rem] cursor-pointer", className)}
      {...props}
    >
      <span
        className={clsx(
          line,
          pressed ? "top-[6px] rotate-[135deg]" : "top-[1px] w-4 right-0"
        )}
      />
      <span
        className={clsx(
          line,
          pressed ? "top-[6px] -rotate-[135deg] w-inherit" : "top-[0.6rem]"
        )}
      />
    </div>
  );
};

export default Hamburger;
