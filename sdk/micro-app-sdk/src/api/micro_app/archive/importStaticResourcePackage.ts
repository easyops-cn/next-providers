import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ArchiveApi_ImportStaticResourcePackageRequestBody {
  /** 包名 */
  packageName: string;

  /** 包版本 */
  packageVersion?: string;

  /** 包文件 */
  file: File;
}

export interface ArchiveApi_ImportStaticResourcePackageResponseBody {
  /** 产品id */
  appId?: string;
}

/**
 * @description 导入NB NT包
 * @endpoint POST /api/v1/resourcePackage/static/import
 */
export const ArchiveApi_importStaticResourcePackage = async (
  data: ArchiveApi_ImportStaticResourcePackageRequestBody,
  options?: HttpOptions
): Promise<ArchiveApi_ImportStaticResourcePackageResponseBody> => {
  /**! @contract easyops.api.micro_app.archive.ImportStaticResourcePackage@1.0.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return (
    await http.post<
      ResponseBodyWrapper<ArchiveApi_ImportStaticResourcePackageResponseBody>
    >(
      "api/gateway/micro_app.archive.ImportStaticResourcePackage/api/v1/resourcePackage/static/import",
      _formData,
      options
    )
  ).data;
};
