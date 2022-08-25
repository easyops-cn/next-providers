import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectRelation } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectRelationApi_UpdateRequestBody {
  /** 关系名称, 不是必填, 而且在引入了 left_description 和 right_description 之后这个字段几乎处于废弃状态 */
  name: string;

  /** 是与 left_id 相反的含义, 但仅用于前端展示 (p.s.: 关系左端模型的描述) */
  left_description: string;

  /** 关系左端备注描述 (由于name和description本来存在混淆使用的问题，所以重新加一个remark字段表示描述) */
  left_remark?: string;

  /** 关系在左端模型的哪些分组里 */
  left_groups: string[];

  /** 关系左端标签 */
  left_tags: string[];

  /** 关系左端的资源模型实例是否必须包含关系 */
  left_required?: boolean;

  /** 是与 right_id 相反的含义, 但仅用于前端展示 (p.s.: 关系右端模型的描述) */
  right_description: string;

  /** 关系右端备注描述 (由于name和description本来存在混淆使用的问题，所以重新加一个remark字段表示描述) */
  right_remark?: string;

  /** 关系在右端模型的哪些分组里 */
  right_groups: string[];

  /** 关系右端标签 */
  right_tags: string[];

  /** 关系右端的资源模型实例是否必须包含关系 */
  right_required?: boolean;
}

export type ObjectRelationApi_UpdateResponseBody = Partial<ModelObjectRelation>;

/**
 * @description 更新模型关系定义
 * @endpoint PUT /object_relation/:relation_id
 */
export const ObjectRelationApi_update = async (
  relation_id: string | number,
  data: ObjectRelationApi_UpdateRequestBody,
  options?: HttpOptions
): Promise<ObjectRelationApi_UpdateResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.Update@1.0.0 */ (
    await http.put<ResponseBodyWrapper<ObjectRelationApi_UpdateResponseBody>>(
      `api/gateway/cmdb.object_relation.Update/object_relation/${relation_id}`,
      data,
      options
    )
  ).data;
