import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectBasicInfo } from "../../../model/cmdb";

export interface BatchUpdateRequestBody {
  /** body */
  data?: BatchUpdateRequestBody_data_item[];
}

export interface BatchUpdateResponseBody {
  /** 返回码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 返回消息 */
  message?: string;

  /** 返回数据 */
  data?: BatchUpdateResponseBody_data_item[];
}

/**
 * @description 批量更新模型
 * @endpoint PUT /batch/object
 */
export const batchUpdate = (
  data: BatchUpdateRequestBody,
  options?: HttpOptions
): Promise<BatchUpdateResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.BatchUpdate */ http.put<BatchUpdateResponseBody>(
    "api/gateway/cmdb.cmdb_object.BatchUpdate/batch/object",
    data,
    options
  );

export interface BatchUpdateRequestBody_data_item {
  /** 资源模型ID */
  objectId?: string;

  /** 模型信息 */
  info?: BatchUpdateRequestBody_data_item_info;
}

export interface BatchUpdateResponseBody_data_item {
  /** 模型Id */
  objectId?: string;

  /** 错误码 */
  code?: number;

  /** 错误信息 */
  message?: string;
}

export interface BatchUpdateRequestBody_data_item_info {
  /** 名称 */
  name?: string;

  /** 模型图标 */
  icon?: string;

  /** 分类 */
  category?: string;

  /** 备注 */
  memo?: string;

  /** 视图设置 */
  view?: ModelObjectBasicInfo["view"];

  /** 编辑权限白名单 */
  updateAuthorizers?: string[];

  /** 删除权限白名单 */
  deleteAuthorizers?: string[];
}
