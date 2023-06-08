import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 更新流程定义
 * @endpoint DELETE /api/v1/next_builder/workflow/:instanceId
 */
export const WorkflowApi_deleteWorkflowDef = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.workflow.DeleteWorkflowDef@1.0.0 */ http.delete<void>(
    `api/gateway/next_builder.workflow.DeleteWorkflowDef/api/v1/next_builder/workflow/${instanceId}`,
    options
  );
