import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Brand from "../pages/Brand/Brand";
import Science from "../pages/Science/Science";
import Journal from "../pages/Journal/Journal";

/** 路由切换时回到页面顶部 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

/**
 * 应用路由表
 * AnimatePresence 负责页面级过渡动画。
 */
export default function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/technology" element={<Science />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
