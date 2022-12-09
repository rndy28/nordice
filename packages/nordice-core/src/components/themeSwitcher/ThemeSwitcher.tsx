import * as React from "react";
import { IconMoon, IconSun } from "@tabler/icons";
import clsx from "clsx";

interface Props
  extends Pick<React.ComponentPropsWithoutRef<"div">, "onClick" | "onKeyDown" | "className"> {
  theme: "light" | "dark";
}

const baseIconClass = "transition-[transform]  ease-in absolute";

const ThemeSwitcher = ({ className, onClick, onKeyDown, theme }: Props) => {
  const moonClass = clsx(
    baseIconClass,
    "relative left-[1px]",
    theme === "dark" && "opacity-0 -translate-y-1/2",
  );
  const sunClass = clsx(baseIconClass, theme === "light" && "opacity-0 translate-y-1/2");
  const mergedClasses = clsx(
    "border-2 border-solid border-transparent cursor-pointer h-[2.3rem] w-[2.3rem] flex items-center justify-center rounded-[0.3rem] bg-polarNight2 text-snowStorm0-100 hover:border-polarNight2-500",
    className,
  );
  return (
    <div
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      className={mergedClasses}
    >
      <IconMoon size={21} className={moonClass} />
      <IconSun size={21} className={sunClass} />
    </div>
  );
};

export default ThemeSwitcher;
