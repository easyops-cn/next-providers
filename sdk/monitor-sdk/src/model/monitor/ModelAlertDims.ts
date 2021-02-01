/** 告警维度 */
export interface ModelAlertDims {
  /** 告警维度前台展示名字 */
  name: string;

  /** 被调接口 */
  display_name: string;

  /** 告警维度值数组 */
  values: ModelAlertDims_values_item[];

  /** 告警维度类型 */
  type: "default" | "custom";
}

export interface ModelAlertDims_values_item {
  /** 告警维度值 */
  value?: string;

  /** 告警维度前台展示值 */
  display_value?: string;
}
