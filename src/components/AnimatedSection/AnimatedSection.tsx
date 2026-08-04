import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  /** 延迟（秒），用于同组元素的错落入场 */
  delay?: number;
  /** 初始位移距离 */
  y?: number;
  className?: string;
}

/**
 * 滚动触发的入场动画容器。
 * 全站统一的"克制型"动效：轻微上浮 + 淡入，时长 1s 的奢侈缓动。
 */
export default function AnimatedSection({
  children,
  delay = 0,
  y = 40,
  className,
}: AnimatedSectionProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
