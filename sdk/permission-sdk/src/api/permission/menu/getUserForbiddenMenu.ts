import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetUserForbiddenMenuResponseBody {
  /** 不可见菜单列表 */
  forbidden_menu?: string[];
}

/**
 * @description 获取用户的不可访问菜单列表
 * @endpoint GET /api/v1/permission/menu/forbidden/:username
 */
export const getUserForbiddenMenu = async (
  username: string | number,
  options?: HttpOptions
): Promise<GetUserForbiddenMenuResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetUserForbiddenMenuResponseBody>>(
      `api/gateway/permission.menu.GetUserForbiddenMenu/api/v1/permission/menu/forbidden/${username}`,
      options
    )
  ).data;
