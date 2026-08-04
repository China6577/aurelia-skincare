import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/technology", label: "Technology" },
  { to: "/brand", label: "Brand" },
  { to: "/journal", label: "Journal" },
];

/**
 * 顶部导航
 * - 初始透明悬浮于 Hero 之上，滚动后切换为玻璃拟态毛玻璃条
 * - 移动端折叠为全屏抽屉菜单
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 路由变化时收起移动菜单
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`}>
        {/* 品牌标识 */}
        <Link to="/" className={styles.logo} aria-label="Aurelia 首页">
          <span className={styles.logoMark}>A</span>
          <span className={styles.logoText}>AURELIA</span>
        </Link>

        {/* 桌面端导航 */}
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 移动端汉堡按钮 */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="打开菜单"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </nav>

      {/* 移动端全屏菜单 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ul>
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                >
                  <NavLink to={link.to} end={link.to === "/"}>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
