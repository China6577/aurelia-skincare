import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection/HeroSection";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import ProductCard from "../../components/ProductCard/ProductCard";
import ScienceSection from "../../components/ScienceSection/ScienceSection";
import BrandStory from "../../components/BrandStory/BrandStory";
import PageTransition from "../../components/PageTransition/PageTransition";
import { featuredProducts } from "../../data/products";
import { pillars, stats } from "../../data/site";
import styles from "./Home.module.css";

/**
 * 首页
 * 结构：Hero → 品牌理念三支柱 → 明星产品 → 科研数据 → 品牌故事 → 结尾 CTA
 */
export default function Home() {
  return (
    <PageTransition>
      <HeroSection />

      {/* ---- 品牌理念：Natural / Science / Innovation ---- */}
      <section className={`section ${styles.pillars}`}>
        <div className="container">
          <AnimatedSection className={styles.pillarsHead}>
            <p className="eyebrow">Philosophy</p>
            <h2 className="display-lg">
              Three Pillars of
              <em className={styles.accent}> Radiance</em>
            </h2>
          </AnimatedSection>

          <div className={styles.pillarGrid}>
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.15} className={styles.pillar}>
                <div className={`duotone ${styles.pillarFigure}`}>
                  <img src={pillar.image} alt={pillar.subtitle} loading="lazy" />
                </div>
                <p className={styles.pillarIndex}>0{i + 1}</p>
                <h3 className={styles.pillarTitle}>
                  {pillar.title}
                  <span>{pillar.subtitle}</span>
                </h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 明星产品 ---- */}
      <section className={`section ${styles.featured}`}>
        <div className="container">
          <AnimatedSection className={styles.featuredHead}>
            <div>
              <p className="eyebrow">Iconic Formulas</p>
              <h2 className="display-lg">The Icons</h2>
            </div>
            <Link to="/products" className={styles.viewAll}>
              View All Products <span aria-hidden>→</span>
            </Link>
          </AnimatedSection>

          <div className={styles.productRow}>
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- 科研数据 ---- */}
      <ScienceSection stats={stats} />

      {/* ---- 品牌故事 ---- */}
      <BrandStory image="https://picsum.photos/id/1015/1400/1100" />

      {/* ---- 结尾 CTA ---- */}
      <section className={styles.finale}>
        <AnimatedSection>
          <p className="eyebrow">Begin Your Ritual</p>
          <motion.h2 className={`display-xl ${styles.finaleTitle}`}>
            Your Skin,
            <br />
            <em>Reimagined.</em>
          </motion.h2>
          <Link to="/products" className={styles.finaleCta}>
            Explore Collection
          </Link>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
