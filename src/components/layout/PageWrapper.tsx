import { motion } from 'framer-motion';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen"
    >
      {children}
    </motion.main>
  );
};
