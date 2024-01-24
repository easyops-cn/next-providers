import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除我的收藏V2
 * @endpoint DELETE /api/v2/launchpad/collection/:instanceId
 */
export const LaunchpadApi_deleteCollectionV2 = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.launchpad.DeleteCollectionV2@1.0.0 */ http.delete<void>(
    `api/gateway/user_service.launchpad.DeleteCollectionV2/api/v2/launchpad/collection/${instanceId}`,
    options
  );
