import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceTreeRootNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceTreeApi_InstanceTreeRequestBody {
  /** 树定义 */
  tree: Partial<ModelInstanceTreeRootNode>;

  /** 全局忽略与父级无关联实例,默认false */
  ignore_single?: boolean;
}

export type InstanceTreeApi_InstanceTreeResponseBody = Record<string, any>;

/**
 * @description 获取实例树完整数据
 * @endpoint POST /instance_tree/full
 */
export const InstanceTreeApi_instanceTree = async (
  data: InstanceTreeApi_InstanceTreeRequestBody,
  options?: HttpOptions
): Promise<InstanceTreeApi_InstanceTreeResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_tree.InstanceTree@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceTreeApi_InstanceTreeResponseBody>
    >(
      "api/gateway/cmdb.instance_tree.InstanceTree/instance_tree/full",
      data,
      options
    )
  ).data;
