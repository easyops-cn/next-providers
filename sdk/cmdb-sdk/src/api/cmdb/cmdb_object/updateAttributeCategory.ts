import { http, HttpOptions } from "@next-core/brick-http";

export interface UpdateAttributeCategoryRequestBody {
  /** 新分类名称 */
  newName?: string;

  /** 添加属性，关系到此分组 */
  appendAttrList?: string[];
}

/**
 * @description 修改字段分类
 * @endpoint PUT /object/:objectId/attribute_category/:name
 */
export const updateAttributeCategory = (
  objectId: string | number,
  name: string | number,
  data: UpdateAttributeCategoryRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.cmdb_object.UpdateAttributeCategory */ http.put<void>(
    `api/gateway/cmdb.cmdb_object.UpdateAttributeCategory/object/${objectId}/attribute_category/${name}`,
    data,
    options
  );
