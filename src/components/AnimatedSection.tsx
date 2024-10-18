"use client";
// components/AnimatedSection.tsx
import { motion, MotionProps } from "framer-motion";

interface AnimatedSectionProps extends MotionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  ...motionProps // Coleta as propriedades de animação
}) => {
  return (
    <motion.div
      {...motionProps} // Espalha as propriedades de animação para o div
      viewport={{ once: true }} // Opcional, se quiser que a animação ocorra apenas uma vez
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
