import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface MicroAppContainerApi_UpdateDesktopItemPermissionRequestBody {
  /** 修改对象 */
  targets: MicroAppContainerApi_UpdateDesktopItemPermissionRequestBody_targets_item[];

  /** updateAthorizers, deleteAuthorizers, readAuthorizers, operateAuthorizers中的一个或多个 */
  fields: (
    | "updateAthorizers"
    | "deleteAuthorizers"
    | "readAuthorizers"
    | "operateAuthorizers"
  )[];

  /** 修改操作的类型(overwrite, append, pull)(在枚举之外的操作类型会报错) */
  method: "overwrite" | "append" | "pull";

  /** 用户,用户组列表 */
  list: string[];
}

export interface MicroAppContainerApi_UpdateDesktopItemPermissionResponseBody {
  /** 没有权限更新的实例列表 */
  noAuthorizedList?: Record<string, any>[];
}

/**
 * @description 批量修改菜单项白名单(支持不同类型)
 * @endpoint PUT /api/micro_app/v1/micro_app_container/desktop_item_permission
 */
export const MicroAppContainerApi_updateDesktopItemPermission = async (
  data: MicroAppContainerApi_UpdateDesktopItemPermissionRequestBody,
  options?: HttpOptions
): Promise<MicroAppContainerApi_UpdateDesktopItemPermissionResponseBody> =>
  /**! @contract easyops.api.micro_app.micro_app_container.UpdateDesktopItemPermission@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<MicroAppContainerApi_UpdateDesktopItemPermissionResponseBody>
    >(
      "api/gateway/micro_app.micro_app_container.UpdateDesktopItemPermission/api/micro_app/v1/micro_app_container/desktop_item_permission",
      data,
      options
    )
  ).data;

export interface MicroAppContainerApi_UpdateDesktopItemPermissionRequestBody_targets_item {
  /** 实例ID */
  instanceId?: string;

  /** 元素类型 */
  type?: "app" | "dir" | "custom";
}
