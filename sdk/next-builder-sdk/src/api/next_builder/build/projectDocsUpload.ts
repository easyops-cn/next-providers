import { http, HttpOptions } from "@next-core/brick-http";

export interface BuildApi_ProjectDocsUploadRequestBody {
  /** projectId */
  projectId: string;

  /** 文档版本号 */
  version: string;

  /** 版本描述信息 */
  description: string;
}

/**
 * @description 单个微应用项目文档打包
 * @endpoint POST /api/v1/next-builder/project-docs-upload
 */
export const BuildApi_projectDocsUpload = (
  data: BuildApi_ProjectDocsUploadRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.ProjectDocsUpload@1.0.0 */ http.post<void>(
    "api/gateway/next_builder.build.ProjectDocsUpload/api/v1/next-builder/project-docs-upload",
    data,
    options
  );
