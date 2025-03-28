import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_ImportAgentsRequestBody {
  /** 需要导入的文件 */
  agents: File;

  /** 是否覆盖原来的 */
  update?: boolean;
}

export interface AiopsServiceApi_ImportAgentsResponseBody {
  /** 导入成功的agent数量 */
  agents?: number;
}

/**
 * @description 导入agent
 * @endpoint POST /api/v1/llm/aiops_service/agents/import
 */
export const AiopsServiceApi_importAgents = async (
  data: AiopsServiceApi_ImportAgentsRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_ImportAgentsResponseBody> => {
  /**! @contract easyops.api.llm.aiops_service.ImportAgents@1.0.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_ImportAgentsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/agents/import",
      _formData,
      options
    )
  ).data;
};
