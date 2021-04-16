import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type ProjectApi_GetMicroAppProjectResponseBody = Partial<ModelMicroAppProject>;

/**
 * @description 获取MicroApp项目
 * @endpoint GET /api/v1/next-builder/project/:projectId
 */
export const ProjectApi_getMicroAppProject = async (
  projectId: string | number,
  options?: HttpOptions
): Promise<ProjectApi_GetMicroAppProjectResponseBody> =>
  /**! @contract easyops.api.next_builder.project.GetMicroAppProject */ (
    await http.get<
      ResponseBodyWrapper<ProjectApi_GetMicroAppProjectResponseBody>
    >(
      `api/gateway/next_builder.project.GetMicroAppProject/api/v1/next-builder/project/${projectId}`,
      options
    )
  ).data;
