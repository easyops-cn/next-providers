import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export type ObjectMicroAppApi_GetObjectByMicroAppResponseBody = ModelObjectMicroApp;

/**
 * @description 根据小产品查询模型和小产品关联信息
 * @endpoint GET /api/micro_app/v1/object_micro_app/appId/:appId
 */
export const ObjectMicroAppApi_getObjectByMicroApp = async (
  appId: string | number,
  options?: HttpOptions
): Promise<ObjectMicroAppApi_GetObjectByMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app.object_micro_app.GetObjectByMicroApp */ (
    await http.get<
      ResponseBodyWrapper<ObjectMicroAppApi_GetObjectByMicroAppResponseBody>
    >(
      `api/gateway/micro_app.object_micro_app.GetObjectByMicroApp/api/micro_app/v1/object_micro_app/appId/${appId}`,
      options
    )
  ).data;
