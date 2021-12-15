import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BuildApi_GetStoriesJsonResponseBody {
  /** 所有stories.json整合后的数组 */
  list?: Record<string, any>[];
}

/**
 * @description 获取stories.json
 * @endpoint GET /api/v1/next-builder/storiesjson
 */
export const BuildApi_getStoriesJson = async (
  options?: HttpOptions
): Promise<BuildApi_GetStoriesJsonResponseBody> =>
  /**! @contract easyops.api.next_builder.build.GetStoriesJson@1.0.0 */ (
    await http.get<ResponseBodyWrapper<BuildApi_GetStoriesJsonResponseBody>>(
      "api/gateway/next_builder.build.GetStoriesJson/api/v1/next-builder/storiesjson",
      options
    )
  ).data;
