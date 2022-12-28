import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceRelationApi_UpdateInstanceRelationRequestBody {
  /** 关系列表值 */
  list?: InstanceRelationApi_UpdateInstanceRelationRequestBody_list_item[];
}

export interface InstanceRelationApi_UpdateInstanceRelationResponseBody {
  /** 关系列表值 */
  list?: InstanceRelationApi_UpdateInstanceRelationResponseBody_list_item[];
}

/**
 * @description 更新实例关系属性值
 * @endpoint PUT /object_relation/:relation_id/relation_instance
 */
export const InstanceRelationApi_updateInstanceRelation = async (
  relation_id: string | number,
  data: InstanceRelationApi_UpdateInstanceRelationRequestBody,
  options?: HttpOptions
): Promise<InstanceRelationApi_UpdateInstanceRelationResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.UpdateInstanceRelation@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<InstanceRelationApi_UpdateInstanceRelationResponseBody>
    >(
      `api/gateway/cmdb.instance_relation.UpdateInstanceRelation/object_relation/${relation_id}/relation_instance`,
      data,
      options
    )
  ).data;

export interface InstanceRelationApi_UpdateInstanceRelationRequestBody_list_item {
  /** 左边实例id */
  left_instance_id?: string;

  /** 右边实例id */
  right_instance_id?: string;

  /** 关系属性值 */
  properties?: Record<string, any>;
}

export interface InstanceRelationApi_UpdateInstanceRelationResponseBody_list_item {
  /** 左边实例id */
  left_instance_id?: string;

  /** 右边实例id */
  right_instance_id?: string;

  /** 关系属性值，返回数据可以不赋值 */
  properties?: Record<string, any>;
}
