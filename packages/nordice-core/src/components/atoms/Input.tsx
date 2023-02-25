import clsx from "clsx";
import * as React from "react";
import type { TMappedSize, TSize, TWithIcon,  TUnionToKeys } from "../../types";
import { IconChevronUp } from "@tabler/icons";

type TInputVariant = "filled" | "outline" | "underline";

interface Props
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size" | "type"> {
  size: TSize;
  type?: React.HTMLInputTypeAttribute | "dropdown" | "combobox";
  variant?: TInputVariant;
  htmlSize?: number;
  icon?: TWithIcon;
  iconWrapperClassName?: string;
}

const getMappedColorScheme = (
  invalid: boolean | "false" | "true" | "grammar" | "spelling" | undefined
): TUnionToKeys<TInputVariant, string> => {
  const error = invalid && "border-aurora0";
  return {
    filled: `bg-snowStorm2-500 text-polarNight2 border-2 ${
      error || "border-transparent hover:border-frost2 active:border-frost2"
    }`,
    outline: `border-2 bg-white text-polarNight2 ${
      error || "border-frost2"
    }`,
    underline: `text-polarNight2 border-b-2 ${
      error || "border-snowStorm0 hover:border-frost2 active:border-frost2"
    }`,
  };
};

const mappedSize: TMappedSize = {
  xs: "h-[2.2rem]",
  sm: "h-[2.5rem]",
  md: "h-[2.8rem]",
  lg: "h-[3rem]",
};

const mapSizeWithPadding: TMappedSize = {
  xs: "px-[0.6rem]",
  sm: "px-[0.7rem]",
  md: "px-[0.8rem]",
  lg: "px-4",
};

const base =
  "w-full text-[0.913rem] font-medium transition-[border] ease-linear";

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      size = "md",
      type = "text",
      variant = "filled",
      icon,
      className,
      iconWrapperClassName,
      htmlSize,
      "aria-invalid": invalid,
      ...props
    },
    ref
  ) => {
    const isNotUnderline = variant !== "underline";
    const withRounded = isNotUnderline && "rounded-md";
    const withPadding = isNotUnderline && mapSizeWithPadding[size];

    const mergedClasses = clsx(
      "outline-none",
      base,
      withRounded,
      withPadding,
      mappedSize[size],
      getMappedColorScheme(invalid)[variant],
      className
    );

    if (icon && "element" in icon) {
      const withPlacement = icon.placement === "end" && "flex-row-reverse";

      const mergedIconWrapperClasses = clsx(
        "flex items-center gap-2",
        base,
        withRounded,
        withPlacement,
        withPadding,
        mappedSize[size],
        getMappedColorScheme(invalid)[variant],
        iconWrapperClassName
      );

      return (
        <div className={mergedIconWrapperClasses}>
          {icon.element}
          <input
            ref={ref}
            size={htmlSize}
            type={type}
            className="outline-none w-inherit h-inherit bg-transparent"
            aria-invalid={invalid}
            {...props}
          />
        </div>
      );
    }

    return (
      <input
        ref={ref}
        size={htmlSize}
        type={type}
        className={mergedClasses}
        aria-invalid={invalid}
        {...props}
      />
    );
  }
);

export default Input;
