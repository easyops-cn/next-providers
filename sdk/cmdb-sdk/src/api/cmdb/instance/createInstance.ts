import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 创建实例 */
export type CreateInstanceRequestBody = Record<string, any>;

export type CreateInstanceResponseBody = Record<string, any>;

/**
 * @description 创建实例 (body为实例信息,字段限制参考模型定义,支持关系创建)
 * @endpoint POST /v2/object/:objectId/instance
 */
export const createInstance = async (
  objectId: string | number,
  data: CreateInstanceRequestBody,
  options?: HttpOptions
): Promise<CreateInstanceResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<CreateInstanceResponseBody>>(
      `api/gateway/cmdb.instance.CreateInstance/v2/object/${objectId}/instance`,
      data,
      options
    )
  ).data;
