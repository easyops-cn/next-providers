import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 导出NA包
 * @endpoint GET /api/v1/resourcePackage/dynamic/export/:packageName/:packageVersion
 */
export const ArchiveApi_exportDynamicResourcePackage = (
  packageName: string | number,
  packageVersion: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.micro_app.archive.ExportDynamicResourcePackage@1.0.0 */ http.get<Blob>(
    `api/gateway/micro_app.archive.ExportDynamicResourcePackage/api/v1/resourcePackage/dynamic/export/${packageName}/${packageVersion}`,
    { ...options, responseType: "blob" }
  );
