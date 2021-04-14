import { http, HttpOptions } from "@next-core/brick-http";

export interface RemoveStoryboardProjectRequestParams {
  /** cmdb实例标识 */
  instanceId: string;
}

/**
 * @description storyboard项目删除(该接口用于api编排)
 * @endpoint DELETE /api/v1/next-builder/removeProject
 */
export const removeStoryboardProject = (
  params: RemoveStoryboardProjectRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.project.RemoveStoryboardProject */ http.delete<void>(
    "api/gateway/next_builder.project.RemoveStoryboardProject/api/v1/next-builder/removeProject",
    { ...options, params }
  );
