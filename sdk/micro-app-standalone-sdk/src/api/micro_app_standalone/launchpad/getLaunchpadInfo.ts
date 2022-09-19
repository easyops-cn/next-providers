import { http, HttpOptions } from "@next-core/brick-http";
import { ModelSettings } from "../../../model/api_gateway";
import { ModelInstalledMicroAppBootstrap } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface LaunchpadApi_GetLaunchpadInfoResponseBody {
  /** 配置 */
  settings?: Partial<ModelSettings>;

  /** 桌面列表 */
  desktops?: LaunchpadApi_GetLaunchpadInfoResponseBody_desktops_item[];

  /** 系统地图 */
  siteSort?: LaunchpadApi_GetLaunchpadInfoResponseBody_siteSort_item[];
}

/**
 * @description Launchpad信息
 * @endpoint GET /api/v1/micro_app_standalone/launchpad_info
 */
export const LaunchpadApi_getLaunchpadInfo = async (
  options?: HttpOptions
): Promise<LaunchpadApi_GetLaunchpadInfoResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.launchpad.GetLaunchpadInfo@1.0.1 */ (
    await http.get<
      ResponseBodyWrapper<LaunchpadApi_GetLaunchpadInfoResponseBody>
    >(
      "api/gateway/micro_app_standalone.launchpad.GetLaunchpadInfo/api/v1/micro_app_standalone/launchpad_info",
      options
    )
  ).data;

export interface LaunchpadApi_GetLaunchpadInfoResponseBody_desktops_item {
  /** 桌面名称 */
  name?: string;

  /** 排序 */
  order?: number;

  /** storyboards */
  storyboards?: LaunchpadApi_GetLaunchpadInfoResponseBody_desktops_item_storyboards_item[];
}

export interface LaunchpadApi_GetLaunchpadInfoResponseBody_siteSort_item {
  /** 分类ID */
  id?: string;

  /** 分类名称 */
  name?: string;

  /** 分类顺序 */
  order?: number;

  /** 微应用列表 */
  apps?: LaunchpadApi_GetLaunchpadInfoResponseBody_siteSort_item_apps_item[];
}

export interface LaunchpadApi_GetLaunchpadInfoResponseBody_desktops_item_storyboards_item {
  /** 小产品基本信息 */
  app?: Partial<ModelInstalledMicroAppBootstrap>;
}

export interface LaunchpadApi_GetLaunchpadInfoResponseBody_siteSort_item_apps_item {
  /** 微应用id */
  id?: string;

  /** 微应用排序 */
  sort?: number;
}
