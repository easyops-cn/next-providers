import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStrategyPathNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PathSearchV3RequestBody {
  /** 查询路径 */
  path: Partial<ModelStrategyPathNode>[];

  /** 以alias_id表示的字段排序 {"APP.name": -1} */
  alias_id_sort?: Record<string, any>;

  /** 页数 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export interface PathSearchV3ResponseBody {
  /** 页数 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 查询总数 */
  total?: number;

  /** 结果列表 eg: [[{"_object_id": "APP","attrId1": 2.355, "instanceId": "xxxx","name": "test1253" },{"_object_id": "CLUSTER","instanceId": "xxxxx","name": "dev"}]] */
  list?: any;
}

/**
 * @description 实例路径查询v3
 * @endpoint POST /v3/path/_search
 */
export const pathSearchV3 = async (
  data: PathSearchV3RequestBody,
  options?: HttpOptions
): Promise<PathSearchV3ResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<PathSearchV3ResponseBody>>(
      "api/gateway/cmdb.instance_path_search.PathSearchV3/v3/path/_search",
      data,
      options
    )
  ).data;
