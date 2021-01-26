import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetObjectByMicroAppResponseBody = ModelObjectMicroApp;

/**
 * @description 根据小产品查询模型和小产品关联信息
 * @endpoint GET /api/micro_app/v1/object_micro_app/appId/:appId
 */
export const getObjectByMicroApp = async (
  appId: string | number,
  options?: HttpOptions
): Promise<GetObjectByMicroAppResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetObjectByMicroAppResponseBody>>(
      `api/gateway/micro_app.object_micro_app.GetObjectByMicroApp/api/micro_app/v1/object_micro_app/appId/${appId}`,
      options
    )
  ).data;
