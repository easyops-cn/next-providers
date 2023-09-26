import { http, HttpOptions } from "@next-core/brick-http";

export interface DocumentApi_ExportDocumentFileRequestBody {
  /** 文档ID */
  documentId: string;

  /** 是否导出子文档 */
  exportChildren: boolean;

  /** 导出文件类型 */
  fileType: "docx" | "pdf";
}

/**
 * @description 导出文档
 * @endpoint POST /api/v1/document/export/file
 */
export const DocumentApi_exportDocumentFile = (
  data: DocumentApi_ExportDocumentFileRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.next_builder.document.ExportDocumentFile@1.0.0 */ http.post<Blob>(
    "api/gateway/next_builder.document.ExportDocumentFile/api/v1/document/export/file",
    data,
    { ...options, responseType: "blob" }
  );
