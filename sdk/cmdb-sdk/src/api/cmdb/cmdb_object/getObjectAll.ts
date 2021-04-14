import { http, HttpOptions } from "@next-core/brick-http";
import { ModelListObjectRequest, ModelCmdbObject } from "../../../model/cmdb";

export type GetObjectAllRequestParams = Partial<ModelListObjectRequest> &
  GetObjectAllRequestParams_2;

export interface GetObjectAllResponseBody {
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
 * @description 获取所有模型
 * @endpoint GET /object_all
 */
export const getObjectAll = (
  params: GetObjectAllRequestParams,
  options?: HttpOptions
): Promise<GetObjectAllResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetObjectAll */ http.get<GetObjectAllResponseBody>(
    "api/gateway/cmdb.cmdb_object.GetObjectAll/object_all",
    { ...options, params }
  );

export interface GetObjectAllRequestParams_2 {
  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;
}
