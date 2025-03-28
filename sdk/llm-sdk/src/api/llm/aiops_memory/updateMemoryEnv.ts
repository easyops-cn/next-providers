import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmMemoryEnv } from "../../../model/llm";

export type AiopsMemoryApi_UpdateMemoryEnvRequestBody =
  Partial<ModelLlmMemoryEnv>;

/**
 * @description 更新大模型记忆的调试环境
 * @endpoint POST /api/v1/llm/aiops_service/memory/env/:_row_id/update
 */
export const AiopsMemoryApi_updateMemoryEnv = (
  _row_id: string | number,
  data: AiopsMemoryApi_UpdateMemoryEnvRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.aiops_memory.UpdateMemoryEnv@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/memory/env/${_row_id}/update`,
    data,
    options
  );
