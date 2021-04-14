import { http, HttpOptions } from "@next-core/brick-http";

export interface InitDatabaseRequestBody {
  /** org */
  org: number;
}

/**
 * @description 初始化DB[内部]
 * @endpoint POST /initialization/database
 */
export const initDatabase = (
  data: InitDatabaseRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.initialization.InitDatabase */ http.post<void>(
    "api/gateway/cmdb.initialization.InitDatabase/initialization/database",
    data,
    options
  );
