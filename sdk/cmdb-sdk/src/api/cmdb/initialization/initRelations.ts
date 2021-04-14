import { http, HttpOptions } from "@next-core/brick-http";

export interface InitRelationsRequestBody {
  /** org */
  org: number;
}

/**
 * @description 初始化核心模型关系[内部]
 * @endpoint POST /initialization/relations
 */
export const initRelations = (
  data: InitRelationsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.initialization.InitRelations */ http.post<void>(
    "api/gateway/cmdb.initialization.InitRelations/initialization/relations",
    data,
    options
  );
