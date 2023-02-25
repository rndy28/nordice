import clsx from "clsx";
import { motion, type HTMLMotionProps } from "framer-motion";
import * as React from "react";
import { createPortal } from "react-dom";

interface Props extends HTMLMotionProps<"div"> {
  rootId: string;
}

const Dialog = ({ children, className, variants, rootId, ...props }: Props) => {
  return createPortal(
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="dialog"
      className={clsx(
        "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-[rgba(0,_0,_0,_0.6)]",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>,
    document.getElementById(rootId)!,
  );
};

export default Dialog;
