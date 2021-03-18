import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStrategyPathNode } from "../../../model/cmdb";

export interface PathSearchExportV3RequestBody {
  /** 查询路径 */
  path: Partial<ModelStrategyPathNode>[];

  /** 以alias_id表示的字段排序 {"APP.name": -1} */
  alias_id_sort?: Record<string, any>;

  /** 是否导出所有字段 */
  exportAllFields?: boolean;
}

/**
 * @description 实例路径查询v3导出excel
 * @endpoint POST /v3/path/_search/export/excel
 */
export const pathSearchExportV3 = (
  data: PathSearchExportV3RequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  http.post<Blob>(
    "api/gateway/cmdb.instance_path_search.PathSearchExportV3/v3/path/_search/export/excel",
    data,
    { ...options, responseType: "blob" }
  );
