import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectMicroApp } from "../../../model/micro_app";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export type GetMicroAppListResponseItem = ModelObjectMicroApp;

export type GetMicroAppListResponseBody = ResponseListWrapper<GetMicroAppListResponseItem>;

/**
 * @description 根据模型查询关联小产品列表
 * @endpoint LIST /api/micro_app/v1/object_micro_app/object_id/:object_id
 */
export const getMicroAppList = async (
  object_id: string | number,
  options?: HttpOptions
): Promise<GetMicroAppListResponseBody> =>
  /**! @contract easyops.api.micro_app.object_micro_app.GetMicroAppList */ (
    await http.get<ResponseBodyWrapper<GetMicroAppListResponseBody>>(
      `api/gateway/micro_app.object_micro_app.GetMicroAppList/api/micro_app/v1/object_micro_app/object_id/${object_id}`,
      options
    )
  ).data;
