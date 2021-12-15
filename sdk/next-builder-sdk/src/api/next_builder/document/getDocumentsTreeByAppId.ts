import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppDocumentTreeNode } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface DocumentApi_GetDocumentsTreeByAppIdResponseBody {
  /** 文档列表 */
  documentsTree?: Partial<ModelMicroAppDocumentTreeNode>[];
}

/**
 * @description 获取小产品的所有文档列表
 * @endpoint GET /api/v1/document/tree/:appId
 */
export const DocumentApi_getDocumentsTreeByAppId = async (
  appId: string | number,
  options?: HttpOptions
): Promise<DocumentApi_GetDocumentsTreeByAppIdResponseBody> =>
  /**! @contract easyops.api.next_builder.document.GetDocumentsTreeByAppId@1.1.0 */ (
    await http.get<
      ResponseBodyWrapper<DocumentApi_GetDocumentsTreeByAppIdResponseBody>
    >(
      `api/gateway/next_builder.document.GetDocumentsTreeByAppId/api/v1/document/tree/${appId}`,
      options
    )
  ).data;
