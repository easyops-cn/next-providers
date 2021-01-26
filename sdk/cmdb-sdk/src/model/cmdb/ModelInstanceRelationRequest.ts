/** InstanceRelationRequest */
export interface ModelInstanceRelationRequest {
  /** 模型的实例ID列表 */
  instance_ids: string[];

  /** 关联的实例ID列表 */
  related_instance_ids: string[];
}
