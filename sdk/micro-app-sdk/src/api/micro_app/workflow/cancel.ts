import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 终止工作流执行
 * @endpoint POST /api/v1/micro_app/workflow/build/:buildId/cancel
 */
export const WorkflowApi_cancel = (
  buildId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.workflow.Cancel@1.0.0 */ http.post<void>(
    `api/gateway/micro_app.workflow.Cancel/api/v1/micro_app/workflow/build/${buildId}/cancel`,
    undefined,
    options
  );
