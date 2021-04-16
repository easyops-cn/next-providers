import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceRelationPair } from "../../../model/cmdb";

export interface InstanceRelationApi_DiscoveryV2RequestBody {
  /** 发现实例的字段列表 */
  match: InstanceRelationApi_DiscoveryV2RequestBody_match;

  /** 发现实例的数据列表 */
  data: InstanceRelationApi_DiscoveryV2RequestBody_data_item[];

  /** 精确匹配（true: 只允许1:1关系，false: 允许1:n关系，默认true） */
  strict?: boolean;

  /** 操作类型 */
  operation: "set" | "append" | "remove";

  /** 采集关系主sideId，operation为set时必填，根据关系此边来设置关系 */
  mainSideId?: string;
}

export interface InstanceRelationApi_DiscoveryV2ResponseBody {
  /** 返回码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 返回信息 */
  message?: string;

  /** 数据 */
  data?: InstanceRelationApi_DiscoveryV2ResponseBody_data_item[];
}

/**
 * @description 实例关系发现V2(支持set关系)
 * @endpoint POST /v2/object_relation/:relationId/_autodiscovery/multi
 */
export const InstanceRelationApi_discoveryV2 = (
  relationId: string | number,
  data: InstanceRelationApi_DiscoveryV2RequestBody,
  options?: HttpOptions
): Promise<InstanceRelationApi_DiscoveryV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.DiscoveryV2 */ http.post<InstanceRelationApi_DiscoveryV2ResponseBody>(
    `api/gateway/cmdb.instance_relation.DiscoveryV2/v2/object_relation/${relationId}/_autodiscovery/multi`,
    data,
    options
  );

export interface InstanceRelationApi_DiscoveryV2RequestBody_match {
  /** 左侧实例匹配字段列表 */
  left_match?: string[];

  /** 右侧实例匹配字段列表 */
  right_match?: string[];
}

export interface InstanceRelationApi_DiscoveryV2RequestBody_data_item {
  /** 左侧匹配的实例数据 */
  left_instance?: Record<string, any>;

  /** 右侧匹配的实例数据 */
  right_instance?: Record<string, any>;
}

export interface InstanceRelationApi_DiscoveryV2ResponseBody_data_item {
  /** 状态码（0：成功，非0：失败） */
  code?: number;

  /** 状态描述 */
  message?: string;

  /** 关系左端模型ID */
  left_object_id?: string;

  /** 关系右端模型ID */
  right_object_id?: string;

  /** 创建实例关系成功列表 */
  connect_success?: Partial<ModelInstanceRelationPair>[];

  /** 创建实例关系失败列表 */
  connect_fail?: Partial<ModelInstanceRelationPair>[];

  /** 删除实例关系成功列表 */
  disconnect_success?: Partial<ModelInstanceRelationPair>[];

  /** 删除实例关系失败列表 */
  disconnect_fail?: Partial<ModelInstanceRelationPair>[];
}
