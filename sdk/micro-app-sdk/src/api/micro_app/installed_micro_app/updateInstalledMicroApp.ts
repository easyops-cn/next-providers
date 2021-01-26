import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelInstalledMicroApp,
  ModelMicroAppContainer,
} from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 小产品id */
export type UpdateInstalledMicroAppRequestBody = Partial<ModelInstalledMicroApp> &
  UpdateInstalledMicroAppRequestBody_2;

export type UpdateInstalledMicroAppResponseBody = ModelInstalledMicroApp &
  UpdateInstalledMicroAppResponseBody_2;

/**
 * @description 更新小产品信息
 * @endpoint PUT /api/micro_app/v1/installed_micro_app/:app_id
 */
export const updateInstalledMicroApp = async (
  app_id: string | number,
  data: UpdateInstalledMicroAppRequestBody,
  options?: HttpOptions
): Promise<UpdateInstalledMicroAppResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<UpdateInstalledMicroAppResponseBody>>(
      `api/gateway/micro_app.installed_micro_app.UpdateInstalledMicroApp/api/micro_app/v1/installed_micro_app/${app_id}`,
      data,
      options
    )
  ).data;

export interface UpdateInstalledMicroAppRequestBody_2 {
  /** 小产品所属桌面 */
  container?: UpdateInstalledMicroAppRequestBody_container;
}

export interface UpdateInstalledMicroAppResponseBody_2 {
  /** 小产品关联的桌面信息 */
  container?: Partial<ModelMicroAppContainer>;
}

export interface UpdateInstalledMicroAppRequestBody_container {
  /** 桌面的id */
  id?: string;
}
