import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetMicroAppProjectByAppIdRequestParams {
  /** appId */
  appId?: string;
}

export type GetMicroAppProjectByAppIdResponseBody = Partial<ModelMicroAppProject>;

/**
 * @description 获取MicroApp项目 by appId
 * @endpoint GET /api/v1/next-builder/project
 */
export const getMicroAppProjectByAppId = async (
  params: GetMicroAppProjectByAppIdRequestParams,
  options?: HttpOptions
): Promise<GetMicroAppProjectByAppIdResponseBody> =>
  /**! @contract easyops.api.next_builder.project.GetMicroAppProjectByAppId */ (
    await http.get<ResponseBodyWrapper<GetMicroAppProjectByAppIdResponseBody>>(
      "api/gateway/next_builder.project.GetMicroAppProjectByAppId/api/v1/next-builder/project",
      { ...options, params }
    )
  ).data;
