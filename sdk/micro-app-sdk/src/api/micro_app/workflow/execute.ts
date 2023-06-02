import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkflowApi_ExecuteRequestBody {
  /** 输入 */
  inputs?: WorkflowApi_ExecuteRequestBody_inputs_item[];
}

export interface WorkflowApi_ExecuteResponseBody {
  /** 任务id, 服务端自动生成 */
  id?: string;
}

/**
 * @description 手动触发执行工作流
 * @endpoint POST /api/v1/micro_app/projects/:project_id/workflows/:workflow_id/execute
 */
export const WorkflowApi_execute = async (
  project_id: string | number,
  workflow_id: string | number,
  data: WorkflowApi_ExecuteRequestBody,
  options?: HttpOptions
): Promise<WorkflowApi_ExecuteResponseBody> =>
  /**! @contract easyops.api.micro_app.workflow.Execute@1.0.0 */ (
    await http.post<ResponseBodyWrapper<WorkflowApi_ExecuteResponseBody>>(
      `api/gateway/micro_app.workflow.Execute/api/v1/micro_app/projects/${project_id}/workflows/${workflow_id}/execute`,
      data,
      options
    )
  ).data;

export interface WorkflowApi_ExecuteRequestBody_inputs_item {
  /** 变量名 */
  name?: string;

  /** 变量值，type为enum时，使用英文逗号拼接多个枚举值 */
  value?: string;

  /** 变量类型 */
  type?: "int" | "string" | "enum";

  /** 枚举值列表 */
  enum_values?: string[];
}
