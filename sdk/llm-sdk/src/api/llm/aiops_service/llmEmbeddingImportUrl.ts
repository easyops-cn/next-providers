import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_LlmEmbeddingImportUrlRequestBody {
  /** 知识库id，同search中的命名空间 */
  knowledgeId?: string;

  /** 文档id */
  docId?: string;

  /** 文档链接 */
  url?: string;

  /** 优先使用openapiUrl，上面的url目前不生效 */
  openapiUrl?: string;

  /** 文档类型，为file或者url */
  docType?: string;

  /** 是否为append */
  append?: boolean;
}

export interface AiopsServiceApi_LlmEmbeddingImportUrlResponseBody {
  /** 解析的文档内容 */
  docs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 向向量数据库中导入知识库文档
 * @endpoint POST /api/v1/llm/aiops_service/import_url
 */
export const AiopsServiceApi_llmEmbeddingImportUrl = async (
  data: AiopsServiceApi_LlmEmbeddingImportUrlRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmEmbeddingImportUrlResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMEmbeddingImportUrl@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_LlmEmbeddingImportUrlResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/import_url",
      data,
      options
    )
  ).data;
