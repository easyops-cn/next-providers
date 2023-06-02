/** 模型关联小产品 */
export interface ModelObjectMicroApp {
  /** 关联关系唯一名称 */
  name: string;

  /** 模型id */
  objectId: string;

  /** 小产品Id */
  microAppId: string;

  /** 小产品名称 */
  microAppName: string;

  /** 小产品首页 */
  homepage: string;

  /** 子页面相对路径 */
  subPath: string;

  /** 排序序号 */
  order: number;

  /** 状态 */
  status: "enabled" | "disabled" | "developing";

  /** 是否是默认小产品 */
  default: "true" | "false";

  /** 标签 */
  tags: string[];
}
