import { useOutlet } from "react-router-dom";
import NavigationBar from "../components/navigation/NavigationBar";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import { AnimatePresence } from "framer-motion";

const DashboardLayout = () => {
  const o = useOutlet();

  return (
    <>
      <NavigationBar />
      <div className="flex">
        <DashboardNavigation />
        <AnimatePresence mode="wait">
          <div className="p-all-main">{o}</div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default DashboardLayout;
