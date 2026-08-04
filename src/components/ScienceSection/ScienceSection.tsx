import { motion } from "framer-motion";
import type { Stat } from "../../types";
import { useCountUp } from "../../hooks/useCountUp";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import styles from "./ScienceSection.module.css";

/** 单个数据卡片：进入视口后数字从 0 递增 */
function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <motion.div
      className={styles.stat}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className={styles.value}>
        <span ref={ref}>{value}</span>
        <span className={styles.suffix}>{stat.suffix}</span>
      </p>
      <p className={styles.label}>{stat.label}</p>
      <p className={styles.desc}>{stat.description}</p>
    </motion.div>
  );
}

interface ScienceSectionProps {
  stats: Stat[];
}

/**
 * 科研数据区块 —— 黑曜石深色背景 + 动态数字 + 科技线框装饰。
 * 首页与 Science 页共用。
 */
export default function ScienceSection({ stats }: ScienceSectionProps) {
  return (
    <section className={`${styles.section} grain`}>
      {/* 科技线条装饰 */}
      <div className={styles.gridLines} aria-hidden />

      <div className="container">
        <AnimatedSection>
          <p className="eyebrow">The Laboratory</p>
          <h2 className={`display-lg ${styles.title}`}>
            Precision, <em>Measured</em>
          </h2>
        </AnimatedSection>

        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
