import { http, HttpOptions } from "@next-core/brick-http";
import { ModelBuildDetail } from "../../../model/micro_app";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface WorkflowApi_ListRequestParams {
  /** 页码 */
  page: number;

  /** 每页大小 */
  page_size: number;

  /** 开始时间 */
  startTime?: number;

  /** 结束时间 */
  endTime?: number;

  /** 状态 */
  state?: string;
}

export type WorkflowApi_ListResponseItem = Partial<ModelBuildDetail>;

export type WorkflowApi_ListResponseBody =
  ResponseListWrapper<WorkflowApi_ListResponseItem>;

/**
 * @description 获取工作流任务列表
 * @endpoint LIST /api/v1/:projectId/workflow/:workflowId/build
 */
export const WorkflowApi_list = async (
  projectId: string | number,
  workflowId: string | number,
  params: WorkflowApi_ListRequestParams,
  options?: HttpOptions
): Promise<WorkflowApi_ListResponseBody> =>
  /**! @contract easyops.api.micro_app.workflow.List@1.0.0 */ (
    await http.get<ResponseBodyWrapper<WorkflowApi_ListResponseBody>>(
      `api/gateway/micro_app.workflow.List/api/v1/${projectId}/workflow/${workflowId}/build`,
      { ...options, params }
    )
  ).data;
