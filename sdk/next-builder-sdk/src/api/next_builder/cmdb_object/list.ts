import { http, HttpOptions } from "@next-core/brick-http";
import { ModelListObjectRequest, ModelCmdbObject } from "../../../model/cmdb";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export type CmdbObjectApi_ListRequestParams = Partial<ModelListObjectRequest> &
  CmdbObjectApi_ListRequestParams_2;

export type CmdbObjectApi_ListResponseItem = Partial<ModelCmdbObject>;

export type CmdbObjectApi_ListResponseBody =
  ResponseListWrapper<CmdbObjectApi_ListResponseItem>;

/**
 * @description 透传cmdb接口-获取模型列表
 * @endpoint LIST /api/v1/next_builder/:instanceId/object
 */
export const CmdbObjectApi_list = async (
  instanceId: string | number,
  params: CmdbObjectApi_ListRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_ListResponseBody> =>
  /**! @contract easyops.api.next_builder.cmdb_object.List@1.0.0 */ (
    await http.get<ResponseBodyWrapper<CmdbObjectApi_ListResponseBody>>(
      `api/gateway/next_builder.cmdb_object.List/api/v1/next_builder/${instanceId}/object`,
      { ...options, params }
    )
  ).data;

export interface CmdbObjectApi_ListRequestParams_2 {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;
}
