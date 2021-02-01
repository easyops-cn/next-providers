import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroappapiorchestration } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetApiRequestParams {
  /** projectId */
  projectId?: string;
}

export interface GetApiResponseBody {
  /** api列表 */
  apis?: Partial<ModelMicroappapiorchestration>[];
}

/**
 * @description 获取开发环境的api编排信息
 * @endpoint GET /api/v1/api/get
 */
export const getApi = async (
  params: GetApiRequestParams,
  options?: HttpOptions
): Promise<GetApiResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetApiResponseBody>>(
      "api/gateway/next_builder.apis.GetApi/api/v1/api/get",
      { ...options, params }
    )
  ).data;
