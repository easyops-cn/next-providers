import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceRelationList } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

/** body */
export type InstanceRelationApi_DeleteInstanceRelationV2RequestBody =
  Partial<ModelInstanceRelationList>;

export interface InstanceRelationApi_DeleteInstanceRelationV2ResponseBody {
  /** 关系列表值 */
  list?: InstanceRelationApi_DeleteInstanceRelationV2ResponseBody_list_item[];
}

/**
 * @description 删除实例关系v2, 支持传数组的方式批量删除
 * @endpoint POST /v2/object_relation/:relation_id/relation_instance/delete
 */
export const InstanceRelationApi_deleteInstanceRelationV2 = async (
  relation_id: string | number,
  data: InstanceRelationApi_DeleteInstanceRelationV2RequestBody,
  options?: HttpOptions
): Promise<InstanceRelationApi_DeleteInstanceRelationV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.DeleteInstanceRelationV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceRelationApi_DeleteInstanceRelationV2ResponseBody>
    >(
      `api/gateway/cmdb.instance_relation.DeleteInstanceRelationV2/v2/object_relation/${relation_id}/relation_instance/delete`,
      data,
      options
    )
  ).data;

export interface InstanceRelationApi_DeleteInstanceRelationV2ResponseBody_list_item {
  /** 左边实例id */
  left_instance_id?: string;

  /** 右边实例id */
  right_instance_id?: string;
}
