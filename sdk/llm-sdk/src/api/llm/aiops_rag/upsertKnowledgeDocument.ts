import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsRagApi_UpsertKnowledgeDocumentRequestBody {
  /** knowledge instanceId */
  instanceId?: string;
}

export interface AiopsRagApi_UpsertKnowledgeDocumentResponseBody {
  /** 插入或更新的文档数量 */
  docs?: number;
}

/**
 * @description 根据knowledge instanceId导入数据到向量库
 * @endpoint POST /api/v1/llm/aiops_rag/upsert_knowledge_document
 */
export const AiopsRagApi_upsertKnowledgeDocument = async (
  data: AiopsRagApi_UpsertKnowledgeDocumentRequestBody,
  options?: HttpOptions
): Promise<AiopsRagApi_UpsertKnowledgeDocumentResponseBody> =>
  /**! @contract easyops.api.llm.aiops_rag.UpsertKnowledgeDocument@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsRagApi_UpsertKnowledgeDocumentResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_rag/upsert_knowledge_document",
      data,
      options
    )
  ).data;
