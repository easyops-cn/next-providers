import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectRelationGroup } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectRelationApi_CreateRelationGroupRequestBody {
  /** 分组ID */
  id: string;

  /** 分组名称 */
  name: string;

  /** 分组中的关系 */
  relations?: ObjectRelationApi_CreateRelationGroupRequestBody_relations_item[];
}

export type ObjectRelationApi_CreateRelationGroupResponseBody = Partial<ModelObjectRelationGroup>;

/**
 * @description 创建模型关系分组
 * @endpoint POST /object/:object_id/relation_group
 */
export const ObjectRelationApi_createRelationGroup = async (
  object_id: string | number,
  data: ObjectRelationApi_CreateRelationGroupRequestBody,
  options?: HttpOptions
): Promise<ObjectRelationApi_CreateRelationGroupResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.CreateRelationGroup */ (
    await http.post<
      ResponseBodyWrapper<ObjectRelationApi_CreateRelationGroupResponseBody>
    >(
      `api/gateway/cmdb.object_relation.CreateRelationGroup/object/${object_id}/relation_group`,
      data,
      options
    )
  ).data;

export interface ObjectRelationApi_CreateRelationGroupRequestBody_relations_item {
  /** 表示关系的left_id或者right_id的值, 用于表示分组的关系是关系的哪一端 */
  relation_side_id?: string;
}
