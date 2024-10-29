/** 表单模型字段 */
export interface ModelFormModelField {
  /** 实例id */
  instanceId: string;

  /** id */
  fieldId: string;

  /** 字段名 */
  name: string;

  /** 类型 */
  fieldType: string;

  /** 描述 */
  description: string;

  /** 限制 */
  limit: string[];

  /** 默认值 */
  defaultValue: string;

  /** 正则/枚举 */
  regex: any;
}
