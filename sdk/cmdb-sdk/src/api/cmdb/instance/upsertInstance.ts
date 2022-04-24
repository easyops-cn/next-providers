import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_UpsertInstanceRequestBody {
  /** 实例数据列表 */
  datas?: Record<string, any>[];

  /** 是否只返回实例id */
  only_instance_id?: boolean;

  /** 是否可指定metadata字段,如ctime,creator,为true时将会默认填充mtime,modifier字段 */
  fill_metadata?: boolean;
}

export interface InstanceApi_UpsertInstanceResponseBody {
  /** 实例列表 */
  list?: Record<string, any>[];
}

/**
 * @description 批量创建实例，存在时更新 (body为实例信息,字段限制参考模型定义,支持关系创建)
 * @endpoint POST /object/:objectId/instance/upsert
 */
export const InstanceApi_upsertInstance = async (
  objectId: string | number,
  data: InstanceApi_UpsertInstanceRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_UpsertInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.UpsertInstance@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_UpsertInstanceResponseBody>
    >(
      `api/gateway/cmdb.instance.UpsertInstance/object/${objectId}/instance/upsert`,
      data,
      options
    )
  ).data;
