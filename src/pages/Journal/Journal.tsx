import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import PageTransition from "../../components/PageTransition/PageTransition";
import { articles } from "../../data/site";
import type { Article } from "../../types";
import styles from "./Journal.module.css";

/** 头条文章卡片（大图横排） */
function FeaturedArticle({ article }: { article: Article }) {
  return (
    <AnimatedSection className={styles.featured}>
      <div className={`duotone ${styles.featuredFigure}`}>
        <img src={article.image} alt={article.title} loading="lazy" />
      </div>
      <div className={styles.featuredBody}>
        <p className={styles.meta}>
          {article.category} · {article.date} · {article.readTime}
        </p>
        <h2 className={styles.featuredTitle}>{article.title}</h2>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <span className={styles.readMore}>
          Read Article <span aria-hidden>→</span>
        </span>
      </div>
    </AnimatedSection>
  );
}

/** 普通文章卡片 */
function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`duotone ${styles.cardFigure}`}>
        <img src={article.image} alt={article.title} loading="lazy" />
      </div>
      <p className={styles.meta}>
        {article.category} · {article.readTime}
      </p>
      <h3 className={styles.cardTitle}>{article.title}</h3>
      <p className={styles.excerpt}>{article.excerpt}</p>
    </motion.article>
  );
}

/**
 * Journal 美容资讯页 —— 杂志式排版：
 * 头条大图 + 其余文章三列网格。
 */
export default function Journal() {
  const [featured, ...rest] = articles;

  return (
    <PageTransition>
      <header className={styles.header}>
        <div className="container">
          <AnimatedSection>
            <p className="eyebrow">The Journal</p>
            <h1 className="display-xl">
              Notes on
              <em className={styles.accent}> Beauty</em>
            </h1>
            <p className={`lead ${styles.lead}`}>
              关于肌肤、成分与美的长期主义思考。
            </p>
          </AnimatedSection>
        </div>
      </header>

      <section className={styles.content}>
        <div className="container">
          <FeaturedArticle article={featured} />

          <div className={styles.grid}>
            {rest.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
