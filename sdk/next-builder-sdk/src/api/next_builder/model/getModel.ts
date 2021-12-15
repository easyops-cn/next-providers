import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ModelApi_GetModelRequestParams {
  /** cmdb实例标识 */
  instanceId?: string;

  /** 要获取的objectId */
  objectId?: string;
}

export type ModelApi_GetModelResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 获取开发环境的模型信息
 * @endpoint GET /api/v1/model/get
 */
export const ModelApi_getModel = async (
  params: ModelApi_GetModelRequestParams,
  options?: HttpOptions
): Promise<ModelApi_GetModelResponseBody> =>
  /**! @contract easyops.api.next_builder.model.GetModel@1.0.0 */ (
    await http.get<ResponseBodyWrapper<ModelApi_GetModelResponseBody>>(
      "api/gateway/next_builder.model.GetModel/api/v1/model/get",
      { ...options, params }
    )
  ).data;
