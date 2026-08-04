import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./router";

/**
 * 应用根组件：仅负责全局布局骨架。
 * 页面内容全部由路由分发，保证结构清晰、职责单一。
 */
export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}
