import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionApi_BuildInstanceAuthorizerQueryRequestParams {
  /** 权限 */
  permission: string;

  /** 模型id */
  objectId: string;

  /** 用户 */
  user: string;
}

export interface PermissionApi_BuildInstanceAuthorizerQueryResponseBody {
  /** 过滤条件 */
  query?: Record<string, any>;
}

/**
 * @description 构造实例白名单查询条件
 * @endpoint GET /authorizers/query/instance
 */
export const PermissionApi_buildInstanceAuthorizerQuery = async (
  params: PermissionApi_BuildInstanceAuthorizerQueryRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_BuildInstanceAuthorizerQueryResponseBody> =>
  /**! @contract easyops.api.cmdb.permission.BuildInstanceAuthorizerQuery@1.1.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_BuildInstanceAuthorizerQueryResponseBody>
    >(
      "api/gateway/cmdb.permission.BuildInstanceAuthorizerQuery/authorizers/query/instance",
      { ...options, params }
    )
  ).data;
