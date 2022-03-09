import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 微应用导出
 * @endpoint POST /api/v1/next_builder/project_export/:instanceId
 */
export const ImportAndExportApi_projectExport = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.next_builder.import_and_export.ProjectExport@1.0.0 */ http.post<Blob>(
    `api/gateway/next_builder.import_and_export.ProjectExport/api/v1/next_builder/project_export/${instanceId}`,
    undefined,
    { ...options, responseType: "blob" }
  );
