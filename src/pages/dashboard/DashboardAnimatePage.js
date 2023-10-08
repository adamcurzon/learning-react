import { motion } from "framer-motion";

const DashboardAnimatePage = (Page) => {
  return () => (
    <>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Page />
      </motion.div>
    </>
  );
};

export default DashboardAnimatePage;
