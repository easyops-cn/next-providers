import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetDetailRequestParams {
  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;
}

export type GetDetailResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 获取模型详情
 * @endpoint get /object/:objectId
 */
export const getDetail = async (
  objectId: string | number,
  params: GetDetailRequestParams,
  options?: HttpOptions
): Promise<GetDetailResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetDetail */ (
    await http.get<ResponseBodyWrapper<GetDetailResponseBody>>(
      `api/gateway/cmdb.cmdb_object.GetDetail/object/${objectId}`,
      { ...options, params }
    )
  ).data;
