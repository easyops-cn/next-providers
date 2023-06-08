import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkflowStep } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkflowApi_GetWorkflowGraphResponseBody {
  /** 步骤列表 */
  steps?: Partial<ModelWorkflowStep>[];

  /** 关系列表 */
  relations?: WorkflowApi_GetWorkflowGraphResponseBody_relations_item[];
}

/**
 * @description 获取流程拓扑
 * @endpoint GET /api/v1/workflow/:instanceId/graph
 */
export const WorkflowApi_getWorkflowGraph = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<WorkflowApi_GetWorkflowGraphResponseBody> =>
  /**! @contract easyops.api.next_builder.workflow.GetWorkflowGraph@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkflowApi_GetWorkflowGraphResponseBody>
    >(
      `api/gateway/next_builder.workflow.GetWorkflowGraph/api/v1/workflow/${instanceId}/graph`,
      options
    )
  ).data;

export interface WorkflowApi_GetWorkflowGraphResponseBody_relations_item {
  /** 起始步骤ID */
  src?: string;

  /** 目的步骤ID */
  dst?: string;

  /** 起始步骤和目的步骤的关系(container/line) */
  type?: string;
}
