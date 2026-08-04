import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import PageTransition from "../../components/PageTransition/PageTransition";
import { products } from "../../data/products";
import type { Category } from "../../types";
import styles from "./Products.module.css";

/** 筛选分类：All + 全部产品分类 */
const FILTERS: Array<"All" | Category> = ["All", "Skincare", "Serum", "Cream", "Mask"];

/**
 * 产品目录页
 * 顶部大标题 + 分类筛选（layout 动画重排）+ 产品网格。
 */
export default function Products() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <PageTransition>
      {/* 页头 */}
      <header className={styles.header}>
        <div className="container">
          <AnimatedSection>
            <p className="eyebrow">The Collection</p>
            <h1 className="display-xl">
              Discover Our
              <em className={styles.accent}> Collection</em>
            </h1>
            <p className={`lead ${styles.headerLead}`}>
              六款配方，覆盖从清洁到夜间修护的完整护肤仪式。
              每一款，都是数百次实验室迭代的终点。
            </p>
          </AnimatedSection>

          {/* 分类筛选 */}
          <motion.div
            className={styles.filters}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                className={`${styles.filter} ${active === filter ? styles.filterActive : ""}`}
                onClick={() => setActive(filter)}
              >
                {filter}
                {/* 选中态下划线：layoutId 让其在按钮间滑动 */}
                {active === filter && (
                  <motion.span layoutId="filter-underline" className={styles.underline} />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </header>

      {/* 产品网格 */}
      <section className={styles.gridSection}>
        <div className="container">
          <ProductGrid products={filtered} />
        </div>
      </section>
    </PageTransition>
  );
}
