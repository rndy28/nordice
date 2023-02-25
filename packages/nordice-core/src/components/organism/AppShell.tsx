import { createCtx } from "../../utils";
import clsx from "clsx";
import * as React from "react";

interface Props {
  children: React.ReactNode;
  sidebar: JSX.Element;
  header: JSX.Element;
  mainClassName?: string;
  wrapperClassName?: string;
}

type TAppShellContext = {
  sidebarExpanded: boolean;
  onToggleSidebar: () => void;
};

const [useAppShell, Provider] = createCtx<TAppShellContext>();

const AppShell = ({ sidebar, header, mainClassName, wrapperClassName, children }: Props) => {
  const [sidebarExpanded, setSidebarExpanded] = React.useState(false);

  const onToggleSidebar = () => {
    setSidebarExpanded((c) => !c);
  };

  const value = React.useMemo(() => ({ sidebarExpanded, onToggleSidebar }), [sidebarExpanded]);

  return (
    <Provider value={value}>
      <div
        className={clsx(
          "2md:grid",
          sidebarExpanded ? "2md:grid-cols-[17rem_1fr]" : "2md:grid-cols-[4rem_1fr]",
        )}
      >
        <div />
        {sidebar}
        <div className={wrapperClassName}>
          {header}
          <main className={mainClassName}>{children}</main>
        </div>
      </div>
    </Provider>
  );
};

export { useAppShell };

export default AppShell;
