import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import styles from "./BrandStory.module.css";

interface BrandStoryProps {
  /** 配图地址 */
  image: string;
  /** 是否反转布局（图右文左） */
  reversed?: boolean;
}

/**
 * 品牌故事区块 —— 大图视差 + 文案渐入。
 * 图片随滚动在容器内缓慢平移，营造 Apple Story 式的叙事节奏。
 */
export default function BrandStory({ image, reversed = false }: BrandStoryProps) {
  const ref = useRef<HTMLElement>(null);

  // 监听本区块的滚动进度，驱动图片视差
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className={styles.section}>
      <div className={`container ${styles.inner} ${reversed ? styles.reversed : ""}`}>
        <div className={`duotone ${styles.figure}`}>
          <motion.img
            src={image}
            alt="Aurelia 品牌故事"
            style={{ y: imgY }}
            loading="lazy"
          />
        </div>

        <div className={styles.copy}>
          <AnimatedSection>
            <p className="eyebrow">Our Story</p>
            <h2 className={`display-lg ${styles.title}`}>
              Born by the Lake,
              <br />
              <em>Raised by Science</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="lead">
              1987 年，皮肤科学家 Elena Moreau 在日内瓦湖畔创立 Aurelia。
              她相信肌肤的答案藏在两个地方：阿尔卑斯山的纯净自然，
              与实验室里永不停歇的求证精神。近四十年过去，
              我们依然只做一件事——让每一瓶产品都经得起科学的审视，
              也配得上梳妆台上的凝视。
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Link to="/brand" className={styles.link}>
              Discover Our Story <span aria-hidden>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
