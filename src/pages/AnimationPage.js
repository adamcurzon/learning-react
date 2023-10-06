import { motion } from "framer-motion";

const AnimationPage = (Page) => {
  return () => (
    <>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Page />
      </motion.div>
    </>
  );
};

export default AnimationPage;
