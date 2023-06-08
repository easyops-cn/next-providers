import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelWorkflowDef,
  ModelWorkflowStep,
} from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type WorkflowApi_AddWorkflowDefRequestBody = Partial<ModelWorkflowDef>;

export type WorkflowApi_AddWorkflowDefResponseBody = Partial<ModelWorkflowDef> &
  WorkflowApi_AddWorkflowDefResponseBody_2;

/**
 * @description 新建流程定义
 * @endpoint POST /api/v1/visual_builder/:projectInstanceId/workflow/add
 */
export const WorkflowApi_addWorkflowDef = async (
  projectInstanceId: string | number,
  data: WorkflowApi_AddWorkflowDefRequestBody,
  options?: HttpOptions
): Promise<WorkflowApi_AddWorkflowDefResponseBody> =>
  /**! @contract easyops.api.next_builder.workflow.AddWorkflowDef@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkflowApi_AddWorkflowDefResponseBody>
    >(
      `api/gateway/next_builder.workflow.AddWorkflowDef/api/v1/visual_builder/${projectInstanceId}/workflow/add`,
      data,
      options
    )
  ).data;

export interface WorkflowApi_AddWorkflowDefResponseBody_2 {
  /** 新建流程后默认的start和end步骤 */
  steps?: Partial<ModelWorkflowStep>[];
}
