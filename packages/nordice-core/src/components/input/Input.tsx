import clsx from "clsx";
import * as React from "react";
import type { TMappedSize, TSize, TUnionToKeys, TWithIcon } from "../../types";

type Variant = "filled" | "outline" | "underline";

interface Props extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  size: TSize;
  variant?: Variant;
  htmlSize?: number;
  icon?: TWithIcon;
  iconWrapperClassName?: string;
  isError?: boolean;
}

const getMappedColorScheme = (
  invalid: boolean | "false" | "true" | "grammar" | "spelling" | undefined,
): TUnionToKeys<Variant, string> => {
  const error = invalid && "border-aurora0";
  return {
    filled: `bg-snowStorm0-200 text-polarNight2 border-2 ${
      error ?? "border-transparent hover:border-snowStorm0 active:border-snowStorm0"
    }`,
    outline: `border-2 text-polarNight2 ${
      error ?? "border-snowStorm0-500 hover:border-frost2 active:border-frost2"
    }`,
    underline: `text-polarNight2 border-b-2 ${
      error ?? "border-snowStorm0 hover:border-frost2 active:border-frost2"
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

const base = "text-sm transition-[border] ease-linear";

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
      isError,
      "aria-invalid": invalid,
      ...props
    },
    ref,
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
      className,
    );

    if (icon && "element" in icon) {
      const withPlacement = icon.placement === "end" && "flex-row-reverse";

      const mergedIconWrapperClasses = clsx(
        "flex items-center gap-2 w-fit",
        base,
        withRounded,
        withPlacement,
        withPadding,
        mappedSize[size],
        getMappedColorScheme(invalid)[variant],
        iconWrapperClassName,
      );

      return (
        <div className={mergedIconWrapperClasses}>
          {icon.element}
          <input
            {...props}
            ref={ref}
            size={htmlSize}
            type={type}
            className="outline-none h-inherit bg-transparent"
            aria-invalid={invalid}
          />
        </div>
      );
    }

    return (
      <input
        {...props}
        ref={ref}
        size={htmlSize}
        type={type}
        className={mergedClasses}
        aria-invalid={invalid}
      />
    );
  },
);

export default Input;
