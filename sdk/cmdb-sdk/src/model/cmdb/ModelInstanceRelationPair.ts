/** 实例关系结联 */
export interface ModelInstanceRelationPair {
  /** 左端实例ID */
  left_instance_id: string;

  /** 右端实例ID */
  right_instance_id: string;

  /** 关系左端模型ID */
  left_object_id: string;

  /** 关系右端模型ID */
  right_object_id: string;
}
