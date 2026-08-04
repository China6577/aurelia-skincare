import type { Article, Milestone, Pillar, Stat } from "../types";

/** 品牌三大理念支柱（首页 Philosophy 区块） */
export const pillars: Pillar[] = [
  {
    title: "Natural",
    subtitle: "源于自然",
    description:
      "从阿尔卑斯冰川水到地中海橄榄园，我们遍寻全球纯净产地，只选取当季采收的活性植萃。",
    image: "https://picsum.photos/id/1018/1200/900",
  },
  {
    title: "Science",
    subtitle: "证于科学",
    description:
      "每一滴配方都经过体外功效测试与临床双盲验证，让自然的馈赠以可量化的方式作用于肌肤。",
    image: "https://picsum.photos/id/1035/1200/900",
  },
  {
    title: "Innovation",
    subtitle: "臻于创新",
    description:
      "微脂囊包裹、仿生脂质、缓释科技——三项专利载体技术，重新定义活性成分的递送方式。",
    image: "https://picsum.photos/id/1016/1200/900",
  },
];

/** 科研数据（首页 / Science 页动态数字） */
export const stats: Stat[] = [
  {
    value: 217,
    suffix: "",
    label: "配方迭代次数",
    description: "每一款产品上市前的平均打磨轮次",
  },
  {
    value: 96,
    suffix: "%",
    label: "天然来源成分占比",
    description: "通过 ISO 16128 天然指数认证",
  },
  {
    value: 12,
    suffix: " 年",
    label: "平均研发周期",
    description: "从原料发现到配方定型的深耕时间",
  },
  {
    value: 48,
    suffix: " 项",
    label: "全球专利",
    description: "覆盖载体技术与活性物稳定化工艺",
  },
];

/** 品牌大事记（Brand 页时间轴） */
export const milestones: Milestone[] = [
  {
    year: "1987",
    title: "日内瓦湖畔的第一间实验室",
    description:
      "皮肤科学家 Elena Moreau 在日内瓦创立 Aurelia 前身——一间专注于皮肤屏障研究的小型实验室。",
  },
  {
    year: "1996",
    title: "微脂囊包裹技术问世",
    description:
      "首款专利载体技术研发成功，解决了维生素 C 易氧化的行业难题，奠定品牌科研基石。",
  },
  {
    year: "2008",
    title: "Luminescence 系列全球发布",
    description:
      "明星焕光精华上市，首年即进入全球 23 个国家和地区的高端百货。",
  },
  {
    year: "2016",
    title: "可持续承诺",
    description:
      "全线产品实现 96% 天然来源成分，包装改用可回收玻璃与甘蔗基塑料，碳足迹降低 42%。",
  },
  {
    year: "2024",
    title: "AI 肌肤组学研究平台",
    description:
      "与瑞士联邦理工学院共建肌肤微生态数据库，开启个性化精准护肤的新纪元。",
  },
];

/** Journal 文章列表 */
export const articles: Article[] = [
  {
    id: "skin-barrier-science",
    title: "皮肤屏障：被低估的抗老第一防线",
    category: "科学研究",
    excerpt:
      "当外界刺激长驱直入，再贵的抗老成分也无济于事。重新认识角质层这道仅 20 微米厚的城墙。",
    date: "2026.07.18",
    readTime: "8 min",
    image: "https://picsum.photos/id/1080/900/640",
  },
  {
    id: "vitamin-c-guide",
    title: "维生素 C 完全指南：浓度、衍生物与光稳定性",
    category: "成分解析",
    excerpt:
      "从左旋 C 到乙基维 C，我们拆解了市面上七种主流维 C 形态的功效曲线与适用人群。",
    date: "2026.07.02",
    readTime: "12 min",
    image: "https://picsum.photos/id/106/900/640",
  },
  {
    id: "circadian-skincare",
    title: "昼夜节律护肤：肌肤也有自己的生物钟",
    category: "护肤知识",
    excerpt:
      "夜间十点到凌晨两点，细胞更新速率达到峰值。顺应节律的护肤，事半功倍。",
    date: "2026.06.21",
    readTime: "6 min",
    image: "https://picsum.photos/id/1044/900/640",
  },
  {
    id: "minimal-routine",
    title: "护肤极简主义：为什么你的梳妆台只需要四步",
    category: "美容趋势",
    excerpt:
      "层层叠叠的十步护肤法正在退潮。皮肤科医生告诉你，克制才是高级护肤的开始。",
    date: "2026.06.08",
    readTime: "5 min",
    image: "https://picsum.photos/id/1015/900/640",
  },
  {
    id: "peptide-explained",
    title: "胜肽图谱：从信号肽到神经递质抑制肽",
    category: "成分解析",
    excerpt:
      "同样是肽，作用机理却天差地别。一张图看懂六类主流胜肽的抗老路径。",
    date: "2026.05.26",
    readTime: "10 min",
    image: "https://picsum.photos/id/1043/900/640",
  },
  {
    id: "alpine-water",
    title: "一瓶冰川水的旅程：从阿尔卑斯到配方烧杯",
    category: "品牌故事",
    excerpt:
      "海拔 2400 米的冰川融水，经过 15 年岩层过滤。跟随我们的原料溯源团队走一遍这条水路。",
    date: "2026.05.12",
    readTime: "7 min",
    image: "https://picsum.photos/id/1036/900/640",
  },
];

/** 研发流程（Science 页） */
export const researchSteps = [
  {
    step: "01",
    title: "原料发现",
    description:
      "与全球 17 个原料产区建立直采合作，通过植物组学筛选具备护肤活性的分子。",
  },
  {
    step: "02",
    title: "活性验证",
    description:
      "在 3D 皮肤模型上进行体外功效测试，验证活性物的透皮率与作用靶点。",
  },
  {
    step: "03",
    title: "配方工程",
    description:
      "以专利载体技术稳定活性成分，历经上百轮肤感与稳定性调校。",
  },
  {
    step: "04",
    title: "临床实证",
    description:
      "独立第三方机构开展 8-12 周双盲临床测试，以仪器数据量化功效。",
  },
];
