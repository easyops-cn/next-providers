/** 实例关系列表 */
export interface ModelInstanceRelationList {
  /** 关系列表值 */
  list: ModelInstanceRelationList_list_item[];
}

export interface ModelInstanceRelationList_list_item {
  /** 左边实例id */
  left_instance_id?: string;

  /** 右边实例id */
  right_instance_id?: string;
}
