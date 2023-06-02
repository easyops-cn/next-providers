import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStoryboardMenu } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_GetMenusInfoRequestParams {
  /** 菜单所在模型(独立打包和非独立打包两个菜单模型) */
  menuObjectId?: string;
}

export interface InstalledMicroAppApi_GetMenusInfoResponseBody {
  /** menus info */
  menus?: (Partial<ModelStoryboardMenu> &
    InstalledMicroAppApi_GetMenusInfoResponseBody_menus_item)[];
}

/**
 * @description 获取菜单信息
 * @endpoint GET /api/v1/micro-app/menus/:menuId
 */
export const InstalledMicroAppApi_getMenusInfo = async (
  menuId: string | number,
  params: InstalledMicroAppApi_GetMenusInfoRequestParams,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_GetMenusInfoResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.GetMenusInfo@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstalledMicroAppApi_GetMenusInfoResponseBody>
    >(
      `api/gateway/micro_app.installed_micro_app.GetMenusInfo/api/v1/micro-app/menus/${menuId}`,
      { ...options, params }
    )
  ).data;

export interface InstalledMicroAppApi_GetMenusInfoResponseBody_menus_item {
  /** 菜单关联的app信息 */
  app?: InstalledMicroAppApi_GetMenusInfoResponseBody_menus_item_app_item[];
}

export interface InstalledMicroAppApi_GetMenusInfoResponseBody_menus_item_app_item {
  /** appId */
  appId?: string;

  /** instanceId */
  instanceId?: string;
}
