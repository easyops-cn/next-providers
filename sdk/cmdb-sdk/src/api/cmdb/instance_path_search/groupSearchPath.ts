import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstancePathSearchApi_GroupSearchPathRequestBody {
  /** instanceId列表 */
  instanceIds: string[];

  /** 路径列表 */
  path?: InstancePathSearchApi_GroupSearchPathRequestBody_path_item[];
}

export interface InstancePathSearchApi_GroupSearchPathResponseBody {
  /** 结果总数 */
  total?: number;

  /** 结果列表 */
  list?: any;
}

/**
 * @description 聚合的关系查询[废弃]
 * @endpoint POST /object/:object_id/instance/_group_search_path
 */
export const InstancePathSearchApi_groupSearchPath = async (
  object_id: string | number,
  data: InstancePathSearchApi_GroupSearchPathRequestBody,
  options?: HttpOptions
): Promise<InstancePathSearchApi_GroupSearchPathResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_path_search.GroupSearchPath@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstancePathSearchApi_GroupSearchPathResponseBody>
    >(
      `api/gateway/cmdb.instance_path_search.GroupSearchPath/object/${object_id}/instance/_group_search_path`,
      data,
      options
    )
  ).data;

export interface InstancePathSearchApi_GroupSearchPathRequestBody_path_item {
  /** 类型 */
  type?: string;

  /** id */
  id?: string;
}
