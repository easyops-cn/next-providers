import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ValidateInstanceRequestBody {
  /** 实例数据列表 */
  instances: Record<string, any>[];
}

export interface ValidateInstanceResponseBody {
  /** 校验结果 */
  list?: ValidateInstanceResponseBody_list_item[];
}

/**
 * @description 实例校验
 * @endpoint POST /object/:objectId/instance/validate
 */
export const validateInstance = async (
  objectId: string | number,
  data: ValidateInstanceRequestBody,
  options?: HttpOptions
): Promise<ValidateInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.ValidateInstance */ (
    await http.post<ResponseBodyWrapper<ValidateInstanceResponseBody>>(
      `api/gateway/cmdb.instance.ValidateInstance/object/${objectId}/instance/validate`,
      data,
      options
    )
  ).data;

export interface ValidateInstanceResponseBody_list_item {
  /** 状态码 */
  code?: number;

  /** 错误信息，空为合法 */
  error?: string;

  /** 实例数据 */
  data?: Record<string, any>;
}
