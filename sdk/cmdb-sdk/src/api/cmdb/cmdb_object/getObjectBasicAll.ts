import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelListObjectRequest,
  ModelObjectBasicInfo,
} from "../../../model/cmdb";

export type CmdbObjectApi_GetObjectBasicAllRequestParams =
  Partial<ModelListObjectRequest>;

export interface CmdbObjectApi_GetObjectBasicAllResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 模型列表 */
  data: Partial<ModelObjectBasicInfo>[];
}

/**
 * @description 获取所有模型基本信息
 * @endpoint GET /object_basic_all
 */
export const CmdbObjectApi_getObjectBasicAll = (
  params: CmdbObjectApi_GetObjectBasicAllRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_GetObjectBasicAllResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetObjectBasicAll@1.3.0 */ http.get<CmdbObjectApi_GetObjectBasicAllResponseBody>(
    "api/gateway/cmdb.cmdb_object.GetObjectBasicAll/object_basic_all",
    { ...options, params }
  );
