import { http, HttpOptions } from "@next-core/brick-http";

export interface ExportDocumentsToFileRequestBody {
  /** 导出文件类型 */
  exportFileType: "pdf" | "markdown";
}

/**
 * @description 导出已安装小产品文档（导出为文件）
 * @endpoint POST /api/micro_app/v1/document/export/:appId
 */
export const exportDocumentsToFile = (
  appId: string | number,
  data: ExportDocumentsToFileRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  http.post<Blob>(
    `api/gateway/micro_app.document.ExportDocumentsToFile/api/micro_app/v1/document/export/${appId}`,
    data,
    { ...options, responseType: "blob" }
  );
