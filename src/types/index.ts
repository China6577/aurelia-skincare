/**
 * AURELIA 全域类型定义
 * 所有跨模块共享的数据结构集中于此，保证类型单一来源。
 */

/** 产品分类 */
export type Category = "Skincare" | "Serum" | "Cream" | "Mask";

/** 核心成分 */
export interface Ingredient {
  /** 成分名称（英文） */
  name: string;
  /** 成分中文 / 通俗名 */
  alias: string;
  /** 功效描述 */
  benefit: string;
  /** 在产品中的浓度或含量说明 */
  concentration: string;
}

/** 产品实体 */
export interface Product {
  id: string;
  name: string;
  /** 副标题 / 系列名 */
  tagline: string;
  category: Category;
  /** 一句话介绍 */
  intro: string;
  /** 功效列表 */
  benefits: string[];
  /** 核心成分 */
  ingredients: Ingredient[];
  /** 使用方法 */
  usage: string;
  /** 产品故事（详情页） */
  story: string;
  /** 规格 */
  volume: string;
  /** 是否为明星产品（首页推荐） */
  featured: boolean;
  /** SVG 产品渲染配色方案 */
  colorway: {
    /** 瓶内液体主色 */
    liquid: string;
    /** 玻璃高光色 */
    glass: string;
    /** 瓶盖颜色 */
    cap: string;
  };
  /** 容器造型 */
  vessel: "dropper" | "jar" | "pump" | "tube";
}

/** 品牌理念支柱 */
export interface Pillar {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

/** 科研数据 */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

/** 品牌大事记 */
export interface Milestone {
  year: string;
  title: string;
  description: string;
}

/** Journal 文章 */
export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}
