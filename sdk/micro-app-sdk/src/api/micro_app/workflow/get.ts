import { http, HttpOptions } from "@next-core/brick-http";
import { ModelBuildDetail } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export type WorkflowApi_GetResponseBody = ModelBuildDetail;

/**
 * @description 获取单个工作流任务详情
 * @endpoint GET /api/v1/workflow/build/:build_id
 */
export const WorkflowApi_get = async (
  build_id: string | number,
  options?: HttpOptions
): Promise<WorkflowApi_GetResponseBody> =>
  /**! @contract easyops.api.micro_app.workflow.Get@1.0.0 */ (
    await http.get<ResponseBodyWrapper<WorkflowApi_GetResponseBody>>(
      `api/gateway/micro_app.workflow.Get/api/v1/workflow/build/${build_id}`,
      options
    )
  ).data;
