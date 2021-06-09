import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermissionMenu } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type MenuApi_GetPermissionMenuDetailResponseBody =
  Partial<ModelPermissionMenu>;

/**
 * @description 获取菜单详情
 * @endpoint GET /api/v1/permission/menu/:menu_id
 */
export const MenuApi_getPermissionMenuDetail = async (
  menu_id: string | number,
  options?: HttpOptions
): Promise<MenuApi_GetPermissionMenuDetailResponseBody> =>
  /**! @contract easyops.api.permission.menu.GetPermissionMenuDetail */ (
    await http.get<
      ResponseBodyWrapper<MenuApi_GetPermissionMenuDetailResponseBody>
    >(
      `api/gateway/permission.menu.GetPermissionMenuDetail/api/v1/permission/menu/${menu_id}`,
      options
    )
  ).data;
