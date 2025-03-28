import { http, HttpOptions } from "@next-core/brick-http";

export interface AiopsServiceApi_ExportConversationRequestBody {
  /** 开始时间 */
  start_time: number;

  /** 结束时间 */
  end_time: number;

  /** 指定智能体 */
  agent_id?: string;

  /** 指定助手 */
  robot_id?: string;

  /** is_like */
  is_like?: boolean;

  /** is_solve */
  is_solve?: boolean;

  /** 按用户搜索 */
  user_name?: string;
}

/**
 * @description 导出会话历史
 * @endpoint POST /api/v1/llm/aiops_service/conversation/export
 */
export const AiopsServiceApi_exportConversation = (
  data: AiopsServiceApi_ExportConversationRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.llm.aiops_service.ExportConversation@1.0.0 */ http.post<Blob>(
    "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/conversation/export",
    data,
    { ...options, responseType: "blob" }
  );
