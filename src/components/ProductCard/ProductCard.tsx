import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "../../types";
import ProductVisual from "../ProductVisual/ProductVisual";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  /** 在网格中的序号，用于错落入场 */
  index?: number;
}

/**
 * 产品卡片
 * Hover：卡片升起 + 产品图轻微放大 + 展开更多信息。
 */
export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/products/${product.id}`} className={styles.link}>
        <div className={styles.figure}>
          <ProductVisual product={product} size={230} className={styles.bottle} />
        </div>

        <div className={styles.meta}>
          <p className={styles.category}>{product.category}</p>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.intro}>{product.intro}</p>

          {/* hover 展开的更多信息 */}
          <div className={styles.more}>
            <p className={styles.ingredientLine}>
              Key Ingredients ·{" "}
              {product.ingredients.map((i) => i.name).join(" / ")}
            </p>
            <span className={styles.cta}>
              Discover <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
