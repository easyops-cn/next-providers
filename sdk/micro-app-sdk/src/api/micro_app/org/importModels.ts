import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 导入模型和实例数据
 * @endpoint POST /api/v1/org/import-models
 */
export const OrgApi_importModels = (options?: HttpOptions): Promise<void> =>
  /**! @contract easyops.api.micro_app.org.ImportModels@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.org.ImportModels/api/v1/org/import-models",
    undefined,
    options
  );
