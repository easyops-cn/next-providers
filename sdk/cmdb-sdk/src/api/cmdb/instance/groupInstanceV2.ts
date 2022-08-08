import { http, HttpOptions } from "@next-core/brick-http";
import { ModelGroupInstanceFunc } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_GroupInstanceV2RequestBody {
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

  /** 结果是否仅返回上面filter匹配上的对端关系，默认false返回全部对端关系。 */
  filter_relation?: boolean;
}

export interface InstanceApi_GroupInstanceV2ResponseBody {
  /** 数据列表，将group_field和funcs.alias的值作为key，group_value和funcs.value的值作为value */
  list: Record<string, any>[];

  /** total */
  total: number;
}

/**
 * @description 实例聚合接口v2, 返回平铺的实例列表 (包括sum, max, min, avg)
 * @endpoint POST /v2/object/:object_id/instance/group
 */
export const InstanceApi_groupInstanceV2 = async (
  object_id: string | number,
  data: InstanceApi_GroupInstanceV2RequestBody,
  options?: HttpOptions
): Promise<InstanceApi_GroupInstanceV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.GroupInstanceV2@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_GroupInstanceV2ResponseBody>
    >(
      `api/gateway/cmdb.instance.GroupInstanceV2/v2/object/${object_id}/instance/group`,
      data,
      options
    )
  ).data;
