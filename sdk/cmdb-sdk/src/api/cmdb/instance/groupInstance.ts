import { http, HttpOptions } from "@next-core/brick-http";
import { ModelGroupInstanceFunc } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_GroupInstanceRequestBody {
  /** 查询条件,与[实例搜索接口]的query字段说明一致 */
  query?: Record<string, any>;

  /** 按照权限过滤(通用实例都有`read`, `update`, `delete`权限控制, 主机实例在通用实例权限基础上有额外的`operate`权限, 应用实例在通用实例权限基础上有额外的`developClusterOperate`, `testClusterOperate`, `prereleaseClusterOperate`, `productionClusterOperate`权限) */
  permission?: string[];

  /** 是否只获取与自己有关的那部分数据, 默认为false */
  only_my_instance?: boolean;

  /** 聚合属性id（只支持普通属性） */
  group_field: string;

  /** 操作列表,对某字段进行,sum, max... */
  funcs: Partial<ModelGroupInstanceFunc>[];
}

export interface InstanceApi_GroupInstanceResponseBody {
  /** list */
  list: InstanceApi_GroupInstanceResponseBody_list_item[];
}

/**
 * @description 实例聚合接口 (包括sum, max, min, avg)
 * @endpoint POST /object/:object_id/instance/group
 */
export const InstanceApi_groupInstance = async (
  object_id: string | number,
  data: InstanceApi_GroupInstanceRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_GroupInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.GroupInstance@1.1.0 */ (
    await http.post<ResponseBodyWrapper<InstanceApi_GroupInstanceResponseBody>>(
      `api/gateway/cmdb.instance.GroupInstance/object/${object_id}/instance/group`,
      data,
      options
    )
  ).data;

export interface InstanceApi_GroupInstanceResponseBody_list_item {
  /** 聚合字段的key */
  group_field?: string;

  /** 聚合字段的值 */
  group_value?: any;

  /** 操作结果 */
  func_values?: InstanceApi_GroupInstanceResponseBody_list_item_func_values_item[];
}

export interface InstanceApi_GroupInstanceResponseBody_list_item_func_values_item {
  /** 字段别名 */
  alias?: string;

  /** 字段值 */
  value?: any;
}
