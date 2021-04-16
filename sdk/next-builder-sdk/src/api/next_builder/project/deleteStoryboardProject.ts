import { http, HttpOptions } from "@next-core/brick-http";

export interface ProjectApi_DeleteStoryboardProjectRequestParams {
  /** 是否删除install_micro_app */
  delApp: boolean;
}

/**
 * @description storyboard项目删除
 * @endpoint DELETE /api/v1/next-builder/project/:projectId
 */
export const ProjectApi_deleteStoryboardProject = (
  projectId: string | number,
  params: ProjectApi_DeleteStoryboardProjectRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.project.DeleteStoryboardProject */ http.delete<void>(
    `api/gateway/next_builder.project.DeleteStoryboardProject/api/v1/next-builder/project/${projectId}`,
    { ...options, params }
  );
