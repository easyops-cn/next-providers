import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface StoryboardApi_AddNodeRequestBody {
  /** 模型id */
  objectId: string;

  /** node instance */
  instance: Record<string, any>;
}

export interface StoryboardApi_AddNodeResponseBody {
  /** 节点实例信息 */
  instance?: Record<string, any>;
}

/**
 * @description Add Node
 * @endpoint POST /api/v1/next-builder/:projectInstanceId/nodes
 */
export const StoryboardApi_addNode = async (
  projectInstanceId: string | number,
  data: StoryboardApi_AddNodeRequestBody,
  options?: HttpOptions
): Promise<StoryboardApi_AddNodeResponseBody> =>
  /**! @contract easyops.api.next_builder.storyboard.AddNode@1.0.0 */ (
    await http.post<ResponseBodyWrapper<StoryboardApi_AddNodeResponseBody>>(
      `api/gateway/next_builder.storyboard.AddNode/api/v1/next-builder/${projectInstanceId}/nodes`,
      data,
      options
    )
  ).data;
