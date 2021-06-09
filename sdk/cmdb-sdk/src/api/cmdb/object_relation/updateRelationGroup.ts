import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectRelationGroup } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectRelationApi_UpdateRelationGroupRequestBody {
  /** 分组名称 */
  name?: string;

  /** 分组中的关系 */
  relations?: ObjectRelationApi_UpdateRelationGroupRequestBody_relations_item[];
}

export type ObjectRelationApi_UpdateRelationGroupResponseBody =
  Partial<ModelObjectRelationGroup>;

/**
 * @description 更新模型关系分组
 * @endpoint PUT /object/:object_id/relation_group/:id
 */
export const ObjectRelationApi_updateRelationGroup = async (
  object_id: string | number,
  id: string | number,
  data: ObjectRelationApi_UpdateRelationGroupRequestBody,
  options?: HttpOptions
): Promise<ObjectRelationApi_UpdateRelationGroupResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.UpdateRelationGroup */ (
    await http.put<
      ResponseBodyWrapper<ObjectRelationApi_UpdateRelationGroupResponseBody>
    >(
      `api/gateway/cmdb.object_relation.UpdateRelationGroup/object/${object_id}/relation_group/${id}`,
      data,
      options
    )
  ).data;

export interface ObjectRelationApi_UpdateRelationGroupRequestBody_relations_item {
  /** 表示关系的left_id或者right_id的值, 用于表示分组的关系是关系的哪一端 */
  relation_side_id?: string;
}
