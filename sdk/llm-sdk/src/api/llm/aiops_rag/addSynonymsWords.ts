import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsRagApi_AddSynonymsWordsRequestBody {
  /** url */
  url?: string;

  /** 同义词列表 */
  synonyms?: AiopsRagApi_AddSynonymsWordsRequestBody_synonyms_item[];
}

export interface AiopsRagApi_AddSynonymsWordsResponseBody {
  /** 导入的同义词数量 */
  words?: number;
}

/**
 * @description 增加同义词
 * @endpoint POST /api/v1/llm/aiops_rag/add_synonyms_words
 */
export const AiopsRagApi_addSynonymsWords = async (
  data: AiopsRagApi_AddSynonymsWordsRequestBody,
  options?: HttpOptions
): Promise<AiopsRagApi_AddSynonymsWordsResponseBody> =>
  /**! @contract easyops.api.llm.aiops_rag.AddSynonymsWords@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsRagApi_AddSynonymsWordsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_rag/add_synonyms_words",
      data,
      options
    )
  ).data;

export interface AiopsRagApi_AddSynonymsWordsRequestBody_synonyms_item {
  /** 同义词 */
  words?: string[];
}
