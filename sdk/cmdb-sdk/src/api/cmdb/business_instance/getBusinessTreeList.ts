import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetBusinessTreeListRequestParams {
  /** 实例Id列表使用逗号分隔 */
  ids: string;
}

export type GetBusinessTreeListResponseBody = GetBusinessTreeListResponseBody_item[];

/**
 * @description 批量获取业务业务树全路径
 * @endpoint GET /system/business_tree/list
 */
export const getBusinessTreeList = async (
  params: GetBusinessTreeListRequestParams,
  options?: HttpOptions
): Promise<GetBusinessTreeListResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetBusinessTreeListResponseBody>>(
      "api/gateway/cmdb.business_instance.GetBusinessTreeList/system/business_tree/list",
      { ...options, params }
    )
  ).data;

export interface GetBusinessTreeListResponseBody_item {
  /** 实例Id */
  instanceId: string;

  /** 业务名称 */
  name: string;

  /** 第一个为根节点,最后一个为该业务的父节点, 例如 parents=[根节点...,父节点的父节点, 父节点] */
  parents: GetBusinessTreeListResponseBody_item_parents_item[];
}

export interface GetBusinessTreeListResponseBody_item_parents_item {
  /** 实例Id */
  instanceId?: string;

  /** 业务名称 */
  name?: string;
}
