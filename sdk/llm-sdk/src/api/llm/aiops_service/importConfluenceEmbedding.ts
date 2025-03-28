import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_ImportConfluenceEmbeddingRequestBody {
  /** 知识库id/namespace */
  namespace?: string;

  /** 文档的id,非instanceId */
  doc_id?: string;

  /** 是否append */
  append?: boolean;

  /** confluence配置信息 */
  confluence_meta?: AiopsServiceApi_ImportConfluenceEmbeddingRequestBody_confluence_meta;
}

export interface AiopsServiceApi_ImportConfluenceEmbeddingResponseBody {
  /** 解析的文档内容 */
  docs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 导入Confluence向量
 * @endpoint POST /api/v1/llm/aiops_service/import_confluence
 */
export const AiopsServiceApi_importConfluenceEmbedding = async (
  data: AiopsServiceApi_ImportConfluenceEmbeddingRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_ImportConfluenceEmbeddingResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.ImportConfluenceEmbedding@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_ImportConfluenceEmbeddingResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/import_confluence",
      data,
      options
    )
  ).data;

export interface AiopsServiceApi_ImportConfluenceEmbeddingRequestBody_confluence_meta {
  /** confluence终端，如：http://tapd.easyops.local */
  url?: string;

  /** 认证token */
  token?: string;

  /** username */
  username?: string;

  /** api_key/password */
  api_key?: string;

  /** confluence space key */
  space_key?: string;

  /** 最大page条目 */
  max_pages?: number;

  /** 是否包含附件 */
  include_attachments?: boolean;
}
