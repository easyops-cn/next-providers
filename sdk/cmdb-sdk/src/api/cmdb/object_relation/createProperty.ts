import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectAttr } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectRelationApi_CreatePropertyRequestBody {
  /** 属性ID */
  id: string;

  /** 属性名称 */
  name: string;

  /** 'true' 唯一属性 */
  unique?: "true" | "false";

  /** 'true' 只读属性，'false' 可写属性 */
  readonly?: "true" | "false";

  /** 'true' 必填属性，'false' 非必填属性 */
  required?: "true" | "false";

  /** 属性分类 */
  tag?: string[];

  /** 属性的描述 */
  description?: string;

  /** 属性的提示 */
  tips?: string;

  /** 属性值类型，不同类型有不同字段 */
  value: ModelObjectAttr["value"];
}

export type ObjectRelationApi_CreatePropertyResponseBody =
  Partial<ModelObjectAttr>;

/**
 * @description 创建关系属性定义
 * @endpoint POST /object_relation/attr/:relation_id
 */
export const ObjectRelationApi_createProperty = async (
  relation_id: string | number,
  data: ObjectRelationApi_CreatePropertyRequestBody,
  options?: HttpOptions
): Promise<ObjectRelationApi_CreatePropertyResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.CreateProperty@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ObjectRelationApi_CreatePropertyResponseBody>
    >(
      `api/gateway/cmdb.object_relation.CreateProperty/object_relation/attr/${relation_id}`,
      data,
      options
    )
  ).data;
