import { http, HttpOptions } from "@next-core/brick-http";

export interface CmdbObjectApi_ExportExcelRequestBody {
  /** 模型Id列表 */
  objectIds: string[];
}

/**
 * @description export excel (导出模型excel文件)
 * @endpoint POST /object_excel/export
 */
export const CmdbObjectApi_exportExcel = (
  data: CmdbObjectApi_ExportExcelRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ExportExcel@1.1.0 */ http.post<Blob>(
    "api/gateway/cmdb.cmdb_object.ExportExcel/object_excel/export",
    data,
    { ...options, responseType: "blob" }
  );
