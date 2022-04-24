import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ServiceNodeApi_DiscoverServiceNodeRequestBody {
  /** 上报的服务节点 */
  nodes: ServiceNodeApi_DiscoverServiceNodeRequestBody_nodes_item[];
}

export interface ServiceNodeApi_DiscoverServiceNodeResponseBody {
  /** data */
  data?: ServiceNodeApi_DiscoverServiceNodeResponseBody_data_item[];
}

/**
 * @description 服务节点发现(根据匹配规则识别所属服务)
 * @endpoint POST /api/v1/discover/service_node
 */
export const ServiceNodeApi_discoverServiceNode = async (
  data: ServiceNodeApi_DiscoverServiceNodeRequestBody,
  options?: HttpOptions
): Promise<ServiceNodeApi_DiscoverServiceNodeResponseBody> =>
  /**! @contract easyops.api.cmdb.service_node.DiscoverServiceNode@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ServiceNodeApi_DiscoverServiceNodeResponseBody>
    >(
      "api/gateway/cmdb.service_node.DiscoverServiceNode/api/v1/discover/service_node",
      data,
      options
    )
  ).data;

export interface ServiceNodeApi_DiscoverServiceNodeRequestBody_nodes_item {
  /** 筛选器 */
  filter?: Record<string, any>;

  /** 更新数据 */
  update?: Record<string, any>;
}

export interface ServiceNodeApi_DiscoverServiceNodeResponseBody_data_item {
  /** 实例Id */
  instanceId?: string;

  /** 录入的模型Id */
  objectId?: string;

  /** 状态码 */
  code?: number;

  /** 错误信息 */
  message?: string;

  /** 实例数据 */
  data?: Record<string, any>;
}
