import { http, HttpOptions } from "@next-core/brick-http";
import { ModelBackendNode } from "../../../model/api_gateway";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomAuthConfigApi_UpdateBackendNodeRequestBody {
  /** 节点 */
  node?: Partial<ModelBackendNode>;

  /** 解绑或者绑定服务 */
  serviceOperation?: CustomAuthConfigApi_UpdateBackendNodeRequestBody_serviceOperation_item[];
}

export interface CustomAuthConfigApi_UpdateBackendNodeResponseBody {
  /** 节点id */
  id?: string;
}

/**
 * @description 更新后端节点
 * @endpoint PUT /api/v1/api_gateway/backend_node
 */
export const CustomAuthConfigApi_updateBackendNode = async (
  data: CustomAuthConfigApi_UpdateBackendNodeRequestBody,
  options?: HttpOptions
): Promise<CustomAuthConfigApi_UpdateBackendNodeResponseBody> =>
  /**! @contract easyops.api.api_gateway.custom_auth_config.UpdateBackendNode@1.4.0 */ (
    await http.put<
      ResponseBodyWrapper<CustomAuthConfigApi_UpdateBackendNodeResponseBody>
    >("api/v1/api_gateway/backend_node", data, options)
  ).data;

export interface CustomAuthConfigApi_UpdateBackendNodeRequestBody_serviceOperation_item {
  /** 绑定/解绑 */
  operate?: "append" | "remove";

  /** 服务实例id */
  instanceId?: string;
}
