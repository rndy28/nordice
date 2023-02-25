import clsx from "clsx";
import * as React from "react";

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, "aria-disabled": disabled, ...props }, ref) => {
  return (
    <label
      className={clsx(
        "relative text-[22px] select-none h-[1.3rem] w-[1.3rem] cursor-pointer",
        disabled && "cursor-default",
        className
      )}
    >
      <input
        type="checkbox"
        className="peer absolute opacity-0 h-0 w-0"
        ref={ref}
        {...props}
      />
      <span className="absolute transition-all ease-linear top-0 left-0 h-inherit w-inherit rounded-[4px] bg-polarNight2 border-solid border-[1px] border-polarNight2-800 peer-checked:peer-hover:border-polarNight2-500 peer-checked:border-transparent peer-checked:after:block after:absolute after:hidden after:content-[''] after:top-[2px] after:left-[7px] after:w-[6px] after:h-[11px] after:border-solid after:border-snowStorm0-100 after:border-r-2 after:border-b-2 after:rotate-[45deg]" />
    </label>
  );
});

export default Checkbox;
