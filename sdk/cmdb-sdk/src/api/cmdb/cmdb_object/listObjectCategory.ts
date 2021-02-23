import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListObjectCategoryRequestParams {
  /** visible:只返回可见模型，invisible:只返回不可见模型，all:返回所有模型, 默认all */
  visible?: "visible" | "invisible" | "all";
}

export interface ListObjectCategoryResponseBody {
  /** 分类信息 */
  list?: ListObjectCategoryResponseBody_list_item[];
}

/**
 * @description 获取模型分类信息
 * @endpoint GET /object_category
 */
export const listObjectCategory = async (
  params: ListObjectCategoryRequestParams,
  options?: HttpOptions
): Promise<ListObjectCategoryResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListObjectCategoryResponseBody>>(
      "api/gateway/cmdb.cmdb_object.ListObjectCategory/object_category",
      { ...options, params }
    )
  ).data;

export interface ListObjectCategoryResponseBody_list_item {
  /** 一级分类 */
  name?: string;

  /** 二级分类 */
  child?: string[];

  /** 存在只有一级分类的模型 */
  hasRoot?: boolean;
}
