import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStrategyPathNodeBasic } from "../../../model/cmdb";

export interface GetObjectRelationRelatedKeyRequestParams {
  /** 路径起始资源模型ID */
  src_object_id: string;

  /** 路径结束资源模型ID */
  dst_object_id: string;

  /** 搜索路径最大深度 */
  max_depth?: number;

  /** 搜索最大模型数 */
  max_sub_node?: number;

  /** 是否带环搜索，默认false */
  with_cycle?: boolean;

  /** 必须按序经过的模型，多个以分号分隔， 如APP;HOST */
  white_list?: string;

  /** 屏蔽的模型，多个以分号分隔， 如APP;HOST */
  black_list?: string;

  /** 若节点关联抽象关系，是否展示关联的子模型节点 */
  show_inherit_node?: boolean;
}

export interface GetObjectRelationRelatedKeyResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 路径列表 */
  data: GetObjectRelationRelatedKeyResponseBody_data_item[];
}

/**
 * @description 获取资源模型路径实例查询key
 * @endpoint GET /object_relation_related_key
 */
export const getObjectRelationRelatedKey = (
  params: GetObjectRelationRelatedKeyRequestParams,
  options?: HttpOptions
): Promise<GetObjectRelationRelatedKeyResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetObjectRelationRelatedKey */ http.get<GetObjectRelationRelatedKeyResponseBody>(
    "api/gateway/cmdb.cmdb_object.GetObjectRelationRelatedKey/object_relation_related_key",
    { ...options, params }
  );

export interface GetObjectRelationRelatedKeyResponseBody_data_item {
  /** 自动生成哈希id */
  id?: string;

  /** 路径描述 */
  label?: string;

  /** query条件key */
  reverseQueryKey?: string;

  /** 路径 */
  path?: Partial<ModelStrategyPathNodeBasic>[];
}
