import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionApi_GetMicroAppListResponseBody {
  /** 已安装小产品 */
  installedMicroAppList?: PermissionApi_GetMicroAppListResponseBody_installedMicroAppList_item[];
}

/**
 * @description 获取所有拥有权限的小产品
 * @endpoint GET /api/micro_app/v1/permission
 */
export const PermissionApi_getMicroAppList = async (
  options?: HttpOptions
): Promise<PermissionApi_GetMicroAppListResponseBody> =>
  /**! @contract easyops.api.micro_app.permission.GetMicroAppList@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_GetMicroAppListResponseBody>
    >(
      "api/gateway/micro_app.permission.GetMicroAppList/api/micro_app/v1/permission",
      options
    )
  ).data;

export interface PermissionApi_GetMicroAppListResponseBody_installedMicroAppList_item {
  /** 小产品名称 */
  name?: string;

  /** 小产品id */
  appId?: string;
}
