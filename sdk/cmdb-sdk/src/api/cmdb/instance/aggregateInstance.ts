import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AggregateInstanceRequestBody {
  /** 查询条件,与[实例搜索接口]的query字段一致 */
  query?: Record<string, any>;

  /** 过滤字段 */
  fields?: Record<string, any>;

  /** 按照权限过滤(通用实例都有`read`, `update`, `delete`权限控制, 主机实例在通用实例权限基础上有额外的`operate`权限, 应用实例在通用实例权限基础上有额外的`developClusterOperate`, `testClusterOperate`, `prereleaseClusterOperate`, `productionClusterOperate`权限) */
  permission?: string[];

  /** 是否只获取与自己有关的那部分数据, 默认为false */
  only_my_instance?: boolean;

  /** 聚合属性id（只支持字符类型） */
  aggregate_key: string;
}

export interface AggregateInstanceResponseBody {
  /** 聚合结果 */
  list: AggregateInstanceResponseBody_list_item[];
}

/**
 * @description 实例字段聚合接口 (根据实例某个字段聚合)
 * @endpoint POST /object/:objectId/instance/aggregate
 */
export const aggregateInstance = async (
  objectId: string | number,
  data: AggregateInstanceRequestBody,
  options?: HttpOptions
): Promise<AggregateInstanceResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<AggregateInstanceResponseBody>>(
      `api/gateway/cmdb.instance.AggregateInstance/object/${objectId}/instance/aggregate`,
      data,
      options
    )
  ).data;

export interface AggregateInstanceResponseBody_list_item {
  /** 聚合值 */
  aggregate_value?: string;

  /** instance list */
  data_list?: Record<string, any>[];
}
