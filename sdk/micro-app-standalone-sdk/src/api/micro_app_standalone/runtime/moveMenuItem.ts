import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RuntimeApi_MoveMenuItemRequestBody {
  /** 要移动到目标下面的instanceId，支持menu和menuItem */
  target?: string;

  /** 被移动的菜单项的instanceId */
  instanceId?: string;
}

export interface RuntimeApi_MoveMenuItemResponseBody {
  /** 被移动的菜单项的instanceId */
  instanceId?: string;
}

/**
 * @description 移动菜单项（分组）
 * @endpoint POST /api/v1/micro_app_standalone/menu/move_menu_item
 */
export const RuntimeApi_moveMenuItem = async (
  data: RuntimeApi_MoveMenuItemRequestBody,
  options?: HttpOptions
): Promise<RuntimeApi_MoveMenuItemResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.runtime.MoveMenuItem@1.0.0 */ (
    await http.post<ResponseBodyWrapper<RuntimeApi_MoveMenuItemResponseBody>>(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/menu/move_menu_item",
      data,
      options
    )
  ).data;
