import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsBaseApi_SearchEmbeddingRequestBody {
  /** 命名空间 */
  namespace?: string;

  /** 查询的句子 */
  query?: string;

  /** 过滤条件 */
  filter?: Record<string, any>;

  /** 返回topk条记录 */
  topk?: number;

  /** 是否按文档内容去重 */
  uniqWithContent?: boolean;
}

export interface AiopsBaseApi_SearchEmbeddingResponseBody {
  /** 相似查询结果 */
  matchedDocs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 向向量数据库做相似查询
 * @endpoint POST /api/v1/llm/aiops_base/embedding/search
 */
export const AiopsBaseApi_searchEmbedding = async (
  data: AiopsBaseApi_SearchEmbeddingRequestBody,
  options?: HttpOptions
): Promise<AiopsBaseApi_SearchEmbeddingResponseBody> =>
  /**! @contract easyops.api.llm.aiops_base.SearchEmbedding@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsBaseApi_SearchEmbeddingResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_base/embedding/search",
      data,
      options
    )
  ).data;
