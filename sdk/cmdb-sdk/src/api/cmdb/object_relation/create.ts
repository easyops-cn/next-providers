import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectRelation } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectRelationApi_CreateRequestBody {
  /** 关系名称, 不是必填, 而且在引入了 left_description 和 right_description 之后这个字段几乎处于废弃状态 */
  name: string;

  /** 关系左端的模型ID */
  left_object_id: string;

  /** 关系左端模型中表达右端模型实例的别名字段: 比如应用的负责人需要在应用的实例中表达出一个字段; 对已有模型添加关系时这个ID需要加下划线前缀避免冲突 */
  left_id: string;

  /** 是与 left_id 相反的含义, 但仅用于前端展示 (p.s.: 关系左端模型的描述) */
  left_description: string;

  /** 关系左端的资源模型实例至少包含多少数量的关系: 目前来说这个字段是过度设计的字段, 一般填0就好了 */
  left_min?: number;

  /** 关系左端的资源模型实例最多包含多少数量的关系: 有数据库级别的索引支持, 一般情况填1 或者 -1, -1表示无限多 */
  left_max?: number;

  /** 关系在左端模型的哪些分组里 */
  left_groups?: string[];

  /** 关系左端标签 */
  left_tags?: string[];

  /** 关系右端的模型ID */
  right_object_id: string;

  /** 关系右端模型中表达左端模型实例的别名字段: 比如应用的负责人需要在应用的实例中表达出一个字段; 对已有模型添加关系时这个ID需要加下划线前缀避免冲突 */
  right_id: string;

  /** 是与 right_id 相反的含义, 但仅用于前端展示 (p.s.: 关系右端模型的描述) */
  right_description: string;

  /** 关系右端的资源模型实例至少包含多少数量的关系: 目前来说这个字段是过度设计的字段, 一般填 0 就好了 */
  right_min?: number;

  /** 关系右端的资源模型实例最多包含多少数量的关系: 有数据库级别的索引支持, 一般情况填 1 或者 -1, -1表示无限多 */
  right_max?: number;

  /** 关系在右端模型的哪些分组里 */
  right_groups?: string[];

  /** 关系右端标签 */
  right_tags?: string[];
}

export type ObjectRelationApi_CreateResponseBody = Partial<ModelObjectRelation>;

/**
 * @description 创建模型关系定义
 * @endpoint POST /object_relation
 */
export const ObjectRelationApi_create = async (
  data: ObjectRelationApi_CreateRequestBody,
  options?: HttpOptions
): Promise<ObjectRelationApi_CreateResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.Create@1.0.0 */ (
    await http.post<ResponseBodyWrapper<ObjectRelationApi_CreateResponseBody>>(
      "api/gateway/cmdb.object_relation.Create/object_relation",
      data,
      options
    )
  ).data;
