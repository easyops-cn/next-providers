import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ProjectApi_GetMicroAppProjectRequestParams {
  /** 指定返回的fields */
  fields?: string;
}

export type ProjectApi_GetMicroAppProjectResponseBody =
  Partial<ModelMicroAppProject>;

/**
 * @description 获取MicroApp项目
 * @endpoint GET /api/v1/next-builder/project/:projectId
 */
export const ProjectApi_getMicroAppProject = async (
  projectId: string | number,
  params: ProjectApi_GetMicroAppProjectRequestParams,
  options?: HttpOptions
): Promise<ProjectApi_GetMicroAppProjectResponseBody> =>
  /**! @contract easyops.api.next_builder.project.GetMicroAppProject@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ProjectApi_GetMicroAppProjectResponseBody>
    >(
      `api/gateway/next_builder.project.GetMicroAppProject/api/v1/next-builder/project/${projectId}`,
      { ...options, params }
    )
  ).data;
