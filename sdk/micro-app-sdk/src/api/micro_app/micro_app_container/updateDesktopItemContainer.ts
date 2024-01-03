import { http, HttpOptions } from "@next-core/brick-http";

export interface MicroAppContainerApi_UpdateDesktopItemContainerRequestBody {
  /** 修改对象 */
  targets?: MicroAppContainerApi_UpdateDesktopItemContainerRequestBody_targets_item[];

  /** 新桌面容器实例ID(为空表示移出当前容器) */
  containerInstanceId?: string;
}

/**
 * @description 批量修改菜单项所在容器(导航菜单/分类菜单)
 * @endpoint PUT /api/micro_app/v1/micro_app_container/desktop_item_container
 */
export const MicroAppContainerApi_updateDesktopItemContainer = (
  data: MicroAppContainerApi_UpdateDesktopItemContainerRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.micro_app_container.UpdateDesktopItemContainer@1.0.0 */ http.put<void>(
    "api/gateway/micro_app.micro_app_container.UpdateDesktopItemContainer/api/micro_app/v1/micro_app_container/desktop_item_container",
    data,
    options
  );

export interface MicroAppContainerApi_UpdateDesktopItemContainerRequestBody_targets_item {
  /** 实例ID */
  instanceId?: string;

  /** 元素类型 */
  type?: "app" | "dir" | "custom";
}
