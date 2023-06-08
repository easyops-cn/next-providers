import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelListObjectRequest,
  ModelObjectBasicInfo,
} from "../../../model/cmdb";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export type CmdbObjectApi_ListObjectBasicRequestParams =
  Partial<ModelListObjectRequest> &
    CmdbObjectApi_ListObjectBasicRequestParams_2;

export type CmdbObjectApi_ListObjectBasicResponseItem =
  Partial<ModelObjectBasicInfo>;

export type CmdbObjectApi_ListObjectBasicResponseBody =
  ResponseListWrapper<CmdbObjectApi_ListObjectBasicResponseItem>;

/**
 * @description 透传cmdb接口-获取模型基本信息列表
 * @endpoint LIST /api/v1/next_builder/:instanceId/object_basic
 */
export const CmdbObjectApi_listObjectBasic = async (
  instanceId: string | number,
  params: CmdbObjectApi_ListObjectBasicRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_ListObjectBasicResponseBody> =>
  /**! @contract easyops.api.next_builder.cmdb_object.ListObjectBasic@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<CmdbObjectApi_ListObjectBasicResponseBody>
    >(
      `api/gateway/next_builder.cmdb_object.ListObjectBasic/api/v1/next_builder/${instanceId}/object_basic`,
      { ...options, params }
    )
  ).data;

export interface CmdbObjectApi_ListObjectBasicRequestParams_2 {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}
