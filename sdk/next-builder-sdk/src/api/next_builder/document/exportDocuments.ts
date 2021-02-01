import { http, HttpOptions } from "@next-core/brick-http";

export interface ExportDocumentsRequestBody {
  /** cmdb实例标识 */
  instanceId?: string;
}

/**
 * @description 同步小产品文档到开发环境
 * @endpoint POST /api/v1/document/export
 */
export const exportDocuments = (
  data: ExportDocumentsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/next_builder.document.ExportDocuments/api/v1/document/export",
    data,
    options
  );
