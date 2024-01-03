import { http, HttpOptions } from "@next-core/brick-http";

export interface WorkflowApi_UpdateStepDataRequestBody {
  /** 步骤数据 */
  stepData: Record<string, any>;
}

/**
 * @description 更新步骤数据
 * @endpoint POST /api/v1/micro_app/build/:buildId/steps/:stepId/update_data
 */
export const WorkflowApi_updateStepData = (
  buildId: string | number,
  stepId: string | number,
  data: WorkflowApi_UpdateStepDataRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.workflow.UpdateStepData@1.0.0 */ http.post<void>(
    `api/gateway/micro_app.workflow.UpdateStepData/api/v1/micro_app/build/${buildId}/steps/${stepId}/update_data`,
    data,
    options
  );
