import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectBasicInfo } from "../../../model/cmdb";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface ListObjectBasicRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 按模型Id,模型id模糊匹配 */
  q?: string;

  /** 模型Id, 使用,分隔 */
  objectIds?: string;

  /** system */
  system?: string;

  /** 分类 */
  category?: string;

  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;

  /** system是否为空，为true时会忽略参数system */
  emptySystem?: boolean;

  /** 是否是抽象模型,true/false,为空则不过滤 */
  isAbstract?: string;

  /** 按父模型过滤 */
  parentObjectId?: string;
}

export type ListObjectBasicResponseItem = Partial<ModelObjectBasicInfo>;

export type ListObjectBasicResponseBody = ResponseListWrapper<ListObjectBasicResponseItem>;

/**
 * @description 获取模型基本信息列表
 * @endpoint LIST /object_basic
 */
export const listObjectBasic = async (
  params: ListObjectBasicRequestParams,
  options?: HttpOptions
): Promise<ListObjectBasicResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListObjectBasicResponseBody>>(
      "api/gateway/cmdb.cmdb_object.ListObjectBasic/object_basic",
      { ...options, params }
    )
  ).data;
