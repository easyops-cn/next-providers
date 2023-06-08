import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkflowStep } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type WorkflowApi_UpdateWorkflowStepRequestBody =
  Partial<ModelWorkflowStep>;

export type WorkflowApi_UpdateWorkflowStepResponseBody =
  Partial<ModelWorkflowStep>;

/**
 * @description 更新流程步骤
 * @endpoint PUT /api/v1/next_builder/workflow/:instanceId/step
 */
export const WorkflowApi_updateWorkflowStep = async (
  instanceId: string | number,
  data: WorkflowApi_UpdateWorkflowStepRequestBody,
  options?: HttpOptions
): Promise<WorkflowApi_UpdateWorkflowStepResponseBody> =>
  /**! @contract easyops.api.next_builder.workflow.UpdateWorkflowStep@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<WorkflowApi_UpdateWorkflowStepResponseBody>
    >(
      `api/gateway/next_builder.workflow.UpdateWorkflowStep/api/v1/next_builder/workflow/${instanceId}/step`,
      data,
      options
    )
  ).data;
