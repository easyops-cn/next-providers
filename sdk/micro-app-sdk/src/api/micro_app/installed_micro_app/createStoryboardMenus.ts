import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStoryboardMenu } from "../../../model/micro_app";

export interface InstalledMicroAppApi_CreateStoryboardMenusRequestBody {
  /** meta.menus */
  menus: Partial<ModelStoryboardMenu>[];

  /** micro_app id */
  appId: string;
}

/**
 * @description 创建storybord menu
 * @endpoint POST /api/micro_app/v1/installed_micro_app/storyboard-menus
 */
export const InstalledMicroAppApi_createStoryboardMenus = (
  data: InstalledMicroAppApi_CreateStoryboardMenusRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.CreateStoryboardMenus@1.2.0 */ http.post<void>(
    "api/gateway/micro_app.installed_micro_app.CreateStoryboardMenus/api/micro_app/v1/installed_micro_app/storyboard-menus",
    data,
    options
  );
