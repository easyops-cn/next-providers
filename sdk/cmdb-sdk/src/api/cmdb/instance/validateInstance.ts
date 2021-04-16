import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_ValidateInstanceRequestBody {
  /** 实例数据列表 */
  instances: Record<string, any>[];
}

export interface InstanceApi_ValidateInstanceResponseBody {
  /** 校验结果 */
  list?: InstanceApi_ValidateInstanceResponseBody_list_item[];
}

/**
 * @description 实例校验
 * @endpoint POST /object/:objectId/instance/validate
 */
export const InstanceApi_validateInstance = async (
  objectId: string | number,
  data: InstanceApi_ValidateInstanceRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_ValidateInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.ValidateInstance */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_ValidateInstanceResponseBody>
    >(
      `api/gateway/cmdb.instance.ValidateInstance/object/${objectId}/instance/validate`,
      data,
      options
    )
  ).data;

export interface InstanceApi_ValidateInstanceResponseBody_list_item {
  /** 状态码 */
  code?: number;

  /** 错误信息，空为合法 */
  error?: string;

  /** 实例数据 */
  data?: Record<string, any>;
}
