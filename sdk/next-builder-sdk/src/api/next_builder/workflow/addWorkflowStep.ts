import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkflowStep } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type WorkflowApi_AddWorkflowStepRequestBody = Partial<ModelWorkflowStep>;

export type WorkflowApi_AddWorkflowStepResponseBody =
  Partial<ModelWorkflowStep>;

/**
 * @description 新建流程步骤
 * @endpoint POST /api/v1/next_builder/workflow/:instanceId/step
 */
export const WorkflowApi_addWorkflowStep = async (
  instanceId: string | number,
  data: WorkflowApi_AddWorkflowStepRequestBody,
  options?: HttpOptions
): Promise<WorkflowApi_AddWorkflowStepResponseBody> =>
  /**! @contract easyops.api.next_builder.workflow.AddWorkflowStep@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkflowApi_AddWorkflowStepResponseBody>
    >(
      `api/gateway/next_builder.workflow.AddWorkflowStep/api/v1/next_builder/workflow/${instanceId}/step`,
      data,
      options
    )
  ).data;
