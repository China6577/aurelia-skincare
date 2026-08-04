import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import ScienceSection from "../../components/ScienceSection/ScienceSection";
import ParticleField from "../../components/ParticleField/ParticleField";
import PageTransition from "../../components/PageTransition/PageTransition";
import { researchSteps, stats } from "../../data/site";
import styles from "./Science.module.css";

/** 三项专利载体技术 */
const TECHNOLOGIES = [
  {
    title: "Liposome Encapsulation",
    subtitle: "微脂囊包裹技术",
    description:
      "以与细胞膜同源的磷脂双分子层包裹活性成分，隔绝光氧侵蚀，透皮率提升 3.2 倍。",
  },
  {
    title: "Biomimetic Lipids",
    subtitle: "仿生脂质技术",
    description:
      "复刻健康角质层 3:1:1 的神经酰胺-胆固醇-脂肪酸黄金比例，修护如同肌肤自愈。",
  },
  {
    title: "Time-Release Matrix",
    subtitle: "缓释矩阵科技",
    description:
      "将活性物锚定于多糖三维网络，8 小时持续释放，把功效从「瞬间」延长为「整夜」。",
  },
];

/**
 * 科技页面
 * 深色科技感首屏（粒子网络）→ 研发流程 → 专利载体技术 → 数据总览。
 */
export default function Science() {
  return (
    <PageTransition>
      {/* 首屏：粒子网络 + 宣言 */}
      <header className={styles.hero}>
        <div className={styles.particles}>
          <ParticleField />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection>
            <p className="eyebrow">Aurelia Laboratories</p>
            <h1 className="display-xl">
              Where Nature Meets
              <em className={styles.accent}> Precision</em>
            </h1>
            <p className={`lead ${styles.heroLead}`}>
              日内瓦湖畔的 2,400 平方米实验室里，37 位皮肤科学家与配方工程师
              每天都在回答同一个问题：如何让自然活性成分，
              以可验证的方式抵达肌肤深处。
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* 研发流程 */}
      <section className={`section ${styles.process}`}>
        <div className="container">
          <AnimatedSection className={styles.processHead}>
            <p className="eyebrow">The Process</p>
            <h2 className="display-lg">From Molecule to Ritual</h2>
          </AnimatedSection>

          <div className={styles.steps}>
            {researchSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.12} className={styles.step}>
                <span className={styles.stepNumber}>{step.step}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 专利技术 */}
      <section className={`section ${styles.tech}`}>
        <div className="container">
          <AnimatedSection className={styles.techHead}>
            <p className="eyebrow">Patented Delivery Systems</p>
            <h2 className="display-lg">
              Three <em className={styles.accent}>Breakthroughs</em>
            </h2>
          </AnimatedSection>

          <div className={styles.techGrid}>
            {TECHNOLOGIES.map((tech, i) => (
              <AnimatedSection key={tech.title} delay={i * 0.15} className={styles.techCard}>
                <h3 className={styles.techTitle}>{tech.title}</h3>
                <p className={styles.techSubtitle}>{tech.subtitle}</p>
                <p className={styles.techDesc}>{tech.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 数据总览（复用首页科研组件） */}
      <ScienceSection stats={stats} />
    </PageTransition>
  );
}
