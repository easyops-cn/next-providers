import { http, HttpOptions } from "@next-core/brick-http";
import { ModelBackendNode } from "../../../model/api_gateway";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomAuthConfigApi_CreateBackendNodeRequestBody {
  /** 节点 */
  node?: Partial<ModelBackendNode>;

  /** 关联的服务ID列表 */
  serviceInstanceIds?: string[];
}

export interface CustomAuthConfigApi_CreateBackendNodeResponseBody {
  /** 节点id */
  id?: string;
}

/**
 * @description 创建后端节点
 * @endpoint POST /api/v1/api_gateway/backend_node
 */
export const CustomAuthConfigApi_createBackendNode = async (
  data: CustomAuthConfigApi_CreateBackendNodeRequestBody,
  options?: HttpOptions
): Promise<CustomAuthConfigApi_CreateBackendNodeResponseBody> =>
  /**! @contract easyops.api.api_gateway.custom_auth_config.CreateBackendNode@1.4.0 */ (
    await http.post<
      ResponseBodyWrapper<CustomAuthConfigApi_CreateBackendNodeResponseBody>
    >("api/v1/api_gateway/backend_node", data, options)
  ).data;
