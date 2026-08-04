import { useMotionValue, useSpring, type MotionValue } from "framer-motion";
import { useCallback } from "react";

interface MouseParallax {
  /** 水平方向位移（-1 ~ 1 区间经弹簧平滑后的 MotionValue） */
  x: MotionValue<number>;
  /** 垂直方向位移 */
  y: MotionValue<number>;
  /** 绑定到容器元素上的 mousemove 处理器 */
  handleMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

/**
 * 鼠标视差 Hook —— 将鼠标在容器内的相对位置转换为
 * 经过弹簧物理平滑的 MotionValue，用于 Hero 产品跟随漂浮。
 *
 * @param stiffness 弹簧刚度（越小越"慵懒"）
 */
export function useMouseParallax(stiffness = 60): MouseParallax {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // 弹簧平滑：让移动显得有"重量感"而非生硬跟随
  const x = useSpring(rawX, { stiffness, damping: 20 });
  const y = useSpring(rawY, { stiffness, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      // 归一化到 -0.5 ~ 0.5
      rawX.set((e.clientX - rect.left) / rect.width - 0.5);
      rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [rawX, rawY]
  );

  return { x, y, handleMouseMove };
}
