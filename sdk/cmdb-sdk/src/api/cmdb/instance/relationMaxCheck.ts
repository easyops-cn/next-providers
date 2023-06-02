import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_RelationMaxCheckRequestBody {
  /** 资源模型关系ID */
  relation_id: string;

  /** left_id或者right_id来指定资源模型在关系的哪一端 */
  relation_side_id: string;

  /** 查询条件,与[实例搜索接口]的query字段说明一致 */
  query?: Record<string, any>;

  /** 按字段排序, 留空默认按照实例ID降序排序(1表示升序， -1表示降序, 2表示自然升序， -2表示自然降序) */
  sort?: Record<string, any>;

  /** 按照权限过滤(通用实例都有`read`, `update`, `delete`权限控制, 主机实例在通用实例权限基础上有额外的`operate`权限, 应用实例在通用实例权限基础上有额外的`developClusterOperate`, `testClusterOperate`, `prereleaseClusterOperate`, `productionClusterOperate`权限) */
  permission?: string[];

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

export interface InstanceApi_RelationMaxCheckResponseBody {
  /** 总数 */
  total: number;

  /** 页码 */
  page: number;

  /** 页大小 */
  page_size: number;

  /** 数据列表 */
  list: InstanceApi_RelationMaxCheckResponseBody_list_item[];
}

/**
 * @description 搜索实例列表指定关系是否大于等于max约束 (一般用于新建实例关系时查询数据用, 会标识出实例数据是否超出关系限定的max(_relation_is_max),支持的查询操作与 [实例搜索接口] 关键字一致)
 * @endpoint POST /object/:objectId/instance/_search_relation_max_check
 */
export const InstanceApi_relationMaxCheck = async (
  objectId: string | number,
  data: InstanceApi_RelationMaxCheckRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_RelationMaxCheckResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.RelationMaxCheck@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_RelationMaxCheckResponseBody>
    >(
      `api/gateway/cmdb.instance.RelationMaxCheck/object/${objectId}/instance/_search_relation_max_check`,
      data,
      options
    )
  ).data;

export interface InstanceApi_RelationMaxCheckResponseBody_list_item {
  /** 实例Id */
  instanceId?: string;

  /** _relation_is_max */
  _relation_is_max?: boolean;
}
