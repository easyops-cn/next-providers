import { http, HttpOptions } from "@next-core/brick-http";

export interface StoryboardApi_DeleteNodeRequestParams {
  /** objectId */
  objectId: string;

  /** instance_id */
  instanceId: string;
}

/**
 * @description Delete Node
 * @endpoint DELETE /api/v1/next-builder/:projectInstanceId/nodes
 */
export const StoryboardApi_deleteNode = (
  projectInstanceId: string | number,
  params: StoryboardApi_DeleteNodeRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.DeleteNode@1.0.0 */ http.delete<void>(
    `api/gateway/next_builder.storyboard.DeleteNode/api/v1/next-builder/${projectInstanceId}/nodes`,
    { ...options, params }
  );
