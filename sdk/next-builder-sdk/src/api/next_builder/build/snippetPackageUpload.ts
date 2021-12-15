import { http, HttpOptions } from "@next-core/brick-http";

export interface BuildApi_SnippetPackageUploadRequestBody {
  /** projectId */
  projectId: string;

  /** 小产品版本号 */
  version: string;

  /** 版本描述信息 */
  description: string;

  /** 项目依赖的bricks */
  dependBricks?: string[];

  /** 项目依赖的构建包 */
  dependProcessorPakcages?: string[];

  /** 文件路径和内容 */
  files?: BuildApi_SnippetPackageUploadRequestBody_files_item[];

  /** 图片dir和oss路径 */
  images?: BuildApi_SnippetPackageUploadRequestBody_images;
}

/**
 * @description snippet打包
 * @endpoint POST /api/v1/next-builder/snippet-package-upload
 */
export const BuildApi_snippetPackageUpload = (
  data: BuildApi_SnippetPackageUploadRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.SnippetPackageUpload@1.1.0 */ http.post<void>(
    "api/gateway/next_builder.build.SnippetPackageUpload/api/v1/next-builder/snippet-package-upload",
    data,
    options
  );

export interface BuildApi_SnippetPackageUploadRequestBody_files_item {
  /** 文件存储路径 */
  path?: string;

  /** 文件内容 */
  content?: string;
}

export interface BuildApi_SnippetPackageUploadRequestBody_images {
  /** 图片oss路径和nb包中新的文件名 */
  imagesPath?: BuildApi_SnippetPackageUploadRequestBody_images_imagesPath_item[];

  /** 写到nb包的图片目录 */
  imagesDir?: string;
}

export interface BuildApi_SnippetPackageUploadRequestBody_images_imagesPath_item {
  /** 图片新名字 */
  fileName?: string;

  /** 图片的oss路径 */
  imageOssPath?: string;
}
