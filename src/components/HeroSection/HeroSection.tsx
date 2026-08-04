import { Link } from "react-router-dom";
import { motion, useTransform } from "framer-motion";
import { useMouseParallax } from "../../hooks/useMouseParallax";
import ProductVisual from "../ProductVisual/ProductVisual";
import { featuredProducts } from "../../data/products";
import styles from "./HeroSection.module.css";

/** Hero 展示的主推产品（焕光精华） */
const heroProduct = featuredProducts[0];
/** 背景漂浮的第二、第三产品 */
const [secondary, tertiary] = [featuredProducts[1], featuredProducts[2]];

/**
 * 首页 Hero —— 全屏品牌宣言 + 悬浮产品组
 * - 产品缓慢漂浮（无穷往复的 y 轴呼吸）
 * - 鼠标移动驱动视差（弹簧物理平滑）
 */
export default function HeroSection() {
  const { x, y, handleMouseMove } = useMouseParallax();

  // 三层视差深度：主产品跟手最强，背景瓶最弱
  const mainX = useTransform(x, (v) => v * 36);
  const mainY = useTransform(y, (v) => v * 24);
  const backX = useTransform(x, (v) => v * -18);
  const backY = useTransform(y, (v) => v * -12);

  return (
    <section className={styles.hero} onMouseMove={handleMouseMove}>
      {/* 背景氛围光斑 */}
      <div className={styles.glow} aria-hidden />

      <div className={`container ${styles.inner}`}>
        {/* 左侧文案 */}
        <div className={styles.copy}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Geneva · Est. 1987
          </motion.p>

          <motion.h1
            className={`display-xl ${styles.title}`}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Reveal Your
            <br />
            <em>Natural Radiance</em>
          </motion.h1>

          <motion.p
            className={`lead ${styles.sub}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Advanced skincare powered by science and nature.
            以瑞士实验室的严谨，封存自然的焕活能量。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/products" className={styles.cta}>
              Explore Collection
              <span className={styles.ctaArrow} aria-hidden>
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* 右侧产品组 */}
        <div className={styles.stage}>
          {/* 背景漂浮瓶（左后） */}
          <motion.div
            className={styles.backLeft}
            style={{ x: backX, y: backY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <ProductVisual product={secondary} size={170} />
            </motion.div>
          </motion.div>

          {/* 背景漂浮瓶（右后） */}
          <motion.div
            className={styles.backRight}
            style={{ x: backX, y: backY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <ProductVisual product={tertiary} size={150} />
            </motion.div>
          </motion.div>

          {/* 主产品 */}
          <motion.div
            className={styles.main}
            style={{ x: mainX, y: mainY }}
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ProductVisual product={heroProduct} size={380} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span>Scroll</span>
        <motion.span
          className={styles.scrollLine}
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
