import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BusinessInstanceApi_GetBusinessTreeListV2RequestParams {
  /** 实例Id列表使用逗号分隔 */
  ids: string;
}

export interface BusinessInstanceApi_GetBusinessTreeListV2ResponseBody {
  /** 业务id路径列表 */
  businessList?: BusinessInstanceApi_GetBusinessTreeListV2ResponseBody_businessList_item[];
}

/**
 * @description 批量获取业务业务树全路径V2
 * @endpoint GET /v2/system/business_tree/list
 */
export const BusinessInstanceApi_getBusinessTreeListV2 = async (
  params: BusinessInstanceApi_GetBusinessTreeListV2RequestParams,
  options?: HttpOptions
): Promise<BusinessInstanceApi_GetBusinessTreeListV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.business_instance.GetBusinessTreeListV2@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<BusinessInstanceApi_GetBusinessTreeListV2ResponseBody>
    >(
      "api/gateway/cmdb.business_instance.GetBusinessTreeListV2/v2/system/business_tree/list",
      { ...options, params }
    )
  ).data;

export interface BusinessInstanceApi_GetBusinessTreeListV2ResponseBody_businessList_item {
  /** 实例Id */
  instanceId?: string;

  /** 业务名称 */
  name?: string;

  /** 第一个为根节点,最后一个为该业务的父节点, 例如 parents=[根节点...,父节点的父节点, 父节点] */
  parents?: BusinessInstanceApi_GetBusinessTreeListV2ResponseBody_businessList_item_parents_item[];
}

export interface BusinessInstanceApi_GetBusinessTreeListV2ResponseBody_businessList_item_parents_item {
  /** 实例Id */
  instanceId?: string;

  /** 业务名称 */
  name?: string;
}
