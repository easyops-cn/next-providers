import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_ImportToolsRequestBody {
  /** 需要导入的文件 */
  tools: File;

  /** 是否覆盖原来的 */
  update?: boolean;
}

export interface AiopsServiceApi_ImportToolsResponseBody {
  /** 导入成功的agent数量 */
  tools?: number;
}

/**
 * @description 导入tools
 * @endpoint POST /api/v1/llm/aiops_service/tools/import
 */
export const AiopsServiceApi_importTools = async (
  data: AiopsServiceApi_ImportToolsRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_ImportToolsResponseBody> => {
  /**! @contract easyops.api.llm.aiops_service.ImportTools@1.0.0 */ const _formData =
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
      ResponseBodyWrapper<AiopsServiceApi_ImportToolsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/tools/import",
      _formData,
      options
    )
  ).data;
};
