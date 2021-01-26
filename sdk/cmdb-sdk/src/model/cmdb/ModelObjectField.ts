/** 模型字段 */
export interface ModelObjectField {
  /** 名称 */
  id: string;

  /** 字段名称 */
  name: string;

  /** 字段类型 */
  type: string;

  /** 关系字段列表 */
  attrs: Partial<ModelObjectField>[];
}
