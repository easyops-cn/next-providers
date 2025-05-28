import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLaunchpadDesktop } from "../../../model/micro_app_standalone";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OpenPlatformApi_ListMicroAppLaunchpadCategoryResponseBody {
  /** 微应用Launchpad分类 */
  launchpad?: Partial<ModelLaunchpadDesktop>[];
}

/**
 * @description 微应用Launchpad分类(全量)
 * @endpoint GET /api/v1/open_platform/micro_app_launchpad_category
 */
export const OpenPlatformApi_listMicroAppLaunchpadCategory = async (
  options?: HttpOptions
): Promise<OpenPlatformApi_ListMicroAppLaunchpadCategoryResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.ListMicroAppLaunchpadCategory@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OpenPlatformApi_ListMicroAppLaunchpadCategoryResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/micro_app_launchpad_category",
      options
    )
  ).data;
