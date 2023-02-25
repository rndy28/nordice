import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "@nordice/core";
import { Dialog } from "@nordice/core";

const Dashboard = React.lazy(() => import("pages/dashboard"));
const NotFound = React.lazy(() => import("pages/404"));

const App = () => {
  const [warning, setWarning] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1245) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };
  React.useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {warning && (
        <Dialog rootId="root">
          <div className="flex h-full w-full items-center justify-center bg-white">
            <h1 className="text-center text-2xl font-medium text-frost3">
              This dashboard is not responsive <br />
              Please comeback later!!
            </h1>
          </div>
        </Dialog>
      )}
      <React.Suspense fallback={<Loader centered />}>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

export default App;
