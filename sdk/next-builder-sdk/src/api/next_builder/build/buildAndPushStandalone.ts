import { http, HttpOptions } from "@next-core/brick-http";

export interface BuildApi_BuildAndPushStandaloneRequestBody {
  /** projectId */
  projectId?: string;

  /** storyboard的json内容 */
  storyboardJson: string;

  /** app图标的base64 */
  appIconBase64?: string;

  /** 忽略push的资源 */
  ignoredResources?: BuildApi_BuildAndPushStandaloneRequestBody_ignoredResources;
}

/**
 * @description 构建推送app (standalone模式)
 * @endpoint POST /api/v1/next-builder/build-and-push-standalone
 */
export const BuildApi_buildAndPushStandalone = (
  data: BuildApi_BuildAndPushStandaloneRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.BuildAndPushStandalone@1.1.0 */ http.post<void>(
    "api/gateway/next_builder.build.BuildAndPushStandalone/api/v1/next-builder/build-and-push-standalone",
    data,
    options
  );

export interface BuildApi_BuildAndPushStandaloneRequestBody_ignoredResources {
  /** 图片 */
  image?: boolean;

  /** 目录 */
  menus?: boolean;
}
