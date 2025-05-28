import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStandaloneMenuItem } from "../../../model/micro_app_standalone";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RuntimeApi_UpdateMenuItemRequestBody {
  /** 被修改的菜单项的instanceId */
  instanceId?: string;

  /** 修改的菜单项的属性列表 */
  fields?: string[];

  /** 菜单的数据 */
  item?: Partial<ModelStandaloneMenuItem>;
}

export interface RuntimeApi_UpdateMenuItemResponseBody {
  /** 被修改的菜单项的instanceId */
  instanceId?: string;
}

/**
 * @description 修改菜单项（分组）
 * @endpoint POST /api/v1/micro_app_standalone/menu/update_menu_item
 */
export const RuntimeApi_updateMenuItem = async (
  data: RuntimeApi_UpdateMenuItemRequestBody,
  options?: HttpOptions
): Promise<RuntimeApi_UpdateMenuItemResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.runtime.UpdateMenuItem@1.0.0 */ (
    await http.post<ResponseBodyWrapper<RuntimeApi_UpdateMenuItemResponseBody>>(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/menu/update_menu_item",
      data,
      options
    )
  ).data;
