import type { Product } from "../types";

/**
 * 产品数据
 * 图片由 ProductVisual 组件以 SVG 程序化渲染，
 * colorway 决定每个产品的瓶身配色。
 */
export const products: Product[] = [
  {
    id: "luminescence-serum",
    name: "Luminescence Serum",
    tagline: "Radiance Concentrate · 焕光精华",
    category: "Serum",
    intro: "一滴唤醒肌肤内在光泽的高浓度焕亮精华。",
    benefits: ["提亮肤色", "淡化色斑", "抗氧化防护"],
    ingredients: [
      {
        name: "Vitamin C",
        alias: "乙基抗坏血酸",
        benefit: "稳定型维 C 衍生物，抑制黑色素生成，提亮肤色",
        concentration: "12%",
      },
      {
        name: "Niacinamide",
        alias: "烟酰胺",
        benefit: "改善肤色不均，强化肌肤屏障",
        concentration: "5%",
      },
      {
        name: "Ferulic Acid",
        alias: "阿魏酸",
        benefit: "协同抗氧化，使维 C 功效倍增",
        concentration: "0.5%",
      },
    ],
    usage: "早晚洁面后，取 3-4 滴于掌心温热，轻按于面部与颈部，后续叠加面霜锁住营养。",
    story:
      "Luminescence Serum 诞生于 Aurelia 日内瓦实验室的第 217 次配方迭代。我们将不稳定的高浓度维 C 封装于微脂囊载体中，使其在接触肌肤瞬间释放活性，把实验室级的焕亮能量带入日常护肤仪式。",
    volume: "30 ml",
    featured: true,
    colorway: { liquid: "#e8c98a", glass: "#f6ead2", cap: "#1d1a22" },
    vessel: "dropper",
  },
  {
    id: "hydra-essence",
    name: "Hydra Essence",
    tagline: "Deep Hydration · 沁润精粹水",
    category: "Skincare",
    intro: "五重透明质酸构建立体储水网络的长效保湿精粹。",
    benefits: ["深层补水", "舒缓泛红", "柔滑肤质"],
    ingredients: [
      {
        name: "Hyaluronic Acid",
        alias: "五重透明质酸",
        benefit: "五种分子量透明质酸，由表及里层层锁水",
        concentration: "2%",
      },
      {
        name: "Panthenol",
        alias: "泛醇（维生素 B5）",
        benefit: "舒缓修护，提升肌肤含水量",
        concentration: "3%",
      },
      {
        name: "Centella Asiatica",
        alias: "积雪草提取物",
        benefit: "镇静敏感，强化肌肤抵御力",
        concentration: "1%",
      },
    ],
    usage: "洁面后取适量于化妆棉或掌心，轻拍至完全吸收，可湿敷 5 分钟作为急救水膜。",
    story:
      "灵感源自阿尔卑斯山冰川融水的纯净结构。Hydra Essence 以五重分子量的透明质酸模拟天然保湿因子的梯度分布，让肌肤像海绵一样，从空气与肌底同时汲取水分。",
    volume: "150 ml",
    featured: true,
    colorway: { liquid: "#bcd8e2", glass: "#e8f2f5", cap: "#c6a15b" },
    vessel: "pump",
  },
  {
    id: "velvet-renewal-cream",
    name: "Velvet Renewal Cream",
    tagline: "Night Repair · 丝绒修护面霜",
    category: "Cream",
    intro: "夜间修护黄金期，胜肽与神经酰胺的丝绒协奏。",
    benefits: ["紧致轮廓", "抚平细纹", "屏障修护"],
    ingredients: [
      {
        name: "Peptide",
        alias: "六胜肽复合物",
        benefit: "促进胶原新生，淡化动态纹路",
        concentration: "8%",
      },
      {
        name: "Ceramide NP",
        alias: "神经酰胺 NP",
        benefit: "重建角质层脂质屏障，减少水分流失",
        concentration: "2%",
      },
      {
        name: "Squalane",
        alias: "植物角鲨烷",
        benefit: "亲肤油脂，赋予丝绒般触感",
        concentration: "10%",
      },
    ],
    usage: "夜间护肤最后一步，取珍珠大小于掌心乳化，由内向外轻柔按压全脸。",
    story:
      "肌肤在夜间的修护效率是白天的三倍。Velvet Renewal Cream 以仿生脂质技术复刻健康角质层的黄金比例，在你入睡的八小时里，安静地完成一场精密的重建工程。",
    volume: "50 ml",
    featured: true,
    colorway: { liquid: "#f3e6d0", glass: "#fbf5ea", cap: "#16141a" },
    vessel: "jar",
  },
  {
    id: "golden-hour-mask",
    name: "Golden Hour Mask",
    tagline: "Overnight Radiance · 鎏金睡眠面膜",
    category: "Mask",
    intro: "一夜焕活的鎏金睡眠面膜，醒来即是高光时刻。",
    benefits: ["熬夜急救", "焕亮祛黄", "细腻毛孔"],
    ingredients: [
      {
        name: "Retinal",
        alias: "视黄醛",
        benefit: "高效低刺激的维 A 衍生物，加速肌肤更新",
        concentration: "0.1%",
      },
      {
        name: "Bakuchiol",
        alias: "补骨脂酚",
        benefit: "植物来源抗老成分，协同视黄醛温和焕肤",
        concentration: "1%",
      },
      {
        name: "Honey Extract",
        alias: "麦卢卡蜂蜜提取物",
        benefit: "天然保湿与抗菌力，滋养疲惫肌肤",
        concentration: "4%",
      },
    ],
    usage: "每周 2-3 次，晚间薄涂一层替代面霜，无需清洗，次日清晨正常洁面。",
    story:
      "黄昏后的一小时，摄影师称之为 Golden Hour——光线最温柔的时刻。这款面膜将那一小时的柔光封存：蜂蜜金的凝露质地在睡梦中缓慢释放焕新能量，让肌肤醒来时自带柔焦滤镜。",
    volume: "75 ml",
    featured: true,
    colorway: { liquid: "#e2b563", glass: "#f7ecd6", cap: "#c6a15b" },
    vessel: "tube",
  },
  {
    id: "clarity-foam",
    name: "Clarity Foam Cleanser",
    tagline: "Gentle Purify · 澄净洁面泡沫",
    category: "Skincare",
    intro: "氨基酸表活的云朵泡沫，洗净喧嚣，留住水润。",
    benefits: ["温和清洁", "水油平衡", "不紧绷"],
    ingredients: [
      {
        name: "Amino Acid Surfactant",
        alias: "椰油酰甘氨酸钾",
        benefit: "接近肌肤 pH 值的氨基酸表活，温和洁净",
        concentration: "15%",
      },
      {
        name: "Green Tea",
        alias: "绿茶提取物",
        benefit: "茶多酚抗氧化，净化毛孔",
        concentration: "0.8%",
      },
      {
        name: "Allantoin",
        alias: "尿囊素",
        benefit: "舒缓洁面后的脆弱状态",
        concentration: "0.5%",
      },
    ],
    usage: "早晚湿润面部后，按压两泵泡沫，以打圈方式按摩 30 秒，温水洗净。",
    story:
      "一切护肤始于清洁，也终于对清洁的克制。Clarity Foam 坚持只用氨基酸表活体系，泡沫绵密如云朵，洗后留下的是干净，而不是紧绷的错觉。",
    volume: "150 ml",
    featured: false,
    colorway: { liquid: "#e9efe7", glass: "#f6f9f4", cap: "#26222c" },
    vessel: "pump",
  },
  {
    id: "aqua-gel-cream",
    name: "Aqua Gel Cream",
    tagline: "Weightless Moisture · 水凝霜",
    category: "Cream",
    intro: "一抹化水的水凝质地，油皮也爱的轻盈保湿。",
    benefits: ["清爽保湿", "控油哑光", "妆前打底"],
    ingredients: [
      {
        name: "Betaine",
        alias: "甜菜碱",
        benefit: "天然渗透压调节剂，维持细胞水分平衡",
        concentration: "3%",
      },
      {
        name: "Zinc PCA",
        alias: "锌 PCA",
        benefit: "调节皮脂分泌，保持肌肤哑光",
        concentration: "1%",
      },
      {
        name: "Aloe Vera",
        alias: "库拉索芦荟",
        benefit: "舒缓补水，清凉肤感",
        concentration: "5%",
      },
    ],
    usage: "早晚于精华后使用，取适量均匀涂抹，可作为妆前保湿打底。",
    story:
      "为亚热带气候与油性肌肤而生的配方。Aqua Gel Cream 采用油包水微乳技术，膏体接触皮肤的瞬间破乳化水，保湿力不减，负担归零。",
    volume: "50 ml",
    featured: false,
    colorway: { liquid: "#cfe5e0", glass: "#eef6f3", cap: "#c6a15b" },
    vessel: "jar",
  },
];

/** 首页明星产品 */
export const featuredProducts = products.filter((p) => p.featured);

/** 按 id 查找产品 */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
