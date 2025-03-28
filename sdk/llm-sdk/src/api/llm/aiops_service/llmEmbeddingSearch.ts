import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_LlmEmbeddingSearchRequestBody {
  /** 命名空间 */
  namespace?: string;

  /** 查询的句子 */
  query?: string;

  /** 过滤条件 */
  filter?: Record<string, any>;

  /** 返回topk条记录 */
  topk?: number;
}

export interface AiopsServiceApi_LlmEmbeddingSearchResponseBody {
  /** 相似查询结果 */
  matchedDocs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 从向量数据库查询匹配的文档
 * @endpoint POST /api/v1/llm/aiops_service/embedding/search_doc
 */
export const AiopsServiceApi_llmEmbeddingSearch = async (
  data: AiopsServiceApi_LlmEmbeddingSearchRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmEmbeddingSearchResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMEmbeddingSearch@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_LlmEmbeddingSearchResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/embedding/search_doc",
      data,
      options
    )
  ).data;
