import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description export excel example (导出excel文件示例)
 * @endpoint GET /object_excel/example
 */
export const CmdbObjectApi_exportExcelExample = (
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ExportExcelExample@1.1.0 */ http.get<Blob>(
    "api/gateway/cmdb.cmdb_object.ExportExcelExample/object_excel/example",
    { ...options, responseType: "blob" }
  );
