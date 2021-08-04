import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface ApikeyApi_ListApiKeyRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 按用户名模糊搜索 */
  q?: string;
}

export interface ApikeyApi_ListApiKeyResponseItem {
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

export type ApikeyApi_ListApiKeyResponseBody =
  ResponseListWrapper<ApikeyApi_ListApiKeyResponseItem>;

/**
 * @description 获取用户ApiKey[内部]
 * @endpoint LIST /api/v1/apikey
 */
export const ApikeyApi_listApiKey = async (
  params: ApikeyApi_ListApiKeyRequestParams,
  options?: HttpOptions
): Promise<ApikeyApi_ListApiKeyResponseBody> =>
  /**! @contract easyops.api.user_service.apikey.ListApiKey */ (
    await http.get<ResponseBodyWrapper<ApikeyApi_ListApiKeyResponseBody>>(
      "api/gateway/user_service.apikey.ListApiKey/api/v1/apikey",
      { ...options, params }
    )
  ).data;
