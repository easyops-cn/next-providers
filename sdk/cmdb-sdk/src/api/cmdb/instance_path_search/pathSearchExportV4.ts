import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStrategyPathNode } from "../../../model/cmdb";

export interface PathSearchExportV4RequestBody {
  /** 查询路径 */
  path: Partial<ModelStrategyPathNode>[];

  /** 以alias_id表示的字段排序 {"APP.name": -1} */
  alias_id_sort?: Record<string, any>;
}

/**
 * @description 实例路径查询v4导出excel
 * @endpoint POST /v4/path/_search/export/excel
 */
export const pathSearchExportV4 = (
  data: PathSearchExportV4RequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  http.post<Blob>(
    "api/gateway/cmdb.instance_path_search.PathSearchExportV4/v4/path/_search/export/excel",
    data,
    { ...options, responseType: "blob" }
  );
