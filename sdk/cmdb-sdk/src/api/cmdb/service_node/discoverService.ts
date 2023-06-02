import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ServiceNodeApi_DiscoverServiceRequestBody {
  /** 导入主键 */
  pks: string[];

  /** 上报的服务 */
  services?: ServiceNodeApi_DiscoverServiceRequestBody_services_item[];
}

export interface ServiceNodeApi_DiscoverServiceResponseBody {
  /** data */
  data?: ServiceNodeApi_DiscoverServiceResponseBody_data_item[];
}

/**
 * @description 服务发现
 * @endpoint POST /api/v1/discover/service
 */
export const ServiceNodeApi_discoverService = async (
  data: ServiceNodeApi_DiscoverServiceRequestBody,
  options?: HttpOptions
): Promise<ServiceNodeApi_DiscoverServiceResponseBody> =>
  /**! @contract easyops.api.cmdb.service_node.DiscoverService@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ServiceNodeApi_DiscoverServiceResponseBody>
    >(
      "api/gateway/cmdb.service_node.DiscoverService/api/v1/discover/service",
      data,
      options
    )
  ).data;

export interface ServiceNodeApi_DiscoverServiceRequestBody_services_item {
  /** 服务名称 */
  name?: string;

  /** 服务类型 */
  type?: string;

  /** 服务分类 */
  category?: string;

  /** 工作空间id */
  workspaceId?: string;

  /** 服务ip */
  ip?: string;

  /** 服务端口 */
  port?: number;

  /** 服务实例id，用于更新 */
  instanceId?: string;

  /** 服务关联主机实例id */
  host?: string[];

  /** 服务入库的模型id */
  objectId?: string;
}

export interface ServiceNodeApi_DiscoverServiceResponseBody_data_item {
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
