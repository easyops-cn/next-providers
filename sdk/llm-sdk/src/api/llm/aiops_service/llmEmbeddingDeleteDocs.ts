import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_LlmEmbeddingDeleteDocsRequestBody {
  /** 知识库id，同search中的命名空间 */
  knowledgeId?: string;

  /** 是否删除整个知识库 */
  deleteKnowledge?: boolean;

  /** 文档所包含的id列表 */
  ids?: string[];
}

export type AiopsServiceApi_LlmEmbeddingDeleteDocsResponseBody = Record<
  string,
  any
>;

/**
 * @description 向量数据库中删除知识库中的文档
 * @endpoint POST /api/v1/llm/aiops_service/delete_docs
 */
export const AiopsServiceApi_llmEmbeddingDeleteDocs = async (
  data: AiopsServiceApi_LlmEmbeddingDeleteDocsRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmEmbeddingDeleteDocsResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMEmbeddingDeleteDocs@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_LlmEmbeddingDeleteDocsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/delete_docs",
      data,
      options
    )
  ).data;
