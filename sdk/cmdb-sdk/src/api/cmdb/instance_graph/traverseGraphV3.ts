import { http, HttpOptions } from "@next-core/brick-http";
import { ModelTraverseChildNodeV2 } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceGraphApi_TraverseGraphV3RequestBody {
  /** 模型Id */
  object_id: string;

  /** 实例的过滤条件 (过滤条件不仅支持属性的过滤，也支持关系字段的过滤) */
  query: Record<string, any>;

  /** 指定返回此关系指向模型的fields,支持子模型属性 */
  select_fields: string[];

  /** 子节点列表 */
  child: Partial<ModelTraverseChildNodeV2>[];

  /** 是否需要返回图的方向 */
  need_redirection?: boolean;
}

export interface InstanceGraphApi_TraverseGraphV3ResponseBody {
  /** 根节点实例列表 */
  topic_vertices: Record<string, any>[];

  /** 节点实例列表 */
  vertices: Record<string, any>[];

  /** 关系列表 */
  edges: InstanceGraphApi_TraverseGraphV3ResponseBody_edges_item[];
}

/**
 * @description 图遍历查询v3,支持父模型定义跳转
 * @endpoint POST /v3/instance/traverse
 */
export const InstanceGraphApi_traverseGraphV3 = async (
  data: InstanceGraphApi_TraverseGraphV3RequestBody,
  options?: HttpOptions
): Promise<InstanceGraphApi_TraverseGraphV3ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_graph.TraverseGraphV3@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceGraphApi_TraverseGraphV3ResponseBody>
    >(
      "api/gateway/cmdb.instance_graph.TraverseGraphV3/v3/instance/traverse",
      data,
      options
    )
  ).data;

export interface InstanceGraphApi_TraverseGraphV3ResponseBody_edges_item {
  /** 关系Id */
  relation_id?: string;

  /** 实例Id */
  out?: string;

  /** 实例Id, 例如:「 应用的负责人 」 这一关系数据中, 「应用」数据是 out, 「用户」数据是 in */
  in?: string;

  /** 关系别名 */
  out_name?: string;

  /** 属性数据 */
  properties?: Record<string, any>;
}
