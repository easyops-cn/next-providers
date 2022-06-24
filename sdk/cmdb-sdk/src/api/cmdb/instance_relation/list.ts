import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceBasicInfo } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceRelationApi_ListRequestBody {
  /** 关系两端实例id */
  pairs: InstanceRelationApi_ListRequestBody_pairs_item[];

  /** 返回关系属性字段 */
  fields?: string[];
}

export interface InstanceRelationApi_ListResponseBody {
  /** 实例关系列表 */
  list?: InstanceRelationApi_ListResponseBody_list_item[];
}

/**
 * @description 查询实例关系列表
 * @endpoint POST /instance_relation/:relationId/list
 */
export const InstanceRelationApi_list = async (
  relationId: string | number,
  data: InstanceRelationApi_ListRequestBody,
  options?: HttpOptions
): Promise<InstanceRelationApi_ListResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.List@1.0.0 */ (
    await http.post<ResponseBodyWrapper<InstanceRelationApi_ListResponseBody>>(
      `api/gateway/cmdb.instance_relation.List/instance_relation/${relationId}/list`,
      data,
      options
    )
  ).data;

export interface InstanceRelationApi_ListRequestBody_pairs_item {
  /** 本端实例id, 对应关系定义left_object_id模型的实例 */
  leftInstanceId?: string;

  /** 对端实例id, 对应关系定义right_object_id模型的实例 */
  rightInstanceId?: string;
}

export interface InstanceRelationApi_ListResponseBody_list_item {
  /** 关系id */
  relationId?: string;

  /** 本端实例信息 */
  leftInstance?: Partial<ModelInstanceBasicInfo>;

  /** 对端实例信息 */
  rightInstance?: Partial<ModelInstanceBasicInfo>;

  /** 关系属性信息 */
  properties?: Record<string, any>;
}
