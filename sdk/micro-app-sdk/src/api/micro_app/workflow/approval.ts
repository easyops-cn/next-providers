import { http, HttpOptions } from "@next-core/brick-http";

export interface WorkflowApi_ApprovalRequestBody {
  /** 审批操作 */
  action: "approve" | "refuse" | "return" | "assign";

  /** 要回退到哪一个步骤id */
  returnStepId?: string;

  /** 转审人 */
  assigner?: string;

  /** 运行时指定其他步骤的审批人 */
  approversSetting?: WorkflowApi_ApprovalRequestBody_approversSetting_item[];

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

export interface WorkflowApi_ApprovalRequestBody_approversSetting_item {
  /** 步骤id */
  stepId?: string;

  /** 审批人 */
  approvers?: string[];
}
