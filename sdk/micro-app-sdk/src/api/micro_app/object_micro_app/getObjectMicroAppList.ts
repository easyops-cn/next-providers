import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectMicroApp } from "../../../model/micro_app";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export type ObjectMicroAppApi_GetObjectMicroAppListResponseItem =
  ModelObjectMicroApp;

export type ObjectMicroAppApi_GetObjectMicroAppListResponseBody =
  ResponseListWrapper<ObjectMicroAppApi_GetObjectMicroAppListResponseItem>;

/**
 * @description 查询模型关联小产品列表
 * @endpoint LIST /api/micro_app/v1/object_micro_app
 */
export const ObjectMicroAppApi_getObjectMicroAppList = async (
  options?: HttpOptions
): Promise<ObjectMicroAppApi_GetObjectMicroAppListResponseBody> =>
  /**! @contract easyops.api.micro_app.object_micro_app.GetObjectMicroAppList@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ObjectMicroAppApi_GetObjectMicroAppListResponseBody>
    >(
      "api/gateway/micro_app.object_micro_app.GetObjectMicroAppList/api/micro_app/v1/object_micro_app",
      options
    )
  ).data;
