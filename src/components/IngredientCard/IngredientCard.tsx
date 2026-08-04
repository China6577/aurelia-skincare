import { motion } from "framer-motion";
import type { Ingredient } from "../../types";
import styles from "./IngredientCard.module.css";

interface IngredientCardProps {
  ingredient: Ingredient;
  index?: number;
}

/**
 * 成分卡片 —— 产品详情页成分可视化区块。
 * 左侧浓度数字滚动显现，右侧成分名与功效说明。
 */
export default function IngredientCard({ ingredient, index = 0 }: IngredientCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className={styles.concentration}>{ingredient.concentration}</span>
      <div className={styles.body}>
        <p className={styles.name}>
          {ingredient.name}
          <span className={styles.alias}>{ingredient.alias}</span>
        </p>
        <p className={styles.benefit}>{ingredient.benefit}</p>
      </div>
      {/* 底部进度线动画 */}
      <motion.span
        className={styles.rule}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: index * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
