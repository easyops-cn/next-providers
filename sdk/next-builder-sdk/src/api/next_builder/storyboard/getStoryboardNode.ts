import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStoryboardNode } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetStoryboardNodeResponseBody = Partial<ModelStoryboardNode>;

/**
 * @description 获取storyboard节点的子节点
 * @endpoint GET /api/v1/nextBuilder/storyboard/:nodeId
 */
export const getStoryboardNode = async (
  nodeId: string | number,
  options?: HttpOptions
): Promise<GetStoryboardNodeResponseBody> =>
  /**! @contract easyops.api.next_builder.storyboard.GetStoryboardNode */ (
    await http.get<ResponseBodyWrapper<GetStoryboardNodeResponseBody>>(
      `api/gateway/next_builder.storyboard.GetStoryboardNode/api/v1/nextBuilder/storyboard/${nodeId}`,
      options
    )
  ).data;
