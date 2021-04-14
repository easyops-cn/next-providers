import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroappapiorchestration } from "../../../model/micro_app";

export interface ImportMicroAppApisRequestBody {
  /** micro_app id */
  appId: string;

  /** api编排列表 */
  apiList: Partial<ModelMicroappapiorchestration>[];
}

/**
 * @description 导入api编排
 * @endpoint POST /api/v1/apis/import
 */
export const importMicroAppApis = (
  data: ImportMicroAppApisRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.orchestration.ImportMicroAppApis */ http.post<void>(
    "api/gateway/micro_app.orchestration.ImportMicroAppApis/api/v1/apis/import",
    data,
    options
  );
