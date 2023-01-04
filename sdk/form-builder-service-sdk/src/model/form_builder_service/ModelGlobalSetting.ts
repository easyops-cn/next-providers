/** 公共设置 */
export interface ModelGlobalSetting {
  /** 默认模式 */
  defaultMode: "static" | "dynamic";

  /** 表单默认值 */
  formDefaultValues: string;

  /** 不映射字段 */
  notRenderField: string[];
}
