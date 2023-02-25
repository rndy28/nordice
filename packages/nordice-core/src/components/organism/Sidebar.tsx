/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import * as React from "react";
import { RefObject, useCallback, useRef, useState } from "react";
import { useOutsideClick } from "../../utils";
import Close from "../atoms/Close";

interface SidebarContextT {
  onToggle: () => void;
  onClose: () => void;
  expanded: boolean;
  sidebarRef: RefObject<HTMLElement> | null;
}

// type TUseSidebarOpts =
//   | { useOutsideClickToDissmiss: false }
//   | {
//       useOutsideClickToDissmiss: true;
//       useOutsideClickToDismissBreakpoint?: number;
//       iconToToggleSidebarClasses?: string[];
//     };

// export const useSidebar = (options?: TUseSidebarOpts) => {
//   const [expanded, setExpanded] = useState(false);

//   const sidebarRef = useRef<HTMLElement | null>(null);

//   const onClose = () => setExpanded(false);

//   const onToggle = useCallback(() => {
//     if (window.innerWidth > 800) {
//       setExpanded((c) => !c);
//     } else {
//       setExpanded(true);
//     }
//   }, [expanded]);

//   useOutsideClick(sidebarRef, (target) => {
//     if (!options || (options && !options.useOutsideClickToDissmiss)) return;

//     const { useOutsideClickToDismissBreakpoint, iconToToggleSidebarClasses } = options;

//     if (
//       window.innerWidth >
//         (useOutsideClickToDismissBreakpoint ? useOutsideClickToDismissBreakpoint : 850) ||
//       !sidebarRef.current ||
//       sidebarRef.current.contains(target as Node)
//     )
//       return;

//     if (iconToToggleSidebarClasses) {
//       for (const iconClass of iconToToggleSidebarClasses) {
//         if (target.classList.contains(iconClass)) return;
//       }
//     }

//     setExpanded(false);
//   });

//   return { onClose, onToggle, sidebarRef, expanded } as const;
// };

const createActiveClassName = ({
  isActive,
  expanded,
}: {
  isActive: boolean;
  expanded: boolean;
}) => {
  return clsx(
    "text-polarNight2 flex items-center outline-none pl-5 w-full min-h-[2.5rem] text-sm relative font-medium transition-all duration-250 ease [&_span]:absolute [&_span]:top-[10px] [&_span]:text-[0.95rem] [&_span]:left-[3.8rem] [&_span]:font-semibold",
    expanded ? "[&_span]:2md:opacity-1" : "[&_span]:2md:opacity-0",
    isActive && "text-frost2 border-r-[3px] border-solid border-r-frost2 bg-frost2-200",
  );
};

const Sidebar = ({
  children,
  onSidebarClose,
  expanded,
  logo,
}: {
  children: React.ReactNode;
  logo: React.ReactNode;
  expanded: boolean;
  onSidebarClose: () => void;
}) => {
  return (
    <aside
      className={clsx(
        "bg-snowStorm2-500 2md:w-full 2md:max-w-[4rem] 2md:transition-[max-width] 2md:duration-150 fixed top-0 left-0 z-[2] flex h-full w-[17rem] flex-col items-center pt-[1.2rem] pb-4 transition-[transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        // expanded ? "translate-x-0" : "translate-x-[-100%]",

        //! for mobile use position to hide/show sidebar
        //! for desktop for  use max width
      )}
    >
      <div
        className={clsx(
          "mx-auto mb-4 flex w-full items-center",
          expanded ? "justify-between" : "justify-center",
        )}
      >
        {logo}
        <Close onClick={onSidebarClose} variant="ghost" className="2md:hidden mr-2" rounded />
      </div>
      <nav className="w-inherit flex h-full flex-col justify-between pt-[0.35rem] pb-2">
        {children}
      </nav>
    </aside>
  );
};

Sidebar.Items = ({
  children,
  className,
}: Pick<React.ComponentPropsWithoutRef<"ul">, "children" | "className">) => {
  return <ul className={clsx("flex flex-col gap-3", className)}>{children}</ul>;
};

Sidebar.Item = ({
  children,
  onClick,
  expanded,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
  expanded: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={createActiveClassName({
        isActive,
        expanded,
      })}
      onClick={onClick}
      tabIndex={-1}
    >
      {children}
    </button>
  );
};

export default Sidebar;
