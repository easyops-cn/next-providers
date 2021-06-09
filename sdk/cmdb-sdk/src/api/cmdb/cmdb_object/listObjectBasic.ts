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
 * @description 获取模型基本信息列表
 * @endpoint LIST /object_basic
 */
export const CmdbObjectApi_listObjectBasic = async (
  params: CmdbObjectApi_ListObjectBasicRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_ListObjectBasicResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ListObjectBasic */ (
    await http.get<
      ResponseBodyWrapper<CmdbObjectApi_ListObjectBasicResponseBody>
    >("api/gateway/cmdb.cmdb_object.ListObjectBasic/object_basic", {
      ...options,
      params,
    })
  ).data;

export interface CmdbObjectApi_ListObjectBasicRequestParams_2 {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}
