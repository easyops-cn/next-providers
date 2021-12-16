import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAutoDiscoveryInstance } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceRelationApi_DiscoveryRequestBody {
  /** 发现实例的字段列表 */
  match: InstanceRelationApi_DiscoveryRequestBody_match_item[];

  /** 发现实例的数据列表 */
  data: InstanceRelationApi_DiscoveryRequestBody_data_item[];

  /** 精确匹配（true: 只允许1:1关系，false: 允许1:n关系，默认true） */
  strict?: boolean;
}

export type InstanceRelationApi_DiscoveryResponseBody =
  InstanceRelationApi_DiscoveryResponseBody_item[];

/**
 * @description 实例关系发现
 * @endpoint POST /object_relation/:relationId/_autodiscovery/multi
 */
export const InstanceRelationApi_discovery = async (
  relationId: string | number,
  data: InstanceRelationApi_DiscoveryRequestBody,
  options?: HttpOptions
): Promise<InstanceRelationApi_DiscoveryResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.Discovery@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceRelationApi_DiscoveryResponseBody>
    >(
      `api/gateway/cmdb.instance_relation.Discovery/object_relation/${relationId}/_autodiscovery/multi`,
      data,
      options
    )
  ).data;

export interface InstanceRelationApi_DiscoveryRequestBody_match_item {
  /** 左侧实例匹配字段列表 */
  left_match?: string[];

  /** 右侧实例匹配字段列表 */
  right_match?: string[];
}

export interface InstanceRelationApi_DiscoveryRequestBody_data_item {
  /** 左侧匹配的实例数据 */
  left_instance?: Record<string, any>;

  /** 右侧匹配的实例数据 */
  right_instance?: Record<string, any>;
}

export interface InstanceRelationApi_DiscoveryResponseBody_item {
  /** 状态码（0：成功，非0：失败） */
  code: number;

  /** [废弃字段] 关联的实例关系id */
  match_relation_instance_ids?: string[];

  /** 左侧实例详情 */
  left_instance: Partial<ModelAutoDiscoveryInstance>;

  /** 右侧实例详情 */
  right_instance: Partial<ModelAutoDiscoveryInstance>;
}
