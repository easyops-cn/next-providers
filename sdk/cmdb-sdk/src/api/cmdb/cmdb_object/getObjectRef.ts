import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";

export interface GetObjectRefRequestParams {
  /** 关联模型id，多个用逗号分隔 */
  ref_object: string;
}

export interface GetObjectRefResponseBody {
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
export const getObjectRef = (
  params: GetObjectRefRequestParams,
  options?: HttpOptions
): Promise<GetObjectRefResponseBody> =>
  http.get<GetObjectRefResponseBody>(
    "api/gateway/cmdb.cmdb_object.GetObjectRef/object_ref",
    { ...options, params }
  );
