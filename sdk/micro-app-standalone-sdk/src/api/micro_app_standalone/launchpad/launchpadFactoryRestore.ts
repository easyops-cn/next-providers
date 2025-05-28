import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLaunchpadDesktop } from "../../../model/micro_app_standalone";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface LaunchpadApi_LaunchpadFactoryRestoreResponseBody {
  /** 导航菜单列表 */
  desktops?: Partial<ModelLaunchpadDesktop>[];
}

/**
 * @description Launchpad 恢复出厂设置
 * @endpoint POST /api/v1/micro_app_standalone/launchpad_factory_restore
 */
export const LaunchpadApi_launchpadFactoryRestore = async (
  options?: HttpOptions
): Promise<LaunchpadApi_LaunchpadFactoryRestoreResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.launchpad.LaunchpadFactoryRestore@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<LaunchpadApi_LaunchpadFactoryRestoreResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/launchpad_factory_restore",
      undefined,
      options
    )
  ).data;
