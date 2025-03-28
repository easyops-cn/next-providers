import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsBaseApi_ImportDocumentEmbeddingsRequestBody {
  /** 导入的namespace */
  namespace?: string;

  /** doc id */
  docId?: string;

  /** 导入的document */
  docList?: AiopsBaseApi_ImportDocumentEmbeddingsRequestBody_docList_item[];

  /** 是否append */
  append?: boolean;
}

export interface AiopsBaseApi_ImportDocumentEmbeddingsResponseBody {
  /** 解析的文档内容 */
  docs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 导入document
 * @endpoint POST /api/v1/llm/aiops_base/import_doc
 */
export const AiopsBaseApi_importDocumentEmbeddings = async (
  data: AiopsBaseApi_ImportDocumentEmbeddingsRequestBody,
  options?: HttpOptions
): Promise<AiopsBaseApi_ImportDocumentEmbeddingsResponseBody> =>
  /**! @contract easyops.api.llm.aiops_base.ImportDocumentEmbeddings@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsBaseApi_ImportDocumentEmbeddingsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_base/import_doc",
      data,
      options
    )
  ).data;

export interface AiopsBaseApi_ImportDocumentEmbeddingsRequestBody_docList_item {
  /** 内容 */
  pageContent?: string;

  /** metadata */
  metadata?: Record<string, any>;
}
