import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ArchiveApi_ImportDynamicResourcePackageRequestBody {
  /** 包名 */
  packageName: string;

  /** 包版本 */
  packageVersion?: string;

  /** 包文件 */
  file: File;
}

export interface ArchiveApi_ImportDynamicResourcePackageResponseBody {
  /** 产品id */
  appId?: string;
}

/**
 * @description 导入NA包
 * @endpoint POST /api/v1/resourcePackage/dynamic/import
 */
export const ArchiveApi_importDynamicResourcePackage = async (
  data: ArchiveApi_ImportDynamicResourcePackageRequestBody,
  options?: HttpOptions
): Promise<ArchiveApi_ImportDynamicResourcePackageResponseBody> => {
  /**! @contract easyops.api.micro_app.archive.ImportDynamicResourcePackage@1.0.0 */ const _formData =
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
      ResponseBodyWrapper<ArchiveApi_ImportDynamicResourcePackageResponseBody>
    >(
      "api/gateway/micro_app.archive.ImportDynamicResourcePackage/api/v1/resourcePackage/dynamic/import",
      _formData,
      options
    )
  ).data;
};
