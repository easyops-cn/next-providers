import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelInstalledMicroApp,
  ModelMicroAppContainer,
} from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 小产品id */
export type InstalledMicroAppApi_UpdateInstalledMicroAppRequestBody = Partial<ModelInstalledMicroApp> &
  InstalledMicroAppApi_UpdateInstalledMicroAppRequestBody_2;

export type InstalledMicroAppApi_UpdateInstalledMicroAppResponseBody = ModelInstalledMicroApp &
  InstalledMicroAppApi_UpdateInstalledMicroAppResponseBody_2;

/**
 * @description 更新小产品信息
 * @endpoint PUT /api/micro_app/v1/installed_micro_app/:app_id
 */
export const InstalledMicroAppApi_updateInstalledMicroApp = async (
  app_id: string | number,
  data: InstalledMicroAppApi_UpdateInstalledMicroAppRequestBody,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_UpdateInstalledMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UpdateInstalledMicroApp */ (
    await http.put<
      ResponseBodyWrapper<InstalledMicroAppApi_UpdateInstalledMicroAppResponseBody>
    >(
      `api/gateway/micro_app.installed_micro_app.UpdateInstalledMicroApp/api/micro_app/v1/installed_micro_app/${app_id}`,
      data,
      options
    )
  ).data;

export interface InstalledMicroAppApi_UpdateInstalledMicroAppRequestBody_2 {
  /** 小产品所属桌面 */
  container?: InstalledMicroAppApi_UpdateInstalledMicroAppRequestBody_container;
}

export interface InstalledMicroAppApi_UpdateInstalledMicroAppResponseBody_2 {
  /** 小产品关联的桌面信息 */
  container?: Partial<ModelMicroAppContainer>;
}

export interface InstalledMicroAppApi_UpdateInstalledMicroAppRequestBody_container {
  /** 桌面的id */
  id?: string;
}
