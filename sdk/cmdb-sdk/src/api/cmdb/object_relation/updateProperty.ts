import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectAttr } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 属性信息 */
export interface ObjectRelationApi_UpdatePropertyRequestBody {
  /** 属性名称 */
  name?: string;

  /** 'true' 唯一属性 */
  unique?: "true" | "false";

  /** 'true' 只读属性，'false' 可写属性 */
  readonly?: "true" | "false";

  /** 'true' 必填属性，'false' 非必填属性 */
  required?: "true" | "false";

  /** 属性分类 */
  tag?: string[];

  /** 属性值类型，不同类型有不同字段 */
  value?: ModelObjectAttr["value"];

  /** 属性的描述 */
  description?: string;

  /** 属性的提示 */
  tips?: string;
}

export type ObjectRelationApi_UpdatePropertyResponseBody =
  Partial<ModelObjectAttr>;

/**
 * @description 更新关系属性定义
 * @endpoint PUT /object_relation/attr/:relation_id/:attr_id
 */
export const ObjectRelationApi_updateProperty = async (
  relation_id: string | number,
  attr_id: string | number,
  data: ObjectRelationApi_UpdatePropertyRequestBody,
  options?: HttpOptions
): Promise<ObjectRelationApi_UpdatePropertyResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.UpdateProperty@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ObjectRelationApi_UpdatePropertyResponseBody>
    >(
      `api/gateway/cmdb.object_relation.UpdateProperty/object_relation/attr/${relation_id}/${attr_id}`,
      data,
      options
    )
  ).data;
