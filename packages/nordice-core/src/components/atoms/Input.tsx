import clsx from "clsx";
import * as React from "react";
import type { TMappedSize, TSize, TWithIcon, TUnionToKeys, TBooleanish } from "../../types";

type TInputVariant = "filled" | "outline" | "underline";

interface Props extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  size: TSize;
  variant?: TInputVariant;
  htmlSize?: number;
  icon?: TWithIcon;
  iconWrapperClassName?: string;
}

const getMappedColorScheme = ({
  invalid,
  disabled,
  readonly,
}: {
  invalid: TBooleanish | "grammar" | "spelling";
  readonly: TBooleanish;
  disabled: TBooleanish;
}): TUnionToKeys<TInputVariant, string> => {
  const error = invalid && "border-aurora0";
  const readonlyClass = readonly && "caret-transparent";
  const disabledClass = disabled && "caret-transparent opacity-50";

  // if disabled then dont allow show caret and dont allow anything

  // if readonly then dont allow show caret but allow focus state etc(click, hover)

  return {
    filled: `bg-snowStorm2-500 text-polarNight2 border-2 ${
      disabledClass ||
      (readonlyClass && (error || "border-transparent hover:border-frost2 active:border-frost2"))
    }`,
    outline: `border-2 bg-white text-polarNight2 ${
      disabledClass || (readonlyClass && (error || "border-frost2"))
    }`,
    underline: `text-polarNight2 border-b-2 ${
      disabledClass ||
      (readonlyClass && (error || "border-snowStorm0 hover:border-frost2 active:border-frost2"))
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

const base = "w-full text-[0.913rem] font-medium transition-[border] ease-linear";

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
      "aria-readonly": ariaReadonly,
      "aria-disabled": ariaDisabled,
      disabled,
      readOnly,
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
      getMappedColorScheme({ disabled: ariaDisabled, invalid, readonly: ariaReadonly })[variant],
      className,
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
        getMappedColorScheme({ disabled: ariaDisabled, invalid, readonly: ariaReadonly })[variant],
        iconWrapperClassName,
      );

      return (
        <div className={mergedIconWrapperClasses}>
          {icon.element}
          <input
            ref={ref}
            size={htmlSize}
            type={type}
            className="w-inherit h-inherit bg-transparent outline-none"
            aria-invalid={invalid}
            aria-disabled={ariaDisabled}
            aria-readonly={ariaReadonly}
            disabled={Boolean(ariaDisabled)}
            readOnly={Boolean(ariaReadonly)}
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
        aria-disabled={ariaDisabled}
        aria-readonly={ariaReadonly}
        disabled={Boolean(ariaDisabled)}
        readOnly={Boolean(ariaReadonly)}
        {...props}
      />
    );
  },
);

export default Input;
