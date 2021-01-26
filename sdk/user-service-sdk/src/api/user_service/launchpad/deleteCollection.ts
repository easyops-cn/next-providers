import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除我的收藏
 * @endpoint DELETE /api/v1/launchpad/collection/:instanceId
 */
export const deleteCollection = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  http.delete<void>(
    `api/gateway/user_service.launchpad.DeleteCollection/api/v1/launchpad/collection/${instanceId}`,
    options
  );
