import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ProjectApi_GetMicroAppProjectByAppIdRequestParams {
  /** appId */
  appId?: string;

  /** 指定返回的fields */
  fields?: string;
}

export type ProjectApi_GetMicroAppProjectByAppIdResponseBody =
  Partial<ModelMicroAppProject>;

/**
 * @description 获取MicroApp项目 by appId
 * @endpoint GET /api/v1/next-builder/project
 */
export const ProjectApi_getMicroAppProjectByAppId = async (
  params: ProjectApi_GetMicroAppProjectByAppIdRequestParams,
  options?: HttpOptions
): Promise<ProjectApi_GetMicroAppProjectByAppIdResponseBody> =>
  /**! @contract easyops.api.next_builder.project.GetMicroAppProjectByAppId@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ProjectApi_GetMicroAppProjectByAppIdResponseBody>
    >(
      "api/gateway/next_builder.project.GetMicroAppProjectByAppId/api/v1/next-builder/project",
      { ...options, params }
    )
  ).data;
