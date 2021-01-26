import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelInstalledMicroApp,
  ModelMicroAppContainer,
} from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export type CreateRequestBody = Partial<ModelInstalledMicroApp> &
  ModelInstalledMicroApp_partial &
  CreateRequestBody_2;

export type CreateResponseBody = ModelInstalledMicroApp & CreateResponseBody_2;

/**
 * @description 创建小产品
 * @endpoint POST /api/micro_app/v1/installed_micro_app
 */
export const create = async (
  data: CreateRequestBody,
  options?: HttpOptions
): Promise<CreateResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<CreateResponseBody>>(
      "api/gateway/micro_app.installed_micro_app.Create/api/micro_app/v1/installed_micro_app",
      data,
      options
    )
  ).data;

export interface ModelInstalledMicroApp_partial {
  /** 小产品id */
  appId: string;
}

export interface CreateRequestBody_2 {
  /** 小产品所属桌面 */
  container?: CreateRequestBody_container;
}

export interface CreateResponseBody_2 {
  /** 小产品关联的桌面信息 */
  container?: Partial<ModelMicroAppContainer>;
}

export interface CreateRequestBody_container {
  /** 桌面的id */
  id?: string;
}
