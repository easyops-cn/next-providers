import { http, HttpOptions } from "@next-core/brick-http";

export interface WorkflowApi_ApprovalRequestBody {
  /** 审批结果 */
  action: "approve" | "refuse";

  /** 审批意见 */
  comment?: string;
}

/**
 * @description 人工审批
 * @endpoint POST /api/v1/micro_app/build/:buildId/steps/:stepId/approval
 */
export const WorkflowApi_approval = (
  buildId: string | number,
  stepId: string | number,
  data: WorkflowApi_ApprovalRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.workflow.Approval@1.0.0 */ http.post<void>(
    `api/gateway/micro_app.workflow.Approval/api/v1/micro_app/build/${buildId}/steps/${stepId}/approval`,
    data,
    options
  );
