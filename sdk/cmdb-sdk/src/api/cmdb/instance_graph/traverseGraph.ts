import { http, HttpOptions } from "@next-core/brick-http";
import { ModelTraverseChildNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceGraphApi_TraverseGraphRequestBody {
  /** 模型Id */
  object_id: string;

  /** 实例的过滤条件 (过滤条件不仅支持属性的过滤，也支持关系字段的过滤) */
  query: Record<string, any>;

  /** 指定返回此关系指向模型的fields */
  fields: Record<string, any>;

  /** 子节点列表 */
  child: Partial<ModelTraverseChildNode>[];
}

export interface InstanceGraphApi_TraverseGraphResponseBody {
  /** 根节点实例列表 */
  topic_vertices: Record<string, any>[];

  /** 节点实例列表 */
  vertices: Record<string, any>[];

  /** 关系列表 */
  edges: InstanceGraphApi_TraverseGraphResponseBody_edges_item[];
}

/**
 * @description 图遍历查询
 * @endpoint POST /instance/traverse
 */
export const InstanceGraphApi_traverseGraph = async (
  data: InstanceGraphApi_TraverseGraphRequestBody,
  options?: HttpOptions
): Promise<InstanceGraphApi_TraverseGraphResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_graph.TraverseGraph */ (
    await http.post<
      ResponseBodyWrapper<InstanceGraphApi_TraverseGraphResponseBody>
    >(
      "api/gateway/cmdb.instance_graph.TraverseGraph/instance/traverse",
      data,
      options
    )
  ).data;

export interface InstanceGraphApi_TraverseGraphResponseBody_edges_item {
  /** 关系Id */
  relation_id?: string;

  /** 实例Id */
  out?: string;

  /** 实例Id, 例如:「 应用的负责人 」 这一关系数据中, 「应用」数据是 out, 「用户」数据是 in */
  in?: string;

  /** 关系别名 */
  out_name?: string;
}
