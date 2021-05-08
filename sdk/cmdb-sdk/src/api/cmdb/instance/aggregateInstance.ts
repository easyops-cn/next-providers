import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_AggregateInstanceRequestBody {
  /** 查询条件,与[实例搜索接口]的query字段一致 */
  query?: Record<string, any>;

  /** 过滤字段 */
  fields?: Record<string, any>;

  /** 按字段排序， 留空默认按照实例ID降序排序(1表示升序， -1表示降序) e.g.: { instanceId: 1 } */
  sort?: InstanceApi_AggregateInstanceRequestBody_sort_item[];

  /** 按照权限过滤(通用实例都有`read`, `update`, `delete`权限控制, 主机实例在通用实例权限基础上有额外的`operate`权限, 应用实例在通用实例权限基础上有额外的`developClusterOperate`, `testClusterOperate`, `prereleaseClusterOperate`, `productionClusterOperate`权限) */
  permission?: string[];

  /** 是否只获取与自己有关的那部分数据, 默认为false */
  only_my_instance?: boolean;

  /** 聚合属性id（只支持字符类型） */
  aggregate_key: string;
}

export interface InstanceApi_AggregateInstanceResponseBody {
  /** 聚合结果 */
  list: InstanceApi_AggregateInstanceResponseBody_list_item[];
}

/**
 * @description 实例字段聚合接口 (根据实例某个字段聚合)
 * @endpoint POST /object/:objectId/instance/aggregate
 */
export const InstanceApi_aggregateInstance = async (
  objectId: string | number,
  data: InstanceApi_AggregateInstanceRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_AggregateInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.AggregateInstance */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_AggregateInstanceResponseBody>
    >(
      `api/gateway/cmdb.instance.AggregateInstance/object/${objectId}/instance/aggregate`,
      data,
      options
    )
  ).data;

export interface InstanceApi_AggregateInstanceRequestBody_sort_item {
  /** 属性id */
  key?: string;

  /** 1表示升序， -1表示降序, 2表示自然升序， -2表示自然降序 */
  order?: -1 | 1 | -2 | 2;
}

export interface InstanceApi_AggregateInstanceResponseBody_list_item {
  /** 聚合值 */
  aggregate_value?: string;

  /** instance list */
  data_list?: Record<string, any>[];
}
