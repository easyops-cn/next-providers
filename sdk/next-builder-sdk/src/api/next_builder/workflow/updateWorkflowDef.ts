import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkflowDef } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type WorkflowApi_UpdateWorkflowDefRequestBody =
  Partial<ModelWorkflowDef>;

export type WorkflowApi_UpdateWorkflowDefResponseBody =
  Partial<ModelWorkflowDef>;

/**
 * @description 更新流程定义
 * @endpoint PUT /api/v1/visual_builder/:projectInstanceId/workflow/:instanceId
 */
export const WorkflowApi_updateWorkflowDef = async (
  projectInstanceId: string | number,
  instanceId: string | number,
  data: WorkflowApi_UpdateWorkflowDefRequestBody,
  options?: HttpOptions
): Promise<WorkflowApi_UpdateWorkflowDefResponseBody> =>
  /**! @contract easyops.api.next_builder.workflow.UpdateWorkflowDef@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<WorkflowApi_UpdateWorkflowDefResponseBody>
    >(
      `api/gateway/next_builder.workflow.UpdateWorkflowDef/api/v1/visual_builder/${projectInstanceId}/workflow/${instanceId}`,
      data,
      options
    )
  ).data;
