import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface DeleteDocumentResponseBody {
  /** 删除的实例Id数组 */
  instanceIds?: string[];
}

/**
 * @description 删除文档，包括下级文档
 * @endpoint DELETE /api/v1/document/:instanceId
 */
export const deleteDocument = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<DeleteDocumentResponseBody> =>
  (
    await http.delete<ResponseBodyWrapper<DeleteDocumentResponseBody>>(
      `api/gateway/next_builder.document.DeleteDocument/api/v1/document/${instanceId}`,
      options
    )
  ).data;
