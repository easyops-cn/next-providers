import { http, HttpOptions } from "@next-core/brick-http";

export interface DocumentApi_ExportDocumentsRequestBody {
  /** cmdb实例标识 */
  instanceId?: string;
}

/**
 * @description 同步小产品文档到开发环境
 * @endpoint POST /api/v1/document/export
 */
export const DocumentApi_exportDocuments = (
  data: DocumentApi_ExportDocumentsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.document.ExportDocuments@1.1.0 */ http.post<void>(
    "api/gateway/next_builder.document.ExportDocuments/api/v1/document/export",
    data,
    options
  );
