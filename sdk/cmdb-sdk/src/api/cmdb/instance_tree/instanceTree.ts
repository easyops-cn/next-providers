import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceTreeRootNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceTreeRequestBody {
  /** 树定义 */
  tree: Partial<ModelInstanceTreeRootNode>;

  /** 全局忽略与父级无关联实例,默认false */
  ignore_single?: boolean;
}

export type InstanceTreeResponseBody = Record<string, any>;

/**
 * @description 获取实例树完整数据
 * @endpoint POST /instance_tree/full
 */
export const instanceTree = async (
  data: InstanceTreeRequestBody,
  options?: HttpOptions
): Promise<InstanceTreeResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<InstanceTreeResponseBody>>(
      "api/gateway/cmdb.instance_tree.InstanceTree/instance_tree/full",
      data,
      options
    )
  ).data;
