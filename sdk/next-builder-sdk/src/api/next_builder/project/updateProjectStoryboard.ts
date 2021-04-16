import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";

export interface ProjectApi_UpdateProjectStoryboardRequestBody {
  /** Storyboard Json */
  storyboardJson?: string;

  /** Depends All */
  dependsAll?: boolean;

  /** app配置 */
  appSetting?: ModelMicroAppProject["appSetting"];
}

/**
 * @description 更新项目storyboardJson字段
 * @endpoint PUT /api/v1/next-builder/project/:projectId
 */
export const ProjectApi_updateProjectStoryboard = (
  projectId: string | number,
  data: ProjectApi_UpdateProjectStoryboardRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.project.UpdateProjectStoryboard */ http.put<void>(
    `api/gateway/next_builder.project.UpdateProjectStoryboard/api/v1/next-builder/project/${projectId}`,
    data,
    options
  );
