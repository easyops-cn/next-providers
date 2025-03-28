import { http, HttpOptions } from "@next-core/brick-http";

export interface AiopsBaseApi_DeleteEmbeddingRequestBody {
  /** 知识库id，同search中的命名空间(废弃) */
  namespace?: string;

  /** 是否删除整个知识库(废弃) */
  deleteKnowledge?: boolean;

  /** 文档所包含的id列表(废弃) */
  ids?: string[];

  /** 文档的instanceId */
  instanceIds?: string[];
}

/**
 * @description 删除向量数据库中的向量
 * @endpoint POST /api/v1/llm/aiops_base/embedding/delete
 */
export const AiopsBaseApi_deleteEmbedding = (
  data: AiopsBaseApi_DeleteEmbeddingRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.aiops_base.DeleteEmbedding@1.1.0 */ http.post<void>(
    "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_base/embedding/delete",
    data,
    options
  );
