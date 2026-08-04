import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

/**
 * 页脚：黑曜石深色区块，与全站浅色形成收束对比。
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>AURELIA</p>
          <p className={styles.slogan}>
            Reveal Your Natural Radiance.
            <br />
            以科学之名，敬自然之美。
          </p>
        </div>

        <nav className={styles.col} aria-label="探索">
          <p className={styles.colTitle}>Explore</p>
          <Link to="/products">Products</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/brand">Brand</Link>
          <Link to="/journal">Journal</Link>
        </nav>

        <nav className={styles.col} aria-label="支持">
          <p className={styles.colTitle}>Support</p>
          <a href="#">Contact Us</a>
          <a href="#">Shipping</a>
          <a href="#">FAQ</a>
        </nav>

        <div className={styles.col}>
          <p className={styles.colTitle}>Atelier</p>
          <address className={styles.address}>
            Quai du Mont-Blanc 12
            <br />
            1201 Genève, Switzerland
          </address>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© 2026 Aurelia Skincare. All rights reserved.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}
