import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsBaseApi_UpsertDocumentRequestBody {
  /** 导入的namespace */
  namespace?: string;

  /** 过滤条件 */
  filter?: Record<string, any>;

  /** 导入的document */
  docList?: AiopsBaseApi_UpsertDocumentRequestBody_docList_item[];
}

export interface AiopsBaseApi_UpsertDocumentResponseBody {
  /** 解析的文档内容 */
  docs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 更新或者插入文档
 * @endpoint POST /api/v1/llm/aiops_base/upsert_doc
 */
export const AiopsBaseApi_upsertDocument = async (
  data: AiopsBaseApi_UpsertDocumentRequestBody,
  options?: HttpOptions
): Promise<AiopsBaseApi_UpsertDocumentResponseBody> =>
  /**! @contract easyops.api.llm.aiops_base.UpsertDocument@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsBaseApi_UpsertDocumentResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_base/upsert_doc",
      data,
      options
    )
  ).data;

export interface AiopsBaseApi_UpsertDocumentRequestBody_docList_item {
  /** 内容 */
  pageContent?: string;

  /** metadata */
  metadata?: Record<string, any>;
}
