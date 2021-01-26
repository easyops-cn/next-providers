import { ModelObjectAttrValue } from ".";

/** 模型属性 */
export interface ModelObjectAttr {
  /** 属性ID */
  id: string;

  /** 属性名称 */
  name: string;

  /** true 内置属性，false 用户自定义属性 */
  protected: boolean;

  /** DEPRECATED! 'true' 用户自定义属性，'false' 内置属性 */
  custom: "true" | "false";

  /** 'true' 只读属性，'false' 可写属性 */
  readonly: "true" | "false";

  /** 'true' 必填属性，'false' 非必填属性 */
  required: "true" | "false";

  /** 'true' 唯一属性 */
  unique: "true" | "false";

  /** 属性分类 */
  tag: string[];

  /** 属性值类型，不同类型有不同字段 */
  value: Partial<ModelObjectAttrValue>;

  /** 不纳入全文搜索 */
  wordIndexDenied: boolean;

  /** 属性的描述 */
  description: string;

  /** 属性的提示 */
  tips: string;

  /** 是否继承自父模型 */
  isInherit: boolean;
}
