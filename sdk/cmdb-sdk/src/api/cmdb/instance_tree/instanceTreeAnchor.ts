import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceTreeRootNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceTreeApi_InstanceTreeAnchorRequestBody {
  /** 树定义 */
  tree: Partial<ModelInstanceTreeRootNode>;

  /** 全局忽略与父级无关联实例,默认false */
  ignore_single?: boolean;

  /** 模型Id */
  object_id: string;

  /** 实例Id */
  instanceId: string;
}

export type InstanceTreeApi_InstanceTreeAnchorResponseBody = Record<
  string,
  any
>;

/**
 * @description 实例树定位
 * @endpoint POST /instance_tree/anchor
 */
export const InstanceTreeApi_instanceTreeAnchor = async (
  data: InstanceTreeApi_InstanceTreeAnchorRequestBody,
  options?: HttpOptions
): Promise<InstanceTreeApi_InstanceTreeAnchorResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_tree.InstanceTreeAnchor */ (
    await http.post<
      ResponseBodyWrapper<InstanceTreeApi_InstanceTreeAnchorResponseBody>
    >(
      "api/gateway/cmdb.instance_tree.InstanceTreeAnchor/instance_tree/anchor",
      data,
      options
    )
  ).data;
