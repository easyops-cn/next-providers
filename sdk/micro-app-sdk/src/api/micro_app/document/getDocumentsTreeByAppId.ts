import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroAppDocumentTreeNode } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetDocumentsTreeByAppIdResponseBody {
  /** 文档列表，不返回content */
  documentsTree?: Partial<ModelInstalledMicroAppDocumentTreeNode>[];
}

/**
 * @description 获取已安装小产品的所有文档列表
 * @endpoint GET /api/micro_app/v1/document/tree/:appId
 */
export const getDocumentsTreeByAppId = async (
  appId: string | number,
  options?: HttpOptions
): Promise<GetDocumentsTreeByAppIdResponseBody> =>
  /**! @contract easyops.api.micro_app.document.GetDocumentsTreeByAppId */ (
    await http.get<ResponseBodyWrapper<GetDocumentsTreeByAppIdResponseBody>>(
      `api/gateway/micro_app.document.GetDocumentsTreeByAppId/api/micro_app/v1/document/tree/${appId}`,
      options
    )
  ).data;
