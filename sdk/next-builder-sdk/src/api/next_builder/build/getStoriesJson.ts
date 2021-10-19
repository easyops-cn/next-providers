import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BuildApi_GetStoriesJsonRequestBody {
  /** 构件ids */
  storyIds?: string[];

  /** 构件详细信息字段 */
  fields?: string[];
}

export interface BuildApi_GetStoriesJsonResponseBody {
  /** stories.json整合后的数组 */
  list?: Record<string, any>[];
}

/**
 * @description 获取stories.json
 * @endpoint POST /api/v1/next-builder/storiesjson
 */
export const BuildApi_getStoriesJson = async (
  data: BuildApi_GetStoriesJsonRequestBody,
  options?: HttpOptions
): Promise<BuildApi_GetStoriesJsonResponseBody> =>
  /**! @contract easyops.api.next_builder.build.GetStoriesJson */ (
    await http.post<ResponseBodyWrapper<BuildApi_GetStoriesJsonResponseBody>>(
      "api/gateway/next_builder.build.GetStoriesJson/api/v1/next-builder/storiesjson",
      data,
      options
    )
  ).data;
