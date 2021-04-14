import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroappapiorchestration } from "../../../model/micro_app";

export interface ExportApisRequestBody {
  /** cmdb实例标识 */
  instanceId?: string;

  /** api编排列表 */
  apiList?: Partial<ModelMicroappapiorchestration>[];
}

/**
 * @description 同步api编排到开发环境
 * @endpoint POST /api/v1/apis/export
 */
export const exportApis = (
  data: ExportApisRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.apis.ExportApis */ http.post<void>(
    "api/gateway/next_builder.apis.ExportApis/api/v1/apis/export",
    data,
    options
  );
