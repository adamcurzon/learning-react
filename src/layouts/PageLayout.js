import Footer from "../components/Footer";
import SnackBar from "../components/SnackBar";
import NavigationBar from "../components/navigation/NavigationBar";
import { Outlet, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const PageLayout = () => {
  const o = useOutlet();

  return (
    <>
      <NavigationBar />
      <AnimatePresence mode="wait">{o}</AnimatePresence>
      <Footer />
      <SnackBar />
    </>
  );
};

export default PageLayout;
