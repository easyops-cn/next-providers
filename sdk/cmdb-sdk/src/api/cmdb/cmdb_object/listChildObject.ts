import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";

export interface ListChildObjectRequestParams {
  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;
}

export interface ListChildObjectResponseBody {
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
export const listChildObject = (
  objectId: string | number,
  params: ListChildObjectRequestParams,
  options?: HttpOptions
): Promise<ListChildObjectResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ListChildObject */ http.get<ListChildObjectResponseBody>(
    `api/gateway/cmdb.cmdb_object.ListChildObject/object/${objectId}/child`,
    { ...options, params }
  );
