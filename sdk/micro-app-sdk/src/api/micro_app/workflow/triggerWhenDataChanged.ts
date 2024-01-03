import { http, HttpOptions } from "@next-core/brick-http";

export interface WorkflowApi_TriggerWhenDataChangedRequestBody {
  /** 订阅主题 */
  topic?: string;

  /** 消息订阅数据 */
  data?: Record<string, any>;
}

/**
 * @description 数据变更时触发工作流
 * @endpoint POST /api/micro_app/projects/:projectId/workflows/:workflowId/trigger
 */
export const WorkflowApi_triggerWhenDataChanged = (
  projectId: string | number,
  workflowId: string | number,
  data: WorkflowApi_TriggerWhenDataChangedRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.workflow.TriggerWhenDataChanged@1.0.0 */ http.post<void>(
    `api/gateway/micro_app.workflow.TriggerWhenDataChanged/api/micro_app/projects/${projectId}/workflows/${workflowId}/trigger`,
    data,
    options
  );
