import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 详细文档，不返回parent和children */
export interface GetDocumentsDetailsResponseBody {
  /** 实例Id */
  instanceId?: string;

  /** 文档Id，全局唯一 */
  documentId?: string;

  /** 作者 */
  author?: string;

  /** 文档标题 */
  name?: string;

  /** 文档内容 */
  content?: string;

  /** 关联小产品 id */
  relatedMicroAppId?: string;

  /** 关联路由别名数组 */
  relatedRouteAliases?: string[];

  /** 文档顺序 */
  sort?: number;
}

/**
 * @description 获取已安装小产品的文档详情
 * @endpoint GET /api/micro_app/v1/document/details/:documentId
 */
export const getDocumentsDetails = async (
  documentId: string | number,
  options?: HttpOptions
): Promise<GetDocumentsDetailsResponseBody> =>
  /**! @contract easyops.api.micro_app.document.GetDocumentsDetails */ (
    await http.get<ResponseBodyWrapper<GetDocumentsDetailsResponseBody>>(
      `api/gateway/micro_app.document.GetDocumentsDetails/api/micro_app/v1/document/details/${documentId}`,
      options
    )
  ).data;
