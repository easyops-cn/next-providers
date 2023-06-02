import { http, HttpOptions } from "@next-core/brick-http";

export interface InitializationApi_InitRelationsRequestBody {
  /** org */
  org: number;
}

/**
 * @description 初始化核心模型关系[内部]
 * @endpoint POST /initialization/relations
 */
export const InitializationApi_initRelations = (
  data: InitializationApi_InitRelationsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.initialization.InitRelations@1.0.0 */ http.post<void>(
    "api/gateway/cmdb.initialization.InitRelations/initialization/relations",
    data,
    options
  );
