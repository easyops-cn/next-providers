import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermission } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetPermissionsByAppIdRequestParams {
  /** 启用/禁用状态过滤, 空为不过滤 */
  status?: "enable" | "disable";
}

export interface GetPermissionsByAppIdResponseBody {
  /** 权限点列表 */
  permissionList?: Partial<ModelPermission>[];
}

/**
 * @description 获取小产品的所有权限列表
 * @endpoint GET /api/micro_app/v1/permission/:appId
 */
export const getPermissionsByAppId = async (
  appId: string | number,
  params: GetPermissionsByAppIdRequestParams,
  options?: HttpOptions
): Promise<GetPermissionsByAppIdResponseBody> =>
  /**! @contract easyops.api.micro_app.permission.GetPermissionsByAppId */ (
    await http.get<ResponseBodyWrapper<GetPermissionsByAppIdResponseBody>>(
      `api/gateway/micro_app.permission.GetPermissionsByAppId/api/micro_app/v1/permission/${appId}`,
      { ...options, params }
    )
  ).data;
