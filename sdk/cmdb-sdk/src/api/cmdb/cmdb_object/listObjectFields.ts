import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectField } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_ListObjectFieldsRequestParams {
  /** 关系字段显示层级 */
  depth: number;
}

export interface CmdbObjectApi_ListObjectFieldsResponseBody {
  /** 模型字段列表 */
  fields?: Partial<ModelObjectField>[];

  /** 关联模型字段 */
  relateObjects?: CmdbObjectApi_ListObjectFieldsResponseBody_relateObjects_item[];
}

/**
 * @description 获取某个模型字段及关系的字段
 * @endpoint get /object/:objectId/fields
 */
export const CmdbObjectApi_listObjectFields = async (
  objectId: string | number,
  params: CmdbObjectApi_ListObjectFieldsRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_ListObjectFieldsResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ListObjectFields */ (
    await http.get<
      ResponseBodyWrapper<CmdbObjectApi_ListObjectFieldsResponseBody>
    >(
      `api/gateway/cmdb.cmdb_object.ListObjectFields/object/${objectId}/fields`,
      { ...options, params }
    )
  ).data;

export interface CmdbObjectApi_ListObjectFieldsResponseBody_relateObjects_item {
  /** 模型id */
  objectId?: string;

  /** 模型字段列表 */
  fields?: Partial<ModelObjectField>[];
}
