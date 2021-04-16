import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 创建实例 */
export type InstanceApi_CreateInstanceRequestBody = Record<string, any>;

export type InstanceApi_CreateInstanceResponseBody = Record<string, any>;

/**
 * @description 创建实例 (body为实例信息,字段限制参考模型定义,支持关系创建)
 * @endpoint POST /v2/object/:objectId/instance
 */
export const InstanceApi_createInstance = async (
  objectId: string | number,
  data: InstanceApi_CreateInstanceRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_CreateInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.CreateInstance */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_CreateInstanceResponseBody>
    >(
      `api/gateway/cmdb.instance.CreateInstance/v2/object/${objectId}/instance`,
      data,
      options
    )
  ).data;
