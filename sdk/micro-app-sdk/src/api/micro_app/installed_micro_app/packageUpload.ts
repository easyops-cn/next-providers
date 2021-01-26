import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PackageUploadRequestBody {
  /** 小产品id */
  appId: string;

  /** 小产品版本号 */
  version: string;

  /** 版本描述信息 */
  description: string;

  /** 小产品关联的objectId列表(deprecated) */
  objectIds?: string[];

  /** objects.json的base64内容 */
  objectsBase64?: string;

  /** 项目依赖的bricks */
  dependBricks?: string[];

  /** 项目依赖的templates */
  dependTemplates?: string[];

  /** Dependencies */
  dependencies?: ModelMicroAppProject["dependencies"];

  /** 组织代码 */
  org?: number;

  /** 用户名 */
  user?: string;
}

export interface PackageUploadResponseBody {
  /** 小产品id */
  appId?: string;

  /** 小产品版本号 */
  version?: string;
}

/**
 * @description 小产品生成打包文件并上传到r环境
 * @endpoint POST /api/micro_app/v1/package-upload
 */
export const packageUpload = async (
  data: PackageUploadRequestBody,
  options?: HttpOptions
): Promise<PackageUploadResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<PackageUploadResponseBody>>(
      "api/gateway/micro_app.installed_micro_app.PackageUpload/api/micro_app/v1/package-upload",
      data,
      options
    )
  ).data;
