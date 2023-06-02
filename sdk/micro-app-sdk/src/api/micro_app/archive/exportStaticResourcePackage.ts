import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 导出NB NT包
 * @endpoint GET /api/v1/resourcePackage/static/export/:packageName/:packageVersion
 */
export const ArchiveApi_exportStaticResourcePackage = (
  packageName: string | number,
  packageVersion: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.micro_app.archive.ExportStaticResourcePackage@1.0.0 */ http.get<Blob>(
    `api/gateway/micro_app.archive.ExportStaticResourcePackage/api/v1/resourcePackage/static/export/${packageName}/${packageVersion}`,
    { ...options, responseType: "blob" }
  );
