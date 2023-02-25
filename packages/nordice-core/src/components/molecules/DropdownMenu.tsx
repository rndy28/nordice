import clsx from "clsx";
import {
  m,
  LazyMotion,
  domAnimation,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
};

const Wrapper = forwardRef<HTMLUListElement, HTMLMotionProps<"ul">>(
  ({ children, className, ...props }, ref) => {
    return (
      <LazyMotion features={domAnimation}>
        <m.ul
          role="menu"
          variants={variants}
          animate="visible"
          initial="hidden"
          exit="exit"
          ref={ref}
          tabIndex={0}
          className={clsx(
            "bg-white p-2 rounded-md absolute z-[999] min-w-[8rem] shadow-[rgba(17,_12,_46,_0.10)_0px_15px_180px_0px]",
            className
          )}
          {...props}
        >
          {children}
        </m.ul>
      </LazyMotion>
    );
  }
);

const Item = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<"a">>(
  ({ children, className, ...props }, ref) => {
    return (
      <li
        role="presentation"
        tabIndex={-1}
        className={clsx(
          "cursor-pointer rounded-md text-sm font-medium py-[0.4rem] px-3 text-polarNight2 hover:bg-snowStorm2-500 focus:bg-snowStorm2-500",
          className
        )}
      >
        <a role="menuitem" ref={ref} {...props}>
          {children}
        </a>
      </li>
    );
  }
);

const DropdownMenu = Object.assign(Wrapper, { Item });

export default DropdownMenu;
