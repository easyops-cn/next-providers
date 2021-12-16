import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceTreeRootNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceTreeApi_InstanceTreeAnchorV2RequestBody {
  /** 树定义 */
  tree: Partial<ModelInstanceTreeRootNode>;

  /** 全局忽略与父级无关联实例,默认false */
  ignore_single?: boolean;

  /** 模型Id */
  object_id: string;

  /** 实例Id列表，子节点Id必须放置最后 */
  instanceIdList: string[];
}

export type InstanceTreeApi_InstanceTreeAnchorV2ResponseBody = Record<
  string,
  any
>;

/**
 * @description 实例树定位V2
 * @endpoint POST /v2/instance_tree/anchor
 */
export const InstanceTreeApi_instanceTreeAnchorV2 = async (
  data: InstanceTreeApi_InstanceTreeAnchorV2RequestBody,
  options?: HttpOptions
): Promise<InstanceTreeApi_InstanceTreeAnchorV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_tree.InstanceTreeAnchorV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceTreeApi_InstanceTreeAnchorV2ResponseBody>
    >(
      "api/gateway/cmdb.instance_tree.InstanceTreeAnchorV2/v2/instance_tree/anchor",
      data,
      options
    )
  ).data;
