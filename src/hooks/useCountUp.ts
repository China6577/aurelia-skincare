import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * 动态数字 Hook —— 进入视口后从 0 缓动递增到目标值。
 * 使用 requestAnimationFrame + easeOutExpo，呈现"先快后慢"的高级计数感。
 *
 * @param target 目标数值
 * @param duration 动画时长（毫秒）
 */
export function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo 缓动曲线
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);

  return { ref, value };
}
