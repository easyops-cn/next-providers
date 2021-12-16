import { http, HttpOptions } from "@next-core/brick-http";

export interface InitializationApi_InitDatabaseRequestBody {
  /** org */
  org: number;
}

/**
 * @description 初始化DB[内部]
 * @endpoint POST /initialization/database
 */
export const InitializationApi_initDatabase = (
  data: InitializationApi_InitDatabaseRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.initialization.InitDatabase@1.0.0 */ http.post<void>(
    "api/gateway/cmdb.initialization.InitDatabase/initialization/database",
    data,
    options
  );
