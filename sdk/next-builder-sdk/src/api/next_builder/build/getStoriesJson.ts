import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetStoriesJsonResponseBody {
  /** 所有stories.json整合后的数组 */
  list?: Record<string, any>[];
}

/**
 * @description 获取stories.json
 * @endpoint GET /api/v1/next-builder/storiesjson
 */
export const getStoriesJson = async (
  options?: HttpOptions
): Promise<GetStoriesJsonResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetStoriesJsonResponseBody>>(
      "api/gateway/next_builder.build.GetStoriesJson/api/v1/next-builder/storiesjson",
      options
    )
  ).data;
