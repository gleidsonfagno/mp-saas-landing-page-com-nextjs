"use client";
// components/AnimatedSection.tsx
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  initial?: object;
  animate?: object;
  transition?: object;
  whileInView?: object;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  initial,
  animate,
  transition,
  whileInView,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={{ once: true }} // Opcional, se quiser que a animação ocorra apenas uma vez
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
