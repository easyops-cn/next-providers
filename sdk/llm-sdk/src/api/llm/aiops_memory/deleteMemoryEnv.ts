import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除大模型记忆的调试环境
 * @endpoint DELETE /api/v1/llm/aiops_service/memory/env/:_row_id
 */
export const AiopsMemoryApi_deleteMemoryEnv = (
  _row_id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.aiops_memory.DeleteMemoryEnv@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/memory/env/${_row_id}`,
    options
  );
