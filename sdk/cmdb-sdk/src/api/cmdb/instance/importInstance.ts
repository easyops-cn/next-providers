import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ImportInstanceRequestBody {
  /** 联合唯一的key(只支持普通属性,不支持结构体与关系字段),以这些key与datas里的数据组装query,作为插入/更新的依据 */
  keys: string[];

  /** 导入实例数据列表,必须包含keys里面的字段 */
  datas: Record<string, any>[];

  /** 是否导入metadata字段,ctime,creator,创建实例为true时将会默认填充mtime,modifier字段 */
  importMetadata?: boolean;
}

export interface ImportInstanceResponseBody {
  /** 成功插入数量 */
  insert_count: number;

  /** 成功更新数量 */
  update_count: number;

  /** 失败数量 */
  failed_count: number;

  /** 失败数据 */
  data: ImportInstanceResponseBody_data_item[];
}

/**
 * @description 批量编辑/新增实例
 * @endpoint POST /object/:objectId/instance/_import
 */
export const importInstance = async (
  objectId: string | number,
  data: ImportInstanceRequestBody,
  options?: HttpOptions
): Promise<ImportInstanceResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<ImportInstanceResponseBody>>(
      `api/gateway/cmdb.instance.ImportInstance/object/${objectId}/instance/_import`,
      data,
      options
    )
  ).data;

export interface ImportInstanceResponseBody_data_item {
  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 错误数据 */
  data?: Record<string, any>[];
}
