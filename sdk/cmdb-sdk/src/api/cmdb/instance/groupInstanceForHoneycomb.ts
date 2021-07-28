import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_GroupInstanceForHoneycombRequestBody {
  /** 查询条件,与[实例搜索接口]的query字段说明一致 */
  query?: Record<string, any>;

  /** 按照权限过滤(通用实例都有`read`, `update`, `delete`权限控制, 主机实例在通用实例权限基础上有额外的`operate`权限, 应用实例在通用实例权限基础上有额外的`developClusterOperate`, `testClusterOperate`, `prereleaseClusterOperate`, `productionClusterOperate`权限) */
  permission?: string[];

  /** 是否只获取与自己有关的那部分数据, 默认为false */
  onlyMyInstance?: boolean;

  /** 分组属性id（支持多字段，包括属性和单个关系） */
  groupFields: string[];

  /** 用来填充颜色的指标 */
  fillByMetric: InstanceApi_GroupInstanceForHoneycombRequestBody_fillByMetric;

  /** 用来设置大小的指标 */
  sizeByMetric?: InstanceApi_GroupInstanceForHoneycombRequestBody_sizeByMetric;
}

export interface InstanceApi_GroupInstanceForHoneycombResponseBody {
  /** 分组列表 */
  list: InstanceApi_GroupInstanceForHoneycombResponseBody_list_item[];
}

/**
 * @description 实例分组蜂窝图
 * @endpoint POST /v1/object/:objectId/instance/honeycomb
 */
export const InstanceApi_groupInstanceForHoneycomb = async (
  objectId: string | number,
  data: InstanceApi_GroupInstanceForHoneycombRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_GroupInstanceForHoneycombResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.GroupInstanceForHoneycomb */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_GroupInstanceForHoneycombResponseBody>
    >(
      `api/gateway/cmdb.instance.GroupInstanceForHoneycomb/v1/object/${objectId}/instance/honeycomb`,
      data,
      options
    )
  ).data;

export interface InstanceApi_GroupInstanceForHoneycombRequestBody_fillByMetric {
  /** 指标名 */
  metricName?: string;
}

export interface InstanceApi_GroupInstanceForHoneycombRequestBody_sizeByMetric {
  /** 指标名 */
  metricName?: string;
}

export interface InstanceApi_GroupInstanceForHoneycombResponseBody_list_item {
  /** 实例Id */
  groupValues?: string[];

  /** 实例列表 */
  list?: InstanceApi_GroupInstanceForHoneycombResponseBody_list_item_list_item[];
}

export interface InstanceApi_GroupInstanceForHoneycombResponseBody_list_item_list_item {
  /** 实例Id */
  instanceId?: string;

  /** 实例showKey */
  showKey?: string[];

  /** 用于填充颜色的指标值 */
  fillByMetric?: number;

  /** 用于设置颜色的指标值 */
  sizeByMetric?: number;
}
