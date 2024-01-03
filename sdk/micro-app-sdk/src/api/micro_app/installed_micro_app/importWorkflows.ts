import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkflowDef } from "../../../model/next_builder";

export interface InstalledMicroAppApi_ImportWorkflowsRequestBody {
  /** 小产品关联的工作流定义 */
  workflows: Partial<ModelWorkflowDef>[];

  /** micro_app id */
  appId: string;
}

/**
 * @description 导入工作流
 * @endpoint POST /api/micro_app/v1/installed_micro_app/workflows
 */
export const InstalledMicroAppApi_importWorkflows = (
  data: InstalledMicroAppApi_ImportWorkflowsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.ImportWorkflows@1.2.0 */ http.post<void>(
    "api/gateway/micro_app.installed_micro_app.ImportWorkflows/api/micro_app/v1/installed_micro_app/workflows",
    data,
    options
  );
