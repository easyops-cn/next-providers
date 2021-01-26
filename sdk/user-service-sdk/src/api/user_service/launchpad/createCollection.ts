import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLaunchpadCollection } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CreateCollectionRequestBody {
  /** LaunchpadCollection */
  launchpadCollection?: Partial<ModelLaunchpadCollection>;

  /** microApp Id, 当type为microApp时必填 */
  microAppId?: string;

  /** customItem Id, 当type为customItem时必填 */
  customItemId?: string;
}

export interface CreateCollectionResponseBody {
  /** LaunchpadCollection instanceId */
  launchpadInstanceId: string;
}

/**
 * @description 新增我的收藏
 * @endpoint POST /api/v1/launchpad/collection
 */
export const createCollection = async (
  data: CreateCollectionRequestBody,
  options?: HttpOptions
): Promise<CreateCollectionResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<CreateCollectionResponseBody>>(
      "api/gateway/user_service.launchpad.CreateCollection/api/v1/launchpad/collection",
      data,
      options
    )
  ).data;
