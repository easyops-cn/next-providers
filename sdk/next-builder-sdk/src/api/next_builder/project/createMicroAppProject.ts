import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ProjectApi_CreateMicroAppProjectRequestBody {
  /** name */
  name: string;

  /** storyboardType */
  storyboardType?: "micro-app" | "templates" | "theme-template";

  /** app配置 */
  appSetting: ModelMicroAppProject["appSetting"];

  /** 框架版本 */
  brickNextVersion?: number;

  /** UI版本 */
  uiVersion?: string;

  /** 开发环境 */
  developmentEnv?: ModelMicroAppProject["developmentEnv"];

  /** 微应用描述信息 */
  description?: string;

  /** updateAuthorizers */
  updateAuthorizers?: string[];

  /** readAuthorizers */
  readAuthorizers?: string[];

  /** deleteAuthorizers */
  deleteAuthorizers?: string[];
}

export type ProjectApi_CreateMicroAppProjectResponseBody =
  Partial<ModelMicroAppProject>;

/**
 * @description 创建微应用项目
 * @endpoint POST /api/v1/next-builder/project/:appId
 */
export const ProjectApi_createMicroAppProject = async (
  appId: string | number,
  data: ProjectApi_CreateMicroAppProjectRequestBody,
  options?: HttpOptions
): Promise<ProjectApi_CreateMicroAppProjectResponseBody> =>
  /**! @contract easyops.api.next_builder.project.CreateMicroAppProject@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ProjectApi_CreateMicroAppProjectResponseBody>
    >(
      `api/gateway/next_builder.project.CreateMicroAppProject/api/v1/next-builder/project/${appId}`,
      data,
      options
    )
  ).data;
