import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectMicroApp } from "../../../model/micro_app";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export type GetObjectMicroAppListResponseItem = ModelObjectMicroApp;

export type GetObjectMicroAppListResponseBody = ResponseListWrapper<GetObjectMicroAppListResponseItem>;

/**
 * @description 查询模型关联小产品列表
 * @endpoint LIST /api/micro_app/v1/object_micro_app
 */
export const getObjectMicroAppList = async (
  options?: HttpOptions
): Promise<GetObjectMicroAppListResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetObjectMicroAppListResponseBody>>(
      "api/gateway/micro_app.object_micro_app.GetObjectMicroAppList/api/micro_app/v1/object_micro_app",
      options
    )
  ).data;
