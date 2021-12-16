import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstancePathSearchApi_FlattenSearchPathRequestBody {
  /** instanceId列表 */
  instanceIds: string[];

  /** 路径列表 */
  path?: InstancePathSearchApi_FlattenSearchPathRequestBody_path_item[];
}

export interface InstancePathSearchApi_FlattenSearchPathResponseBody {
  /** 结果总数 */
  total?: number;

  /** 结果列表 */
  list?: any;
}

/**
 * @description 平铺的关系查询[废弃]
 * @endpoint POST /object/:object_id/instance/_flatten_search_path
 */
export const InstancePathSearchApi_flattenSearchPath = async (
  object_id: string | number,
  data: InstancePathSearchApi_FlattenSearchPathRequestBody,
  options?: HttpOptions
): Promise<InstancePathSearchApi_FlattenSearchPathResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_path_search.FlattenSearchPath@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstancePathSearchApi_FlattenSearchPathResponseBody>
    >(
      `api/gateway/cmdb.instance_path_search.FlattenSearchPath/object/${object_id}/instance/_flatten_search_path`,
      data,
      options
    )
  ).data;

export interface InstancePathSearchApi_FlattenSearchPathRequestBody_path_item {
  /** 类型 */
  type?: string;

  /** id */
  id?: string;
}
