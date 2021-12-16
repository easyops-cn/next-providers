import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_ListInstanceRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 对于关联的实例数据是否只获取relation_view中指定的属性 */
  only_relation_view?: boolean;

  /** 需要返回的关系，多个用逗号分隔如`owner,tester.name,tester.instanceId`，如果只需要属性字段传`*`就好，注意：建议都指定fields，按需拉取字段，不然有可能返回数据量太大而导致接口慢系统不稳定 */
  select_relations?: string;

  /** 限制fields所带出的关系的数量， 0为不限制 */
  relation_limit?: number;
}

export interface InstanceApi_ListInstanceResponseBody {
  /** instance list */
  list: Record<string, any>[];

  /** 实例总数 */
  total: number;

  /** 页码 */
  page: number;

  /** 页大小 */
  page_size: number;
}

/**
 * @description 实例分页列表查询
 * @endpoint GET /object/:object_id/instance
 */
export const InstanceApi_listInstance = async (
  object_id: string | number,
  params: InstanceApi_ListInstanceRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_ListInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.ListInstance@1.0.0 */ (
    await http.get<ResponseBodyWrapper<InstanceApi_ListInstanceResponseBody>>(
      `api/gateway/cmdb.instance.ListInstance/object/${object_id}/instance`,
      { ...options, params }
    )
  ).data;
