import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除流程步骤
 * @endpoint DELETE /api/v1/next_builder/workflow/:instanceId/step/:id
 */
export const WorkflowApi_deleteWorkflowStep = (
  instanceId: string | number,
  id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.workflow.DeleteWorkflowStep@1.0.0 */ http.delete<void>(
    `api/gateway/next_builder.workflow.DeleteWorkflowStep/api/v1/next_builder/workflow/${instanceId}/step/${id}`,
    options
  );
