import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceRelationApi_SearchInstanceByRelationRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** 指定返回字段(支持通过父模型指定子模型属性)(支持关系数据的二级jsonPath格式的指定字段如clusters.name), e.g.: [name, instanceId] */
  fields: string[];

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 按字段排序， 留空默认按照实例ID降序排序(1表示升序， -1表示降序, 2表示自然升序， -2表示自然降序) e.g.: [{ key: instanceId, order: 1}] */
  sort?: InstanceRelationApi_SearchInstanceByRelationRequestBody_sort_item[];

  /** 是否忽略fields有不存在的字段的报错 */
  ignore_missing_field_error?: boolean;
}

export interface InstanceRelationApi_SearchInstanceByRelationResponseBody {
  /** instance list */
  list?: Record<string, any>[];

  /** 实例总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

/**
 * @description 通过关系搜索实例
 * @endpoint POST /relation/:relation_id/instance/_search
 */
export const InstanceRelationApi_searchInstanceByRelation = async (
  relation_id: string | number,
  data: InstanceRelationApi_SearchInstanceByRelationRequestBody,
  options?: HttpOptions
): Promise<InstanceRelationApi_SearchInstanceByRelationResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.SearchInstanceByRelation@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceRelationApi_SearchInstanceByRelationResponseBody>
    >(
      `api/gateway/cmdb.instance_relation.SearchInstanceByRelation/relation/${relation_id}/instance/_search`,
      data,
      options
    )
  ).data;

export interface InstanceRelationApi_SearchInstanceByRelationRequestBody_sort_item {
  /** 属性id */
  key?: string;

  /** 1表示升序， -1表示降序, 2表示自然升序， -2表示自然降序 */
  order?: -1 | 1 | -2 | 2;
}
