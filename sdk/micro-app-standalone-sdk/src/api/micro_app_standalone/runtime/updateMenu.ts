import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStandaloneMenu } from "../../../model/micro_app_standalone";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RuntimeApi_UpdateMenuRequestBody {
  /** 被修改的菜单的instanceId */
  instanceId?: string;

  /** 修改的菜单的属性列表 */
  fields?: string[];

  /** 菜单的数据 */
  menu?: Partial<ModelStandaloneMenu>;
}

export interface RuntimeApi_UpdateMenuResponseBody {
  /** 被修改的菜单的instanceId */
  instanceId?: string;
}

/**
 * @description 修改菜单
 * @endpoint POST /api/v1/micro_app_standalone/menu/update_menu
 */
export const RuntimeApi_updateMenu = async (
  data: RuntimeApi_UpdateMenuRequestBody,
  options?: HttpOptions
): Promise<RuntimeApi_UpdateMenuResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.runtime.UpdateMenu@1.0.0 */ (
    await http.post<ResponseBodyWrapper<RuntimeApi_UpdateMenuResponseBody>>(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/menu/update_menu",
      data,
      options
    )
  ).data;
