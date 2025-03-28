import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmMemoryEnv } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsMemoryApi_SearchMemoryEnvRequestBody {
  /** 返回限制的数量 */
  limit?: number;

  /** 上一页，或者下一页的token */
  nextToken?: string;

  /** 查询关键字，使用字符串模糊匹配 */
  query?: string;
}

export interface AiopsMemoryApi_SearchMemoryEnvResponseBody {
  /** 环境 列表 */
  list?: Partial<ModelLlmMemoryEnv>[];

  /** 本次调用返回的查询凭证（Token）。当该返回值为空时，表示该页为末页，不再有后续页。 */
  nextToken?: string;

  /** 上一页token */
  previousToken?: string;
}

/**
 * @description 查询大模型记忆的调试环境
 * @endpoint POST /api/v1/llm/aiops_service/memory/env/search
 */
export const AiopsMemoryApi_searchMemoryEnv = async (
  data: AiopsMemoryApi_SearchMemoryEnvRequestBody,
  options?: HttpOptions
): Promise<AiopsMemoryApi_SearchMemoryEnvResponseBody> =>
  /**! @contract easyops.api.llm.aiops_memory.SearchMemoryEnv@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsMemoryApi_SearchMemoryEnvResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/memory/env/search",
      data,
      options
    )
  ).data;
