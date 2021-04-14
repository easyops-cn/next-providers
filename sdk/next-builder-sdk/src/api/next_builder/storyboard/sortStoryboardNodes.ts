import { http, HttpOptions } from "@next-core/brick-http";

export interface SortStoryboardNodesRequestBody {
  /** storyboard nodeId array */
  nodeIds: string[];
}

/**
 * @description storyboard节点排序
 * @endpoint POST /api/v1/nextBuilder/sortNodes
 */
export const sortStoryboardNodes = (
  data: SortStoryboardNodesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.SortStoryboardNodes */ http.post<void>(
    "api/gateway/next_builder.storyboard.SortStoryboardNodes/api/v1/nextBuilder/sortNodes",
    data,
    options
  );
