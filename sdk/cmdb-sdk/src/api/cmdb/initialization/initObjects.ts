import { http, HttpOptions } from "@next-core/brick-http";

export interface InitObjectsRequestBody {
  /** org */
  org: number;
}

/**
 * @description 初始化核心模型[内部]
 * @endpoint POST /initialization/objects
 */
export const initObjects = (
  data: InitObjectsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/cmdb.initialization.InitObjects/initialization/objects",
    data,
    options
  );
