import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppDocumentTreeNode } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetDocumentsTreeByAppIdResponseBody {
  /** 文档列表 */
  documentsTree?: Partial<ModelMicroAppDocumentTreeNode>[];
}

/**
 * @description 获取小产品的所有文档列表
 * @endpoint GET /api/v1/document/tree/:appId
 */
export const getDocumentsTreeByAppId = async (
  appId: string | number,
  options?: HttpOptions
): Promise<GetDocumentsTreeByAppIdResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetDocumentsTreeByAppIdResponseBody>>(
      `api/gateway/next_builder.document.GetDocumentsTreeByAppId/api/v1/document/tree/${appId}`,
      options
    )
  ).data;
