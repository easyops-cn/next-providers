import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelInstalledMicroApp,
  ModelMicroAppContainer,
} from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export type InstalledMicroAppApi_GetInstalledMicroAppResponseBody = ModelInstalledMicroApp &
  InstalledMicroAppApi_GetInstalledMicroAppResponseBody_2;

/**
 * @description 获取已安装小产品信息
 * @endpoint GET /api/micro_app/v1/installed_micro_app/:app_id
 */
export const InstalledMicroAppApi_getInstalledMicroApp = async (
  app_id: string | number,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_GetInstalledMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.GetInstalledMicroApp */ (
    await http.get<
      ResponseBodyWrapper<InstalledMicroAppApi_GetInstalledMicroAppResponseBody>
    >(
      `api/gateway/micro_app.installed_micro_app.GetInstalledMicroApp/api/micro_app/v1/installed_micro_app/${app_id}`,
      options
    )
  ).data;

export interface InstalledMicroAppApi_GetInstalledMicroAppResponseBody_2 {
  /** 小产品关联的桌面信息 */
  container?: Partial<ModelMicroAppContainer>;
}
