import { http, HttpOptions } from "@next-core/brick-http";

export interface ProjectApi_RemoveStoryboardProjectRequestParams {
  /** cmdb实例标识 */
  instanceId: string;
}

/**
 * @description storyboard项目删除(该接口用于api编排)
 * @endpoint DELETE /api/v1/next-builder/removeProject
 */
export const ProjectApi_removeStoryboardProject = (
  params: ProjectApi_RemoveStoryboardProjectRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.project.RemoveStoryboardProject@1.0.0 */ http.delete<void>(
    "api/gateway/next_builder.project.RemoveStoryboardProject/api/v1/next-builder/removeProject",
    { ...options, params }
  );
