import { http, HttpOptions } from "@next-core/brick-http";
import { ModelBuildDetail } from "../../../model/micro_app";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface WorkflowApi_ViewApprovalHistoryRequestParams {
  /** userName如果为空, 取ctx中的user */
  userName?: string;

  /** 页码 */
  page?: number;

  /** 每页大小 */
  pageSize?: number;

  /** 开始时间 */
  startTime?: number;

  /** 结束时间 */
  endTime?: number;
}

export type WorkflowApi_ViewApprovalHistoryResponseItem =
  Partial<ModelBuildDetail>;

export type WorkflowApi_ViewApprovalHistoryResponseBody =
  ResponseListWrapper<WorkflowApi_ViewApprovalHistoryResponseItem>;

/**
 * @description 查看用户审批历史
 * @endpoint LIST /api/v1/micro_app/workflows/approval_history
 */
export const WorkflowApi_viewApprovalHistory = async (
  params: WorkflowApi_ViewApprovalHistoryRequestParams,
  options?: HttpOptions
): Promise<WorkflowApi_ViewApprovalHistoryResponseBody> =>
  /**! @contract easyops.api.micro_app.workflow.ViewApprovalHistory@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkflowApi_ViewApprovalHistoryResponseBody>
    >(
      "api/gateway/micro_app.workflow.ViewApprovalHistory/api/v1/micro_app/workflows/approval_history",
      { ...options, params }
    )
  ).data;
