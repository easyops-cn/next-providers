import { http, HttpOptions } from "@next-core/brick-http";

export interface DeleteStoryboardProjectRequestParams {
  /** 是否删除install_micro_app */
  delApp: boolean;
}

/**
 * @description storyboard项目删除
 * @endpoint DELETE /api/v1/next-builder/project/:projectId
 */
export const deleteStoryboardProject = (
  projectId: string | number,
  params: DeleteStoryboardProjectRequestParams,
  options?: HttpOptions
): Promise<void> =>
  http.delete<void>(
    `api/gateway/next_builder.project.DeleteStoryboardProject/api/v1/next-builder/project/${projectId}`,
    { ...options, params }
  );
