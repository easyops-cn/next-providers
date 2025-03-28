import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsToolsApi_ExecLlmToolsRequestBody {
  /** 要执行的工具名称，也是id */
  name: string;

  /** 执行工具的参数 */
  arguments?: Record<string, any>;

  /** 执行工具的配置，例如agentId，"agentId":"cmdb_search_agent" */
  config?: Record<string, any>;
}

export interface AiopsToolsApi_ExecLlmToolsResponseBody {
  /** 执行结果，返回类型，目前只支持text */
  type?: string;

  /** 执行工具的结果 */
  result?: any;
}

/**
 * @description 执行大模型工具，非MCP协议的一部分
 * @endpoint POST /api/v1/llm/tools/exec
 */
export const AiopsToolsApi_execLlmTools = async (
  data: AiopsToolsApi_ExecLlmToolsRequestBody,
  options?: HttpOptions
): Promise<AiopsToolsApi_ExecLlmToolsResponseBody> =>
  /**! @contract easyops.api.llm.aiops_tools.ExecLlmTools@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsToolsApi_ExecLlmToolsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/tools/exec",
      data,
      options
    )
  ).data;
