import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsBaseApi_UpsertWithDocIdRequestBody {
  /** 导入的namespace */
  namespace?: string;

  /** 文档id */
  docId?: string;

  /** 导入的document */
  docList?: AiopsBaseApi_UpsertWithDocIdRequestBody_docList_item[];
}

export interface AiopsBaseApi_UpsertWithDocIdResponseBody {
  /** 解析的文档内容 */
  docs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 根据DocId更新或者插入文档
 * @endpoint POST /api/v1/llm/aiops_base/upsert_with_doc_id
 */
export const AiopsBaseApi_upsertWithDocId = async (
  data: AiopsBaseApi_UpsertWithDocIdRequestBody,
  options?: HttpOptions
): Promise<AiopsBaseApi_UpsertWithDocIdResponseBody> =>
  /**! @contract easyops.api.llm.aiops_base.UpsertWithDocId@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsBaseApi_UpsertWithDocIdResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_base/upsert_with_doc_id",
      data,
      options
    )
  ).data;

export interface AiopsBaseApi_UpsertWithDocIdRequestBody_docList_item {
  /** 内容 */
  pageContent?: string;

  /** metadata */
  metadata?: Record<string, any>;
}
