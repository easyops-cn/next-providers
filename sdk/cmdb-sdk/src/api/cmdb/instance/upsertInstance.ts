import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_UpsertInstanceRequestBody {
  /** 联合唯一的key(只支持普通属性,不支持结构体与关系字段),以这些key与datas里的数据组装query,作为插入/更新的依据 */
  keys: string[];

  /** 导入实例数据列表,必须包含keys里面的字段 */
  datas: Record<string, any>[];

  /** 是否导入metadata字段,ctime,creator,创建实例为true时将会默认填充mtime,modifier字段 */
  importMetadata?: boolean;
}

export interface InstanceApi_UpsertInstanceResponseBody {
  /** 实例变更总数 */
  upsertCount?: number;
}

/**
 * @description 【注意！！】仅校验实例编辑功能权限，忽略实例编辑白名单及变更历史。批量创建实例，存在时更新。 (body为实例信息,字段限制参考模型定义,支持关系创建)
 * @endpoint POST /object/:objectId/instance/upsert
 */
export const InstanceApi_upsertInstance = async (
  objectId: string | number,
  data: InstanceApi_UpsertInstanceRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_UpsertInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.UpsertInstance@1.2.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_UpsertInstanceResponseBody>
    >(
      `api/gateway/cmdb.instance.UpsertInstance/object/${objectId}/instance/upsert`,
      data,
      options
    )
  ).data;
