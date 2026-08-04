import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import ProductVisual from "../../components/ProductVisual/ProductVisual";
import PageTransition from "../../components/PageTransition/PageTransition";
import { getProductById, products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductDetail.module.css";

/**
 * 产品详情页 —— Apple 式叙事结构：
 * 巨型产品首屏 → 产品故事 → 功效 → 成分解析 → 使用方法 → 相关产品
 */
export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  // 未找到产品时回退到产品列表
  if (!product) return <Navigate to="/products" replace />;

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <PageTransition>
      {/* ---- 第一屏：巨型产品展示 ---- */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <AnimatedSection>
              <p className="eyebrow">{product.tagline}</p>
              <h1 className="display-xl">{product.name}</h1>
              <p className={`lead ${styles.heroIntro}`}>{product.intro}</p>
              <div className={styles.heroMeta}>
                <span>{product.category}</span>
                <span className={styles.dot} aria-hidden />
                <span>{product.volume}</span>
              </div>
            </AnimatedSection>
          </div>

          <motion.div
            className={styles.heroStage}
            initial={{ opacity: 0, y: 80, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ProductVisual product={product} size={420} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---- 产品故事 ---- */}
      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyInner}`}>
          <AnimatedSection>
            <p className="eyebrow">The Story</p>
            <p className={styles.storyText}>{product.story}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- 功效 ---- */}
      <section className={styles.benefits}>
        <div className="container">
          <div className={styles.benefitRow}>
            {product.benefits.map((benefit, i) => (
              <AnimatedSection key={benefit} delay={i * 0.12} className={styles.benefit}>
                <span className={styles.benefitIndex}>0{i + 1}</span>
                <p>{benefit}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 成分解析 ---- */}
      <section className={`section ${styles.ingredients}`}>
        <div className="container">
          <AnimatedSection>
            <p className="eyebrow">Key Ingredients</p>
            <h2 className="display-lg">
              Inside the <em className={styles.accent}>Formula</em>
            </h2>
          </AnimatedSection>

          <div className={styles.ingredientList}>
            {product.ingredients.map((ingredient, i) => (
              <IngredientCard key={ingredient.name} ingredient={ingredient} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- 使用方法 ---- */}
      <section className={styles.usage}>
        <div className={`container ${styles.usageInner}`}>
          <AnimatedSection>
            <p className="eyebrow">The Ritual</p>
            <p className={styles.usageText}>{product.usage}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- 相关产品 ---- */}
      <section className={`section ${styles.related}`}>
        <div className="container">
          <AnimatedSection className={styles.relatedHead}>
            <p className="eyebrow">Continue Exploring</p>
            <h2 className="display-lg">You May Also Love</h2>
          </AnimatedSection>
          <div className={styles.relatedGrid}>
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <AnimatedSection className={styles.backWrap}>
            <Link to="/products" className={styles.back}>
              ← Back to Collection
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
