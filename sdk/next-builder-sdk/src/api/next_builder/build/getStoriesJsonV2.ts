import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BuildApi_GetStoriesJsonV2RequestBody {
  /** 构件ids */
  storyIds?: string[];

  /** 构件详细信息字段 */
  fields?: string[];
}

export interface BuildApi_GetStoriesJsonV2ResponseBody {
  /** stories.json整合后的数组 */
  list?: Record<string, any>[];
}

/**
 * @description 获取stories.json V2 (GetStoriesJson的v2接口，支持指定storyIds返回指定构件的文档，支持指定fields返回文档部分信息字段。 若不填写查询条件，则和v1接口一样，返回所有构件的所有文档信息。)
 * @endpoint POST /api/v2/next-builder/storiesjson
 */
export const BuildApi_getStoriesJsonV2 = async (
  data: BuildApi_GetStoriesJsonV2RequestBody,
  options?: HttpOptions
): Promise<BuildApi_GetStoriesJsonV2ResponseBody> =>
  /**! @contract easyops.api.next_builder.build.GetStoriesJsonV2@1.0.0 */ (
    await http.post<ResponseBodyWrapper<BuildApi_GetStoriesJsonV2ResponseBody>>(
      "api/gateway/next_builder.build.GetStoriesJsonV2/api/v2/next-builder/storiesjson",
      data,
      options
    )
  ).data;
