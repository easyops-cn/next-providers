import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_ListObjectCategoryV2RequestParams {
  /** visible:只返回可见模型，invisible:只返回不可见模型，all:返回所有模型, 默认all */
  visible?: "visible" | "invisible" | "all";
}

export interface CmdbObjectApi_ListObjectCategoryV2ResponseBody {
  /** 分类信息 */
  list?: CmdbObjectApi_ListObjectCategoryV2ResponseBody_list_item[];
}

/**
 * @description 获取模型分类信息V2
 * @endpoint GET /v2/object_category
 */
export const CmdbObjectApi_listObjectCategoryV2 = async (
  params: CmdbObjectApi_ListObjectCategoryV2RequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_ListObjectCategoryV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ListObjectCategoryV2@1.1.0 */ (
    await http.get<
      ResponseBodyWrapper<CmdbObjectApi_ListObjectCategoryV2ResponseBody>
    >("api/gateway/cmdb.cmdb_object.ListObjectCategoryV2/v2/object_category", {
      ...options,
      params,
    })
  ).data;

export interface CmdbObjectApi_ListObjectCategoryV2ResponseBody_list_item {
  /** 一级分类名称 */
  name?: string;

  /** 一级分类数量 */
  count?: number;

  /** 二级分类数组 */
  child?: CmdbObjectApi_ListObjectCategoryV2ResponseBody_list_item_child_item[];

  /** 存在只有一级分类的模型 */
  hasRoot?: boolean;
}

export interface CmdbObjectApi_ListObjectCategoryV2ResponseBody_list_item_child_item {
  /** 二级分类对应的名称 */
  name?: string;

  /** 二级分类对应的数量 */
  count?: number;
}
