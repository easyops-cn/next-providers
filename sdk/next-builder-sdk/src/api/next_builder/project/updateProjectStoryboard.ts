import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";

export interface UpdateProjectStoryboardRequestBody {
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
export const updateProjectStoryboard = (
  projectId: string | number,
  data: UpdateProjectStoryboardRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.put<void>(
    `api/gateway/next_builder.project.UpdateProjectStoryboard/api/v1/next-builder/project/${projectId}`,
    data,
    options
  );
