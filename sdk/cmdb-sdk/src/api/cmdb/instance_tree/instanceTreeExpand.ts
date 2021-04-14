import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceTreeRootNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceTreeExpandRequestBody {
  /** 树定义 */
  tree: Partial<ModelInstanceTreeRootNode>;

  /** 全局忽略与父级无关联实例,默认false */
  ignore_single?: boolean;

  /** 模型Id,不传则展开首层 */
  object_id?: string;

  /** 实例Id */
  instanceId?: string;
}

export type InstanceTreeExpandResponseBody = Record<string, any>;

/**
 * @description 展开实例树某一级
 * @endpoint POST /instance_tree/expand
 */
export const instanceTreeExpand = async (
  data: InstanceTreeExpandRequestBody,
  options?: HttpOptions
): Promise<InstanceTreeExpandResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_tree.InstanceTreeExpand */ (
    await http.post<ResponseBodyWrapper<InstanceTreeExpandResponseBody>>(
      "api/gateway/cmdb.instance_tree.InstanceTreeExpand/instance_tree/expand",
      data,
      options
    )
  ).data;
