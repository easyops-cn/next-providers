import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BusinessInstanceApi_GetBusinessTreeListRequestParams {
  /** 实例Id列表使用逗号分隔 */
  ids: string;
}

export type BusinessInstanceApi_GetBusinessTreeListResponseBody = BusinessInstanceApi_GetBusinessTreeListResponseBody_item[];

/**
 * @description 批量获取业务业务树全路径
 * @endpoint GET /system/business_tree/list
 */
export const BusinessInstanceApi_getBusinessTreeList = async (
  params: BusinessInstanceApi_GetBusinessTreeListRequestParams,
  options?: HttpOptions
): Promise<BusinessInstanceApi_GetBusinessTreeListResponseBody> =>
  /**! @contract easyops.api.cmdb.business_instance.GetBusinessTreeList */ (
    await http.get<
      ResponseBodyWrapper<BusinessInstanceApi_GetBusinessTreeListResponseBody>
    >(
      "api/gateway/cmdb.business_instance.GetBusinessTreeList/system/business_tree/list",
      { ...options, params }
    )
  ).data;

export interface BusinessInstanceApi_GetBusinessTreeListResponseBody_item {
  /** 实例Id */
  instanceId: string;

  /** 业务名称 */
  name: string;

  /** 第一个为根节点,最后一个为该业务的父节点, 例如 parents=[根节点...,父节点的父节点, 父节点] */
  parents: BusinessInstanceApi_GetBusinessTreeListResponseBody_item_parents_item[];
}

export interface BusinessInstanceApi_GetBusinessTreeListResponseBody_item_parents_item {
  /** 实例Id */
  instanceId?: string;

  /** 业务名称 */
  name?: string;
}
