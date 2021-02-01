import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetMicroAppProjectByInstanceIdRequestParams {
  /** cmdb实例标识 */
  instanceId?: string;
}

export type GetMicroAppProjectByInstanceIdResponseBody = Partial<ModelMicroAppProject>;

/**
 * @description 获取MicroApp项目
 * @endpoint GET /api/v1/next-builder/project-get-detail
 */
export const getMicroAppProjectByInstanceId = async (
  params: GetMicroAppProjectByInstanceIdRequestParams,
  options?: HttpOptions
): Promise<GetMicroAppProjectByInstanceIdResponseBody> =>
  (
    await http.get<
      ResponseBodyWrapper<GetMicroAppProjectByInstanceIdResponseBody>
    >(
      "api/gateway/next_builder.project.GetMicroAppProjectByInstanceId/api/v1/next-builder/project-get-detail",
      { ...options, params }
    )
  ).data;
