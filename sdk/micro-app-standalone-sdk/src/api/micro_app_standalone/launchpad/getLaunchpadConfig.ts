import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelLaunchpadDesktop,
  ModelLaunchpadStoryboard,
} from "../../../model/micro_app_standalone";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface LaunchpadApi_GetLaunchpadConfigResponseBody {
  /** 导航菜单列表 */
  desktops?: Partial<ModelLaunchpadDesktop>[];

  /** storyboards */
  storyboards?: Partial<ModelLaunchpadStoryboard>[];
}

/**
 * @description Launchpad 配置信息
 * @endpoint GET /api/v1/micro_app_standalone/launchpad_config
 */
export const LaunchpadApi_getLaunchpadConfig = async (
  options?: HttpOptions
): Promise<LaunchpadApi_GetLaunchpadConfigResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.launchpad.GetLaunchpadConfig@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<LaunchpadApi_GetLaunchpadConfigResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/launchpad_config",
      options
    )
  ).data;
