import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除我的收藏
 * @endpoint DELETE /api/v1/launchpad/collection/:instanceId
 */
export const LaunchpadApi_deleteCollection = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.launchpad.DeleteCollection@1.0.0 */ http.delete<void>(
    `api/gateway/logic.user_service/api/v1/launchpad/collection/${instanceId}`,
    options
  );
