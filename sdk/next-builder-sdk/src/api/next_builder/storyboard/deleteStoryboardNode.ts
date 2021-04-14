import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description storyboard节点删除
 * @endpoint DELETE /api/v1/nextBuilder/storyboard/:nodeId
 */
export const deleteStoryboardNode = (
  nodeId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.DeleteStoryboardNode */ http.delete<void>(
    `api/gateway/next_builder.storyboard.DeleteStoryboardNode/api/v1/nextBuilder/storyboard/${nodeId}`,
    options
  );
