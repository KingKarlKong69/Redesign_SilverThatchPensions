import { motion } from 'framer-motion';

export const ScaleOnHover = ({ 
  children, 
  scale = 1.05, 
  className = '',
  whileTap = 0.98 
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: whileTap }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleOnHover;
