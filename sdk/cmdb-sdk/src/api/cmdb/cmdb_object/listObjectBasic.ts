import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelListObjectRequest,
  ModelObjectBasicInfo,
} from "../../../model/cmdb";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export type ListObjectBasicRequestParams = Partial<ModelListObjectRequest> &
  ListObjectBasicRequestParams_2;

export type ListObjectBasicResponseItem = Partial<ModelObjectBasicInfo>;

export type ListObjectBasicResponseBody = ResponseListWrapper<ListObjectBasicResponseItem>;

/**
 * @description 获取模型基本信息列表
 * @endpoint LIST /object_basic
 */
export const listObjectBasic = async (
  params: ListObjectBasicRequestParams,
  options?: HttpOptions
): Promise<ListObjectBasicResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListObjectBasicResponseBody>>(
      "api/gateway/cmdb.cmdb_object.ListObjectBasic/object_basic",
      { ...options, params }
    )
  ).data;

export interface ListObjectBasicRequestParams_2 {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}
