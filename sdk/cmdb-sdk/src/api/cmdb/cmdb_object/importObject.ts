import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectImport } from "../../../model/cmdb";

/** 模型列表 */
export type CmdbObjectApi_ImportObjectRequestBody = Partial<ModelObjectImport>[];

export interface CmdbObjectApi_ImportObjectResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 结果 */
  data: CmdbObjectApi_ImportObjectResponseBody_data_item[];
}

/**
 * @description 批量导入模型 (批量导入模型)
 * @endpoint POST /object_import
 */
export const CmdbObjectApi_importObject = (
  data: CmdbObjectApi_ImportObjectRequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_ImportObjectResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ImportObject */ http.post<CmdbObjectApi_ImportObjectResponseBody>(
    "api/gateway/cmdb.cmdb_object.ImportObject/object_import",
    data,
    options
  );

export interface CmdbObjectApi_ImportObjectResponseBody_data_item {
  /** 模型Id */
  objectId?: string;

  /** 模型名字 */
  name?: string;

  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 属性列表 */
  attrList?: CmdbObjectApi_ImportObjectResponseBody_data_item_attrList_item[];

  /** 关系列表 */
  relation_list?: CmdbObjectApi_ImportObjectResponseBody_data_item_relation_list_item[];
}

export interface CmdbObjectApi_ImportObjectResponseBody_data_item_attrList_item {
  /** 属性Id */
  id?: string;

  /** 属性名字 */
  name?: string;

  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;
}

export interface CmdbObjectApi_ImportObjectResponseBody_data_item_relation_list_item {
  /** 关系Id */
  relation_id?: string;

  /** 关系左端描述 */
  left_description?: string;

  /** 关系右端描述 */
  right_description?: string;

  /** 关系左端名称 */
  left_name?: string;

  /** 关系右端名称 */
  right_name?: string;

  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;
}
