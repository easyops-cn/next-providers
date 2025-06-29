import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLaunchpadCollection } from "../../../model/user_service";

export interface LaunchpadApi_UpdateCollectionRequestBody {
  /** LaunchpadCollection */
  launchpadCollection?: Partial<ModelLaunchpadCollection>;

  /** microApp Id, 当type为microApp时必填 */
  microAppId?: string;
}

/**
 * @description 修改我的收藏
 * @endpoint PUT /api/v1/launchpad/collection/:instanceId
 */
export const LaunchpadApi_updateCollection = (
  instanceId: string | number,
  data: LaunchpadApi_UpdateCollectionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.launchpad.UpdateCollection@1.0.0 */ http.put<void>(
    `api/gateway/logic.user_service/api/v1/launchpad/collection/${instanceId}`,
    data,
    options
  );
