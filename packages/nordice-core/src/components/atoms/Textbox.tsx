import * as React from "react";
import clsx from "clsx";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  value: string;
  wrapperClassName?: string;
}

const Textbox = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      value,
      className,
      wrapperClassName,
      "aria-placeholder": placeholder,
      "aria-invalid": invalid,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          "w-full max-w-[60rem] rounded-md p-3 flex overflow-hidden relative border-2 bg-snowStorm2-100 text-polarNight2",
          invalid ? "border-aurora0" : "border-frost2",
          wrapperClassName
        )}
      >
        {typeof placeholder === "string" && (
          <span
            aria-hidden={value.length > 0}
            className={clsx(
              value.length > 0 ? "invisible" : "visible",
              "text-polarNight2-500 text-[0.913rem] font-medium absolute"
            )}
          >
            {placeholder}
          </span>
        )}

        <div
          ref={ref}
          role="textbox"
          spellCheck={false}
          className={clsx(
            "textbox min-h-[7rem] max-h-[10rem] w-full max-w-[inherit] break-words whitespace-pre-wrap overflow-y-visible overflow-x-hidden relative bottom-[1.5px] z-10 pr-1 outline-none select-none",
            className
          )}
          contentEditable
          {...props}
        />
      </div>
    );
  }
);

export default Textbox;
