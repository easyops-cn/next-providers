import { http, HttpOptions } from "@next-core/brick-http";
import { ModelHoneycombGroup } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_GroupInstanceForHoneycombRequestBody {
  /** 查询条件,与[实例搜索接口]的query字段说明一致 */
  query?: Record<string, any>;

  /** 按照权限过滤(通用实例都有`read`, `update`, `delete`权限控制, 主机实例在通用实例权限基础上有额外的`operate`权限, 应用实例在通用实例权限基础上有额外的`developClusterOperate`, `testClusterOperate`, `prereleaseClusterOperate`, `productionClusterOperate`权限) */
  permission?: string[];

  /** 是否只获取与自己有关的那部分数据, 默认为false */
  onlyMyInstance?: boolean;

  /** 分组字段（name，owner.#showKey） */
  groupFields?: string[];

  /** 额外实例字段 */
  extFields?: string[];

  /** 分组字段描述 */
  groupFieldsDesc?: string[];

  /** 用来填充颜色的指标 */
  fillByMetric: InstanceApi_GroupInstanceForHoneycombRequestBody_fillByMetric;

  /** 用来设置大小的指标 */
  sizeByMetric?: InstanceApi_GroupInstanceForHoneycombRequestBody_sizeByMetric;
}

export interface InstanceApi_GroupInstanceForHoneycombResponseBody {
  /** 分组列表 */
  list: Partial<ModelHoneycombGroup>[];

  /** 用于填充颜色的指标值最小值 */
  fillByMetricMin: number;

  /** 用于填充颜色的指标值最大值 */
  fillByMetricMax: number;

  /** 用于设置尺寸的指标值最小值 */
  sizeByMetricMin: number;

  /** 用于设置尺寸的指标值最大值 */
  sizeByMetricMax: number;

  /** 实例总数 */
  total: number;
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
  /**! @contract easyops.api.cmdb.instance.GroupInstanceForHoneycomb@1.2.0 */ (
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
