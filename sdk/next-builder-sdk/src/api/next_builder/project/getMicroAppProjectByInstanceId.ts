import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ProjectApi_GetMicroAppProjectByInstanceIdRequestParams {
  /** cmdb实例标识 */
  instanceId?: string;
}

export type ProjectApi_GetMicroAppProjectByInstanceIdResponseBody =
  Partial<ModelMicroAppProject>;

/**
 * @description 获取MicroApp项目
 * @endpoint GET /api/v1/next-builder/project-get-detail
 */
export const ProjectApi_getMicroAppProjectByInstanceId = async (
  params: ProjectApi_GetMicroAppProjectByInstanceIdRequestParams,
  options?: HttpOptions
): Promise<ProjectApi_GetMicroAppProjectByInstanceIdResponseBody> =>
  /**! @contract easyops.api.next_builder.project.GetMicroAppProjectByInstanceId */ (
    await http.get<
      ResponseBodyWrapper<ProjectApi_GetMicroAppProjectByInstanceIdResponseBody>
    >(
      "api/gateway/next_builder.project.GetMicroAppProjectByInstanceId/api/v1/next-builder/project-get-detail",
      { ...options, params }
    )
  ).data;
