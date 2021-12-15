import { http, HttpOptions } from "@next-core/brick-http";

export interface DocumentApi_SortDocumentsRequestBody {
  /** documentId array */
  documentIds: string[];
}

/**
 * @description 小产品文档排序
 * @endpoint POST /api/v1/document/sort
 */
export const DocumentApi_sortDocuments = (
  data: DocumentApi_SortDocumentsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.document.SortDocuments@1.1.0 */ http.post<void>(
    "api/gateway/next_builder.document.SortDocuments/api/v1/document/sort",
    data,
    options
  );
