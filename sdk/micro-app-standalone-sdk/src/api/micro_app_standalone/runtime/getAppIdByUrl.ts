import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RuntimeApi_GetAppIdByUrlRequestBody {
  /** url */
  url?: string;
}

export interface RuntimeApi_GetAppIdByUrlResponseBody {
  /** appId */
  appId?: string;
}

/**
 * @description 通过url获取appId
 * @endpoint POST /api/v1/micro_app_standalone/get_app_id_by_url
 */
export const RuntimeApi_getAppIdByUrl = async (
  data: RuntimeApi_GetAppIdByUrlRequestBody,
  options?: HttpOptions
): Promise<RuntimeApi_GetAppIdByUrlResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.runtime.GetAppIdByUrl@1.0.0 */ (
    await http.post<ResponseBodyWrapper<RuntimeApi_GetAppIdByUrlResponseBody>>(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/get_app_id_by_url",
      data,
      options
    )
  ).data;
