import { http, HttpOptions } from "@next-core/brick-http";

export interface BuildApi_BuildAndPushRequestBody {
  /** projectId */
  projectId?: string;

  /** storyboard的json内容 */
  storyboardJson: string;

  /** app图标的base64 */
  appIconBase64?: string;

  /** 忽略push的资源 */
  ignoredResources?: BuildApi_BuildAndPushRequestBody_ignoredResources;
}

/**
 * @description 构建推送app
 * @endpoint POST /api/v1/next-builder/build-and-push
 */
export const BuildApi_buildAndPush = (
  data: BuildApi_BuildAndPushRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.BuildAndPush */ http.post<void>(
    "api/gateway/next_builder.build.BuildAndPush/api/v1/next-builder/build-and-push",
    data,
    options
  );

export interface BuildApi_BuildAndPushRequestBody_ignoredResources {
  /** 图片 */
  image?: boolean;

  /** 目录 */
  menus?: boolean;
}
