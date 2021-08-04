import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface GatewayApi_ListApiKeyRequestParams {
  /** 页码 */
  page: number;

  /** 页大小 */
  page_size: number;
}

export interface GatewayApi_ListApiKeyResponseItem {
  /** 用户名 */
  user: string;

  /** access_key */
  access_key: string;

  /** secret_key */
  secret_key: string;

  /** 是否可用 */
  state: "invalid" | "valid";

  /** org */
  org: number;

  /** 创建时间 */
  ctime: string;

  /** 更新时间戳 */
  ts: number;
}

export type GatewayApi_ListApiKeyResponseBody =
  ResponseListWrapper<GatewayApi_ListApiKeyResponseItem>;

/**
 * @description 获取用户ApiKey
 * @endpoint LIST /api/user_service/v1/apikey
 */
export const GatewayApi_listApiKey = async (
  params: GatewayApi_ListApiKeyRequestParams,
  options?: HttpOptions
): Promise<GatewayApi_ListApiKeyResponseBody> =>
  /**! @contract easyops.api.user_service.gateway.ListApiKey */ (
    await http.get<ResponseBodyWrapper<GatewayApi_ListApiKeyResponseBody>>(
      "api/gateway/user_service.gateway.ListApiKey/api/user_service/v1/apikey",
      { ...options, params }
    )
  ).data;
