import { http, HttpOptions } from "@next-core/brick-http";
import { ModelBuildDetail } from "../../../model/micro_app";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface WorkflowApi_ViewTodoRequestParams {
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

export type WorkflowApi_ViewTodoResponseItem = Partial<ModelBuildDetail>;

export type WorkflowApi_ViewTodoResponseBody =
  ResponseListWrapper<WorkflowApi_ViewTodoResponseItem>;

/**
 * @description 查看某用户待办流程
 * @endpoint LIST /api/v1/micro_app/workflows/view_todo
 */
export const WorkflowApi_viewTodo = async (
  params: WorkflowApi_ViewTodoRequestParams,
  options?: HttpOptions
): Promise<WorkflowApi_ViewTodoResponseBody> =>
  /**! @contract easyops.api.micro_app.workflow.ViewTodo@1.0.0 */ (
    await http.get<ResponseBodyWrapper<WorkflowApi_ViewTodoResponseBody>>(
      "api/gateway/micro_app.workflow.ViewTodo/api/v1/micro_app/workflows/view_todo",
      { ...options, params }
    )
  ).data;
