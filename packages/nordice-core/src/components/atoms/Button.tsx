import clsx from "clsx";
import * as React from "react";
import type { TColorScheme, TMappedSize, TSize, TUnionToKeys, TWithIcon } from "../../types";

type Variant = "solid" | "outline" | "ghost" | "link";
interface Props extends Omit<React.ComponentPropsWithoutRef<"button">, "disabled"> {
  size?: TSize;
  variant?: Variant;
  colorScheme?: TColorScheme;
  isLoading?: boolean;
  loadingText?: string;
  isRounded?: boolean;
  spinner?: TWithIcon;
  icon?: TWithIcon;
}

const mappedColorScheme: TUnionToKeys<Variant, TUnionToKeys<TColorScheme, string>> = {
  solid: {
    primary: "bg-polarNight2 text-snowStorm2 hover:border-polarNight2-500",
    secondary: "bg-frost3 text-snowStorm2 hover:border-frost3-500",
    error: "bg-aurora0 text-snowStorm1 hover:border-aurora0-500",
    warning: "bg-aurora2 text-polarNight2 hover:border-aurora2-500",
  },
  ghost: {
    primary: "text-polarNight2 hover:bg-polarNight2-100",
    secondary: "text-frost2 hover:bg-frost2-100",
    error: "text-aurora0 hover:bg-aurora0-100",
    warning: "text-aurora2 hover:bg-aurora2-100",
  },
  outline: {
    primary: "border-polarNight2 text-polarNight2 hover:bg-polarNight2-100",
    secondary: "border-frost2 text-frost2 hover:bg-frost2-100",
    error: "border-aurora0 text-aurora0 hover:bg-aurora0-100",
    warning: "border-aurora2 text-polarNight2 hover:bg-aurora2-100",
  },
  link: {
    primary: "text-polarNight2 hover:underline",
    secondary: "text-frost2 hover:underline",
    error: "text-aurora0 hover:underline",
    warning: "text-aurora2 hover:underline",
  },
};

const mappedSize: TMappedSize = {
  xs: "h-9",
  sm: "h-10",
  md: "h-11",
  lg: "h-12",
};

const DefaultLoader = () => {
  return (
    <>
      <svg
        className="w-5 h-5 text-nord6 animate-spin relative -top-[1px]"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
      <span className="sr-only text-[0.93rem]">Loading...</span>
    </>
  );
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      size = "lg",
      className,
      isLoading,
      loadingText,
      colorScheme = "primary",
      variant = "solid",
      spinner,
      icon,
      isRounded: rounded,
      "aria-disabled": disabled,
      ...props
    },
    ref,
  ) => {
    const withTabletRounded = rounded ? "rounded-3xl" : "rounded-md";
    const withGapBetweenLoadingText = loadingText && "gap-2";
    const withRelativeLoading = isLoading && "relative";
    const withDisabled =
      (disabled || isLoading) && "shadow-[0_1px_0_rgb(0 0 0 / 45%)] cursor-default opacity-[0.5]";
    const withPlacement = icon?.placement === "end" && "flex-row-reverse";
    const withPrimaryAdditionalStyles = variant === "solid" && "border-2 border-transparent";
    const withOutlineAdditionalStyles = variant === "outline" && "border-[1px]";

    const withLoadingText = loadingText ?? (
      <span className="opacity-0">
        {icon?.element}
        {children}
      </span>
    );

    const withSpinner = spinner?.element ?? <DefaultLoader />;

    const mergedClasses = clsx(
      "flex items-center justify-center px-8 transition-all ease-in cursor-pointer",
      mappedColorScheme[variant][colorScheme],
      mappedSize[size],
      withRelativeLoading,
      withGapBetweenLoadingText,
      withTabletRounded,
      withDisabled,
      withPlacement,
      withPrimaryAdditionalStyles,
      withOutlineAdditionalStyles,
      className,
    );

    return (
      <button {...props} aria-disabled={isLoading || disabled} className={mergedClasses} ref={ref}>
        {isLoading ? (
          <>
            <div
              role="status"
              className={
                loadingText ? "" : "absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
              }
            >
              {withSpinner}
            </div>
            {withLoadingText}
          </>
        ) : (
          <>
            {icon?.element}
            {children}
          </>
        )}
      </button>
    );
  },
);

export default Button;
