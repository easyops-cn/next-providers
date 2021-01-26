/** 关系自动发现接口响应 - 关联的实例详情 */
export interface ModelAutoDiscoveryInstance {
  /** 左侧实例id */
  instanceId: string;

  /** 右侧实例id */
  _object_id: string;

  /** [废弃字段] 实例名称 */
  name: string;

  /** [废弃字段] 主机实例名称 */
  hostname: string;
}
