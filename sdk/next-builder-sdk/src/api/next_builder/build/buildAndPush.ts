import { http, HttpOptions } from "@next-core/brick-http";

export interface BuildAndPushRequestBody {
  /** projectId */
  projectId?: string;

  /** storyboard的json内容 */
  storyboardJson: string;

  /** app图标的base64 */
  appIconBase64?: string;
}

/**
 * @description 构建推送app
 * @endpoint POST /api/v1/next-builder/build-and-push
 */
export const buildAndPush = (
  data: BuildAndPushRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.BuildAndPush */ http.post<void>(
    "api/gateway/next_builder.build.BuildAndPush/api/v1/next-builder/build-and-push",
    data,
    options
  );
