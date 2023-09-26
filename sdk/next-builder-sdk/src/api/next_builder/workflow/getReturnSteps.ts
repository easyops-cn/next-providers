import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkflowApi_GetReturnStepsRequestParams {
  /** 回退处理完成后的设置, 0: 重新执行流程 1：直接返回审批节点 */
  returnType?: number;
}

export interface WorkflowApi_GetReturnStepsResponseBody {
  /** id */
  id?: string;

  /** name */
  name?: string;

  /** 步骤类型 */
  type?:
    | "approval"
    | "start_approval"
    | "notice"
    | "condition"
    | "gateway"
    | "start"
    | "end"
    | "cmdb_create"
    | "cmdb_edit"
    | "cmdb_delete"
    | "cmdb_search";

  /** 可回退的步骤id/name/type */
  returnSteps?: WorkflowApi_GetReturnStepsResponseBody_returnSteps_item[];
}

/**
 * @description 获取可回退的步骤信息
 * @endpoint GET /api/v1/workflow/:instanceId/step/:id/return
 */
export const WorkflowApi_getReturnSteps = async (
  instanceId: string | number,
  id: string | number,
  params: WorkflowApi_GetReturnStepsRequestParams,
  options?: HttpOptions
): Promise<WorkflowApi_GetReturnStepsResponseBody> =>
  /**! @contract easyops.api.next_builder.workflow.GetReturnSteps@1.0.0 */ (
    await http.get<ResponseBodyWrapper<WorkflowApi_GetReturnStepsResponseBody>>(
      `api/gateway/next_builder.workflow.GetReturnSteps/api/v1/workflow/${instanceId}/step/${id}/return`,
      { ...options, params }
    )
  ).data;

export interface WorkflowApi_GetReturnStepsResponseBody_returnSteps_item {
  /** id */
  id?: string;

  /** name */
  name?: string;

  /** 步骤类型 */
  type?:
    | "approval"
    | "start_approval"
    | "notice"
    | "condition"
    | "gateway"
    | "start"
    | "end"
    | "cmdb_create"
    | "cmdb_edit"
    | "cmdb_delete"
    | "cmdb_search";
}
