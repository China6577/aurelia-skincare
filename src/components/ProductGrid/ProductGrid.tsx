import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: Product[];
}

/**
 * 产品网格
 * AnimatePresence + layout 让筛选切换时卡片平滑重排。
 */
export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <motion.div layout className={styles.grid}>
      <AnimatePresence mode="popLayout">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductCard product={product} index={i} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
