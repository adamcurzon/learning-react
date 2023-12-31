import Footer from "../components/Footer";
import NavigationBar from "../components/navigation/NavigationBar";
import { useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const PageLayout = () => {
  const o = useOutlet();

  return (
    <>
      <NavigationBar />
      <AnimatePresence mode="wait">{o}</AnimatePresence>
      <Footer />
    </>
  );
};

export default PageLayout;
