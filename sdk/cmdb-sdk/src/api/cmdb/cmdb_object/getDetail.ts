import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_GetDetailRequestParams {
  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;
}

export type CmdbObjectApi_GetDetailResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 获取模型详情
 * @endpoint get /object/:objectId
 */
export const CmdbObjectApi_getDetail = async (
  objectId: string | number,
  params: CmdbObjectApi_GetDetailRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_GetDetailResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetDetail */ (
    await http.get<ResponseBodyWrapper<CmdbObjectApi_GetDetailResponseBody>>(
      `api/gateway/cmdb.cmdb_object.GetDetail/object/${objectId}`,
      { ...options, params }
    )
  ).data;
