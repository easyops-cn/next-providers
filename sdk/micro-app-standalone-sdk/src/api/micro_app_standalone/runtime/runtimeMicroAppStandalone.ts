import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStoryboardMenu } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RuntimeApi_RuntimeMicroAppStandaloneResponseBody {
  /** 注入菜单 */
  injectMenus?: (Partial<ModelStoryboardMenu> &
    RuntimeApi_RuntimeMicroAppStandaloneResponseBody_injectMenus_item)[];

  /** 用户配置 */
  userConfig?: Record<string, any>;
}

/**
 * @description 独立小产品Runtime接口
 * @endpoint GET /api/v1/micro_app_standalone/runtime/:appId
 */
export const RuntimeApi_runtimeMicroAppStandalone = async (
  appId: string | number,
  options?: HttpOptions
): Promise<RuntimeApi_RuntimeMicroAppStandaloneResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.runtime.RuntimeMicroAppStandalone@1.0.1 */ (
    await http.get<
      ResponseBodyWrapper<RuntimeApi_RuntimeMicroAppStandaloneResponseBody>
    >(
      `api/gateway/micro_app_standalone.runtime.RuntimeMicroAppStandalone/api/v1/micro_app_standalone/runtime/${appId}`,
      options
    )
  ).data;

export interface RuntimeApi_RuntimeMicroAppStandaloneResponseBody_injectMenus_item {
  /** 关联微应用 */
  app?: RuntimeApi_RuntimeMicroAppStandaloneResponseBody_injectMenus_item_app_item[];
}

export interface RuntimeApi_RuntimeMicroAppStandaloneResponseBody_injectMenus_item_app_item {
  /** 微应用Id */
  appId?: string;
}
