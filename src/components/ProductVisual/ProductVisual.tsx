import type { Product } from "../../types";
import styles from "./ProductVisual.module.css";

interface ProductVisualProps {
  product: Product;
  /** 渲染尺寸（高度，px），宽度按比例自适应 */
  size?: number;
  className?: string;
}

/**
 * 程序化产品渲染器
 * 以 SVG 矢量绘制四种容器造型（滴管瓶 / 按压瓶 / 面霜罐 / 软管），
 * 配色来自产品 colorway —— 无需外部图片即可呈现
 * 统一的高级"白底广告摄影"质感。
 */
export default function ProductVisual({
  product,
  size = 280,
  className = "",
}: ProductVisualProps) {
  const { liquid, glass, cap } = product.colorway;
  // 渐变 id 必须随产品唯一，避免同页多个 SVG 互相污染
  const uid = `pv-${product.id}`;

  return (
    <svg
      viewBox="0 0 200 260"
      width={(size * 200) / 260}
      height={size}
      className={`${styles.visual} ${className}`}
      role="img"
      aria-label={product.name}
    >
      <defs>
        <linearGradient id={`${uid}-liquid`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={liquid} stopOpacity="0.95" />
          <stop offset="45%" stopColor={liquid} />
          <stop offset="100%" stopColor={liquid} stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={glass} stopOpacity="0.5" />
          <stop offset="18%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="40%" stopColor={glass} stopOpacity="0.25" />
          <stop offset="100%" stopColor={glass} stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={`${uid}-cap`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={cap} />
          <stop offset="30%" stopColor={cap} stopOpacity="0.75" />
          <stop offset="55%" stopColor={cap} stopOpacity="0.4" />
          <stop offset="100%" stopColor={cap} />
        </linearGradient>
      </defs>

      {/* 底部柔影 */}
      <ellipse cx="100" cy="246" rx="52" ry="8" fill="rgba(22,20,26,0.10)" />

      {product.vessel === "dropper" && (
        <g>
          {/* 滴管瓶盖 */}
          <rect x="82" y="18" width="36" height="26" rx="4" fill={`url(#${uid}-cap)`} />
          <rect x="88" y="44" width="24" height="12" rx="2" fill={cap} opacity="0.85" />
          {/* 瓶身 */}
          <rect x="66" y="56" width="68" height="188" rx="10" fill={`url(#${uid}-liquid)`} />
          <rect x="66" y="56" width="68" height="188" rx="10" fill={`url(#${uid}-glass)`} />
          {/* 内部滴管 */}
          <rect x="97" y="56" width="6" height="150" rx="3" fill="#ffffff" opacity="0.35" />
          {/* 肩部高光 */}
          <rect x="74" y="66" width="7" height="160" rx="3.5" fill="#ffffff" opacity="0.5" />
          {/* 标签 */}
          <rect x="66" y="140" width="68" height="56" fill="rgba(253,252,249,0.85)" />
          <text x="100" y="164" textAnchor="middle" className={styles.label} fill="#1d1a22">
            AURELIA
          </text>
          <line x1="84" y1="176" x2="116" y2="176" stroke="#c6a15b" strokeWidth="1" />
        </g>
      )}

      {product.vessel === "pump" && (
        <g>
          {/* 按压泵头 */}
          <rect x="88" y="14" width="24" height="18" rx="3" fill={`url(#${uid}-cap)`} />
          <rect x="74" y="22" width="18" height="8" rx="3" fill={cap} />
          <rect x="92" y="32" width="16" height="20" fill={cap} opacity="0.9" />
          {/* 瓶身：修长圆柱 */}
          <rect x="60" y="52" width="80" height="192" rx="14" fill={`url(#${uid}-liquid)`} />
          <rect x="60" y="52" width="80" height="192" rx="14" fill={`url(#${uid}-glass)`} />
          <rect x="70" y="64" width="8" height="164" rx="4" fill="#ffffff" opacity="0.5" />
          {/* 标签 */}
          <rect x="60" y="130" width="80" height="64" fill="rgba(253,252,249,0.85)" />
          <text x="100" y="156" textAnchor="middle" className={styles.label} fill="#1d1a22">
            AURELIA
          </text>
          <line x1="82" y1="168" x2="118" y2="168" stroke="#c6a15b" strokeWidth="1" />
        </g>
      )}

      {product.vessel === "jar" && (
        <g>
          {/* 罐盖 */}
          <rect x="56" y="96" width="88" height="30" rx="8" fill={`url(#${uid}-cap)`} />
          {/* 罐身：矮宽 */}
          <rect x="56" y="126" width="88" height="118" rx="12" fill={`url(#${uid}-liquid)`} />
          <rect x="56" y="126" width="88" height="118" rx="12" fill={`url(#${uid}-glass)`} />
          <rect x="65" y="136" width="7" height="96" rx="3.5" fill="#ffffff" opacity="0.45" />
          {/* 标签 */}
          <text x="100" y="180" textAnchor="middle" className={styles.label} fill="#1d1a22">
            AURELIA
          </text>
          <line x1="82" y1="192" x2="118" y2="192" stroke="#c6a15b" strokeWidth="1" />
        </g>
      )}

      {product.vessel === "tube" && (
        <g>
          {/* 软管顶部封尾 */}
          <rect x="70" y="30" width="60" height="14" rx="4" fill={cap} opacity="0.7" />
          {/* 管身：上窄下宽梯形 */}
          <path
            d="M70 44 L130 44 L138 210 Q138 220 128 220 L72 220 Q62 220 62 210 Z"
            fill={`url(#${uid}-liquid)`}
          />
          <path
            d="M70 44 L130 44 L138 210 Q138 220 128 220 L72 220 Q62 220 62 210 Z"
            fill={`url(#${uid}-glass)`}
          />
          <rect x="74" y="56" width="7" height="140" rx="3.5" fill="#ffffff" opacity="0.45" />
          {/* 底部旋盖 */}
          <rect x="72" y="220" width="56" height="24" rx="6" fill={`url(#${uid}-cap)`} />
          {/* 标签 */}
          <text x="100" y="120" textAnchor="middle" className={styles.label} fill="#1d1a22">
            AURELIA
          </text>
          <line x1="84" y1="132" x2="116" y2="132" stroke="#c6a15b" strokeWidth="1" />
        </g>
      )}
    </svg>
  );
}
