import {
  ModelObjectBasicInfo,
  ModelObjectAttr,
  ModelObjectRelation,
  ModelObjectRelationGroup,
  ModelObjectIndex,
} from ".";

/** 模型 */
export type ModelCmdbObject = ModelObjectBasicInfo & ModelCmdbObject_2;

export interface ModelCmdbObject_2 {
  /** 属性列表 */
  attrList: Partial<ModelObjectAttr>[];

  /** 关系列表 */
  relation_list: Partial<ModelObjectRelation>[];

  /** 关系分组 */
  relation_groups: Partial<ModelObjectRelationGroup>[];

  /** 索引列表 */
  indexList: Partial<ModelObjectIndex>[];
}
