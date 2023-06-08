import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppDevelopmentEnv } from "../../../model/next_builder";

export type ProjectApi_UpdateProjectDevelopmentEnvRequestBody =
  Partial<ModelMicroAppDevelopmentEnv>;

/**
 * @description 切换开发环境
 * @endpoint PUT /api/v1/next-builder/project/developmentEnv/:instanceId
 */
export const ProjectApi_updateProjectDevelopmentEnv = (
  instanceId: string | number,
  data: ProjectApi_UpdateProjectDevelopmentEnvRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.project.UpdateProjectDevelopmentEnv@1.0.0 */ http.put<void>(
    `api/gateway/next_builder.project.UpdateProjectDevelopmentEnv/api/v1/next-builder/project/developmentEnv/${instanceId}`,
    data,
    options
  );
