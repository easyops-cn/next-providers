import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLaunchpadCollection } from "../../../model/user_service";

export interface UpdateCollectionRequestBody {
  /** LaunchpadCollection */
  launchpadCollection?: Partial<ModelLaunchpadCollection>;

  /** microApp Id, 当type为microApp时必填 */
  microAppId?: string;
}

/**
 * @description 修改我的收藏
 * @endpoint PUT /api/v1/launchpad/collection/:instanceId
 */
export const updateCollection = (
  instanceId: string | number,
  data: UpdateCollectionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.put<void>(
    `api/gateway/user_service.launchpad.UpdateCollection/api/v1/launchpad/collection/${instanceId}`,
    data,
    options
  );
