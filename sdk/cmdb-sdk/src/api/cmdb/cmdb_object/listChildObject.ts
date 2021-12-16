import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";

export interface CmdbObjectApi_ListChildObjectRequestParams {
  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;
}

export interface CmdbObjectApi_ListChildObjectResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 模型列表 */
  data: Partial<ModelCmdbObject>[];
}

/**
 * @description 获取某个模型所有关联子模型
 * @endpoint get /object/:objectId/child
 */
export const CmdbObjectApi_listChildObject = (
  objectId: string | number,
  params: CmdbObjectApi_ListChildObjectRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_ListChildObjectResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ListChildObject@1.1.0 */ http.get<CmdbObjectApi_ListChildObjectResponseBody>(
    `api/gateway/cmdb.cmdb_object.ListChildObject/object/${objectId}/child`,
    { ...options, params }
  );
