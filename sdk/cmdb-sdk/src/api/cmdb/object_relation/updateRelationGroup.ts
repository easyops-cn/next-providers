import { http, HttpOptions } from '@next-core/brick-http';
import { ModelObjectRelationGroup } from '../../../model/cmdb';
import { ResponseBodyWrapper } from '../../../wrapper';

export interface UpdateRelationGroupRequestBody {
  /** 分组名称 */
  name?: string;

  /** 分组中的关系 */
  relations?: UpdateRelationGroupRequestBody_relations_item[];
}

export type UpdateRelationGroupResponseBody = Partial<ModelObjectRelationGroup>;

/**
 * @description 更新模型关系分组
 * @endpoint PUT /object/:object_id/relation_group/:id
 */
export const updateRelationGroup = async (
  object_id: string | number,
  id: string | number,
  data: UpdateRelationGroupRequestBody,
  options?: HttpOptions
): Promise<UpdateRelationGroupResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<UpdateRelationGroupResponseBody>>(
      `api/gateway/cmdb.object_relation.UpdateRelationGroup/object/${object_id}/relation_group/${id}`,
      data,
      options
    )
  ).data;

export interface UpdateRelationGroupRequestBody_relations_item {
  /** 表示关系的left_id或者right_id的值, 用于表示分组的关系是关系的哪一端 */
  relation_side_id?: string;
}
