import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetModelRequestParams {
  /** cmdb实例标识 */
  instanceId?: string;

  /** 要获取的objectId */
  objectId?: string;
}

export type GetModelResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 获取开发环境的模型信息
 * @endpoint GET /api/v1/model/get
 */
export const getModel = async (
  params: GetModelRequestParams,
  options?: HttpOptions
): Promise<GetModelResponseBody> =>
  /**! @contract easyops.api.next_builder.model.GetModel */ (
    await http.get<ResponseBodyWrapper<GetModelResponseBody>>(
      "api/gateway/next_builder.model.GetModel/api/v1/model/get",
      { ...options, params }
    )
  ).data;
