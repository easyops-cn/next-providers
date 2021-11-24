import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelInstalledMicroApp,
  ModelMicroAppContainer,
} from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export type InstalledMicroAppApi_CreateRequestBody =
  Partial<ModelInstalledMicroApp> &
    ModelInstalledMicroApp_partial &
    InstalledMicroAppApi_CreateRequestBody_2;

export type InstalledMicroAppApi_CreateResponseBody = ModelInstalledMicroApp &
  InstalledMicroAppApi_CreateResponseBody_2;

/**
 * @description 创建小产品
 * @endpoint POST /api/micro_app/v1/installed_micro_app
 */
export const InstalledMicroAppApi_create = async (
  data: InstalledMicroAppApi_CreateRequestBody,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_CreateResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.Create@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstalledMicroAppApi_CreateResponseBody>
    >(
      "api/gateway/micro_app.installed_micro_app.Create/api/micro_app/v1/installed_micro_app",
      data,
      options
    )
  ).data;

export interface ModelInstalledMicroApp_partial {
  /** 小产品id */
  appId: string;
}

export interface InstalledMicroAppApi_CreateRequestBody_2 {
  /** 小产品所属桌面 */
  container?: InstalledMicroAppApi_CreateRequestBody_container;
}

export interface InstalledMicroAppApi_CreateResponseBody_2 {
  /** 小产品关联的桌面信息 */
  container?: Partial<ModelMicroAppContainer>;
}

export interface InstalledMicroAppApi_CreateRequestBody_container {
  /** 桌面的id */
  id?: string;
}
