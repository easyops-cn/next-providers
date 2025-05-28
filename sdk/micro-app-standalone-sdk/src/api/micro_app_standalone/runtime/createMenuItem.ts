import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStandaloneMenuItem } from "../../../model/micro_app_standalone";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RuntimeApi_CreateMenuItemRequestBody {
  /** 父菜单或者父菜单项的instanceId */
  parent_instanceId?: string;

  /** 菜单的数据 */
  item?: Partial<ModelStandaloneMenuItem>;
}

export interface RuntimeApi_CreateMenuItemResponseBody {
  /** 新建的菜单项的instanceId */
  instanceId?: string;
}

/**
 * @description 创建菜单项（分组）
 * @endpoint POST /api/v1/micro_app_standalone/menu/create_menu_item
 */
export const RuntimeApi_createMenuItem = async (
  data: RuntimeApi_CreateMenuItemRequestBody,
  options?: HttpOptions
): Promise<RuntimeApi_CreateMenuItemResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.runtime.CreateMenuItem@1.0.0 */ (
    await http.post<ResponseBodyWrapper<RuntimeApi_CreateMenuItemResponseBody>>(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/menu/create_menu_item",
      data,
      options
    )
  ).data;
