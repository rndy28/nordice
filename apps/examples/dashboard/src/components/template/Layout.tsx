import { AppShell } from "@nordice/core";
import Sidebar from "components/UI/organism/Sidebar";
import Header from "components/UI/organism/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell
      header={<Header />}
      sidebar={<Sidebar />}
      wrapperClassName="pb-4 px-4"
      mainClassName="grid grid-cols-12 gap-4 min-h-[80vh]"
    >
      {children}
    </AppShell>
  );
};
export default Layout;
