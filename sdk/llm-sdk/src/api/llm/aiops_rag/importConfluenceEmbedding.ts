import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsRagApi_ImportConfluenceEmbeddingRequestBody {
  /** 知识库id/namespace */
  namespace?: string;

  /** 文档的id,非instanceId */
  docId?: string;

  /** 是否append */
  append?: boolean;

  /** confluence配置信息 */
  confluenceMeta?: AiopsRagApi_ImportConfluenceEmbeddingRequestBody_confluenceMeta;
}

export interface AiopsRagApi_ImportConfluenceEmbeddingResponseBody {
  /** 解析的文档内容 */
  docs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 导入Confluence向量
 * @endpoint POST /api/v1/llm/aiops_rag/import_confluence
 */
export const AiopsRagApi_importConfluenceEmbedding = async (
  data: AiopsRagApi_ImportConfluenceEmbeddingRequestBody,
  options?: HttpOptions
): Promise<AiopsRagApi_ImportConfluenceEmbeddingResponseBody> =>
  /**! @contract easyops.api.llm.aiops_rag.ImportConfluenceEmbedding@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsRagApi_ImportConfluenceEmbeddingResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_rag/import_confluence",
      data,
      options
    )
  ).data;

export interface AiopsRagApi_ImportConfluenceEmbeddingRequestBody_confluenceMeta {
  /** confluence终端，如：http://tapd.easyops.local */
  url?: string;

  /** 认证token */
  token?: string;

  /** username */
  username?: string;

  /** api_key/password */
  apiKey?: string;

  /** confluence space key */
  spaceKey?: string;

  /** 最大page条目 */
  maxPages?: number;

  /** 是否包含附件 */
  includeAttachments?: boolean;
}
