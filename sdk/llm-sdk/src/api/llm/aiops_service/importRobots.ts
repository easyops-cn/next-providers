import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_ImportRobotsRequestBody {
  /** 需要导入的文件 */
  robots: File;

  /** 是否覆盖原来的 */
  update?: boolean;
}

export interface AiopsServiceApi_ImportRobotsResponseBody {
  /** 导入成功的robot数量 */
  robots?: number;
}

/**
 * @description 导入robots
 * @endpoint POST /api/v1/llm/aiops_service/robots/import
 */
export const AiopsServiceApi_importRobots = async (
  data: AiopsServiceApi_ImportRobotsRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_ImportRobotsResponseBody> => {
  /**! @contract easyops.api.llm.aiops_service.ImportRobots@1.0.0 */ const _formData =
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
      ResponseBodyWrapper<AiopsServiceApi_ImportRobotsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/robots/import",
      _formData,
      options
    )
  ).data;
};
