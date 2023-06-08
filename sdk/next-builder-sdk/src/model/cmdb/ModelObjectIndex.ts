/** 模型索引 */
export interface ModelObjectIndex {
  /** 索引唯一名称,自动生成,创建时无须填写 */
  name: string;

  /** 属性Id列表 */
  propertyIds: string[];

  /** 是否唯一 */
  unique: boolean;

  /** true 内置索引，false 用户自定义索引 */
  protected: boolean;
}
