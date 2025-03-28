import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_ImportDocumentEmbeddingRequestBody {
  /** 导入的namespace */
  namespace?: string;

  /** doc id */
  doc_id?: string;

  /** 导入的document */
  docList?: AiopsServiceApi_ImportDocumentEmbeddingRequestBody_docList_item[];

  /** 是否append */
  append?: boolean;
}

export interface AiopsServiceApi_ImportDocumentEmbeddingResponseBody {
  /** 解析的文档内容 */
  docs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 导入document
 * @endpoint POST /api/v1/llm/aiops_service/import_doc
 */
export const AiopsServiceApi_importDocumentEmbedding = async (
  data: AiopsServiceApi_ImportDocumentEmbeddingRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_ImportDocumentEmbeddingResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.ImportDocumentEmbedding@1.0.2 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_ImportDocumentEmbeddingResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/import_doc",
      data,
      options
    )
  ).data;

export interface AiopsServiceApi_ImportDocumentEmbeddingRequestBody_docList_item {
  /** 内容 */
  page_content?: string;

  /** metadata */
  metadata?: Record<string, any>;
}
