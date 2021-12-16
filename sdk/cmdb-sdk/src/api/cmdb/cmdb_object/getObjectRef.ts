import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";

export interface CmdbObjectApi_GetObjectRefRequestParams {
  /** 关联模型id，多个用逗号分隔 */
  ref_object: string;
}

export interface CmdbObjectApi_GetObjectRefResponseBody {
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
 * @description 查出与指定模型有直接关联的模型
 * @endpoint GET /object_ref
 */
export const CmdbObjectApi_getObjectRef = (
  params: CmdbObjectApi_GetObjectRefRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_GetObjectRefResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetObjectRef@1.1.0 */ http.get<CmdbObjectApi_GetObjectRefResponseBody>(
    "api/gateway/cmdb.cmdb_object.GetObjectRef/object_ref",
    { ...options, params }
  );
