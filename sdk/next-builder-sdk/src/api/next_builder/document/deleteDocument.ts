import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface DocumentApi_DeleteDocumentResponseBody {
  /** 删除的实例Id数组 */
  instanceIds?: string[];
}

/**
 * @description 删除文档，包括下级文档
 * @endpoint DELETE /api/v1/document/:instanceId
 */
export const DocumentApi_deleteDocument = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<DocumentApi_DeleteDocumentResponseBody> =>
  /**! @contract easyops.api.next_builder.document.DeleteDocument@1.0.0 */ (
    await http.delete<
      ResponseBodyWrapper<DocumentApi_DeleteDocumentResponseBody>
    >(
      `api/gateway/next_builder.document.DeleteDocument/api/v1/document/${instanceId}`,
      options
    )
  ).data;
