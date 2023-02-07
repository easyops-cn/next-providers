import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUpdateByQueryResult } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_UpdateByQueryRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** 要更新的数据 */
  data?: Record<string, any>;

  /** 指定返回的字段 */
  fields?: string[];

  /** 是否导入metadata字段, 为true时支持按照导入的内置字段覆盖属性值 */
  importMetadata?: boolean;
}

export interface InstanceApi_UpdateByQueryResponseBody {
  /** 实例更新成功结果 */
  successResult?: Partial<ModelUpdateByQueryResult>[];

  /** 实例更新失败结果 */
  failResult?: Partial<ModelUpdateByQueryResult>[];

  /** 查询实例总数 */
  total?: number;

  /** 更新成功总数 */
  successTotal?: number;

  /** 更新失败总数 */
  failTotal?: number;

  /** 更新成功的实例列表 */
  successList?: Record<string, any>[];
}

/**
 * @description 根据查询条件更新实例
 * @endpoint POST /object/:object_id/instance/update_by_query
 */
export const InstanceApi_updateByQuery = async (
  object_id: string | number,
  data: InstanceApi_UpdateByQueryRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_UpdateByQueryResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.UpdateByQuery@1.0.1 */ (
    await http.post<ResponseBodyWrapper<InstanceApi_UpdateByQueryResponseBody>>(
      `api/gateway/cmdb.instance.UpdateByQuery/object/${object_id}/instance/update_by_query`,
      data,
      options
    )
  ).data;
