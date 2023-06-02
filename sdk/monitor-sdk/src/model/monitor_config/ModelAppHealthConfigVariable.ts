/** 应用评分配置变量 */
export interface ModelAppHealthConfigVariable {
  /** 类型 */
  type: "internal" | "custom";

  /** 变量id */
  id: string;

  /** 来源 */
  from: "cmdb" | "custom";

  /** 变量名称 */
  name: string;

  /** 变量路径 */
  attr: string;

  /** 变量值 */
  value: string[];
}
