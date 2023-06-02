/** 模型关系分组 */
export interface ModelObjectRelationGroup {
  /** 分组ID */
  id: string;

  /** 分组名称 */
  name: string;

  /** true 表示内置关系分组 */
  protected: boolean;
}
