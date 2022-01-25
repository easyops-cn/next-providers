import { http, HttpOptions } from "@next-core/brick-http";

export interface BuildApi_ThemePackageBuildRequestBody {
  /** projectId */
  projectId: string;

  /** 小产品版本号 */
  version: string;

  /** 版本描述信息 */
  description: string;
}

/**
 * @description theme打包
 * @endpoint POST /api/v1/next-builder/theme-package-build
 */
export const BuildApi_themePackageBuild = (
  data: BuildApi_ThemePackageBuildRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.ThemePackageBuild@1.1.0 */ http.post<void>(
    "api/gateway/next_builder.build.ThemePackageBuild/api/v1/next-builder/theme-package-build",
    data,
    options
  );
