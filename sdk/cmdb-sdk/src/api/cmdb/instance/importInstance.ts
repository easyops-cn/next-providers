import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_ImportInstanceRequestBody {
  /** 联合唯一的key(只支持普通属性,不支持结构体与关系字段),以这些key与datas里的数据组装query,作为插入/更新的依据 */
  keys: string[];

  /** 导入实例数据列表,必须包含keys里面的字段 */
  datas: Record<string, any>[];

  /** 是否导入metadata字段,ctime,creator,创建实例为true时将会默认填充mtime,modifier字段 */
  importMetadata?: boolean;
}

export interface InstanceApi_ImportInstanceResponseBody {
  /** 成功插入数量 */
  insert_count: number;

  /** 成功更新数量 */
  update_count: number;

  /** 失败数量 */
  failed_count: number;

  /** 失败数据 */
  data: InstanceApi_ImportInstanceResponseBody_data_item[];
}

/**
 * @description 批量编辑/新增实例
 * @endpoint POST /object/:objectId/instance/_import
 */
export const InstanceApi_importInstance = async (
  objectId: string | number,
  data: InstanceApi_ImportInstanceRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_ImportInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.ImportInstance */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_ImportInstanceResponseBody>
    >(
      `api/gateway/cmdb.instance.ImportInstance/object/${objectId}/instance/_import`,
      data,
      options
    )
  ).data;

export interface InstanceApi_ImportInstanceResponseBody_data_item {
  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 错误数据 */
  data?: Record<string, any>[];
}
