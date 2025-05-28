import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RuntimeApi_DeleteMenuItemRequestBody {
  /** 要隐藏或者删除的菜单项的instanceId */
  instanceId?: string;

  /** 是否真的删除菜单，为false时仅隐藏菜单项而不删除 */
  delete?: boolean;
}

export interface RuntimeApi_DeleteMenuItemResponseBody {
  /** 是否成功 */
  success?: boolean;
}

/**
 * @description 删除或隐藏菜单项（分组）
 * @endpoint POST /api/v1/micro_app_standalone/menu/delete_menu_item
 */
export const RuntimeApi_deleteMenuItem = async (
  data: RuntimeApi_DeleteMenuItemRequestBody,
  options?: HttpOptions
): Promise<RuntimeApi_DeleteMenuItemResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.runtime.DeleteMenuItem@1.0.0 */ (
    await http.post<ResponseBodyWrapper<RuntimeApi_DeleteMenuItemResponseBody>>(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/menu/delete_menu_item",
      data,
      options
    )
  ).data;
