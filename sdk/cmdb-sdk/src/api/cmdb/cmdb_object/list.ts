import { http, HttpOptions } from '@next-core/brick-http';
import { ModelCmdbObject } from '../../../model/cmdb';
import { ResponseListWrapper, ResponseBodyWrapper } from '../../../wrapper';

export interface ListRequestParams {
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

  /** 分类,支持like操作，%xxx% */
  category?: string;

  /** category是否为空，为true时会忽略参数category */
  emptyCategory?: boolean;

  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;

  /** system是否为空，为true时会忽略参数system */
  emptySystem?: boolean;

  /** 是否是抽象模型,true/false,为空则不过滤 */
  isAbstract?: string;

  /** 按父模型过滤 */
  parentObjectId?: string;
}

export type ListResponseItem = Partial<ModelCmdbObject>;

export type ListResponseBody = ResponseListWrapper<ListResponseItem>;

/**
 * @description 获取模型列表
 * @endpoint LIST /object
 */
export const list = async (
  params: ListRequestParams,
  options?: HttpOptions
): Promise<ListResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListResponseBody>>(
      'api/gateway/cmdb.cmdb_object.List/object',
      { ...options, params }
    )
  ).data;
