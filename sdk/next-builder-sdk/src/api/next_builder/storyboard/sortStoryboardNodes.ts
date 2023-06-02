import { http, HttpOptions } from "@next-core/brick-http";

export interface StoryboardApi_SortStoryboardNodesRequestBody {
  /** storyboard nodeId array */
  nodeIds: string[];
}

/**
 * @description storyboard节点排序
 * @endpoint POST /api/v1/nextBuilder/sortNodes
 */
export const StoryboardApi_sortStoryboardNodes = (
  data: StoryboardApi_SortStoryboardNodesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.SortStoryboardNodes@1.0.0 */ http.post<void>(
    "api/gateway/next_builder.storyboard.SortStoryboardNodes/api/v1/nextBuilder/sortNodes",
    data,
    options
  );
