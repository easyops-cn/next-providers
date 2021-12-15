import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStoryboardNode } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type StoryboardApi_GetStoryboardNodeResponseBody =
  Partial<ModelStoryboardNode>;

/**
 * @description 获取storyboard节点的子节点
 * @endpoint GET /api/v1/nextBuilder/storyboard/:nodeId
 */
export const StoryboardApi_getStoryboardNode = async (
  nodeId: string | number,
  options?: HttpOptions
): Promise<StoryboardApi_GetStoryboardNodeResponseBody> =>
  /**! @contract easyops.api.next_builder.storyboard.GetStoryboardNode@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<StoryboardApi_GetStoryboardNodeResponseBody>
    >(
      `api/gateway/next_builder.storyboard.GetStoryboardNode/api/v1/nextBuilder/storyboard/${nodeId}`,
      options
    )
  ).data;
