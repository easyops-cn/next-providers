import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceTreeRootNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceTreeSearchRequestBody {
  /** 树定义 */
  tree: Partial<ModelInstanceTreeRootNode>;

  /** 全局忽略与父级无关联实例,默认false */
  ignore_single?: boolean;

  /** 搜索条件 */
  query: Record<string, any>;
}

export type InstanceTreeSearchResponseBody = Record<string, any>;

/**
 * @description 整树搜索
 * @endpoint POST /instance_tree/search
 */
export const instanceTreeSearch = async (
  data: InstanceTreeSearchRequestBody,
  options?: HttpOptions
): Promise<InstanceTreeSearchResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<InstanceTreeSearchResponseBody>>(
      "api/gateway/cmdb.instance_tree.InstanceTreeSearch/instance_tree/search",
      data,
      options
    )
  ).data;
