import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmDocument } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsRagApi_ImportUrlEmbeddingRequestBody {
  /** 知识库id，同search中的命名空间 */
  namespace?: string;

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

  /** 文档内容类型,QA:问答对,document:普通文档 */
  contentType?: string;
}

export interface AiopsRagApi_ImportUrlEmbeddingResponseBody {
  /** 解析的文档内容 */
  docs?: Partial<ModelLlmDocument>[];
}

/**
 * @description 向向量数据库中导入知识库文档
 * @endpoint POST /api/v1/llm/aiops_rag/import_url
 */
export const AiopsRagApi_importUrlEmbedding = async (
  data: AiopsRagApi_ImportUrlEmbeddingRequestBody,
  options?: HttpOptions
): Promise<AiopsRagApi_ImportUrlEmbeddingResponseBody> =>
  /**! @contract easyops.api.llm.aiops_rag.ImportURLEmbedding@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsRagApi_ImportUrlEmbeddingResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_rag/import_url",
      data,
      options
    )
  ).data;
