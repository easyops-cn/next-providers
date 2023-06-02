import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroappapiorchestration } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrchestrationApi_GetMicroAppApisByAppIdResponseBody {
  /** api编排列表 */
  apiList?: Partial<ModelMicroappapiorchestration>[];
}

/**
 * @description 通过appId获取api编排
 * @endpoint GET /api/v1/apis/:appId
 */
export const OrchestrationApi_getMicroAppApisByAppId = async (
  appId: string | number,
  options?: HttpOptions
): Promise<OrchestrationApi_GetMicroAppApisByAppIdResponseBody> =>
  /**! @contract easyops.api.micro_app.orchestration.GetMicroAppApisByAppId@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OrchestrationApi_GetMicroAppApisByAppIdResponseBody>
    >(
      `api/gateway/micro_app.orchestration.GetMicroAppApisByAppId/api/v1/apis/${appId}`,
      options
    )
  ).data;
