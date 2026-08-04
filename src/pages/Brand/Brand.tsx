import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import BrandStory from "../../components/BrandStory/BrandStory";
import PageTransition from "../../components/PageTransition/PageTransition";
import { milestones } from "../../data/site";
import styles from "./Brand.module.css";

/**
 * 品牌故事页
 * 大留白 + 大图 + 时间轴滚动动画。
 */
export default function Brand() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // 时间轴进度线：随滚动从上向下生长
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <PageTransition>
      {/* 页头 */}
      <header className={styles.header}>
        <div className="container">
          <AnimatedSection>
            <p className="eyebrow">Maison Aurelia</p>
            <h1 className="display-xl">
              A Legacy of
              <br />
              <em className={styles.accent}>Quiet Precision</em>
            </h1>
          </AnimatedSection>
        </div>
      </header>

      {/* 大图横幅（视差） */}
      <AnimatedSection className={styles.banner}>
        <div className={`duotone grain ${styles.bannerFigure}`}>
          <img src="https://picsum.photos/id/1036/1800/900" alt="阿尔卑斯山冰川" />
        </div>
      </AnimatedSection>

      {/* 品牌叙事（复用 BrandStory 组件，反转布局） */}
      <BrandStory image="https://picsum.photos/id/1018/1400/1100" reversed />

      {/* 研发理念 */}
      <section className={`section ${styles.philosophy}`}>
        <div className={`container ${styles.philosophyInner}`}>
          <AnimatedSection>
            <p className="eyebrow">Our Belief</p>
            <blockquote className={styles.quote}>
              “Luxury is not abundance.
              <br />
              It is the <em>discipline</em> of removing everything
              <br />
              that does not serve the skin.”
            </blockquote>
            <p className={styles.quoteBy}>— Elena Moreau, Founder</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 时间轴 */}
      <section className={`section ${styles.timeline}`}>
        <div className="container">
          <AnimatedSection className={styles.timelineHead}>
            <p className="eyebrow">Milestones</p>
            <h2 className="display-lg">Since 1987</h2>
          </AnimatedSection>

          <div ref={timelineRef} className={styles.timelineBody}>
            {/* 中央进度线 */}
            <motion.span className={styles.timelineLine} style={{ scaleY: lineScale }} />

            {milestones.map((m, i) => (
              <AnimatedSection
                key={m.year}
                delay={0.1}
                className={`${styles.milestone} ${i % 2 === 0 ? styles.left : styles.right}`}
              >
                <p className={styles.year}>{m.year}</p>
                <h3 className={styles.milestoneTitle}>{m.title}</h3>
                <p className={styles.milestoneDesc}>{m.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 环保理念 */}
      <section className={styles.sustain}>
        <div className={`container ${styles.sustainInner}`}>
          <AnimatedSection>
            <p className="eyebrow">Sustainability</p>
            <h2 className="display-lg">
              Kind to Skin,
              <em className={styles.accent}> Kind to Earth</em>
            </h2>
            <p className={`lead ${styles.sustainLead}`}>
              96% 天然来源成分 · 100% 可回收玻璃包装 · 甘蔗基环保塑料 ·
              碳足迹较 2016 年降低 42%。我们相信，对肌肤的温柔，
              与对地球的温柔，从来是同一件事。
            </p>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
