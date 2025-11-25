import { motion } from 'framer-motion';

export const FloatingElement = ({ 
  children, 
  delay = 0, 
  duration = 6, 
  yOffset = 20,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-yOffset, yOffset, -yOffset] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
