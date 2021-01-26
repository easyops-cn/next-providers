import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectAttr } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 属性信息 */
export interface UpdatePropertyRequestBody {
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

export type UpdatePropertyResponseBody = Partial<ModelObjectAttr>;

/**
 * @description 更新模型属性
 * @endpoint PUT /object/:objectId/attr/:attrId
 */
export const updateProperty = async (
  objectId: string | number,
  attrId: string | number,
  data: UpdatePropertyRequestBody,
  options?: HttpOptions
): Promise<UpdatePropertyResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<UpdatePropertyResponseBody>>(
      `api/gateway/cmdb.cmdb_object.UpdateProperty/object/${objectId}/attr/${attrId}`,
      data,
      options
    )
  ).data;
